import Link from "next/link";
import { FiType } from "react-icons/fi";
import ColorPalette from "./ColorPalette";

export default function Header() {
  return (
    <div className="p-8">
      <div className="flex justify-between w-full text-secondary  mx-auto max-w-4xl ">
        <FiType className="text-primary" size={50} />
        <ul>
          <li>
            <Link href=""></Link>
          </li>
          <li>
            <Link href=""></Link>
          </li>
        </ul>
        <ColorPalette />
      </div>
    </div>
  );
}
