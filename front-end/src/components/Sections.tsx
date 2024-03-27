"use client";

import { useRouter } from "next/navigation";

export default function Sections() {
  const router = useRouter();
  return (
    <div className="flex gap-8 mt-20 w-full justify-center text-primary  ">
      <div onClick={() => router.push("type")} className="cursor-pointer">
        Type Fast
      </div>
      <div onClick={() => router.push("compiler")} className="cursor-pointer">
        Compile
      </div>
    </div>
  );
}
