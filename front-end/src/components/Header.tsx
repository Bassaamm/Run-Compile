import Link from "next/link";

export default function Header() {
  return (
    <div className="p-8">
      <div className="flex justify-between">
        <div>Logo</div>
        <ul>
          <li>
            <Link href=""></Link>
          </li>
          <li>
            <Link href=""></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
