import fs from "fs/promises";
import path from "path";
import { ConstructorParams } from "../types/types";

export class SingleFolder {
  mainDir: string;
  dirName: string;
  fileName: string;
  fileContent: string;

  constructor({ mainDir, dirName, fileName, fileContent }: ConstructorParams) {
    this.mainDir = mainDir;
    this.dirName = dirName;
    this.fileName = fileName;
    this.fileContent = fileContent;
  }
  createFolderPath = () => {
    const folderPath = path.join(process.cwd(), this.mainDir, this.dirName);
    return folderPath;
  };
  createFilePath = () => {
    const folderPath = this.createFolderPath();
    const filePath = path.join(folderPath, this.fileName);
    return filePath;
  };
  async makeDir() {
    const folderPath = this.createFolderPath();
    try {
      await fs.mkdir(folderPath, { recursive: true });
    } catch (error) {
      console.log(error);
    }
  }
  async writeFile() {
    const filePath = this.createFilePath();
    try {
      await fs.writeFile(filePath, this.fileContent);
    } catch (error) {
      console.log(error);
    }
  }
}
