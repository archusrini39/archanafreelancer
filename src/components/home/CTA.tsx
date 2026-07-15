"use client";

import { ArrowRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import SpaceBackground from "../hero/SpaceBackground";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#020d0b] via-[#052b21] to-[#071b17] py-20 sm:py-20 lg:py-24"
    >
      <SpaceBackground />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">
            Let&apos;s Work Together
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
            Ready to build your next
            <span className="block text-[#86efac]">
              digital success story?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-emerald-50/75 sm:text-lg">
            Whether you need a high-performing website, mobile application,
            AI-powered solution or business automation system, let&apos;s
            discuss how technology can support your next stage of growth.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://calendly.com/archusrini81/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#86efac] px-7 py-4 font-semibold text-[#052e22] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(134,239,172,0.2)] sm:w-auto"
            >
              <CalendarDays size={19} />
              Book a Strategy Call
            </a>

            <a
              href="#work"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#052e22] sm:w-auto"
            >
              Explore Our Work
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-emerald-50/55">
            <span>Free initial consultation</span>
            <span>Transparent project planning</span>
            <span>Long-term support</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}