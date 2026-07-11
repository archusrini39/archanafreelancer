"use client";

import { ArrowRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import HeroOrbit from "../hero/HeroOrbit";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#062b22]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(52,211,153,0.18),transparent_34%)]" />

      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:54px_54px]" />

      <Container className="relative z-10">
        <div className="grid min-h-[690px] items-center gap-12 pb-24 pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:pb-28 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[650px]"
          >
            <div className="mb-7 inline-flex rounded-full border border-emerald-200/20 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 backdrop-blur-lg">
              Technology Partner for Growing Businesses
            </div>

            <h1 className="text-[46px] font-bold leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl lg:text-[72px]">
              Helping businesses
              <span className="block text-[#86efac]">
                grow with AI &
              </span>
              <span className="block text-[#86efac]">
                digital innovation.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-emerald-50/75 sm:text-lg">
              We build premium websites, mobile applications, AI-powered
              solutions and business automation systems that help growing
              companies attract customers, improve operations and scale with
              confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#86efac] px-6 py-3.5 font-semibold text-[#052e22] transition hover:-translate-y-0.5 hover:bg-white"
              >
                <CalendarDays size={19} />
                Book a Free Consultation
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#052e22]"
              >
                View Portfolio
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-emerald-50/65">
              <span>Websites</span>
              <span>Mobile Apps</span>
              <span>AI Solutions</span>
              <span>Automation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <HeroOrbit />
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 115"
          preserveAspectRatio="none"
          className="block h-[70px] w-full sm:h-[90px] lg:h-[115px]"
          aria-hidden="true"
        >
          <path
            d="M0,88 C280,132 560,18 850,61 C1080,95 1260,116 1440,60 L1440,115 L0,115 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}