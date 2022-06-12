import { stdout } from "process";
import { unlink } from "fs";

import { currentDirectory, inputError } from "../helpers.js";

const rn = (path) => {
  unlink(path, (err) => {
    if (err) {
      stdout.write(`${err.message}\n`);
      inputError();
    } else {
      currentDirectory();
    }
  });
};

export default rn;
