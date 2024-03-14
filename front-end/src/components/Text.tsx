"use client";
import { useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export default function Text() {
  const [text, setText] = useState("aaa aaa aaa aaa aaa");
  const [type, setType] = useState("");
  const [counter, setCounter] = useState(0);
  const [truthArray, setTruthArray] = useState<boolean[]>([]);

  useHotkeys("*", (event, handler) => {
    setType((prev) => prev + event.key);
  });

  useEffect(() => {
    const textLetters = text.split("");
    const typeLetters = type.split("");

    if (textLetters[counter] === typeLetters[counter]) {
      setCounter(counter + 1);
      setTruthArray((prev) => [...prev, true]);
    } else if (typeLetters[counter]) {
      setTruthArray((prev) => [...prev, false]);
    }
  }, [type]);

  return (
    <div className="w-full flex justify-center mt-20">
      <div className="text-2xl">
        {text.split("").map((letter, i) => (
          <span
            key={i}
            className={truthArray[i] ? "text-green-500" : "text-red-500"}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
