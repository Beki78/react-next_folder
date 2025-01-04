#!/usr/bin/env node

import {  folderApiJs, folderApiTs, folderTs } from "../class/objects";
import { createScript } from "../questions/question";

const createFolderScript = () => {
  createScript(folderApiJs, folderApiTs, folderTs);
};

createFolderScript();
