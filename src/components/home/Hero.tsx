"use client";

import {
  ArrowRight,
  Bot,
  CalendarDays,
  Globe2,
  Settings2,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import HeroOrbit from "../hero/HeroOrbit";
import SpaceBackground from "../hero/SpaceBackground";

const mobileServices = [
  {
    title: "Websites",
    description: "Modern websites built to attract and convert customers.",
    icon: Globe2,
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform applications designed for business growth.",
    icon: Smartphone,
  },
  {
    title: "AI Solutions",
    description: "Intelligent solutions that improve speed and efficiency.",
    icon: Bot,
  },
  {
    title: "Automation",
    description: "Workflows that reduce manual effort and save time.",
    icon: Settings2,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020d0b] via-[#052b21] to-[#071b17]">
      <SpaceBackground />

      {/* Subtle grid */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.018]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:64px_64px]
        "
      />

      {/* Bottom vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />

      <Container className="relative z-10">
        <div
          className="
            grid items-center gap-10
            pb-28 pt-12
            sm:pb-32 sm:pt-16
            lg:min-h-[90vh] lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-12 lg:pb-40 lg:pt-16
          "
        >
          {/* Hero copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <div
              className="
                mb-5 inline-flex rounded-full
                border border-emerald-200/20
                bg-white/[0.08]
                px-4 py-2
                text-xs font-semibold text-emerald-100
                backdrop-blur-lg
                sm:mb-7 sm:text-sm
              "
            >
              Digital Solutions That Drive Growth
            </div>

            <h1
              className="
                max-w-[760px]
                text-[40px] font-bold leading-[1.06]
                tracking-[-0.045em] text-white
                sm:text-6xl
                lg:text-[68px]
                xl:text-[76px]
              "
            >
              Building digital solutions
              <span className="block text-[#86efac]">
                that drive real growth.
              </span>
            </h1>

            <p
              className="
                mt-6 max-w-[555px]
                text-base leading-7 text-emerald-50/75
                sm:mt-7 sm:text-lg sm:leading-8
              "
            >
              Websites, mobile apps, AI-powered solutions and automation
              systems that help businesses attract customers, improve
              operations and scale with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#contact"
                className="
                  inline-flex w-full items-center justify-center gap-2
                  rounded-full bg-[#86efac]
                  px-6 py-3.5 font-semibold text-[#052e22]
                  transition duration-300
                  hover:-translate-y-0.5 hover:bg-white hover:shadow-lg
                  sm:w-auto
                "
              >
                <CalendarDays size={19} />
                Book a Free Consultation
              </a>

              <a
                href="#work"
                className="
                  inline-flex w-full items-center justify-center gap-2
                  rounded-full border border-white/25
                  px-6 py-3.5 font-semibold text-white
                  transition duration-300
                  hover:-translate-y-0.5 hover:border-white
                  hover:bg-white hover:text-[#052e22]
                  sm:w-auto
                "
              >
                View Portfolio
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Desktop capability labels */}
            <div className="mt-9 hidden flex-wrap gap-x-8 gap-y-3 text-sm text-emerald-50/65 sm:flex">
              <span>Websites</span>
              <span>Mobile Apps</span>
              <span>AI Solutions</span>
              <span>Automation</span>
            </div>
          </motion.div>

          {/* Desktop orbit only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="hidden items-center justify-center lg:flex"
          >
            <HeroOrbit />
          </motion.div>

          {/* Mobile service cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 gap-3 min-[390px]:grid-cols-2 lg:hidden"
            >
            {mobileServices.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="
                  min-h-[190px] rounded-[22px]
                  border border-white/10
                  bg-white/[0.07]
                  p-5 text-white
                  shadow-[0_18px_50px_rgba(0,0,0,0.16)]
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl border border-emerald-200/20
                    bg-emerald-300/10 text-emerald-200
                  "
                >
                  <Icon size={22} />
                </div>

                <h2 className="mt-5 text-lg font-bold">{title}</h2>

                <p className="mt-2 text-sm leading-6 text-emerald-50/65">
                  {description}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Single layered wave */}
      <div className="pointer-events-none absolute bottom-[-1px] left-0 z-20 w-full">
        <svg
          viewBox="0 0 1440 135"
          preserveAspectRatio="none"
          className="absolute bottom-[4px] left-0 h-[80px] w-full sm:h-[105px] lg:h-[135px]"
          aria-hidden="true"
        >
          <path
            d="
              M0,63
              C180,122 355,119 532,82
              C730,41 857,21 1040,61
              C1210,98 1330,97 1440,55
            "
            fill="none"
            stroke="rgba(52,211,153,0.72)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"
          />
        </svg>

        <svg
          viewBox="0 0 1440 135"
          preserveAspectRatio="none"
          className="relative block h-[72px] w-full sm:h-[95px] lg:h-[125px]"
          aria-hidden="true"
        >
          <path
            d="
              M0,72
              C185,132 365,130 545,92
              C735,52 875,32 1052,72
              C1215,109 1333,107 1440,65
              L1440,135
              L0,135
              Z
            "
            fill="#eaf8f1"
          />
        </svg>
      </div>
    </section>
  );
}