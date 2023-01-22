import { Commands, GenerateCommands } from "../constants/commands";
import { flags } from "../constants/flags";
import { successLog } from "./logger.util";

/**
 * CHECK IF THE COMMAND IS A VALID COMMAND
 */
export const isvalidCommand = () => {
  const command = process.argv[2];
  if (!command) return false;
  const generateCommand = command.split(":");
  return Boolean(
    command &&
      generateCommand &&
      generateCommand[0] &&
      Object.keys(Commands).includes(generateCommand[0])
  );
};

/**
 * CHECK IF IS A VALID GENERATE COMMAND
 */
export const isValidGenerateCommand = () => {
  const command = process.argv[2];
  if (!command) return false;
  const generateCommand = command.split(":");
  return Boolean(
    generateCommand &&
      generateCommand[1] &&
      Object.keys(GenerateCommands).includes(generateCommand[1])
  );
};

export const HelperTest = () => {
  successLog(`
AVAILABLE COMMANDS
------------------------------------------------------------
generate:structure -- Scaffolds basic laravel CRUD structure

FLAGS
------------------------------------------------------------
--sd    - Supports SoftDeletes
`);

  process.exit(1);
};

/**
 * DOES COMMAND HAS SOFT DELETE
 * @returns
 */
export const hasSoftDeletes = () => {
  return process.argv.includes(flags.softDelete);
};
