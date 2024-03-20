import { calcAccuracy, calcWPM } from "@/utils/helpers";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function Stats({
  timerRef,
  truthList,
  isStatsOn,
}: {
  timerRef: React.MutableRefObject<number | undefined>;
  truthList: boolean[];
  isStatsOn: boolean;
}) {
  const data = [
    {
      name: "Page A",
      uv: 1000,
      pv: 10400,
      amt: 10400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 10400,
      amt: 2210,
    },
  ];

  return (
    <div className="flex flex-col w-full justify-center items-start pl-14 mt-20">
      {isStatsOn && (
        <div className="flex gap-10">
          <div className="text-white ">
            <div> {calcWPM(truthList.length, timerRef.current! / 1000)}</div>
            <div className="flex gap-6">
              WPM
              <span>
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
          <div className="text-white">
            <div>
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
          <div className="text-white">
            <div>
              {Math.floor(
                (calcAccuracy(
                  truthList.filter((truth) => truth === true).length,
                  truthList.length
                ) /
                  100) *
                  calcWPM(truthList.length, timerRef.current! / 1000)
              )}
            </div>
            <div className="flex gap-6">Net WPM</div>
          </div>
          <div></div>
          <div></div>
        </div>
      )}
      <div>
        <LineChart width={300} height={200} data={data} className="">
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={4} />
        </LineChart>
      </div>
    </div>
  );
}
