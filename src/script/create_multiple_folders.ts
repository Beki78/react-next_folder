#!/usr/bin/env node
/*
Add a new section describing the multi-argument support:

## Multi-Argument Folder Creation

With the new update, you can now create multiple folders in one command:
```bash
npm create-folders <folder1> <folder2> ...

Example:

npm create-folders auth lib pages

This command creates the auth, lib, and pages folders along with their respective files.
*/
import { EventEmitter } from "events";
import inquirer from "inquirer";
import {
  folderAuthJs,
  folderAuthTs,
  folderApiJs,
  folderApiTs,
  folderContextJs,
  folderContextTs,
  folderPagesJs,
  folderPagesTs,
  folderCompJs,
  folderCompTs,
  folderLibJs,
  folderLibTs,
  folderStoreJs,
  folderStoreTs,
  folderUtilsJs,
  folderUtilsTs,
  folderReduxStoreJs,
  folderReduxStoreTs,
  folderReduxSliceJs,
  folderReduxSliceTs,
  folderReduxSagaJs,
  folderReduxSagaTs,
  folderHookJs,
  folderHookTs,
  folderTs,
} from "../class/objects";
import { SingleFolder } from "../libs/single_folder";
import { createScript } from "../questions/question";

// Increase max listeners to prevent warnings
EventEmitter.defaultMaxListeners = 20;

// Type definition for folder mappings
type FolderMappings = {
  [key: string]: SingleFolder[];
};

// Folder mappings for different types of folders
const folderMappings: FolderMappings = {
  auth: [folderAuthJs, folderAuthTs],
  api: [folderApiJs, folderApiTs],
  context: [folderContextJs, folderContextTs],
  pages: [folderPagesJs, folderPagesTs],
  components: [folderCompJs, folderCompTs],
  lib: [folderLibJs, folderLibTs],
  store: [folderStoreJs, folderStoreTs],
  utils: [folderUtilsJs, folderUtilsTs],
  reduxStore: [folderReduxStoreJs, folderReduxStoreTs],
  reduxSlice: [folderReduxSliceJs, folderReduxSliceTs],
  reduxSaga: [folderReduxSagaJs, folderReduxSagaTs],
  hook: [folderHookJs, folderHookTs],
  types: [folderTs],
};

// Function to create folders
const createFolders = (folders: string[], useTypescript: boolean): void => {
  folders.forEach((folder) => {
    if (folderMappings[folder]) {
      const folderToCreate = useTypescript
        ? folderMappings[folder][1] // TypeScript version
        : folderMappings[folder][0]; // JavaScript version

      if (folderToCreate) {
        createScript(folderToCreate, folderToCreate, folderToCreate);
      } else {
        console.log(`No folder configuration available for: ${folder}`);
      }
    } else {
      console.log(`Unknown folder type: ${folder}`);
    }
  });
};

// Main script logic
const main = async () => {
  // Retrieve command-line arguments (excluding the script name)
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(
      "No folder names provided. Usage: create-folders <folder1> <folder2> ..."
    );
    process.exit(1);
  }

  // Prompt the user for TypeScript preference
  const { useTypescript } = await inquirer.prompt([
    {
      type: "confirm",
      name: "useTypescript",
      message: "Are you using TypeScript?",
      default: false,
    },
  ]);

  // Create folders based on arguments and TypeScript preference
  createFolders(args, useTypescript);
};

// Execute the main function
main().catch((err) => console.error(err));
