"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestStub = void 0;
exports.RequestStub = `
<?php

namespace App\\%request_path%;

use Illuminate\\Foundation\\Http\\FormRequest;

class %request_class% extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return %request_rules%;
    }
}`;
