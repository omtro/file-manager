import { stdout } from "process";

const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  reset: "\x1b[0m",
};

const colorize = (color, text) =>
  stdout.write(`${colors[color]}${text}${colors.reset}`);

export default colorize;
