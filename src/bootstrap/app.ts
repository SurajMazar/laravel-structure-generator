import { flags } from "../constants/flags";
import UserInfoService from "../services/userInfo.service";
import {
  HelperTest,
  isvalidCommand,
  isValidGenerateCommand,
} from "../utils/helper.util";
import { exitWithErrorMessage } from "../utils/logger.util";

class App {
  async init() {
    if (isvalidCommand()) {
      if (isValidGenerateCommand()) {
        /** SERVICE TO GATHER USER INFORMATION*/
        const userInfo = new UserInfoService();
        await userInfo.init(); // DATA COLLECTION

        process.exit(1);
      }
    } else {
      if (process.argv.includes(flags.help) || !process.argv[2]) {
        HelperTest();
      }

      exitWithErrorMessage("Invalid command");
    }
  }
}

export default new App();
