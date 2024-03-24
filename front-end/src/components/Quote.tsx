import { Quote } from "@/utils/quotes";

interface QuoteTextProps {
  quote: Quote;
  truthList: boolean[];
  counter: number;
}

export default function QuoteText({
  quote,
  truthList,
  counter,
}: QuoteTextProps) {
  return (
    <div className="text-2xl">
      {quote.quote.split("").map((letter, i) => {
        let className = "text-secondary text-2xl leading-normal ";
        if (truthList[i] === true) className = `text-correct`;
        if (truthList[i] === false) className = `text-wrong`;
        if (i === counter) className += "blinking-cursor";
        return (
          <span key={i} className={className}>
            {letter}
          </span>
        );
      })}
    </div>
  );
}
