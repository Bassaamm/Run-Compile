export default function Output({ output, codeError }: any) {
  return (
    <div className="px-4 py-4 ">
      <div className="my-4 text-primary px-4">Output :</div>
      {output && (
        <div className="bg-[#1f1f1f] text-white p-4 rounded-lg">{output}</div>
      )}
      {codeError && (
        <div className="bg-[#1f1f1f] text-white p-4 rounded-lg">
          {codeError}
        </div>
      )}
    </div>
  );
}
