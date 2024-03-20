import { useTimer } from "@/hooks/useTimer";
import { useEffect } from "react";

function Timer({ timerOn }: { timerOn: boolean }) {
  const { setIsActive, time } = useTimer();
  useEffect(() => {
    if (timerOn) setIsActive(true);
    if (!timerOn) setIsActive(false);
  }, [timerOn]);
  return <span className="text-slate-50 ml-[100%]">{time}</span>;
}

export default Timer;
