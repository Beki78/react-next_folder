#!/usr/bin/env node

import {   folderReduxSliceJs, folderReduxSliceTs, folderReduxStoreJs, folderReduxStoreTs, folderTs } from "../class/objects";
import { createTwoFolderScript } from "../questions/two_folder_question";

export const createReduxFolderScript = () => {
  createTwoFolderScript(
    folderReduxStoreJs,
    folderReduxStoreTs,
    folderTs,
    folderReduxSliceJs,
    folderReduxSliceTs
  );
};

createReduxFolderScript();
