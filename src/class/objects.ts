import { apiJs, apiTs, authJs, authTs, contextJs, contextTs, fileContent, sagaJs, sagaTs, sliceJs, sliceTs, storeJs, storeTs, zustandJs, zustandTs } from "../boilerplate/code";
import { SingleFolder } from "../libs/single_folder";


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

export const folderTsApi = new SingleFolder({
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
export const folderApiJs = new SingleFolder({
  mainDir: "src",
  dirName: "api",
  fileName: "api.js",
  fileContent: apiJs,
});
export const folderApiTs = new SingleFolder({
  mainDir: "src",
  dirName: "api",
  fileName: "api.ts",
  fileContent: apiTs,
});

export const folderAuthJs = new SingleFolder({
  mainDir: "src",
  dirName: "auth",
  fileName: "auth.js",
  fileContent: authJs,
});
export const folderAuthTs = new SingleFolder({
  mainDir: "src",
  dirName: "auth",
  fileName: "auth.ts",
  fileContent: authTs,
});

export const folderContextTs = new SingleFolder({
  mainDir: "src",
  dirName: "context",
  fileName: "MyContext.tsx",
  fileContent: contextTs,
});
export const folderContextJs = new SingleFolder({
  mainDir: "src",
  dirName: "context",
  fileName: "MyContext.jsx",
  fileContent: contextJs,
});

export const folderStoreJs = new SingleFolder({
  mainDir: "src",
  dirName: "store",
  fileName: "store.js",
  fileContent: zustandJs,
});
export const folderStoreTs = new SingleFolder({
  mainDir: "src",
  dirName: "store",
  fileName: "store.ts",
  fileContent: zustandTs,
});

export const folderReduxStoreJs = new SingleFolder({
  mainDir: "src",
  dirName: "store",
  fileName: "store.js",
  fileContent: storeJs,
});
export const folderReduxStoreTs = new SingleFolder({
  mainDir: "src",
  dirName: "store",
  fileName: "store.ts",
  fileContent: storeTs,
});
export const folderReduxSliceJs = new SingleFolder({
  mainDir: "src",
  dirName: "slice",
  fileName: "slice.js",
  fileContent: sliceJs,
});
export const folderReduxSliceTs = new SingleFolder({
  mainDir: "src",
  dirName: "slice",
  fileName: "slice.ts",
  fileContent: sliceTs,
});

export const folderReduxSagaJs = new SingleFolder({
  mainDir: "src",
  dirName: "saga",
  fileName: "saga.js",
  fileContent: sagaJs,
});
export const folderReduxSagaTs = new SingleFolder({
  mainDir: "src",
  dirName: "saga",
  fileName: "saga.ts",
  fileContent: sagaTs,
});