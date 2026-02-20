"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ResumeBackground() {
  const { scrollY } = useScroll();

  // Cornell: Up and slowest
  const yCornell = useTransform(scrollY, [0, 2000], [0, -80]);
  
  // Belvedere: Down and fastest
  const yBelvedere = useTransform(scrollY, [0, 2000], [0, 200]);
  
  // Handshake: Left and medium
  const xHandshake = useTransform(scrollY, [0, 2000], [0, -100]);
  const yHandshake = useTransform(scrollY, [0, 2000], [0, 100]);

  // Smile Easter Egg:
  const ySmile = useTransform(scrollY, [0, 2000], [0, 1000]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Cornell - Up and slowest */}
      <motion.img
        src="/icons/cornell.png"
        style={{ y: yCornell }}
        className="
          absolute
          left-[80%]
          top-[7%]
          w-[400px]
          opacity-[0.075]
          select-none
        "
        alt=""
      />

      {/* Belvedere - Down and fastest */}
      <motion.img
        src="/icons/belvedere.png"
        style={{ y: yBelvedere }}
        className="
          absolute
          left-[0%]
          top-[27%]
          w-[400px]
          opacity-[0.075]
          select-none
        "
        alt=""
      />

      {/* Handshake - Left and medium */}
      <motion.img
        src="/icons/handshake.png"
        style={{ x: xHandshake, y: yHandshake }}
        className="
          absolute
          left-[80%]
          top-[80%]
          w-[200px]
          opacity-[0.075]
          select-none
        "
        alt=""
      />

      {/* Smile Easter Egg */}
      <motion.img
        src="/images/smile.png"
        style={{ y: yBelvedere }}
        className="
          absolute
          left-1/2
          top-[72%]
          w-[100px]
          opacity-[0.05]
          select-none
          invert
        "
        alt=""
      />

    </div>
  );
}