import * as IDEService from "../services/IDEservices";
import { HttpStatusCode } from "../utils/httpStatusCode";
import { compilers, extensions } from "../utils/compilers";
import { randomString } from "../utils/common";

export const runCode = async (req: any, res: any, next: any) => {
  try {
    const { language, sourceCode } = req.body;

    const compiler = compilers[language];

    if (!compiler || !extensions[language]) {
      console.log("error");
    }

    const id = randomString();

    const response = await IDEService.runCode(
      language,
      sourceCode,
      id,
      compiler
    );

    if (response.stderr) {
      if (response.stderr.includes("docker")) console.log("error");
    }
    console.log(response);
    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
    });
  } catch (error) {
    next(error);
  }
};
