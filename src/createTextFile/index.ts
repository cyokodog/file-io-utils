import * as fs from "fs";
import path from "path";

export const createTextFile = (filePath: string, text: string) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, text);
};
