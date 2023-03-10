"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStructure = void 0;
const structure_service_1 = __importDefault(require("../services/structure.service"));
const string_util_1 = require("../utils/string.util");
const generateStructure = (userInfo) => {
    const structureService = new structure_service_1.default();
    structureService.generateBuilder(userInfo.model_path, userInfo.model_name, userInfo.builder_path, userInfo.builder_name);
    structureService.generateModel(userInfo.model_path, userInfo.RequestValidations.map((item) => item.name), userInfo.model_name, userInfo.builder_path, userInfo.builder_name);
    structureService.generateService(userInfo.model_path, userInfo.model_name, userInfo.service_path, userInfo.service_name);
    structureService.generateCreateRequest(userInfo.request_path, userInfo.create_request_name, userInfo.RequestValidations);
    structureService.generateUpdateRequest(userInfo.request_path, userInfo.update_request_name, userInfo.RequestValidations);
    structureService.generateResource(userInfo.resource_path, userInfo.resource_name, userInfo.RequestValidations);
    structureService.generateController(userInfo.controller_path, userInfo.controller_name, userInfo.model_path, userInfo.model_name, userInfo.model_name.toLowerCase(), userInfo.request_path, userInfo.create_request_name, userInfo.update_request_name, userInfo.service_path, userInfo.service_name, (0, string_util_1.FirstCharcterToLower)(userInfo.service_name), userInfo.resource_path, userInfo.resource_name);
};
exports.generateStructure = generateStructure;
