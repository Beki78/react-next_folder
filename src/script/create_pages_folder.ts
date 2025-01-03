#!/usr/bin/env node

import { folderPagesJs, folderPagesTs, folderTs } from "../class/objects";
import { createScript } from "../questions/question";

const createFolderScript = () => {
  createScript(folderPagesJs, folderPagesTs, folderTs);
};

createFolderScript();
