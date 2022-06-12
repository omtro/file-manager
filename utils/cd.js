import { chdir } from "process";

import { currentDirectory } from "./helpers.js";

const cd = (path) => {
  chdir(path);
  currentDirectory();
};

export default cd;
