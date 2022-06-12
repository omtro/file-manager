import { stdout } from "process";
import { readdir } from "fs";

import { currentDirectory, inputError } from "../helpers.js";

const ls = () => {
  readdir(process.cwd(), (err, files) => {
    if (err) {
      stdout.write(`${err.message}\n`);
      inputError();
    } else {
      stdout.write(`${files.join("\n")}\n"`);
      currentDirectory();
    }
  });
};

export default ls;
