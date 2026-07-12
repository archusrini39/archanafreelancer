"use client";

import { motion } from "framer-motion";

interface FloatingCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export default function FloatingCard({
  title,
  subtitle,
  icon,
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
      }}
      className="
      rounded-3xl
      border
      border-white/40
      bg-white/70
      p-6
      shadow-2xl
      backdrop-blur-xl
      "
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {subtitle}
      </p>

      <div className="mt-5 h-2 w-full rounded-full bg-slate-200">
        <div className="h-2 w-[90%] rounded-full bg-green-600"></div>
      </div>
    </motion.div>
  );
}