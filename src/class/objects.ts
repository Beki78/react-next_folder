import { SingleFolder } from "../libs/single_folder";

const fileContent = `import React from 'react';\n\nconst App = () => {\n  return <></>;\n};\n\nexport default App;\n`;

export const folderPagesJs = new SingleFolder({
  mainDir: "src",
  dirName: "pages",
  fileName: "default.jsx",
  fileContent,
});
export const folderPagesTs = new SingleFolder({
  mainDir: "src",
  dirName: "pages",
  fileName: "default.tsx",
  fileContent,
});

export const folderCompJs = new SingleFolder({
  mainDir: "src",
  dirName: "components",
  fileName: "default.jsx",
  fileContent,
});
export const folderCompTs = new SingleFolder({
  mainDir: "src",
  dirName: "components",
  fileName: "default.tsx",
  fileContent,
});

export const folderTs = new SingleFolder({
  mainDir: "src",
  dirName: "types",
  fileName: "types.ts",
  fileContent: ``,
});

export const folderHookJs = new SingleFolder({
  mainDir: "src",
  dirName: "hook",
  fileName: "hook.js",
  fileContent: ``,
});
export const folderHookTs = new SingleFolder({
  mainDir: "src",
  dirName: "hook",
  fileName: "hook.ts",
  fileContent: ``,
});

export const folderLibJs = new SingleFolder({
  mainDir: "src",
  dirName: "lib",
  fileName: "lib.js",
  fileContent: ``,
});
export const folderLibTs = new SingleFolder({
  mainDir: "src",
  dirName: "lib",
  fileName: "lib.ts",
  fileContent: ``,
});


export const folderUtilsJs = new SingleFolder({
  mainDir: "src",
  dirName: "utils",
  fileName: "util.js",
  fileContent: ``,
});
export const folderUtilsTs = new SingleFolder({
  mainDir: "src",
  dirName: "utils",
  fileName: "util.ts",
  fileContent: ``,
});


