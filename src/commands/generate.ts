import StructureService from "../services/structure.service";
import UserInfoService from "../services/userInfo.service";
import { FirstCharcterToLower } from "../utils/string.util";

const generateStructure = (userInfo: UserInfoService) => {
  const structureService = new StructureService();

  structureService.generateBuilder(
    userInfo.model_path,
    userInfo.model_name,
    userInfo.builder_path,
    userInfo.builder_name
  );

  structureService.generateModel(
    userInfo.model_path,
    userInfo.RequestValidations.map((item) => item.name),
    userInfo.model_name,
    userInfo.builder_path,
    userInfo.builder_name
  );

  structureService.generateService(
    userInfo.model_path,
    userInfo.model_name,
    userInfo.service_path,
    userInfo.service_name
  );

  structureService.generateCreateRequest(
    userInfo.request_path,
    userInfo.create_request_name,
    userInfo.RequestValidations
  );

  structureService.generateUpdateRequest(
    userInfo.request_path,
    userInfo.update_request_name,
    userInfo.RequestValidations
  );

  structureService.generateResource(
    userInfo.resource_path,
    userInfo.resource_name,
    userInfo.RequestValidations
  );

  structureService.generateController(
    userInfo.controller_path,
    userInfo.controller_name,
    userInfo.model_path,
    userInfo.model_name,
    userInfo.model_name.toLowerCase(),
    userInfo.request_path,
    userInfo.create_request_name,
    userInfo.update_request_name,
    userInfo.service_path,
    userInfo.service_name,
    FirstCharcterToLower(userInfo.service_name),
    userInfo.resource_path,
    userInfo.resource_name
  );
};
