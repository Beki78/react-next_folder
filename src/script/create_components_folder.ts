#!/usr/bin/env node

import { folderCompJs, folderCompTs, folderTs } from "../class/objects";
import { createScript } from "../questions/question";



const createFolderScript =  () => {
  createScript(folderCompJs, folderCompTs, folderTs);
};

createFolderScript();
