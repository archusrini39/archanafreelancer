"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white py-24">
        <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-green-200 blur-[130px] opacity-40"></div>

<div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-100 blur-[160px] opacity-50"></div>
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-700">
              Digital Transformation • AI • Software Development
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
              Helping Businesses Build,
              <span className="text-green-700"> Scale & Transform </span>
              Through Technology
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-600">
              We design and develop modern websites, enterprise applications,
              mobile apps and AI-powered business solutions that accelerate
              growth and improve customer experience.
            </p>

            <div className="mb-10 flex flex-wrap gap-4">
              <Button>
                Book Free Consultation
              </Button>

              <button className="flex items-center gap-2 rounded-xl border border-green-700 px-6 py-3 font-medium text-green-700 transition hover:bg-green-700 hover:text-white">
                View Portfolio
                <ArrowRight size={18} />
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
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="flex h-[500px] w-full max-w-lg items-center justify-center rounded-3xl border border-green-200 bg-white shadow-2xl">
              <div className="text-center">
                <div className="mb-4 text-7xl">💻</div>
                <h3 className="text-2xl font-bold">
                  Premium Digital Solutions
                </h3>

                <p className="mt-4 px-8 text-slate-500">
                  Modern Websites • Enterprise Software • Mobile Apps • AI
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}