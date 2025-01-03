import { Folder } from "../types/types";

export const createTsFile = async (folder: Folder) => {
  folder.createFolderPath();
  folder.createFilePath();
  await folder.makeDir();
  await folder.writeFile();
};
