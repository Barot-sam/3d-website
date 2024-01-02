"use client";
import Header from "@/src/components/Header";
import StickyCursor from "@/src/components/stickyCursor";
import { useRef } from "react";

export default function Home() {
  const stickyElement = useRef(null);
  return (
    <main className="h-[100vh] w-[100vw] flex item-center justify-center bg-yellow-300">
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
    </main>
  );
}
