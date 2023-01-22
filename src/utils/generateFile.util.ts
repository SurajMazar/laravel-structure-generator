import fs from "fs";
import path from "path";
import { errorLog, successLog } from "./logger.util";

export const generateFile = (
  pathname: string,
  filename: string,
  content: string
) => {
  /**
   * TERMINAL PATH
   */
  const terminalPath = process.cwd();

  pathname = pathname.replace("\\", "/").replace(String.fromCharCode(92), "/");
  console.log(pathname);

  fs.mkdirSync(path.join(terminalPath, pathname), { recursive: true });

  const filepath = `${path.join(terminalPath, pathname)}/${filename}.php`;

  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(`${filepath}`, content);
    successLog(`${pathname}/${filename} file has been saved!`);
  } else {
    errorLog("File already exists!");
  }
};
