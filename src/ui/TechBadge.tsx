"use client";

import { motion } from "framer-motion";

interface Props {
  name: string;
}

export default function TechBadge({ name }: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      whileHover={{
        scale: 1.08,
      }}
      className="
        rounded-full
        bg-white/80
        px-4
        py-2
        shadow-lg
        backdrop-blur-md
        text-sm
        font-semibold
      "
    >
      {name}
    </motion.div>
  );
}