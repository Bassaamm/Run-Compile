import { Spinner } from "@material-tailwind/react";

import dynamic from "next/dynamic";
const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false });

export default function EditorComponent({
  selectLang,
  setEditorContent,
  isLoading,
}: any) {
  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <Spinner className="h-10 w-10 text-blue-500/80" />
        </div>
      )}
      <MonacoEditor
        key={selectLang.language}
        className="bg-[#1f1f1f] border-t-2 border-secondary pt-4"
        height="30vh"
        theme="vs-dark"
        defaultValue={selectLang.example}
        editorDidMount={() => {
          window.MonacoEnvironment!.getWorkerUrl = (
            _moduleId: string,
            label: string
          ) => {
            if (label === "json") return "_next/static/json.worker.js";
            if (label === "css") return "_next/static/css.worker.js";
            if (label === "html") return "_next/static/html.worker.js";
            if (label === "typescript" || label === "javascript")
              return "_next/static/ts.worker.js";
            return "_next/static/editor.worker.js";
          };
        }}
        onChange={(value: any) => {
          console.log("onValueChange called with:", value);
          setEditorContent(value);
        }}
        options={{
          cursorStyle: "line",
          fontSize: 14,
          language: selectLang.language,
          renderLineHighlight: "all",
          wordWrap: "on",
          automaticLayout: true,
          minimap: {
            enabled: false,
          },
          scrollBeyondLastLine: false,
          formatOnType: true,
          formatOnPaste: true,
          dragAndDrop: true,
          autoIndent: "full",
        }}
      />
    </div>
  );
}
