import inquirer from "inquirer";
import { exitWithErrorMessage } from "../utils/logger.util";
import { FirstCharcterToUpper } from "../utils/string.util";

/**
 * GET TEXT ANSWER FROM USER
 * @param question
 * @param defaultValue
 * @returns
 */
export const textQuestion = async (
  question: string,
  defaultValue: string
): Promise<string> => {
  const answer = await inquirer.prompt([
    {
      name: "question",
      message: FirstCharcterToUpper(question),
      default: defaultValue,
    },
  ]);
  return answer.question || defaultValue;
};

/**
 *
 * @param string
 */
export const formatRequestValidation = (string: string) => {
  const rulesArray: Array<{
    name: string;
    rules: string;
  }> = [];

  const initArray = string.split(";");

  for (let i = 0; i < initArray.length; i++) {
    const arrSec = initArray[i].split("->");
    if (arrSec.length >= 2) {
      rulesArray.push({
        name: arrSec[0] || "",
        rules: arrSec[1] || "",
      });
    } else {
      exitWithErrorMessage("Invalid rules");
    }
  }

  return rulesArray;
};
