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
    <div className="relative mx-auto aspect-square w-full max-w-[620px]">
      <div className="absolute inset-[4%] rounded-full border border-emerald-200/10" />
<div className="absolute inset-[15%] rounded-full border border-emerald-200/15" />
<div className="absolute inset-[27%] rounded-full border border-emerald-200/20" />

<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 34,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute inset-[10%] rounded-full border border-dashed border-emerald-200/20"
/>

<motion.div
  animate={{ rotate: -360 }}
  transition={{
    duration: 46,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute inset-[21%] rounded-full border border-dashed border-emerald-100/15"
/>



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
        className="absolute left-1/2 top-1/2 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-emerald-200/30 bg-emerald-300/10 text-center shadow-[0_0_95px_rgba(52,211,153,0.28)] backdrop-blur-xl"
      >
        <Bot className="text-emerald-200" size={42} />

<span className="mt-3 text-lg font-bold text-white">
  Digital Core
</span>

<span className="text-sm text-emerald-100">
  AI · Apps · Automation
</span>
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
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.07] px-4 py-3 text-white shadow-xl backdrop-blur-lg">
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