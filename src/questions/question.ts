import inquirer from "inquirer";
import { createJsxFile, createTsxFile } from "../utils/jsx_tsx_folder";
import { createTsFile } from "../utils/ts_folder";
import { Folder } from "../types/types";

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
      await createJsxFile(jsx);
    } else {
      await createTsxFile(tsx);
      await createTsFile(ts);
    }
  } catch (error) {
    console.error("Error during prompt or file creation:", error);
  }
};
