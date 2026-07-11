"use client";

import HeroDashboard from "../ui/HeroDashboard";
import AnimatedBackground from "../ui/AnimatedBackground";

import {CheckCircle} from "lucide-react";
import { motion } from "framer-motion";

//import Container from "../ui/Container";
import Button from "../ui/Button";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white py-28 lg:py-36">
       <AnimatedBackground />
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
🚀 Technology Consulting for Ambitious Businesses
</div>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 lg:text-7xl">
  Helping Businesses
  <br />
  <span className="text-green-700">
    Build.
    <br />
    Scale.
    <br />
    Transform.
  </span>
  <br />
  Through Technology.
</h1>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-600">
              We build enterprise websites, mobile apps, AI-powered software, and business automation solutions that help startups and growing businesses scale with confidence.
            </p>

            <div className="mb-10 flex flex-wrap gap-4">
              <Button>
                Book a Strategy Call
              </Button>

              <button
  className="
  rounded-xl
  border
  border-slate-300
  px-6
  py-3
  font-medium
  transition
  hover:border-green-700
  hover:bg-green-50
"
>
  Explore Our Work →
</button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-700" size={18} />
                <span>Web Development</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-700" size={18} />
                <span>Mobile Apps</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-700" size={18} />
                <span>AI Solutions</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-700" size={18} />
                <span>Business Automation</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  className="flex justify-center"
>
  <HeroDashboard />
</motion.div>
    
        </div>
      
    </section>
  );
}