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
}
