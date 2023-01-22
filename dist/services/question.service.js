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
exports.formatRequestValidation = exports.textQuestion = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const logger_util_1 = require("../utils/logger.util");
const string_util_1 = require("../utils/string.util");
/**
 * GET TEXT ANSWER FROM USER
 * @param question
 * @param defaultValue
 * @returns
 */
const textQuestion = (question, defaultValue) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield inquirer_1.default.prompt([
        {
            name: "question",
            message: (0, string_util_1.FirstCharcterToUpper)(question),
            default: defaultValue,
        },
    ]);
    return answer.question || defaultValue;
});
exports.textQuestion = textQuestion;
/**
 *
 * @param string
 */
const formatRequestValidation = (string) => {
    const rulesArray = [];
    const initArray = string.split(";");
    for (let i = 0; i < initArray.length; i++) {
        const arrSec = initArray[i].split("->");
        if (arrSec.length >= 2) {
            rulesArray.push({
                name: arrSec[0] || "",
                rules: arrSec[1] || "",
            });
        }
        else {
            (0, logger_util_1.exitWithErrorMessage)("Invalid rules");
        }
    }
    return rulesArray;
};
exports.formatRequestValidation = formatRequestValidation;
