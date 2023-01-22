import { defaultPaths } from "../constants/defaultPaths";
import {
  formatRequestValidation,
  textQuestion,
} from "../services/question.service";

class UserInfoService {
  public model_name: string = "";
  public model_path: string = "";
  public builder_path: string = "";
  public builder_name: string = "";
  public request_path: string = "";
  public create_request_name: string = "";
  public update_request_name: string = "";
  public RequestValidations: Array<{
    name: string;
    rules: string;
  }> = [];
  public service_path: string = "";
  public service_name: string = "";
  public resource_path: string = "";
  public resource_name: string = "";
  public controller_path: string = "";
  public controller_name: string = "";

  /**
   * CONSTRUCTOR FUNCTION
   */
  constructor() {}

  /**
   * INITIALIZE PATHS
   */
  async init() {
    this.model_path = await textQuestion(
      "model path?",
      defaultPaths.modal_path
    );
    this.model_name = await textQuestion("model class name?", "Example");

    this.builder_path = await textQuestion(
      "BUilder path?",
      defaultPaths.builder_path
    );
    this.builder_name = await textQuestion(
      "builder class name?",
      "ExampleBuilder"
    );

    this.request_path = await textQuestion(
      "request path?",
      defaultPaths.request_path
    );
    this.create_request_name = await textQuestion(
      "create request class name?",
      "ExampleCreateRequest"
    );
    this.update_request_name = await textQuestion(
      "update request class name?",
      "ExampleUpdateRequest"
    );

    const inputRules = await textQuestion(
      "Request validations?",
      "name->required|string"
    );
    this.RequestValidations = formatRequestValidation(inputRules);

    this.service_path = await textQuestion(
      "service path?",
      defaultPaths.service_path
    );
    this.service_name = await textQuestion(
      "service class name?",
      "ExampleService"
    );

    this.resource_path = await textQuestion(
      "resource path?",
      defaultPaths.resource_path
    );
    this.resource_name = await textQuestion(
      "resource name?",
      "ExampleResource"
    );

    this.controller_path = await textQuestion(
      "controller path?",
      defaultPaths.controller_path
    );
    this.controller_name = await textQuestion(
      "controller name?",
      "ExampleController"
    );
  }
}

export default UserInfoService;
