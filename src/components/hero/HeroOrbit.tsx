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
   <div className="relative mx-auto aspect-square w-full max-w-[610px]">
      {/* Static structural rings */}
<div className="absolute inset-[3%] rounded-full border border-emerald-300/10" />
<div className="absolute inset-[12%] rounded-full border border-emerald-300/18" />
<div className="absolute inset-[22%] rounded-full border border-emerald-300/22" />
<div className="absolute inset-[32%] rounded-full border border-emerald-200/25" />

{/* Rotating outer ring */}
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 38,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
    absolute inset-[7%]
    rounded-full
    border border-dashed border-emerald-300/30
  "
/>

{/* Rotating inner ring */}
<motion.div
  animate={{ rotate: -360 }}
  transition={{
    duration: 28,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
    absolute inset-[18%]
    rounded-full
    border border-dotted border-emerald-200/30
  "
/>
<motion.div
  animate={{
    scale: [1, 1.025, 1],
  }}
  transition={{
    duration: 3.8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute left-1/2 top-1/2
    flex h-52 w-52
    -translate-x-1/2 -translate-y-1/2
    items-center justify-center
    rounded-full
  "
>

{[
  { top: "8%", left: "56%", delay: 0 },
  { top: "29%", right: "3%", delay: 0.8 },
  { bottom: "8%", left: "55%", delay: 1.4 },
  { bottom: "25%", left: "6%", delay: 2 },
  { top: "35%", left: "1%", delay: 2.6 },
].map((node, index) => (
  <motion.span
    key={index}
    style={node}
    animate={{
      opacity: [0.35, 1, 0.35],
      scale: [0.8, 1.45, 0.8],
    }}
    transition={{
      duration: 2.8,
      delay: node.delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute h-2.5 w-2.5
      rounded-full
      bg-emerald-200
      shadow-[0_0_8px_rgba(110,231,183,1),0_0_20px_rgba(16,185,129,0.9)]
    "
  />
))}


  {/* Wide atmospheric glow */}
  <motion.div
    animate={{
      opacity: [0.35, 0.65, 0.35],
      scale: [0.96, 1.08, 0.96],
    }}
    transition={{
      duration: 3.8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute inset-[-36px]
      rounded-full
      bg-emerald-400/20
      blur-[36px]
    "
  />

  {/* Strong outer neon halo */}
  <div
    className="
      absolute inset-[-5px]
      rounded-full
      border-2 border-emerald-300
      shadow-[0_0_18px_rgba(110,231,183,0.95),0_0_48px_rgba(16,185,129,0.75),0_0_90px_rgba(16,185,129,0.38)]
    "
  />

  {/* Soft middle ring */}
  <div
    className="
      absolute inset-[7px]
      rounded-full
      border border-emerald-100/45
      shadow-[inset_0_0_36px_rgba(16,185,129,0.22)]
    "
  />

  {/* Core surface */}
  <div
    className="
      absolute inset-[14px]
      rounded-full
      border border-white/10
      bg-[radial-gradient(circle_at_50%_40%,rgba(52,211,153,0.23),rgba(5,46,34,0.88)_58%,rgba(1,20,16,0.98)_100%)]
      backdrop-blur-xl
    "
  />

  {/* Core content */}
  <div className="relative z-10 flex flex-col items-center text-center">
    <Bot
      size={44}
      strokeWidth={2}
      className="text-emerald-100 drop-shadow-[0_0_12px_rgba(110,231,183,0.9)]"
    />

    <span className="mt-4 text-xl font-bold tracking-tight text-white">
      Digital Core
    </span>

    <span className="mt-1 text-sm font-medium text-emerald-100/85">
      AI · Apps · Automation
    </span>
  </div>
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