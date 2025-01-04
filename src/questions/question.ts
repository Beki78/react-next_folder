import inquirer from "inquirer";
import { createTsFile } from "../utils/ts_folder";
import { Folder } from "../types/types";
import { createNoCodeFileJs, createNoCodeFileTs } from "../utils/ts_nocode_";

export const createScript = async (
  jsx: Folder,
  tsx: Folder,
  ts: Folder
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
      await createNoCodeFileJs(jsx);
    } else {
      await createNoCodeFileTs(tsx);
      await createTsFile(ts);
    }
  } catch (error) {
    console.error("Error during prompt or file creation:", error);
  }
};
