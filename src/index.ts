#!/usr/bin/env node

import inquirer from "inquirer";
import {
  createJsxCompFile,
  createTsxCompFile,
} from "./utils/create_components_folder";
import {
  createJsxPageFile,
  createTsxPageFile,
} from "./utils/create_pages_folder";
import {
  createJsStoreFile,
  createTsStoreFile,
} from "./utils/create_store_folder";
import {
  createJsUtilsFile,
  createTsUtilsFile,
} from "./utils/create_utils_folder";
import {
  createJsHooksFile,
  createTsHooksFile,
} from "./utils/create_hooks_folder";
import { createTsTypesFile } from "./utils/create_types_folder";
import { createJsApiFile, createTsApiFile } from "./utils/create_api_folder";

const createFolderScript = async () => {
  const questions = await inquirer.prompt([
    {
      type: "list",
      name: "chooseFramework",
      message: "Which library/framework are you using?",
      choices: ["React"],
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
    {
      type: "confirm",
      name: "isHooks",
      message: "Do you want hooks directory?",
      default: true,
    },
    {
      type: "confirm",
      name: "isApi",
      message: "Do you want api directory?",
      default: true,
    },
  ]);

  const {
    chooseFramework,
    isTypescript,
    isComponent,
    isPages,
    isStore,
    isUtils,
    isHooks,
    isApi,
  } = questions;

  if (chooseFramework == "Next") {
    console.log("Hi");
    return;
  }
  if (chooseFramework == "React") {
    if (isTypescript) {
      createTsTypesFile();
    }
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
    if (isTypescript && isHooks) {
      createTsHooksFile();
    } else if (!isTypescript && isHooks) {
      createJsHooksFile();
    }
    if (isTypescript && isApi) {
      createTsApiFile();
    } else if (!isTypescript && isApi) {
      createJsApiFile();
    }
  }
};
createFolderScript();
