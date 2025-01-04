#!/usr/bin/env node

import { folderHookJs, folderHookTs, folderTs } from "../class/objects";
import { createScript } from "../questions/question";



const createFolderScript =  () => {
  createScript(folderHookJs, folderHookTs, folderTs);
};

createFolderScript();
