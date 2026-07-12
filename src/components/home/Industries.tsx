"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";

const industries = [
  "Healthcare",
  "Recruitment",
  "Retail",
  "Education",
  "Technology",
];

export default function Industries() {
  return (
    <section className="bg-[#F7FCF9] py-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
            INDUSTRIES WE SERVE
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-4xl">
            Trusted Across Multiple Industries
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-md"
              >
                {industry}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}