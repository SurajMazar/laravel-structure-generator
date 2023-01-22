"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceStub = void 0;
exports.ResourceStub = `
<?php

namespace App\\%resource_path%;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

class %resource_class% extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        return %resource_array%;
    }
}`;
