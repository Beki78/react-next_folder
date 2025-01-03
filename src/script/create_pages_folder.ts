#!/usr/bin/env node

import inquirer from "inquirer";
import { createJsxFile, createTsxFile } from "../utils/jsx_tsx_folder";
import { folderPagesTs, folderTs } from "../class/objects";
import { createTsFile } from "../utils/ts_folder";

const createFolderScript = async () => {
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
      await createJsxFile(folderPagesTs);
    } else if (isTypescript) {
      await createTsxFile(folderPagesTs);
      await createTsFile(folderTs);
    }
  } catch (error) {
    console.error("Error during prompt or file creation:", error);
  }
};

createFolderScript();
