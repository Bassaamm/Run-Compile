import { languages } from "@/utils/languages";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "./ui/select";

export default function SelectLang({ hanleLangChange }: any) {
  return (
    <Select onValueChange={hanleLangChange}>
      <SelectTrigger className="w-[180px] bg-white/10">
        <SelectValue placeholder={languages[0].language} />
      </SelectTrigger>
      <SelectContent className="bg-primaryBackground">
        <SelectGroup>
          {languages.map((lang: any) => (
            <SelectItem
              key={lang.language}
              value={lang.language}
              className="text-secondary"
            >
              {lang.language}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
