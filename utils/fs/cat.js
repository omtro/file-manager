import { stdout } from "process";
import { readFile } from "fs";

import { currentDirectory, inputError } from "../helpers.js";

const cat = (path) => {
  readFile(path, (err, data) => {
    if (err) {
      stdout.write(`${err.message}\n`);
      inputError();
    } else {
      stdout.write(`${data}\n`);
      currentDirectory();
    }
  });
};

export default cat;
