"use client";

import { ArrowRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import HeroOrbit from "../hero/HeroOrbit";

import SpaceBackground from "../hero/SpaceBackground";

export default function Hero() {
  return (
    
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020d0b] via-[#052b21] to-[#071b17]">
  <SpaceBackground />

  <Container className="relative z-10">
    {/* hero content */}
  

 
      <div
  className="absolute inset-0 opacity-[0.025]
  bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
  bg-[size:64px_64px]"
/>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />

      <Container className="relative z-10">
        <div className="grid min-h-[700px] items-center gap-12 pb-36 pt-14 lg:grid-cols-[0.92fr_1.08fr] lg:pb-44 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[650px]"
          >
            <div className="mb-7 inline-flex rounded-full border border-emerald-200/20 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 backdrop-blur-lg">
              Technology Partner for Growing Businesses
            </div>

            <h1 className="text-[46px] font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-[68px] xl:text-[76px]">
              Helping businesses
              <span className="block text-[#86efac]">
                grow with AI &
              </span>
              <span className="block text-[#86efac]">
                digital innovation.
              </span>
            </h1>

            <p className="mt-7 max-w-[535px] text-base leading-8 text-emerald-50/75 sm:text-lg">
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
      <div className="absolute bottom-[38px] left-0 w-full opacity-60 sm:bottom-[48px] lg:bottom-[60px]">
  <svg
    viewBox="0 0 1440 70"
    preserveAspectRatio="none"
    className="block h-[45px] w-full lg:h-[65px]"
    aria-hidden="true"
  >
    <path
      d="M0,45 C230,90 470,66 690,35 C900,6 1030,20 1180,42 C1300,60 1380,53 1440,38"
      fill="none"
      stroke="rgba(134,239,172,0.45)"
      strokeWidth="3"
    />
  </svg>
</div>

      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 140"
    preserveAspectRatio="none"
    className="block h-[90px] w-full sm:h-[115px] lg:h-[140px]"
    aria-hidden="true"
  >
    <path
      d="M0,72 C210,135 430,126 640,86 C840,48 960,29 1140,64 C1260,89 1360,86 1440,58 L1440,140 L0,140 Z"
      fill="#eaf8f1"
    />
  </svg>
</div>




      </Container>



      {/* Layered wave transition */}
<div className="pointer-events-none absolute bottom-[-1px] left-0 z-20 w-full">
  {/* Glowing upper line */}
  <svg
    viewBox="0 0 1440 135"
    preserveAspectRatio="none"
    className="absolute bottom-[8px] left-0 h-[105px] w-full sm:h-[125px] lg:h-[145px]"
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
      stroke="rgba(52,211,153,0.85)"
      strokeWidth="3"
      className="drop-shadow-[0_0_8px_rgba(52,211,153,0.65)]"
    />
  </svg>

  {/* Subtle secondary contour */}
  <svg
    viewBox="0 0 1440 135"
    preserveAspectRatio="none"
    className="absolute bottom-[2px] left-0 h-[100px] w-full opacity-60 sm:h-[120px] lg:h-[140px]"
    aria-hidden="true"
  >
    <path
      d="
        M0,70
        C185,128 360,126 540,90
        C730,51 875,28 1050,70
        C1210,108 1330,104 1440,63
      "
      fill="none"
      stroke="rgba(167,243,208,0.55)"
      strokeWidth="2"
    />
  </svg>

  {/* Main mint fill */}
  <svg
    viewBox="0 0 1440 135"
    preserveAspectRatio="none"
    className="relative block h-[92px] w-full sm:h-[115px] lg:h-[135px]"
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