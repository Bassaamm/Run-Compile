import { useEffect, useState } from "react";

export function useTimer() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0, milliseconds: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setTime((currentTime) => {
          let { minutes, seconds, milliseconds } = currentTime;
          milliseconds += 1;
          if (milliseconds === 100) {
            milliseconds = 0;
            seconds += 1;
            if (seconds === 60) {
              seconds = 0;
              minutes += 1;
            }
          }
          return { minutes, seconds, milliseconds };
        });
      }, 10);
    } else if (!isActive && time.milliseconds !== 0) {
      () => clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatNumber = (number: number) => number.toString().padStart(2, "0");
  const displayTime = `${formatNumber(time.minutes)}:${formatNumber(
    time.seconds
  )}:${formatNumber(time.milliseconds)}`;
  function reset() {
    setTime({ minutes: 0, seconds: 0, milliseconds: 0 });
  }
  return {
    isActive,
    setIsActive,
    time: displayTime,
    seconds: time.seconds,
    minutes: time.minutes,
    reset,
  };
}
