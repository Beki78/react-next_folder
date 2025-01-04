#!/usr/bin/env node

import { folderTs, folderUtilsJs, folderUtilsTs } from "../class/objects";
import { createScript } from "../questions/question";

const createFolderScript = () => {
  createScript(folderUtilsJs, folderUtilsTs, folderTs);
};

createFolderScript();
