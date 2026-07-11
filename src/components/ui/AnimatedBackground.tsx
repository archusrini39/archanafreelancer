"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      {/* Large Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-green-200 blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-green-100 blur-[180px]"
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-10
          bg-[linear-gradient(to_right,#22c55e20_1px,transparent_1px),linear-gradient(to_bottom,#22c55e20_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />
    </>
  );
}