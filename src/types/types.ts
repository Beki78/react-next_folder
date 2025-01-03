export interface Folder {
  createFolderPath: () => void;
  createFilePath: () => void;
  makeDir: () => Promise<void>;
  writeFile: () => Promise<void>;
}

export interface ConstructorParams {
  mainDir: string;
  dirName: string;
  fileName: string;
  fileContent: string;
}




