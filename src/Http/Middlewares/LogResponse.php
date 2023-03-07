<?php

namespace Zawlintun\LaravelLogger\Http\Middlewares;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Zawlintun\LaravelLogger\Services\Logger;

class LogResponse
{
    public function handle(Request $request, Closure $next)
    {
        return $next($request);
    }

    public function terminate(Request $request, Response $response): void
    {
        Logger::logRequestResponse($request, $response);
    }
}
