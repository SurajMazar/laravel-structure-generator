"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logger_util_1 = require("./logger.util");
const generateFile = (pathname, filename, content) => {
    /**
     * TERMINAL PATH
     */
    const terminalPath = process.cwd();
    pathname = pathname.replace("\\", "/").replace(String.fromCharCode(92), "/");
    console.log(pathname);
    fs_1.default.mkdirSync(path_1.default.join(terminalPath, pathname), { recursive: true });
    const filepath = `${path_1.default.join(terminalPath, pathname)}/${filename}.php`;
    if (!fs_1.default.existsSync(filepath)) {
        fs_1.default.writeFileSync(`${filepath}`, content);
        (0, logger_util_1.successLog)(`${pathname}/${filename} file has been saved!`);
    }
    else {
        (0, logger_util_1.errorLog)("File already exists!");
    }
};
exports.generateFile = generateFile;
