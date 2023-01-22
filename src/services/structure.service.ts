import { BuilderStub } from "../stubs/builder.stub";
import {
  ControllerSoftDeleteStub,
  ControllerStub,
} from "../stubs/controller.stub";
import { ModelSoftDeleteStub, ModelStub } from "../stubs/model.stub";
import { RequestStub } from "../stubs/request.stub";
import { ResourceStub } from "../stubs/resource.stub";
import { ServiceSoftDeleteStub, ServiceStub } from "../stubs/service.stub";
import { generateFile } from "../utils/generateFile.util";
import { hasSoftDeletes } from "../utils/helper.util";

class StructureService {
  async generateBuilder(
    modelPath: string,
    modelName: string,
    builderPath: string,
    builderName: string
  ) {
    const content = BuilderStub.replace(
      new RegExp("%builder_path%", "g"),
      builderPath
    )
      .replace(new RegExp("%builder_class%", "g"), builderName)
      .replace(new RegExp("%model_path%", "g"), modelPath)
      .replace(new RegExp("%model_class%", "g"), modelName);

    generateFile(`app\\${builderPath}`, builderName, content);
  }

  async generateModel(
    modelPath: string,
    fillables: string[],
    modelName: string,
    builderPath: string,
    builderName: string
  ) {
    let content = hasSoftDeletes() ? ModelSoftDeleteStub : ModelStub;

    const fillable = `
        [
            ${fillables.map((item) => `"${item.trim()}"`).join(",")}
        ]
    `;

    content = content
      .replace(new RegExp("%fillable%", "g"), fillable)
      .replace(new RegExp("%builder_path%", "g"), builderPath)
      .replace(new RegExp("%builder_class%", "g"), builderName)
      .replace(new RegExp("%model_path%", "g"), modelPath)
      .replace(new RegExp("%model_class%", "g"), modelName);

    generateFile(`app\\${modelPath}`, modelName, content);
  }

  async generateService(
    modelPath: string,
    modelName: string,
    servicePath: string,
    serviceName: string
  ) {
    let content = hasSoftDeletes() ? ServiceSoftDeleteStub : ServiceStub;

    content = content
      .replace(new RegExp("%service_path%", "g"), servicePath)
      .replace(new RegExp("%service_class%", "g"), serviceName)
      .replace(new RegExp("%model_path%", "g"), modelPath)
      .replace(new RegExp("%model_class%", "g"), modelName);

    generateFile(`app\\${servicePath}`, serviceName, content);
  }

  async generateCreateRequest(
    requestPath: string,
    requestName: string,
    requestRules: Array<{ name: string; rules: string }>
  ) {
    let content = RequestStub;

    const rules = `[
      ${requestRules
        .map((item) => `"${item.name.trim()}" => "${item.rules}"`)
        .join(",")}
    ]`;

    content = content
      .replace(new RegExp("%request_path%", "g"), requestPath)
      .replace(new RegExp("%request_class%", "g"), requestName)
      .replace(new RegExp("%request_rules%", "g"), rules);

    generateFile(`app\\${requestPath}`, requestName, content);
  }

  async generateUpdateRequest(
    requestPath: string,
    requestName: string,
    requestRules: Array<{ name: string; rules: string }>
  ) {
    let content = RequestStub;

    const rules = `[
      ${requestRules
        .map(
          (item) =>
            `"${item.name.trim()}" => "${item.rules.replace(
              "required",
              "sometimes"
            )}"`
        )
        .join(",")}
    ]`;

    content = content
      .replace(new RegExp("%request_path%", "g"), requestPath)
      .replace(new RegExp("%request_class%", "g"), requestName)
      .replace(new RegExp("%request_rules%", "g"), rules);

    generateFile(`app\\${requestPath}`, requestName, content);
  }

  async generateResource(
    resourcePath: string,
    resourceName: string,
    requestRules: Array<{ name: string; rules: string }>
  ) {
    let content = ResourceStub;

    const resourceArray = `[
      ${requestRules
        .map((item) => `"${item.name.trim()}" => $this->${item.name.trim()}`)
        .join(",")}
    ]`;

    content = content
      .replace(new RegExp("%resource_path%", "g"), resourcePath)
      .replace(new RegExp("%resource_class%", "g"), resourceName)
      .replace(new RegExp("%resource_array%", "g"), resourceArray);

    generateFile(`app\\${resourcePath}`, resourceName, content);
  }

  async generateController(
    controllerPath: string,
    controllerName: string,
    modelPath: string,
    modelClass: string,
    modelName: string,
    requestPath: string,
    createRequestName: string,
    updateRequestName: string,
    servicePath: string,
    serviceClass: string,
    serviceName: string,
    resourcePath: string,
    resourceName: string
  ) {
    let content = hasSoftDeletes() ? ControllerSoftDeleteStub : ControllerStub;

    content = content
      .replace(new RegExp("%controller_path%", "g"), controllerPath)
      .replace(new RegExp("%controller_class%", "g"), controllerName)
      .replace(new RegExp("%model_path%", "g"), modelPath)
      .replace(new RegExp("%model_class%", "g"), modelClass)
      .replace(new RegExp("%model_name%", "g"), modelName)
      .replace(new RegExp("%request_path%", "g"), requestPath)
      .replace(new RegExp("%create_request_class%", "g"), createRequestName)
      .replace(new RegExp("%update_request_class%", "g"), updateRequestName)
      .replace(new RegExp("%service_path%", "g"), servicePath)
      .replace(new RegExp("%service_class%", "g"), serviceClass)
      .replace(new RegExp("%service_name%", "g"), serviceName)
      .replace(new RegExp("%resource_path%", "g"), resourcePath)
      .replace(new RegExp("%resource_class%", "g"), resourceName);

    generateFile(`app\\${controllerPath}`, controllerName, content);
  }
}

export default StructureService;
