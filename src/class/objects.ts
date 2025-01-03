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

