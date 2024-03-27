import { axiosIncPublic } from "@/utils/axiosPublic";

export function IDEservice() {
  const res = axiosIncPublic.post("ide/run", {
    language: "javascript",
    sourceCode: "console.log('Hello, world!')",
    compiler: "javascript",
  });
  console.log(res);
}
