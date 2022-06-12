import colorize from "./colorize.js";

import {ERROR_INPUT_MESSAGE} from '../constants.js'

export const currentDirectory = () =>
  colorize("blue", `You are currently in ${process.cwd()}\n`);

export const inputError = (msg) => colorize("red", msg || `${ERROR_INPUT_MESSAGE}\n`);
