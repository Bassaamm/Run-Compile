function Timer({ time }: { time: string }) {
  return (
    <div className="mr-16">
      <span className="text-slate-50 ml-[100%]  ">{time}</span>
    </div>
  );
}

export default Timer;
