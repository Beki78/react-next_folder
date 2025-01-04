#!/usr/bin/env node

import {  folderStoreJs, folderStoreTs, folderTs } from "../class/objects";
import { createScript } from "../questions/question";

const createFolderScript = () => {
  createScript(folderStoreJs, folderStoreTs, folderTs);
};

createFolderScript();
