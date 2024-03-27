import { Spinner } from "@material-tailwind/react";
import { Editor } from "@monaco-editor/react";

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
      <Editor
        key={selectLang.language}
        className="bg-[#1f1f1f] border-t-2 border-secondary pt-4"
        height="30vh"
        theme="vs-dark"
        defaultValue={selectLang.example}
        defaultLanguage={selectLang.language}
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
