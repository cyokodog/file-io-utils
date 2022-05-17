import * as fs from 'fs';
import path from 'path';

export const copyFile = (inputPath: string, outputPath: string) => {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.copyFileSync(inputPath, outputPath);
  fs.rmSync(inputPath);
};
