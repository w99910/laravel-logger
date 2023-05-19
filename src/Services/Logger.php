<?php

namespace Zawlintun\LaravelLogger\Services;


use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Zawlintun\LaravelLogger\DTO\Log;

class Logger
{
    protected static ?Logger $instance = null;

    protected array $additionalMetaData = [];

    protected function __construct()
    {

    }

    protected static function getInstance(): Logger
    {
        if (static::$instance === null) {
            static::$instance = new static();
        }
        return static::$instance;
    }

    public static function registerMetaData(string $key, \Closure $closure): void
    {
        $instance = static::getInstance();
        $instance->additionalMetaData[$key] = $closure;
    }

    /**
     * @throws \Exception
     */
    protected function log(Log $log): void
    {
        if (config('laravel-logger.queue.enabled', true)) {
            dispatch(fn() => $this->handle($log))->onConnection(config('laravel-logger.queue.connection'));
            return;
        }
        $this->handle($log);
    }

    /**
     * @throws \Exception
     */
    public static function logRequestResponse(Request $request, Response $response): void
    {
        $path = $request->decodedPath() === '/' ? '/' : "/" . $request->decodedPath();
        // check if endpoint is excluded
        $excludeEndPoints = config('laravel-logger.excludeEndPoints', []);
        foreach ($excludeEndPoints as $excludeEndPoint) {
            if (str_contains($excludeEndPoint, '*')) {
                $excludeEndPoint = preg_quote($excludeEndPoint, '/');
                $excludeEndPoint = str_replace('*', '.*', $excludeEndPoint);
                if (preg_match("/$excludeEndPoint/", $path)) {
                    return;
                }
            } else {
                if ($excludeEndPoint === $request->decodedPath()) {
                    return;
                }
            }
        }

        $instance = static::getInstance();
        $log = new Log(
            $path,
            $request->route()->getAction()['controller'] ?? 'NA',
            $request->userAgent() ?? 'NA',
            $request->ip() ?? 'NA',
        );

        $log->userId = $request->user()?->id ?? null;

        $log->meta = [
            'x-forwarded-for' => $request->header('x-forwarded-for'),
            'method' => $request->method(),
        ];
        foreach ($instance->additionalMetaData as $key => $closure) {
            $log->meta[$key] = $closure($request, $response, null);
        }
        $log->statusCode = $response->getStatusCode();
        $instance->log($log);
    }

    /**
     * @throws \Exception
     */
    protected function handle(Log $log): void
    {
        $isSuccess = $log->statusCode >= 200 && $log->statusCode < 500;
        $log->type = $isSuccess ? 'info' : 'error';
        if (config('laravel-logger.type', 'file') === 'file') {
            $method = $log->type;
            \Illuminate\Support\Facades\Log::build(config('laravel-logger.channel'))
                ->$method('laravel-logger', $log->toArray());
        } else {
            $query = static::getModelQuery();
            $query->create($log->toArray());
        }
    }

    /**
     * @return Builder
     * @throws \Exception
     */
    protected static function getModelQuery(): Builder
    {
        $logModel = config('laravel-logger.model');
        if (!class_exists($logModel)) {
            throw new \Exception('Please provided log model in "config/laravel-logger.php"');
        }

        $logModel = new $logModel;
        if (!$logModel instanceof Model) {
            throw new \Exception('Log model should be instance of Illuminate\Database\Eloquent\Model');
        }
        return $logModel->newQuery();
    }

    /**
     * @throws \Exception
     */
    public static function catch(\Throwable $exception): void
    {
        $instance = static::getInstance();
        $request = request() ?? null;
        $log = new Log(
            $exception->getFile(),
            $request?->route()?->getAction()['controller'] ?? '',
            $request->userAgent() ?? '',
            $request->ip() ?? '',
        );
        $log->trace = $exception->getTraceAsString();
        $log->statusCode = $exception->getCode() ?: 500;
        foreach ($instance->additionalMetaData as $key => $closure) {
            $log->meta[$key] = $closure(null, null, $exception);
        }
        $instance->log($log);
    }


    /**
     * @param Carbon|string $startDate
     * @param Carbon|string $endDate
     * @param bool $sortByDesc
     * @param int $offset
     * @param int|null $limit
     * @return array
     * @throws \Exception
     */
    public static function loadFromDB(Carbon|string $startDate, Carbon|string $endDate, bool $sortByDesc = false, int $offset = 0, int $limit = null): array
    {
        $query = static::getModelQuery();
        if (is_string($startDate)) {
            $startDate = new Carbon($startDate);
        }
        if (is_string($endDate)) {
            $endDate = new Carbon($endDate);
        }
        $query = $query->whereBetween('created_at', [$startDate, $endDate]);
        if ($sortByDesc) {
            $query = $query->orderByDesc('created_at');
        }
        $logs = $query->skip($offset)->take($limit)->get();
        return static::format($logs->toArray());
    }

    /**
     * @param Carbon|string $startDate
     * @param Carbon|string $endDate
     * @param bool $sortByDesc
     * @param int $offset
     * @param int|null $limit
     * @return array
     * @throws \Exception
     */
    public static function loadFromFile(Carbon|string $startDate, Carbon|string $endDate, bool $sortByDesc = false, int $offset = 0, int $limit = null): array
    {
        if (is_string($startDate)) {
            $startDate = new Carbon($startDate);
        }
        if (is_string($endDate)) {
            $endDate = new Carbon($endDate);
        }
        $dates = [];
        while (true) {
            $dates[] = $startDate->toDateString();
            if ($startDate->toDateString() === $endDate->toDateString()) {
                break;
            }
            $startDate->addDay();
        }
        if ($sortByDesc) {
            $dates = array_reverse($dates);
        }
        $channelPath = config('laravel-logger.channel.path');
        $seperatedPaths = explode('/', $channelPath);
        $directoryPath = implode('/', array_slice($seperatedPaths, 0, count($seperatedPaths) - 1));
        $fileName = basename($seperatedPaths[count($seperatedPaths) - 1], '.log');
        $logs = [];
        foreach ($dates as $dateString) {
            $filePath = $directoryPath . '/' . $fileName . '-' . $dateString . '.log';
            if (!file_exists($filePath)) {
                continue;
            }
            $data = explode(PHP_EOL, file_get_contents($filePath));
            foreach ($data as $entry) {
                if ($limit && count($logs) >= $limit) {
                    break;
                }
                preg_match('/\[(.*)]([^.]*).(\w+):(\s+)([^{]*)(.*)/', $entry, $matches);
                if (!isset($matches[1]) || !isset($matches[6])) {
                    continue;
                }
                $date = $matches[1];
                $meta = trim($matches[6]);
                if (!str_ends_with($meta, '}')) {
                    $meta = $meta . '"}';
                }
                $log = json_decode($meta);
                if (!$log) {
                    dd($meta, $entry);
                }
                $log = get_object_vars($log);
                $log['created_at'] = $date;
                $logs[] = $log;
            }
        }
        return static::format($logs);
    }


    protected static function format(array $logs): array
    {
        $data = [];
        foreach ($logs as $log) {
            if ($log instanceof Model) {
                $log = $log->toArray();
            }
            $temp = [];
            foreach (config('laravel-logger.response') as $attribute) {
                $dotSplitAttributes = explode('.', $attribute);
                $mapper = null;
                $attr = null;
                foreach ($dotSplitAttributes as $attr) {
                    if ($attr === 'date') {
                        $mapper = (new Carbon($log['created_at']))->toDateTimeString();
                        continue;
                    }
                    $array = $mapper ?? $log;
                    if (!array_key_exists($attr, $array)) {
                        $mapper = null;
                        break;
                    }
                    $mapper = $array[$attr] ?? null;
                    if (is_object($mapper)) {
                        $mapper = get_object_vars($mapper);
                    }
                }
                $temp[$mapper ? $attr : $attribute] = $mapper;
            }
            $data[] = $temp;
        }
        return $data;
    }
}
