
import os from "os";

import colorize from "./colorize.js";
import {currentDirectory} from './helpers.js'

const osOutput = (text) => {
  colorize("cyan", text);
  currentDirectory();
}

const getOSInfo = (command) => {
  switch (command) {
    case "--EOL":
      osOutput(`${os.EOL}\n`);
      break;
    case "--cpus":
      const cpuData = os.cpus();
      cpuData.forEach((item) => {
        delete item.times;
      });
      osOutput(`${JSON.stringify(cpuData, null, 2)}\n`);
      break;
    case "--homedir":
      osOutput(`${os.homedir()}\n`);
      break;
    case "--username":
      osOutput(`${os.userInfo().username}\n`);
      break;
    case "--architecture":
      osOutput(`${os.arch()}\n`);
      break;
    default:
      inputError();
      break;
  }
}
export default getOSInfo;