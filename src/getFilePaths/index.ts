import * as fs from 'fs';

const reGetPaths = (baseDir: string, _buf?: string[]) => {
  const buf = _buf || [];
  const fileOrDirNames = fs.readdirSync(baseDir);
  fileOrDirNames.map((name) => {
    try {
      const path = `${baseDir}/${name}`;
      const stat = fs.statSync(path);
      if (stat.isDirectory()) {
        reGetPaths(path, buf);
      } else if (stat.isFile()) {
        buf.push(path);
      }
    } catch (e) {}
  });
  return buf;
};

export const getFilePaths = (baseDir: string) => {
  return reGetPaths(baseDir);
};
