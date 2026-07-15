"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Palette,
  Code2,
  Rocket,
} from "lucide-react";

import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description:
      "We understand your business, goals, audience and challenges before proposing a solution.",
  },
  {
    number: "02",
    title: "Strategy",
    icon: Lightbulb,
    description:
      "We define the right technology, user experience and implementation roadmap.",
  },
  {
    number: "03",
    title: "Design",
    icon: Palette,
    description:
      "We create intuitive, responsive and visually engaging experiences that users enjoy.",
  },
  {
    number: "04",
    title: "Develop",
    icon: Code2,
    description:
      "We build fast, scalable websites, mobile apps and business solutions using modern technologies.",
  },
  {
    number: "05",
    title: "Launch",
    icon: Rocket,
    description:
      "We deploy, monitor and continue supporting your digital product after launch.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="OUR PROCESS"
          title="From Idea"
          highlight="to Launch"
          description="A structured approach that keeps every project transparent, collaborative and focused on business results."
          align="left"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl"
              >
                <span className="text-5xl font-bold text-emerald-100">
                  {step.number}
                </span>

                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 transition-all group-hover:bg-emerald-600">
                  <Icon
                    size={26}
                    className="text-emerald-700 transition-all group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}