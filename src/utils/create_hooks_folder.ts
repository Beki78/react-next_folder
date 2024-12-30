import fs from "fs";
import path from "path";

export const createJsHooksFile = () => {
  const folderPath = path.join(process.cwd(), "src", "hooks");
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
export const createTsHooksFile = () => {
  const folderPath = path.join(process.cwd(), "src", "hooks");
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
