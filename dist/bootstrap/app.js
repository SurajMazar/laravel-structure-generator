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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generate_1 = require("../commands/generate");
const flags_1 = require("../constants/flags");
const userInfo_service_1 = __importDefault(require("../services/userInfo.service"));
const helper_util_1 = require("../utils/helper.util");
const logger_util_1 = require("../utils/logger.util");
class App {
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, helper_util_1.isvalidCommand)()) {
                if ((0, helper_util_1.isValidGenerateCommand)()) {
                    /** SERVICE TO GATHER USER INFORMATION*/
                    const userInfo = new userInfo_service_1.default();
                    yield userInfo.init(); // DATA COLLECTION
                    (0, generate_1.generateStructure)(userInfo);
                    process.exit(1);
                }
            }
            else {
                if (process.argv.includes(flags_1.flags.help) || !process.argv[2]) {
                    (0, helper_util_1.HelperTest)();
                }
                (0, logger_util_1.exitWithErrorMessage)("Invalid command");
            }
        });
    }
}
exports.default = new App();
