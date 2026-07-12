"use client";

import { TrendingUp, Cpu, Rocket } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import FeatureCard from "../ui/FeatureCard";

const cards = [
  {
    icon: TrendingUp,
    title: "Grow Revenue",
    description:
      "Create digital experiences that generate quality leads, increase conversions and help your business grow.",
  },
  {
    icon: Cpu,
    title: "Improve Operations",
    description:
      "Automate repetitive work with AI, custom software and intelligent workflows that improve efficiency.",
  },
  {
    icon: Rocket,
    title: "Scale With Confidence",
    description:
      "Build secure websites, mobile apps and cloud solutions that grow alongside your business.",
  },
];

export default function BusinessOutcomes() {
  return (
    <section className="bg-[#F7FCF9] py-28">
      <Container>
        <SectionHeader
          eyebrow="WHAT WE HELP YOU ACHIEVE"
          title="Helping Businesses"
          highlight="Grow Through Technology."
          description="We combine strategy, design and technology to help businesses attract customers, improve operations and scale with confidence."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-20 grid gap-8 lg:grid-cols-3"
        >
          {cards.map((card) => (
            <FeatureCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}