#!/usr/bin/env node

import { folderContextJs, folderContextTs, folderTs } from "../class/objects";
import { createScript } from "../questions/question";

const createFolderScript = () => {
  createScript(folderContextJs, folderContextTs, folderTs);
};

createFolderScript();
