"use client";
import Header from "@/src/components/Header";
import StickyCursor from "@/src/components/stickyCursor";
import { useRef } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const stickyElement = useRef(null);
  return (
    <main className="h-[100vh] w-[100vw] flex item-center justify-center bg-neutral-50">
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <motion.section className="relative w-full flex flex-row">
        <motion.div className="w-[60%] flex justify-center items-center">
          <motion.h1 className="text-7xl">Hello..</motion.h1>
        </motion.div>
        <motion.div className="w-[40%] h-[70%] absolute right-0 top-[10%]">
          <Spline
            className=""
            scene="https://prod.spline.design/EGKYpljCB2EYMML4/scene.splinecode">
            <h1>asdfasdasds</h1>
          </Spline>
        </motion.div>
      </motion.section>
    </main>
  );
}
