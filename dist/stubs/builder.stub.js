"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderStub = void 0;
exports.BuilderStub = `
<?php

namespace App\\%builder_path%;

use App\\%model_path%\\%model_class%;
use Illuminate\\Database\\Eloquent\\Builder;

/**
 * @extends Builder< %model_class% >
 */
class %builder_class% extends Builder
{
}  
`;
