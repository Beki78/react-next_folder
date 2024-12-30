#!/usr/bin/env node

import inquirer from "inquirer";
import { createJsxCompFile, createTsxCompFile } from "./utils/create_components_folder";
import { createJsxPageFile, createTsxPageFile } from "./utils/create_pages_folder";
import { createJsStoreFile, createTsStoreFile } from "./utils/create_store_folder";
import { createJsUtilsFile, createTsUtilsFile } from "./utils/create_utils_folder";


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
    {
      type: "confirm",
      name: "isPages",
      message: "Do you want pages directory?",
      default: true,
    },
    {
      type: "confirm",
      name: "isStore",
      message: "Do you want store directory?",
      default: true,
    },
    {
      type: "confirm",
      name: "isUtils",
      message: "Do you want utils directory?",
      default: true,
    },
  ]);

  const { isTypescript, isComponent, isPages, isStore, isUtils } = questions;
  if (isTypescript && isComponent) {
    createTsxCompFile();
  } else if (!isTypescript && isComponent) {
    createJsxCompFile();
  }
  if (isTypescript && isPages) {
    createTsxPageFile();
  } else if (!isTypescript && isPages) {
    createJsxPageFile();
  }
  if (isTypescript && isStore) {
    createTsStoreFile();
  } else if (!isTypescript && isStore) {
    createJsStoreFile();
  }
  if (isTypescript && isUtils) {
    createTsUtilsFile();
  } else if (!isTypescript && isUtils) {
    createJsUtilsFile();
  }
};
createFolderScript();
