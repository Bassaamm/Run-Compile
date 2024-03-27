import { execShellCommand as exec } from "../utils/common";
import {
  extensions,
  SANDBOX_NAME,
  cppBashScript,
  cBashScript,
} from "../utils/compilers";

import path from "path";
import { mkdirp } from "mkdirp";
import fs, { promises } from "fs";

export const runCode = async (
  language: string,
  sourceCode: string,
  id: string,
  compiler: string
) => {
  const folderPath = path.join("temp", id);
  await mkdirp(folderPath);

  const sourceFilePath = path.join(
    folderPath,
    `source.${extensions[language]}`
  );

  const sourceFileName: any = `source.${extensions[language]}`;
  await fs.writeFile(sourceFilePath, sourceCode, (err?: any) => {
    if (err) {
      console.log(err);
    }
  });

  const bashPath = path.join(folderPath, `run.sh`);
  let bashScript;

  if (language === "cpp") {
    bashScript = cppBashScript;
  } else if (language === "c") {
    bashScript = cBashScript;
  } else {
    bashScript = `${compiler} ${sourceFileName}`;
  }

  await fs.writeFile(bashPath, bashScript, (err?: any) => {
    if (err) {
      console.log(err);
    }
  });

  const command = `docker run --rm -m=200m --memory-swap=250m --cpus=.5 --mount type=bind,source=${path.join(
    process.cwd(),
    "temp",
    id
  )},target=/usercode ${SANDBOX_NAME} /bin/bash run.sh`;

  let output: any = await exec(command);

  await promises.rm(folderPath, { recursive: true, force: true });

  return output;
};
