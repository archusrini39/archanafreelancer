"use client";

import TechBadge from "./TechBadge";

import {
  Globe,
  Smartphone,
  Bot,
  Cloud,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-2xl rounded-[36px] border border-white/30 bg-white/70 p-10 shadow-2xl backdrop-blur-xl"
    >
      {/* Browser Header */}
      <div className="mb-8 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {/* Main Dashboard */}
      <div className="space-y-5">

        <div className="rounded-2xl bg-green-50 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="text-green-700" />
              <div>
                <h3 className="font-semibold">Enterprise Website</h3>
                <p className="text-sm text-slate-500">
                  Next.js • SEO Optimized
                </p>
              </div>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Live
            </span>
          </div>

          <div className="mt-5 h-2 rounded-full bg-slate-200">
            <motion.div
  initial={{ width: 0 }}
  animate={{ width: "96%" }}
  transition={{
    duration: 2,
  }}
  className="h-2 rounded-full bg-green-600"
/>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-2xl bg-slate-50 p-5">
            <Smartphone className="mb-4 text-green-700" />
            <h4 className="font-semibold">
              Flutter App
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              Android + iOS
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <Bot className="mb-4 text-green-700" />
            <h4 className="font-semibold">
              AI Assistant
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              Automation
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <Cloud className="mb-4 text-green-700" />
            <h4 className="font-semibold">
              AWS Cloud
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              Deployment
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <BarChart3 className="mb-4 text-green-700" />
            <h4 className="font-semibold">
              Analytics
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              Insights
            </p>
          </div>

        </div>
      </div>
      <TechBadge name="Next.js" />


      <div className="absolute -top-10 left-20">
  <TechBadge name="React" />
</div>

<div className="absolute -bottom-8 left-10">
  <TechBadge name="Flutter" />
</div>

<div className="absolute top-24 -right-12">
  <TechBadge name="AWS" />
</div>

<div className="absolute bottom-12 -right-8">
  <TechBadge name="AI" />
</div>

      {/* Floating Badge */}

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute -right-6 -top-6 rounded-2xl bg-green-600 p-4 text-white shadow-xl"
      >
        <ShieldCheck size={30} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute -left-6 bottom-10 rounded-2xl bg-white p-4 shadow-xl"
      >
        <BarChart3 className="text-green-700" />
      </motion.div>
    </motion.div>
  );
}