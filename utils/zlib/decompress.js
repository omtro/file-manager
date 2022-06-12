import { createBrotliDecompress } from "zlib";
import { createReadStream, createWriteStream } from "fs";

import { currentDirectory } from "../helpers.js";

const decompress = (path, newName) => {
  const brotliDecompress = createBrotliDecompress();
  const inputStreamDecompress = createReadStream(path);
  const outputStreamDecompress = createWriteStream(newName);
  inputStreamDecompress.pipe(brotliDecompress).pipe(outputStreamDecompress);
  currentDirectory();
};

export default decompress;
