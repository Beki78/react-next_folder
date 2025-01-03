import { SingleFolder } from "../libs/single_folder";
import { Folder } from "../types/types";



export const createJsxFile = async (folder: Folder) => {
  folder.createFolderPath();
  folder.createFilePath();
  await folder.makeDir();
  await folder.writeFile();
};

export const createTsxFile = async (folder: Folder) => {
  folder.createFolderPath();
  folder.createFilePath();
  await folder.makeDir();
  await folder.writeFile();
};
