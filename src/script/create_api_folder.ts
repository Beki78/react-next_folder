#!/usr/bin/env node

import {  folderApiJs, folderApiTs, folderTs, folderTsApi } from "../class/objects";
import { createScript } from "../questions/question";

const createFolderScript = () => {
  createScript(folderApiJs, folderApiTs, folderTsApi);
};

createFolderScript();
