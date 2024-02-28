"use client";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
export default function Text() {
  const [text, setText] = useState("AAAAAAAAAAAAAAAaaaa");
  useHotkeys("*", (event, handler) => {
    setText((prev) => prev + event.key);
  });
  return (
    <div className="w-ful flex justify-center mt-20">
      <div>{text}</div>
    </div>
  );
}
