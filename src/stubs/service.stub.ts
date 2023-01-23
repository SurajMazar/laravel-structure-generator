export const ServiceStub = `
<?php

namespace App\\%service_path%;

use App\\%model_path%\\%model_class%;

class %service_class% {

    /**
     * @return mixed
     */
    public function index(): mixed
    {
        return %model_class%::query()->filter(request()->get('search'));
    }

    /**
     * @param array<string,mixed> $data
     * @return %model_class%
     */
    public function store(array $data) : %model_class%
    {
        $data = %model_class%::query()->create($data);
        return $data;
    }

    /**
     * @param %model_class% $model
     * @param array<string,mixed> $data
     * @return %model_class%
     */
    public function update(%model_class% $model, array $data) : %model_class%
    {
        $model->update($data);
        return $model;
    }


    /**
     * @param %model_class% $model
     * @return bool|int
     */
    public function destroy(%model_class% $model) : bool|int
    {
        return $model->delete();
    }
}
`;

export const ServiceSoftDeleteStub = `
<?php

namespace App\\%service_path%;

use App\\%model_path%\\%model_class%;

class %service_class% {

    /**
     * @return mixed
     */
    public function index(): mixed
    {
        return %model_class%::query()->filter(request()->get('search'));
    }

    /**
     * @param array<string,mixed> $data
     * @return %model_class%
     */
    public function store(array $data) : %model_class%
    {
        $data = %model_class%::query()->create($data);
        return $data;
    }

    /**
     * @param %model_class% $model
     * @param array<string,mixed> $data
     * @return %model_class%
     */
    public function update(%model_class% $model, array $data) : %model_class%
    {
        $model->update($data);
        return $model;
    }


    /**
     * @param %model_class% $model
     * @return bool|int
     */
    public function trash(%model_class% $model) : bool|int
    {
        return $model->delete();
    }


    /**
     * @return mixed
     */
    public function trashed(): mixed
    {
        return %model_class%::query()->onlyTrashed()->filter(request()->get('search'));
    }


    /**
     * @param  int $id
     * @return bool|int
     */
    public function restore(int $id) : bool|int
    {
        $model = %model_class%::query()->withTrashed()->findOrFail($id);
        return $model->restore();
    }


    /**
     * @param  int $id
     * @return bool|int
     */
    public function delete(int $id) : bool|int
    {
        $model = %model_class%::query()->withTrashed()->findOrFail($id);
        return $model->forceDelete();
    }
}
`;
