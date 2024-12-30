import fs from "fs";
import path from "path";

export const createTsTypesFile = () => {
  const folderPath = path.join(process.cwd(), "src", "types");
  const filePath = path.join(folderPath, "default.ts");

  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
  });

  const fileContent = ``;
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
