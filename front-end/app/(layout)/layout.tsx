"use client";
import Header from "@/components/Header";
import Sections from "@/components/Sections";
import { useEffect, useState } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted && (
        <div className=" min-h-screen w-full bg-primaryBackground">
          <Header />
          <Sections />
          {children}
        </div>
      )}
    </>
  );
}
