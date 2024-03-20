"use client";
import { quotes } from "@/utils/quotes";
import { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { GoDotFill } from "react-icons/go";
import Timer from "./Timer";
import Stats from "./Stats";
import QuoteText from "./Quote";
import TextBlur from "./TextBlur";

export default function Text() {
  const [isTextOn, setIsTextOn] = useState(false);
  const [quote, setQuote] = useState(quotes[0]);
  const [type, setType] = useState("");
  const [counter, setCounter] = useState(0);
  const [truthList, setTruthList] = useState<boolean[]>([]);
  const [timerOn, setTimerOn] = useState(false);
  const [isStatsOn, setIsStatsOn] = useState(false);
  const timerRef = useRef<number>();
  let randomQuouteNum: number;
  useHotkeys("*", (event) => {
    if (type.length === quote.quote.length) {
      return;
    }
    if (!timerOn) {
      timerRef.current = new Date().getTime();
      setTimerOn(true);
    }
    if (!isTextOn) {
      event.preventDefault();
      if (event.key.length === 1) {
        setType((prev) => prev + event.key);
      }
    }
    if (event.key === "Escape") resetState();
  });

  useEffect(() => {
    setIsTextOn(true);
  }, []);
  useHotkeys("*", (event, handler) => {
    if (event.key === "Escape") setIsTextOn(true);
    else {
      setIsTextOn(false);
    }
  });
  useEffect(() => {
    randomQuouteNum = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuouteNum]);
  }, []);

  useEffect(() => {
    const textLetters = quote.quote.split("");
    const typeLetters = type.split("");

    if (textLetters.length === typeLetters.length) {
      setTimerOn(false);
      timerRef.current = new Date().getTime() - timerRef.current!;
      setIsStatsOn(true);
    }
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
    setTimerOn(false);
  }

  return (
    <div className="w-full max-w-4xl mx-auto ">
      <TextBlur isTextOn={isTextOn}>
        <div className="  px-10 flex flex-col cursor-default gap-12   mt-16 ">
          <Timer timerOn={timerOn} />
          <QuoteText quote={quote} truthList={truthList} counter={counter} />
          <div className="flex text-lg gap-4 items-center text-secondary ">
            <span>{quote.owner.name}</span>
            <GoDotFill size={10} />
            <span>{quote.owner.title}</span>
          </div>
        </div>
      </TextBlur>
      <Stats timerRef={timerRef} truthList={truthList} isStatsOn={isStatsOn} />
    </div>
  );
}
