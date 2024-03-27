"use client";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { useEffect, useRef } from "react";
export default function Compiler() {
  const monaco = useMonaco();

  loader.config({ monaco });
  useEffect(() => {
    if (monaco) {
      console.log("here is the monaco instance:", monaco);
    }
  }, [monaco]);
  return (
    <div className="max-w-2xl ">
      <Editor
        height="90vh"
        defaultValue={""}
        theme="vs-dark"
        defaultLanguage="javascript"
      />
    </div>
  );
}
