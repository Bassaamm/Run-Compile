"use client";
import { useTimer } from "@/hooks/useTimer";
import { quotes } from "@/utils/quotes";
import { useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { GoDotFill } from "react-icons/go";

export default function Text({
  isTextOn,
  setIsTextOn,
}: {
  isTextOn: boolean;
  setIsTextOn: (value: boolean) => void;
}) {
  const [quote, setQuote] = useState(quotes[0]);
  const [type, setType] = useState("");
  const [counter, setCounter] = useState(0);
  const [truthList, setTruthList] = useState<boolean[]>([]);
  const { isActive, setIsActive, time } = useTimer();
  let randomQuouteNum: number;
  useHotkeys("*", (event, handler) => {
    console.log(isTextOn);
    if (!isTextOn) {
      event.preventDefault();
      if (event.key.length === 1) {
        setType((prev) => prev + event.key);
      }
    }
    if (event.key === "Escape") resetState();
  });

  useEffect(() => {
    randomQuouteNum = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuouteNum]);
    setIsActive(true);
  }, []);

  useEffect(() => {
    const textLetters = quote.quote.split("");
    const typeLetters = type.split("");

    if (textLetters.length >= typeLetters.length) {
      if (typeLetters.length === 0) return;
      let updatedTruthList = [...truthList];
      updatedTruthList[counter] = textLetters[counter] === typeLetters[counter];

      setTruthList(updatedTruthList);
    }
    if (typeLetters[counter] !== undefined) {
      setCounter(counter + 1);
    }
  }, [type]);

  function resetState() {
    setQuote(quotes[0]);
    setType("");
    setCounter(0);
    setTruthList([]);
    setIsActive(false);
  }

  return (
    <div className="w-full  px-10 flex flex-col cursor-default  max-w-4xl mx-auto items-start gap-12 justify-center mt-16 ">
      <span className="text-slate-50 ml-[100%]">{time}</span>

      <div className="text-2xl">
        {quote.quote.split("").map((letter, i) => {
          let className = "text-secondary text-2xl leading-normal ";
          if (truthList[i] === true)
            className = `text-correct 
          `;
          // ${letter === " " ? "border-b-2  w-10 border-green-500" : ""}
          if (truthList[i] === false)
            className = `text-wrong 
          `;
          // ${letter === " " ? "border-b-2  w-10 border-red-500" : ""}
          if (i === counter) className += "blinking-cursor";
          return (
            <span key={i} className={className}>
              {letter}
            </span>
          );
        })}
      </div>
      <div className="flex text-lg gap-4 items-center text-secondary ">
        <span>{quote.owner.name}</span>
        <GoDotFill size={10} />
        <span>{quote.owner.title}</span>
      </div>
    </div>
  );
}
