#!/usr/bin/env node

import inquirer from "inquirer";
import { createTsxFile } from "./utils/create_components_folder";

const createFolderScript = async () => {
  const questions = await inquirer.prompt([
    {
      type: "list",
      name: "chooseFramework",
      message: "Which framework are you using?",
      choices: ["React", "Next Js"],
    },
    {
      type: "confirm",
      name: "isTypescript",
      message: "Are you using Typescript?",
      default: true,
    },
    {
      type: "confirm",
      name: "isComponent",
      message: "Do you want components directory?",
      default: true,
    },
  ]);

  const { chooseFramework, isTypescript, isComponent } = questions;
  if (isComponent) {
    createTsxFile();
  }
};
createFolderScript();
