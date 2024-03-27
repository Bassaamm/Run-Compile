"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sections() {
  const pathname = usePathname();

  return (
    <div className="flex gap-8 mt-20 w-full justify-center text-primary  ">
      <Link
        href="/type"
        className={`cursor-pointer ${
          pathname === "/type" ? "border-b border-primary" : ""
        }`}
      >
        Type
      </Link>
      <Link
        href="/compiler"
        className={`cursor-pointer ${
          pathname === "/compiler" ? "border-b  border-primary" : ""
        }`}
      >
        Compile
      </Link>
    </div>
  );
}
