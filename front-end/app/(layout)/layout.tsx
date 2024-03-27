"use client";
import { useEffect, useState } from "react";
import Header from "../../src/components/Header";
import Sections from "../../src/components/Sections";
import React from "react";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div>
      {" "}
      {mounted && (
        <div className=" min-h-screen w-full bg-primaryBackground">
          <Header />
          <Sections />
          {children}
        </div>
      )}
    </div>
  );
}
