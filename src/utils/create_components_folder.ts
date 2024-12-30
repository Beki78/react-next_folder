import fs from "fs";
import path from "path";

export const createTsxFile = () => {
  const folderPath = path.join(process.cwd(), "src", "components");
  const filePath = path.join(folderPath, "default.tsx");

  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
  });

  const fileContent = `import React from 'react';\n\nconst App = () => {\n  return <>Hello, World!</>;\n};\n\nexport default App;\n`;
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
