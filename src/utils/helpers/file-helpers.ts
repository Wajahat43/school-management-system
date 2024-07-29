import fs from "fs";
import path from "path";

export function readFile(localPath: string): string {
  return fs.readFileSync(path.join(process.cwd(), localPath), "utf8");
}

export function writeFile(localPath: string, content: string): void {
  fs.writeFileSync(path.join(process.cwd(), localPath), content);
}
