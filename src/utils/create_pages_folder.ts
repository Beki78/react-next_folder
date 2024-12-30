import fs from "fs";
import path from "path";

export const createJsxPageFile = () => {
  const folderPath = path.join(process.cwd(), "src", "pages");
  const filePath = path.join(folderPath, "default.jsx");

  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
  });

  const fileContent = `import React from 'react';\n\nconst App = () => {\n  return <></>;\n};\n\nexport default App;\n`;
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

export const createTsxPageFile = () => {
  const folderPath = path.join(process.cwd(), "src", "pages");
  const filePath = path.join(folderPath, "default.tsx");

  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
  });

  const fileContent = `import React from 'react';\n\nconst App = () => {\n  return <></>;\n};\n\nexport default App;\n`;
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.log(err);
    }
  });
};