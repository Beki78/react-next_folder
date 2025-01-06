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

// Type definition for folder objects
type FolderMappings = {
  [key: string]: SingleFolder[];
};

// Mapping for folder creation objects
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

// Function to create the requested folders
const createFolderScript = (folders: string[]): void => {
  folders.forEach((folder) => {
    if (folderMappings[folder]) {
      folderMappings[folder].forEach((folderObj) => {
        createScript(folderObj, folderObj, folderObj);
      });
    } else {
      console.log(`Unknown folder type: ${folder}`);
    }
  });
};

// Retrieve arguments passed in the command (excluding 'create-folders' command itself)
const args = process.argv.slice(2);
createFolderScript(args);
