#!/usr/bin/env node

import {
  folderReduxSagaJs,
  folderReduxSagaTs,
  folderReduxSliceJs,
  folderReduxSliceTs,
  folderReduxStoreJs,
  folderReduxStoreTs,
  folderTs,
} from "../class/objects";
import { createThreeFolderScript } from "../questions/three_folder_question";

export const createReduxFolderScript = () => {
  createThreeFolderScript(
    folderReduxStoreJs,
    folderReduxStoreTs,
    folderTs,
    folderReduxSliceJs,
    folderReduxSliceTs,
    folderReduxSagaJs,
    folderReduxSagaTs
  );
};

createReduxFolderScript();
