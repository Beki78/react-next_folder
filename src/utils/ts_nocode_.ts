import { Folder } from "../types/types";

export const createNoCodeFileJs = async (folder: Folder) => {
  folder.createFolderPath();
  folder.createFilePath();
  await folder.makeDir();
  await folder.writeFile();
};

export const createNoCodeFileTs = async (folder: Folder) => {
  folder.createFolderPath();
  folder.createFilePath();
  await folder.makeDir();
  await folder.writeFile();
};
