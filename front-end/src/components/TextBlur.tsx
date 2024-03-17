"use client";
import { useEffect, useState } from "react";
import Text from "./Text";
import { useHotkeys } from "react-hotkeys-hook";
import { useTimer } from "@/hooks/useTimer";

export default function TextBlur() {
  const [isTextOn, setIsTextOn] = useState(false);
  useEffect(() => {
    setIsTextOn(true);
  }, []);
  useHotkeys("*", (event, handler) => {
    if (event.key === "Escape") setIsTextOn(true);
    else {
      setIsTextOn(false);
    }
  });
  return (
    <div className="max-w-4xl relative mx-auto px-4 py-4">
      {isTextOn && (
        <div className="text-primary text-xl font-semibold absolute z-10 justify-center items-center w-full h-full flex flex-col">
          <div className="">Press any key to start</div>
          <div className="">Press ESC to stop</div>
        </div>
      )}
      <div className={`${isTextOn ? "blur-sm " : ""}`}>
        <Text isTextOn={isTextOn} setIsTextOn={setIsTextOn} />
      </div>
    </div>
  );
}
