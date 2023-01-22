"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelSoftDeleteStub = exports.ModelStub = void 0;
exports.ModelStub = `
<?php

namespace App\\%model_path%;

use App\\%builder_path%\\%builder_class%;
use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class %model_class% extends Model
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $fillable = %fillable%;

    /**
     * @param $query
     * @return %builder_class%
     */
    public function newEloquentBuilder($query): %builder_class%
    {
        return new %builder_class%($query);
    }
}`;
exports.ModelSoftDeleteStub = `
<?php

namespace App\\%model_path%;

use App\\%builder_path%\\%builder_class%;
use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\SoftDeletes;


class %model_class% extends Model
{
    use HasFactory,SoftDeletes;

    /**
     * @var string[]
     */
    protected $fillable = %fillable%;

    /**
     * @param $query
     * @return %builder_class%
     */
    public function newEloquentBuilder($query): %builder_class%
    {
        return new %builder_class%($query);
    }
}`;
