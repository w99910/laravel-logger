<?php


return [

    'queue' => [

        'enabled' => true,

        'connection' => env('QUEUE_CONNECTION', 'sync'),
    ],

    // specify log type : either model or file
    'type' => 'model',

    //if type is model, provided model will be used for storing logs.
    'model' => \Zawlintun\LaravelLogger\Models\Log::class,

    // if type is file, provided channel configuration will be used.
    'channel' => [
        'driver' => 'daily',
        'path' => storage_path('logs/laravel-logger.log'),
        'level' => env('LOG_LEVEL', 'debug'),
    ],

    // Middleware for laravel-logger endpoints
    'middleware' => ['web', 'auth'],

    /*
     * specify which attributes to be returned in response of endpoint "/laravel-logger"
     *
     * Available attributes: ['path','action','userAgent','ipAddress','statusCode','type','userId','trace','meta','date']
     * You can set dot attribute to get nested attribute. e.g. ['meta.key1', 'meta.key2'].
     */
    'response' => ['path', 'date', 'ipAddress', 'statusCode', 'meta.method']
];
