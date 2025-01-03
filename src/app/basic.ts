#!/usr/bin/env node

import inquirer from "inquirer";
import {
  folderCompJs,
  folderCompTs,
  folderPagesJs,
  folderPagesTs,
  folderTs,
} from "../class/objects";
import { createJsxFile, createTsxFile } from "../utils/jsx_tsx_folder";
import { createTsFile } from "../utils/ts_folder";

const createBasicFolder = async () => {
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
      await createJsxFile(folderCompJs);
      await createJsxFile(folderPagesJs);
    } else if (isTypescript) {
      await createTsxFile(folderCompTs);
      await createTsxFile(folderPagesTs);
      await createTsFile(folderTs);
    }
  } catch (error) {
    console.error("Error during prompt or file creation:", error);
  }
};

createBasicFolder();
