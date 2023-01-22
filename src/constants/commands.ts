/**
 * AVAILABLE COMMANDS
 */
export const Commands = {
  generate: "generate",
} as const;

/**
 * COMMAND INTERFACE
 */
export type CommandInterface = keyof typeof Commands;

/**
 * AVAILABLE GENERATE COMMAND
 */
export const GenerateCommands = {
  structure: "structure",
  // service:'service',
  // action:'action'
} as const;

/**
 * GENERATE COMMAND INTERFACE
 */
export type GenerateCommandInterface = keyof typeof GenerateCommands;
