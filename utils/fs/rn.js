import { stdout } from "process";
import { rename } from "fs";

import { currentDirectory, inputError } from "../helpers.js";

const rn = (path, newName) => {
  rename(path, newName, (err) => {
    if (err) {
      stdout.write(`${err.message}\n`);
      inputError();
    } else {
      currentDirectory();
    }
  });
};

export default rn;
