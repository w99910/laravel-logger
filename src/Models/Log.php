<?php

namespace Zawlintun\LaravelLogger\Models;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    protected $fillable = [
        'path', 'action', 'userAgent', 'ipAddress', 'statusCode', 'type', 'userId', 'trace', 'meta'
    ];

    protected $casts = [
        'meta' => 'array'
    ];

    public function __construct(array $attributes = [])
    {
        $this->table = config('laravel-logger.logTableName', 'logs');
        parent::__construct($attributes);
    }
}
