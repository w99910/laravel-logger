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
        ], 'laravel-logger-config');

        // Migrations
        foreach (glob(__DIR__ . '/../database/migrations/*.php') as $migration) {
            $this->publishes([
                $migration => database_path('migrations/' . basename($migration)),
            ], 'laravel-logger-migrations');
        }

        // JS and Css
        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/laravel-logger'),
        ], 'laravel-logger-assets');

        // Views
        $this->publishes([
            __DIR__ . '/../resources/views' => resource_path('views/vendor/laravel-logger'),
        ], 'laravel-logger-views');

        /** @var Router $router */
        $router = app('router');
        $router->prependMiddlewareToGroup('web', LogResponse::class);

        $router->aliasMiddleware('laravel-logger-log-response', LogResponse::class);

        $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
    }
}
