"use client";
import { useState } from "react";
import Text from "./Text";
import { useHotkeys } from "react-hotkeys-hook";

export default function TextBlur() {
  const [isBlurred, setIsBlurred] = useState(true);
  useHotkeys("*", (event, handler) => {
    setIsBlurred(!event.key);
  });
  return (
    <div className="max-w-4xl relative mx-auto px-4 py-4">
      {isBlurred && (
        <div className="text-primary text-xl font-semibold absolute z-10 justify-center items-center w-full h-full flex flex-col">
          <div className="">Press any key to start</div>
          <div className="">Press ESC to stop</div>
        </div>
      )}
      <div className={`${isBlurred ? "blur-sm" : ""}`}>
        <Text isTextOn={isBlurred} />
      </div>
    </div>
  );
}
