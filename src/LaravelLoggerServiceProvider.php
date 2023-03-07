<?php

namespace Zawlintun\LaravelLogger;

use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;
use Zawlintun\LaravelLogger\Http\Middlewares\LogResponse;

class LaravelLoggerServiceProvider extends ServiceProvider
{
    public function boot()
    {
        // Config
        $this->publishes([
            __DIR__ . '/../config/laravel-logger.php' => config_path('laravel-logger.php'),
        ], 'laravel-logger');

        // Migrations
        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');

        // JS and Css
        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/laravel-logger'),
        ], 'laravel-logger-view');

        // Views
        $this->publishes([
            __DIR__ . '/../resources/views' => resource_path('views/vendor/laravel-logger'),
        ], 'laravel-logger-view');

        /** @var Router $router */
        $router = app('router');
        $router->prependMiddlewareToGroup('web', LogResponse::class);

        $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
    }
}
