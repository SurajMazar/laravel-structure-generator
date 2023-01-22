"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasSoftDeletes = exports.HelperTest = exports.isValidGenerateCommand = exports.isvalidCommand = void 0;
const commands_1 = require("../constants/commands");
const flags_1 = require("../constants/flags");
const logger_util_1 = require("./logger.util");
/**
 * CHECK IF THE COMMAND IS A VALID COMMAND
 */
const isvalidCommand = () => {
    const command = process.argv[2];
    if (!command)
        return false;
    const generateCommand = command.split(":");
    return Boolean(command &&
        generateCommand &&
        generateCommand[0] &&
        Object.keys(commands_1.Commands).includes(generateCommand[0]));
};
exports.isvalidCommand = isvalidCommand;
/**
 * CHECK IF IS A VALID GENERATE COMMAND
 */
const isValidGenerateCommand = () => {
    const command = process.argv[2];
    if (!command)
        return false;
    const generateCommand = command.split(":");
    return Boolean(generateCommand &&
        generateCommand[1] &&
        Object.keys(commands_1.GenerateCommands).includes(generateCommand[1]));
};
exports.isValidGenerateCommand = isValidGenerateCommand;
const HelperTest = () => {
    (0, logger_util_1.successLog)(`
AVAILABLE COMMANDS
------------------------------------------------------------
generate:structure -- Scaffolds basic laravel CRUD structure

FLAGS
------------------------------------------------------------
--sd    - Supports SoftDeletes
`);
    process.exit(1);
};
exports.HelperTest = HelperTest;
/**
 * DOES COMMAND HAS SOFT DELETE
 * @returns
 */
const hasSoftDeletes = () => {
    return process.argv.includes(flags_1.flags.softDelete);
};
exports.hasSoftDeletes = hasSoftDeletes;
