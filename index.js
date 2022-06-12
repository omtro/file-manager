import { stdin, stdout, exit } from "process";
import { createInterface } from "readline";

import { USER_NAME, ERROR_OPERATION_MESSAGE } from "./constants.js";

import colorize from "./utils/colorize.js";
import getOSInfo from "./utils/osHelper.js";
import getHash from "./utils/hash.js";
import cd from "./utils/cd.js";
import { currentDirectory, inputError } from "./utils/helpers.js";
import { ls, cat, add, rn, cp, rm } from "./utils/fs/index.js";
import { compress, decompress } from "./utils/zlib/index.js";

const start = () => {
  
  const rl = createInterface({
    input: stdin,
    output: stdout,
  });

  colorize("green", `Welcome to the File Manager, ${USER_NAME}!\n`);
  cd(process.env.HOME);

  rl.on("line", (input) => {
    try {
      const [command, firstArg, secondArg] = input.split(" ");
      switch (command) {
        case ".exit":
          exit();
          break;
        case "up":
          cd("..");
          break;
        case "cd":
          cd(firstArg);
          break;
        case "ls":
          ls();
          break;
        case "cat":
          cat(firstArg);
          break;
        case "add":
          add(firstArg);
          break;
        case "rn":
          rn(firstArg, secondArg);
          break;
        case "cp":
          cp(firstArg, secondArg);
          break;
        case "mv":
          rn(firstArg, secondArg);
          break;
        case "rm":
          rm(firstArg);
          break;
        case "os":
          getOSInfo(firstArg);
          break;
        case "hash":
          getHash(firstArg);
          break;
        case "compress":
          compress(firstArg, secondArg);
          break;
        case "decompress":
          decompress(firstArg, secondArg);
          break;
        default:
          inputError();
          currentDirectory();
          break;
      }
    } catch (error) {
      colorize("red", `${ERROR_OPERATION_MESSAGE}\n`);
      currentDirectory();
    }
  });
};

process.on("exit", () => {
  colorize("magenta", `Thank you for using File Manager, ${USER_NAME}!`);
});

await start();
