import inquirer from "inquirer";
import { createTsFile } from "../utils/ts_folder";
import { Folder } from "../types/types";
import { createNoCodeFileJs, createNoCodeFileTs } from "../utils/ts_nocode_";

export const createTwoFolderScript = async (
  jsx1: Folder,
  tsx1: Folder,
  ts: Folder,
  jsx2: Folder,
  tsx2: Folder
): Promise<void> => {
  try {
    const questions = await inquirer.prompt([
      {
        type: "confirm",
        name: "isTypescript",
        message: "Are you using Typescript?",
        default: false,
      },
    ]);

    const { isTypescript } = questions;

    if (!isTypescript) {
      await createNoCodeFileJs(jsx1);
      await createNoCodeFileJs(jsx2);
    } else {
      await createNoCodeFileTs(tsx1);
      await createNoCodeFileTs(tsx2);
      await createTsFile(ts);
    }
  } catch (error) {
    console.error("Error during prompt or file creation:", error);
  }
};
