import { axiosIncPublic } from "@/utils/axiosPublic";

export async function IDEservice({ language, sourceCode, compiler }: any) {
  const res = await axiosIncPublic.post("ide/run", {
    language,
    sourceCode,
  });
  console.log(res.data);
  return res.data;
}
