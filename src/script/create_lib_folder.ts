#!/usr/bin/env node

import { folderLibJs, folderLibTs, folderTs } from "../class/objects";
import { createScript } from "../questions/question";

const createFolderScript = () => {
  createScript(folderLibJs, folderLibTs, folderTs);
};

createFolderScript();
