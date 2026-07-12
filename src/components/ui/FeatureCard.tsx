"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_20px_50px_rgba(15,23,42,.05)] transition-all hover:border-emerald-500 hover:shadow-[0_35px_70px_rgba(15,23,42,.08)]"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 transition-all duration-300 group-hover:bg-emerald-600">
        <Icon
          size={30}
          className="text-emerald-700 transition-all group-hover:text-white"
        />
      </div>

      <h3 className="mt-8 text-3xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        {description}
      </p>

      <button className="mt-8 flex items-center gap-2 font-semibold text-emerald-700 transition-all duration-300 group-hover:gap-3">
        Learn More
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
}