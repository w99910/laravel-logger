<?php

namespace Zawlintun\LaravelLogger\DTO;

class Log
{
    public function __construct(
        public string  $path,
        public string  $action,
        public string  $userAgent,
        public string  $ipAddress,
        public int     $statusCode = 0,
        public ?string $type = null,
        public ?string $userId = null,
        public ?string $trace = null,
        public ?array  $meta = null,
        public ?string $date = null,
    )
    {

    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
