import { createBrotliCompress } from "zlib";
import { createReadStream, createWriteStream } from "fs";

import { currentDirectory } from "../helpers.js";

const compress = (path, newName) => {
  const brotliCompress = createBrotliCompress();
  const inputStreamCompress = createReadStream(path);
  const outputStreamCompress = createWriteStream(newName);
  inputStreamCompress.pipe(brotliCompress).pipe(outputStreamCompress);
  currentDirectory();
};

export default compress;
