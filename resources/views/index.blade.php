<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="canonical" href="" style="">
    <title>{{ config('app.name') }} - Logger</title>
    <link rel="stylesheet" href="/vendor/laravel-logger/style.css">
</head>
<body class="flex items-center justify-center w-screen  h-screen overflow-y-auto flex-col">
<script type="module">
    import LaravelLogger from '/vendor/laravel-logger/laravel-logger.js';

    const container = document.querySelector('body');
    const logger = new LaravelLogger;
    logger.build(container, true, false)
</script>
</body>
</html>
