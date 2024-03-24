import { calcAccuracy, calcWPM } from "@/utils/helpers";
import { useEffect, useState } from "react";
import { GrPowerReset } from "react-icons/gr";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
export default function Stats({
  truthList,
  isStatsOn,
  timerOn,
  resetState,
  resetTime,
  seconds,
  setIsActive,
}: {
  truthList: boolean[];
  isStatsOn: boolean;
  timerOn: boolean;
  seconds: number;
  resetState: () => void;
  resetTime: () => void;
  setIsActive: any;
}) {
  const [data, setData] = useState<
    { name: string; wpm: number; accuracy: number; netWPM: number }[]
  >([]);
  useEffect(() => {
    if (timerOn === false) {
      setIsActive(false);
      return;
    }
    setIsActive(true);
    setTimeout(() => {
      let wpm = calcWPM(truthList.length, seconds);
      let accuracy = calcAccuracy(
        truthList.filter((truth) => truth === true).length,
        truthList.length
      );
      setData((prevData) => [
        ...prevData,
        {
          name: `${prevData.length + 1}`,
          wpm,
          accuracy,
          netWPM: Math.floor((accuracy / 100) * wpm),
        },
      ]);
    }, 2000);
  }, [seconds, timerOn]);

  return (
    <div className="flex flex-col w-full justify-center items-start pl-14 mt-20">
      {isStatsOn && (
        <div className="flex justify-between w-full  text-primary">
          <div className="flex gap-10">
            <div>
              <div className="text-3xl font-semibold">
                {calcWPM(truthList.length, seconds)}
              </div>
              <div className="flex  gap-6">
                WPM
                <span className="">
                  &#x2022;
                  {Math.floor(
                    truthList.filter((truth) => truth === true).length / 5
                  )}
                </span>
                <span>
                  &#x2022;
                  {Math.floor(
                    truthList.filter((truth) => truth !== true).length / 5
                  )}
                </span>
              </div>
            </div>
            <div className="">
              <div className="text-3xl font-semibold">
                {calcAccuracy(
                  truthList.filter((truth) => truth === true).length,
                  truthList.length
                )}
                %
              </div>
              <div className="flex gap-6">
                Acc
                <span>
                  &#x2022;{truthList.filter((truth) => truth === true).length}
                </span>
                <span>
                  &#x2022;{truthList.filter((truth) => truth !== true).length}
                </span>
              </div>
            </div>
            <div className="  ">
              <div className="text-3xl font-semibold">
                {Math.floor(
                  (calcAccuracy(
                    truthList.filter((truth) => truth === true).length,
                    truthList.length
                  ) /
                    100) *
                    calcWPM(truthList.length, seconds)
                )}
              </div>
              <div>Net WPM</div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <GrPowerReset
              size={35}
              className="cursor-pointer"
              onClick={() => {
                resetState();
                resetTime();
                setData([]);
              }}
            />
            <div>Cancel</div>
          </div>
        </div>
      )}
      {isStatsOn && (
        <>
          <div className="mt-20 flex gap-16 mb-10 justify-between items-center w-full">
            <div className="text-4xl  text-primary">Your Stat</div>
            <div className="">
              {" "}
              <LineChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="wpm" stroke="#8884d8" />
                <Line type="monotone" dataKey="accuracy" stroke="#82ca9d" />
              </LineChart>
            </div>
          </div>
          <div className="flex flex-col gap-14">
            <div className="text-primary text-4xl font-semibold">
              Last 10 Runs
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </>
      )}
    </div>
  );
}
