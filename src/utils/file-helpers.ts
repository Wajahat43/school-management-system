import fs from "fs";
import path from "path";

export function readFile(localPath: string): string {
  try {
    return fs.readFileSync(path.join(process.cwd(), localPath), "utf8");
  } catch (e) {
    return "";
  }
}

export function writeFile(localPath: string, content: string): void {
  fs.writeFileSync(path.join(process.cwd(), localPath), content);
}
