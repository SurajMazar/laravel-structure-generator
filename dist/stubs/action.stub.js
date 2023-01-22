"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForceDeleteActionStub = exports.RestoreActionStub = exports.TrashActionStub = exports.UpdateActionStub = exports.CreateActionStub = void 0;
exports.CreateActionStub = `
<?php

namespace App\{%action_path%};
namespace App\{%model_path%};

class {%action_class%} {

    /**
     * @var array<string,mixed> $preparedData;
     * /
    protected array $preparedData;

    /**
     * SET THE DATA FOR ACTION
     * @param array<string,mixed> $data
     * /
    public function setData(array $data) : {%action_class%}
    {
        $this->preparedData = $data;
        return $this;
    }

    /**
     * CREATE ACTION
     * @return {%modal_name%}
     * /
    public function execute() : {%modal_name%}
    {
        $data = {%modal_name%}::query()->create($this->preparedData);
        return $data;
    }

}`;
exports.UpdateActionStub = `
<?php

namespace App\{%action_path%};
namespace App\{%model_path%};

class {%action_class%} {

    /**
     * @var array<string,mixed> $preparedData;
     * /
    protected array $preparedData;

    /**
     * @var {%model_path%} $updateData;
     * /
    protected {%model_path%} $updateData;

    /**
     * SET THE DATA FOR ACTION
     * @param array<string,mixed> $data
     * @param {%model_path%} $updateData
     * @return {%action_class%}
     * /
    public function setData({%model_path%} $updateData, array $data) : {%action_class%}
    {
        $this->updateData = $updateData;
        $this->preparedData = $data;
        return $this;
    }

    /**
     * UPDATE ACTION
     * @return {%modal_name%}
     * /
    public function execute() : {%modal_name%}
    {
        $this->updateData->update($this->preparedData);
        return $updateData;
    }

}`;
exports.TrashActionStub = `
<?php

namespace App\{%action_path%};
namespace App\{%model_path%};

class {%action_class%} {

    /**
     * @var {%model_path%} $updateData;
     * /
    protected {%model_path%} $updateData;

    /**
     * SET THE DATA FOR ACTION
     * @param {%model_path%} $updateData
     * @return {%action_class%}
     * /
    public function setData({%model_path%} $updateData) : {%action_class%}
    {
        $this->updateData = $updateData;
        return $this;
    }

    /**
     * DELETE ACTION
     * @return bool|null
     * /
    public function execute() : bool
    {
        return $this->updateData->delete();
    }

}`;
exports.RestoreActionStub = `
<?php

namespace App\{%action_path%};
namespace App\{%model_path%};

class {%action_class%} {

    /**
     * @var {%model_path%} $updateData;
     * /
    protected {%model_path%} $updateData;

    /**
     * SET THE DATA FOR ACTION
     * @param {%model_path%} $updateData
     * @return {%action_class%}
     * /
    public function setData({%model_path%} $updateData) : {%action_class%}
    {
        $this->updateData = $updateData;
        return $this;
    }

    /**
     * RESTORE ACTION
     * @return bool|null
     * /
    public function execute() : bool
    {
        return $this->updateData->restore();
    }

}`;
exports.ForceDeleteActionStub = `
<?php

namespace App\{%action_path%};
use App\{%model_path%};

class {%action_class%} {

    /**
     * @var {%model_path%} $updateData;
     * /
    protected {%model_path%} $updateData;

    /**
     * SET THE DATA FOR ACTION
     * @param {%model_path%} $updateData
     * @return {%action_class%}
     * /
    public function setData({%model_path%} $updateData) : {%action_class%}
    {
        $this->updateData = $updateData;
        return $this;
    }

    /**
     * RESTORE ACTION
     * @return bool|null
     * /
    public function execute() : bool
    {
        return $this->updateData->forceDelete();
    }

}`;
