"use client";

import { motion } from "framer-motion";
import {
  Bot,
  ChartNoAxesCombined,
  Cloud,
  CodeXml,
  Smartphone,
} from "lucide-react";

const orbitItems = [
  {
    label: "Websites",
    icon: CodeXml,
    position: "left-[4%] top-[18%]",
    delay: 0,
  },
  {
    label: "Mobile Apps",
    icon: Smartphone,
    position: "right-[4%] top-[22%]",
    delay: 0.5,
  },
  {
    label: "Cloud",
    icon: Cloud,
    position: "left-[8%] bottom-[12%]",
    delay: 1,
  },
  {
    label: "Business Growth",
    icon: ChartNoAxesCombined,
    position: "right-[2%] bottom-[14%]",
    delay: 1.5,
  },
];

export default function HeroOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div className="absolute inset-[7%] rounded-full border border-emerald-300/20" />
      <div className="absolute inset-[18%] rounded-full border border-emerald-300/25" />
      <div className="absolute inset-[29%] rounded-full border border-emerald-300/30" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[12%] rounded-full border border-dashed border-emerald-300/30"
      />

      <motion.div
        animate={{
          scale: [1, 1.07, 1],
          boxShadow: [
            "0 0 45px rgba(52,211,153,0.25)",
            "0 0 85px rgba(52,211,153,0.5)",
            "0 0 45px rgba(52,211,153,0.25)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-emerald-200/40 bg-emerald-400/15 text-center backdrop-blur-xl"
      >
        <Bot className="text-emerald-200" size={42} />

        <span className="mt-3 text-lg font-bold text-white">AI-Powered</span>

        <span className="text-sm text-emerald-100">Digital Growth</span>
      </motion.div>

      {orbitItems.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${item.position}`}
          >
            <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white shadow-2xl backdrop-blur-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-300/15 text-emerald-200">
                <Icon size={19} />
              </span>

              <span className="whitespace-nowrap text-sm font-semibold">
                {item.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}