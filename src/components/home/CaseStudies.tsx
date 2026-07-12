"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";
import DeviceFrame from "../ui/DeviceFrame";

const featuredProject = {
  title: "Sinara Global",
  category: "Corporate Website",
  image: "/projects/sinara-home.png",
  businessNeed:
    "Build a modern corporate website that reflects the company’s professionalism and supports conversations with clients and investors.",
  approach:
    "Designed and developed a responsive website with clearer messaging, intuitive navigation and a refined corporate visual identity.",
  impact: [
    "Professional corporate presentation",
    "Responsive across devices",
    "SEO-friendly page structure",
    "Clearer presentation of services",
  ],
  technologies: ["WordPress", "Elementor", "SEO", "Responsive Design"],
  url: "https://sinaraglobal.com",
};

const supportingProjects = [
  {
    title: "Ambika Shopping App",
    category: "Flutter Commerce Platform",
    image: "/projects/ambika-home.png",
    description:
      "A mobile shopping experience with product browsing, online payments, WhatsApp ordering, customer profiles and order history.",
    highlights: [
      "Online ordering",
      "Razorpay payments",
      "WhatsApp integration",
      "Customer accounts",
    ],
    technologies: ["Flutter", "Node.js", "MongoDB", "AWS", "Razorpay"],
    url: "",
    cta: "View Case Study",
  },
  {
    title: "Medlance",
    category: "Medical Learning Platform",
    image: "/projects/medlance-home.png",
    description:
      "A responsive educational website that helps medical students discover relevant courses and learning opportunities.",
    highlights: [
      "Course discovery",
      "Student-focused experience",
      "Mobile responsiveness",
      "Clear content structure",
    ],
    technologies: ["WordPress", "UI/UX", "SEO", "Responsive Design"],
    url: "https://medlance.in",
    cta: "Visit Website",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[26rem] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-100/50 blur-[150px]" />

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="CASE STUDIES"
          title="Selected"
          highlight="Work"
          description="Real business challenges solved through thoughtful design, modern technology and a clear focus on user experience."
          align="left"
        />

        {/* Featured project */}
        <motion.article
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-[32px] border border-emerald-950/10 bg-[#f7fcf9] shadow-[0_30px_90px_rgba(15,23,42,0.07)] sm:mt-20"
        >
          <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:p-14">
            <motion.div
              whileHover={{ y: -5, rotateX: 1.5, rotateY: -1.5 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-8 rounded-full bg-emerald-300/25 blur-[70px]" />

              <DeviceFrame>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={featuredProject.image}
                    alt={`${featuredProject.title} website homepage`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-top"
                    priority={false}
                  />
                </div>
              </DeviceFrame>
            </motion.div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Featured Case Study · {featuredProject.category}
              </p>

              <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                {featuredProject.title}
              </h3>

              <div className="mt-8 space-y-7">
                <div>
                  <h4 className="text-base font-semibold text-slate-950">
                    Client Challenge
                  </h4>
                  <p className="mt-2 leading-7 text-slate-600">
                    {featuredProject.businessNeed}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-slate-950">
                    Our Solution
                  </h4>
                  <p className="mt-2 leading-7 text-slate-600">
                    {featuredProject.approach}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-slate-950">
                    Business Impact
                  </h4>

                  <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                    {featuredProject.impact.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-emerald-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {featuredProject.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>

              <a
                href={featuredProject.url}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg"
              >
                View Live Website
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </motion.article>

        {/* Supporting projects */}
        <div className="mt-20 sm:mt-24">
          <div className="mb-9 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                More Projects
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Different industries. Focused solutions.
              </h3>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {supportingProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-[0_30px_80px_rgba(15,23,42,0.1)]"
              >
                <div className="bg-[#f7fcf9] p-5 sm:p-7">
                  <DeviceFrame>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                      />
                    </div>
                  </DeviceFrame>
                </div>

                <div className="p-7 sm:p-9">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                    {project.category}
                  </p>

                  <h4 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                    {project.title}
                  </h4>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-emerald-600"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition group-hover:gap-3"
                    >
                      {project.cta}
                      <ArrowUpRight size={18} />
                    </a>
                  ) : (
                    <a
                      href="/case-studies/ambika-shopping-app"
                      className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition group-hover:gap-3"
                    >
                      {project.cta}
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}