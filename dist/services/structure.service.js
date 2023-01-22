"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const builder_stub_1 = require("../stubs/builder.stub");
const controller_stub_1 = require("../stubs/controller.stub");
const model_stub_1 = require("../stubs/model.stub");
const request_stub_1 = require("../stubs/request.stub");
const resource_stub_1 = require("../stubs/resource.stub");
const service_stub_1 = require("../stubs/service.stub");
const generateFile_util_1 = require("../utils/generateFile.util");
const helper_util_1 = require("../utils/helper.util");
class StructureService {
    generateBuilder(modelPath, modelName, builderPath, builderName) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = builder_stub_1.BuilderStub.replace(new RegExp("%builder_path%", "g"), builderPath)
                .replace(new RegExp("%builder_class%", "g"), builderName)
                .replace(new RegExp("%model_path%", "g"), modelPath)
                .replace(new RegExp("%model_class%", "g"), modelName);
            (0, generateFile_util_1.generateFile)(`app\\${builderPath}`, builderName, content);
        });
    }
    generateModel(modelPath, fillables, modelName, builderPath, builderName) {
        return __awaiter(this, void 0, void 0, function* () {
            let content = (0, helper_util_1.hasSoftDeletes)() ? model_stub_1.ModelSoftDeleteStub : model_stub_1.ModelStub;
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
            (0, generateFile_util_1.generateFile)(`app\\${modelPath}`, modelName, content);
        });
    }
    generateService(modelPath, modelName, servicePath, serviceName) {
        return __awaiter(this, void 0, void 0, function* () {
            let content = (0, helper_util_1.hasSoftDeletes)() ? service_stub_1.ServiceSoftDeleteStub : service_stub_1.ServiceStub;
            content = content
                .replace(new RegExp("%service_path%", "g"), servicePath)
                .replace(new RegExp("%service_class%", "g"), serviceName)
                .replace(new RegExp("%model_path%", "g"), modelPath)
                .replace(new RegExp("%model_class%", "g"), modelName);
            (0, generateFile_util_1.generateFile)(`app\\${servicePath}`, serviceName, content);
        });
    }
    generateCreateRequest(requestPath, requestName, requestRules) {
        return __awaiter(this, void 0, void 0, function* () {
            let content = request_stub_1.RequestStub;
            const rules = `[
      ${requestRules
                .map((item) => `"${item.name.trim()}" => "${item.rules}"`)
                .join(",")}
    ]`;
            content = content
                .replace(new RegExp("%request_path%", "g"), requestPath)
                .replace(new RegExp("%request_class%", "g"), requestName)
                .replace(new RegExp("%request_rules%", "g"), rules);
            (0, generateFile_util_1.generateFile)(`app\\${requestPath}`, requestName, content);
        });
    }
    generateUpdateRequest(requestPath, requestName, requestRules) {
        return __awaiter(this, void 0, void 0, function* () {
            let content = request_stub_1.RequestStub;
            const rules = `[
      ${requestRules
                .map((item) => `"${item.name.trim()}" => "${item.rules.replace("required", "sometimes")}"`)
                .join(",")}
    ]`;
            content = content
                .replace(new RegExp("%request_path%", "g"), requestPath)
                .replace(new RegExp("%request_class%", "g"), requestName)
                .replace(new RegExp("%request_rules%", "g"), rules);
            (0, generateFile_util_1.generateFile)(`app\\${requestPath}`, requestName, content);
        });
    }
    generateResource(resourcePath, resourceName, requestRules) {
        return __awaiter(this, void 0, void 0, function* () {
            let content = resource_stub_1.ResourceStub;
            const resourceArray = `[
      ${requestRules
                .map((item) => `"${item.name.trim()}" => $this->${item.name.trim()}`)
                .join(",")}
    ]`;
            content = content
                .replace(new RegExp("%resource_path%", "g"), resourcePath)
                .replace(new RegExp("%resource_class%", "g"), resourceName)
                .replace(new RegExp("%resource_array%", "g"), resourceArray);
            (0, generateFile_util_1.generateFile)(`app\\${resourcePath}`, resourceName, content);
        });
    }
    generateController(controllerPath, controllerName, modelPath, modelClass, modelName, requestPath, createRequestName, updateRequestName, servicePath, serviceClass, serviceName, resourcePath, resourceName) {
        return __awaiter(this, void 0, void 0, function* () {
            let content = (0, helper_util_1.hasSoftDeletes)() ? controller_stub_1.ControllerSoftDeleteStub : controller_stub_1.ControllerStub;
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
            (0, generateFile_util_1.generateFile)(`app\\${controllerPath}`, controllerName, content);
        });
    }
}
exports.default = StructureService;
