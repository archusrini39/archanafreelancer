"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-4xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
          {eyebrow}
        </p>
      )}

      <h2 className="text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-900 lg:text-7xl">
        {title}

        {highlight && (
          <span className="block text-emerald-700">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </motion.div>
  );
}