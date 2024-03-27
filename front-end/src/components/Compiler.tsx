"use client";
import { useState } from "react";
import { languages } from "@/utils/languages";
import { IDEservice } from "@/service/IDEservce";
import SelectLang from "./SelectLang";
import RunBtn from "./RunBtn";
import Output from "./Output";
import EditorComponent from "./Editor";

export default function Compiler() {
  const [selectLang, setSelectLang] = useState(languages[0]);
  const [editorContent, setEditorContent] = useState(selectLang.example);
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [codeError, setCodeError] = useState("");

  async function handleRun() {
    setIsLoading(true);
    const res = await IDEservice({
      language: selectLang.language,
      sourceCode: editorContent,
    });
    setIsLoading(false);
    setOutput(res.result.stdout);
    setCodeError(res.result.stderr);
  }
  function hanleLangChange(value: string) {
    const lang = languages.find((lang: any) => lang.language === value);
    setSelectLang(lang);
    setEditorContent(lang.example);
  }

  return (
    <div className="max-w-2xl  container mx-auto mt-16 ">
      <div className="rounded-xl border-4 border-primary flex flex-col">
        <div className="text-primary flex items-center justify-between w-full h-full py-4 px-6 gap-6 ">
          <div className="text-xl">
            <SelectLang hanleLangChange={hanleLangChange} />
          </div>
          <div>
            <span className="text-red-500">Note: </span> It was made for fun and
            not for a real usage
          </div>
          <RunBtn onClick={handleRun} />
        </div>
        <EditorComponent
          selectLang={selectLang}
          setEditorContent={setEditorContent}
          isLoading={isLoading}
        />

        <Output output={output} codeError={codeError} />
      </div>
    </div>
  );
}
