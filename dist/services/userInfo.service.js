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
const defaultPaths_1 = require("../constants/defaultPaths");
const question_service_1 = require("../services/question.service");
class UserInfoService {
    /**
     * CONSTRUCTOR FUNCTION
     */
    constructor() {
        this.model_name = "";
        this.model_path = "";
        this.builder_path = "";
        this.builder_name = "";
        this.request_path = "";
        this.create_request_name = "";
        this.update_request_name = "";
        this.RequestValidations = [];
        this.service_path = "";
        this.service_name = "";
        this.resource_path = "";
        this.resource_name = "";
        this.controller_path = "";
        this.controller_name = "";
    }
    /**
     * INITIALIZE PATHS
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.model_path = yield (0, question_service_1.textQuestion)("model path?", defaultPaths_1.defaultPaths.modal_path);
            this.model_name = yield (0, question_service_1.textQuestion)("model class name?", "Example");
            this.builder_path = yield (0, question_service_1.textQuestion)("BUilder path?", defaultPaths_1.defaultPaths.builder_path);
            this.builder_name = yield (0, question_service_1.textQuestion)("builder class name?", "ExampleBuilder");
            this.request_path = yield (0, question_service_1.textQuestion)("request path?", defaultPaths_1.defaultPaths.request_path);
            this.create_request_name = yield (0, question_service_1.textQuestion)("create request class name?", "ExampleCreateRequest");
            this.update_request_name = yield (0, question_service_1.textQuestion)("update request class name?", "ExampleUpdateRequest");
            const inputRules = yield (0, question_service_1.textQuestion)("Request validations?", "name->required|string");
            this.RequestValidations = (0, question_service_1.formatRequestValidation)(inputRules);
            this.service_path = yield (0, question_service_1.textQuestion)("service path?", defaultPaths_1.defaultPaths.service_path);
            this.service_name = yield (0, question_service_1.textQuestion)("service class name?", "ExampleService");
            this.resource_path = yield (0, question_service_1.textQuestion)("resource path?", defaultPaths_1.defaultPaths.resource_path);
            this.resource_name = yield (0, question_service_1.textQuestion)("resource name?", "ExampleResource");
            this.controller_path = yield (0, question_service_1.textQuestion)("controller path?", defaultPaths_1.defaultPaths.controller_path);
            this.controller_name = yield (0, question_service_1.textQuestion)("controller name?", "ExampleController");
        });
    }
}
exports.default = UserInfoService;
