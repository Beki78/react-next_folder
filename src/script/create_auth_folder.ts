#!/usr/bin/env node

import {   folderAuthJs, folderAuthTs, folderTs } from "../class/objects";
import { createScript } from "../questions/question";

const createFolderScript = () => {
  createScript(folderAuthJs, folderAuthTs, folderTs);
};

createFolderScript();
