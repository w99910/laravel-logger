<?php

namespace Zawlintun\LaravelLogger\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Zawlintun\LaravelLogger\Services\Logger;

class LaravelLoggerController
{
    public static function routes()
    {
        Route::group(['prefix' => 'laravel-logger', 'middleware' => config('laravel-logger.middleware')], function () {
            Route::get('/', [static::class, 'index']);
            Route::post('/', [static::class, 'logs']);
        });
    }

    public function index()
    {
        return view('vendor.laravel-logger.index');
    }

    public function logs(Request $request)
    {
        try {
            $request->validate([
                'startDate' => 'required|date',
                'endDate' => 'required|date',
                'offset' => 'numeric',
                'limit' => 'numeric',
                'sortByDesc' => 'boolean',
            ]);
            $startDate = $request->get('startDate');
            $endDate = $request->get('endDate');
            $offset = $request->get('offset', 0);
            $limit = $request->get('limit', 10);
            $sortByDesc = $request->get('sortByDesc', false);
            $logs = config('laravel-logger.type') === 'model' ?
                Logger::loadFromDB($startDate, $endDate, $sortByDesc, $offset, $limit) :
                Logger::loadFromFile($startDate, $endDate, $sortByDesc, $offset, $limit);
            return response()->json($logs);
        } catch (\Exception $exception) {
            return response()->json($exception->getMessage(), $exception->getCode() ?: 500);
        }
    }
}
