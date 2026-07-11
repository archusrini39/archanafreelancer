"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  size: index % 6 === 0 ? 2.5 : index % 3 === 0 ? 1.5 : 1,
  delay: (index % 9) * 0.4,
  duration: 4 + (index % 4),
}));

export default function SpaceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Nebula glows */}
      <div className="absolute -right-44 -top-52 h-[720px] w-[720px] rounded-full bg-emerald-400/10 blur-[170px]" />

      <div className="absolute -bottom-60 -left-44 h-[560px] w-[560px] rounded-full bg-teal-300/8 blur-[155px]" />

      <div className="absolute left-[38%] top-[20%] h-[360px] w-[360px] rounded-full bg-green-300/6 blur-[130px]" />

      {/* Soft particles */}
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-emerald-100"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.08, 0.34, 0.08],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Extremely light grid */}
      <div className="absolute inset-0 opacity-[0.012] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:76px_76px]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
    </div>
  );
}