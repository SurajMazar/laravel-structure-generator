export const ControllerStub = `
<?php

namespace App\\%controller_path%;

use App\\Http\\Controllers\\Controller;
use App\\%service_path%\\%service_class%;
use App\\%request_path%\\%create_request_class%;
use App\\%model_path%\\%model_class%;
use App\\%request_path%\\%update_request_class%;
use App\\%resource_path%\\%resource_class%;
use Exception;
use Illuminate\\Http\\JsonResponse;
use App\\Http\\Resources\\PaginationResource;
use Illuminate\\Http\\Response;


class %controller_class% extends Controller {

    /**
     * CONSTRUCTOR FUNCTION
     * 
     * @param %service_class% $%service_name%
     */
    public function __construct(protected %service_class% $%service_name%)
    {
    }

    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            $data = $this->%service_name%->index()->latest()->paginate(10);
        } catch (Exception $exception) {
            logger()->error($exception->getMessage());
            return Response::failure(__('Failed to fetch list !'));
        }
        return Response::success(__('List !'),
            %resource_class%::collection($data),
            new PaginationResource($data)
        );
    }

    /**
     * @param  %create_request_class%  $request
     * @return JsonResponse
     */
    public function store(%create_request_class% $request): JsonResponse
    {
        try {
            $data = $this->%service_name%->store($request->validated());
        } catch (Exception $exception) {
            logger()->error($exception->getMessage());

            return Response::failure(__('Failed to create!'));
        }

        return Response::success(__('Create success!'),
            new %resource_class%($data),
        );
    }

    /**
     * @param  %model_class%  $%model_name%
     * @param  %update_request_class%  $request
     * @return JsonResponse
     */
    public function update(%model_class% $%model_name%, %update_request_class% $request): JsonResponse
    {
        try {
            $data = $this->%service_name%->update($%model_name%,$request->validated());
        } catch (Exception $exception) {
            logger()->error($exception->getMessage());

            return Response::failure(__('Failed to update!'));
        }

        return Response::success(__('Update success!'),
            new %resource_class%($data),
        );
    }

    /**
     * @param  %model_class%  $%model_name%
     * @return JsonResponse
     */
    public function destroy(%model_class%  $%model_name%): JsonResponse
    {
        try {
            $this->%service_name%->destroy($%model_name%);
        } catch (Exception $exception) {
            logger()->error($exception->getMessage());

            return Response::failure(__('Failed to delete!'));
        }

        return  Response::success(__('Delete success!'));
    }

}`;

export const ControllerSoftDeleteStub = `
<?php

namespace App\\%controller_path%;

use App\\Http\\Controllers\\Controller;
use App\\%service_path%\\%service_class%;
use App\\%request_path%\\%create_request_class%;
use App\\%model_path%\\%model_class%;
use App\\%request_path%\\%update_request_class%;
use App\\%resource_path%\\%resource_class%;
use Exception;
use Illuminate\\Http\\JsonResponse;
use App\\Http\\Resources\\PaginationResource;
use Illuminate\\Http\\Response;


class %controller_class% extends Controller {

    /**
     * CONSTRUCTOR FUNCTION
     * 
     * @param %service_class% $%service_name%
     */
    public function __construct(protected %service_class% $%service_name%)
    {
    }

    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            $data = $this->%service_name%->index()->latest()->paginate(10);
        } catch (Exception $exception) {
            logger()->error($exception->getMessage());
            return Response::failure(__('Failed to fetch list !'));
        }
        return Response::success(__('List !'),
            %resource_class%::collection($data),
            new PaginationResource($data)
        );
    }

    /**
     * @param  %create_request_class%  $request
     * @return JsonResponse
     */
    public function store(%create_request_class% $request): JsonResponse
    {
        try {
            $data = $this->%service_name%->store($request->validated());
        } catch (Exception $exception) {
            logger()->error($exception->getMessage());

            return Response::failure(__('Failed to create!'));
        }

        return Response::success(__('Create success!'),
            new %resource_class%($data),
        );
    }

    /**
     * @param  %model_class%  $%model_name%
     * @param  %update_request_class%  $request
     * @return JsonResponse
     */
    public function update(%model_class% $%model_name%, %update_request_class% $request): JsonResponse
    {
        try {
            $data = $this->%service_name%->update($%model_name%,$request->validated());
        } catch (Exception $exception) {
            logger()->error($exception->getMessage());

            return Response::failure(__('Failed to update!'));
        }

        return Response::success(__('Update success!'),
            new %resource_class%($data),
        );
    }

    /**
     * @param  %model_class%  $%model_name%
     * @return JsonResponse
     */
    public function destroy(%model_class%  $%model_name%): JsonResponse
    {
        try {
            $this->%service_name%->destroy($%model_name%);
        } catch (Exception $exception) {
            logger()->error($exception->getMessage());

            return Response::failure(__('Failed to trash!'));
        }

        return  Response::success(__('Trashed success!'));
    }

    /**
     * @return JsonResponse
     */
    public function trashed(): JsonResponse
    {
        try {
            $data = $this->%service_name%->trashed()->paginate(10);
        } catch (Exception $exception) {
            logger()->error($exception->getMessage());
            return Response::failure(__('Failed to fetch list !'));
        }
        return Response::success(__('List !'),
            %resource_class%::collection($data),
            new PaginationResource($data)
        );
    }

    /**
     * @param  int $%model_name%
     * @return JsonResponse
     */
    public function restore(int $%model_name%): JsonResponse
    {
        try {
            $this->%service_name%->restore($%model_name%);
        } catch (Exception $exception) {
            logger()->error($exception->getMessage());

            return Response::failure(__('Failed to restore!'));
        }

        return  Response::success(__('Restore success!'));
    }

    /**
     * @param  int $%model_name%
     * @return JsonResponse
     */
    public function delete(int $%model_name%): JsonResponse
    {
        try {
            $this->%service_name%->forceDelete($%model_name%);
        } catch (Exception $exception) {
            logger()->error($exception->getMessage());

            return Response::failure(__('Failed to delete!'));
        }

        return  Response::success(__('Delete success!'));
    }

}`;
