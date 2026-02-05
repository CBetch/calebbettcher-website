"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HomepageBackground() {
  const { scrollY } = useScroll();

  // Different speeds = depth illusion
  const ySlow = useTransform(scrollY, [0, 2000], [0, 150]);
  const ySlower = useTransform(scrollY, [0, 2000], [0, -120]);
  const rotate = useTransform(scrollY, [0, 2000], [0, 8]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Logo */}
      <motion.img
        src="CBlogo.png"
        style={{ y: ySlow }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          opacity-[0.05]
          select-none
          pointer-events-none
        "
        alt=""
      />

    </div>
  );
}
