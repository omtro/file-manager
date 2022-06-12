import { stdout } from "process";
import { writeFile } from "fs";

import { currentDirectory, inputError } from "../helpers.js";

const add = (path) => {
  writeFile(`${process.cwd()}/${path}`, "", (err) => {
    if (err) {
      stdout.write(`${err.message}\n`);
      inputError();
    } else {
      currentDirectory();
    }
  });
};

export default add;
