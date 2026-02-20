"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HomepageBackground() {
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 2000], [0, 150]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Logo */}
      <motion.img
        src="/images/CBlogo.png"
        style={{ 
          y: ySlow,
          left: "50%",
          top: "50%",
          x: "-50%",
        }}
        className="absolute w-[600px] opacity-[0.05] select-none pointer-events-none -translate-y-1/2"
        alt=""
      />

    </div>
  );
}
