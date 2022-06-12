import { createHash } from "crypto";

import { currentDirectory } from "./helpers.js";
import colorize from "./colorize.js";

const getHash = (path) => {
    const hash = createHash("sha256");
    hash.update(path);
    colorize("cyan", `${hash.digest("hex")}\n`);
    currentDirectory();
};

export default getHash;



          