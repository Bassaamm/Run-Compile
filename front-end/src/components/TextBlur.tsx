export default function TextBlur({
  children,
  isTextOn,
}: {
  children: React.ReactNode;
  isTextOn: boolean;
}) {
  return (
    <div className="max-w-4xl relative mx-auto px-4 py-4">
      {isTextOn && (
        <div className="text-primary text-xl font-semibold absolute z-10 justify-center items-center w-full h-full flex flex-col">
          <div className="">Press any key to start</div>
          <div className="">Press ESC to stop</div>
        </div>
      )}
      <div className={`${isTextOn ? "blur-sm " : ""}`}>{children}</div>
    </div>
  );
}
