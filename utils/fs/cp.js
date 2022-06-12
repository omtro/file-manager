import { stdout } from "process";
import { copyFile } from "fs";

import { currentDirectory, inputError } from "../helpers.js";

const cp = (path, newpath) => {
  copyFile(path, newpath, (err) => {
    if (err) {
      stdout.write(`${err.message}\n`);
      inputError();
    } else {
      currentDirectory();
    }
  });
};

export default cp;
