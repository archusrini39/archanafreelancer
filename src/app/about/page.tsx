import type { Metadata } from "next";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MessageSquare,
  Rocket,
  Target,
} from "lucide-react";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import CTA from "@/components/home/CTA";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About | ArchanaFreelancer Digital Solutions",
  description:
    "Learn about Archana Srinivasan, the founder and director of ArchanaFreelancer Digital Solutions, her business development experience, technical expertise and approach to delivering digital solutions.",
};

const experience = [
  {
    period: "2024 – Present",
    role: "Founder and Director",
    company: "ArchanaFreelancer Digital Solutions",
    description:
      "Working directly with businesses to design and deliver websites, mobile applications, SEO strategies, automation solutions and digital growth initiatives.",
  },
  {
    period: "2025 – 2026",
    role: "Business Development Manager",
    company: "Adomita Technologies",
    description:
      "Handled business development activities, client conversations, opportunity generation and solution-focused sales for technology services.",
  },
  {
    period: "2024 – 2025",
    role: "Sales Manager",
    company: "GeniSights",
    description:
      "Worked in a technology-focused sales environment, presenting AI and analytics solutions and supporting business growth initiatives.",
  },
  {
    period: "2023 – 2024",
    role: "Executive",
    company: "Bahwan CyberTek",
    description:
      "Gained experience working within an established technology organization and collaborating across business and technical teams.",
  },
];

const skills = [
  "Business Development",
  "Consultative Selling",
  "Client Relationship Management",
  "Requirement Gathering",
  "Website Development",
  "Next.js",
  "React",
  "Flutter",
  "Node.js",
  "MongoDB",
  "WordPress",
  "Elementor",
  "AWS",
  "SEO",
  "Lead Generation",
  "AI Automation",
  "UI/UX",
  "Project Management",
];

const values = [
  {
    icon: Target,
    title: "Business-First Thinking",
    description:
      "Every recommendation begins with the business objective, customer need and expected outcome.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "Clients receive transparent updates, realistic timelines and straightforward explanations.",
  },
  {
    icon: Lightbulb,
    title: "Practical Innovation",
    description:
      "Modern technology is used where it creates real value—not simply because it is fashionable.",
  },
  {
    icon: Code2,
    title: "End-to-End Ownership",
    description:
      "Projects are supported from initial discussions and planning through development, launch and improvement.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Relationships",
    description:
      "The goal is to become a dependable technology and growth partner, not merely complete a single assignment.",
  },
  {
    icon: Rocket,
    title: "Growth-Focused Delivery",
    description:
      "Digital solutions are designed to support enquiries, customer experience, efficiency and business scalability.",
  },
];

const approach = [
  "Understand the business before recommending technology",
  "Set clear expectations for scope, timeline and deliverables",
  "Design for real customers and practical use cases",
  "Build responsive and maintainable digital products",
  "Support clients beyond the initial launch",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#020d0b] via-[#052b21] to-[#071b17] py-20 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -right-40 -top-52 h-[650px] w-[650px] rounded-full bg-emerald-400/10 blur-[160px]" />

          <div className="pointer-events-none absolute -bottom-52 -left-40 h-[520px] w-[520px] rounded-full bg-teal-300/10 blur-[150px]" />

          <Container className="relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">
                  About ArchanaFreelancer
                </p>

                <h1 className="mt-5 text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                  Bridging business
                  <span className="block text-[#86efac]">
                    and technology.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-emerald-50/75 sm:text-lg">
                  I help growing businesses understand, plan and implement
                  digital solutions that strengthen their presence, improve
                  customer experience and support long-term growth.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#86efac] px-7 py-4 font-semibold text-[#052e22] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Work With Me
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#052e22]"
                  >
                    View My Work
                  </Link>
                </div>
              </div>

              {/* PROFILE PANEL */}
              <div className="relative">
                <div className="absolute inset-8 rounded-full bg-emerald-300/15 blur-[80px]" />

                <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.08] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-9">
                  <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-emerald-200/25 bg-emerald-300/10 text-4xl font-bold text-emerald-100">
                    AS
                  </div>

                  <h2 className="mt-7 text-3xl font-bold text-white">
                    Archana Srinivasan
                  </h2>

                  <p className="mt-2 font-medium text-emerald-200">
                    Founder and Director · Business Development Professional · Digital
                    Solutions Consultant
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                      <BriefcaseBusiness className="text-emerald-200" size={24} />

                      <p className="mt-4 text-2xl font-bold text-white">12+</p>

                      <p className="mt-1 text-sm text-emerald-50/65">
                        Years of Technology Business Development Experience
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                      <GraduationCap className="text-emerald-200" size={24} />

                      <p className="mt-4 text-2xl font-bold text-white">
                        BE + MBA
                      </p>

                      <p className="mt-1 text-sm text-emerald-50/65">
                        Technology and sales education
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* STORY */}
        <section className="bg-[#f7fcf9] py-20 lg:py-24">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <SectionHeader
                eyebrow="MY STORY"
                title="Built from experience in"
                highlight="business and technology."
                description="ArchanaFreelancer was created to give growing businesses access to practical, modern and business-focused digital solutions."
              />

              <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  My professional journey began with an engineering education
                  and later expanded into sales, marketing and business
                  development through an MBA in Sales and Marketing.
                </p>

                <p>
                  Working with technology companies helped me understand both
                  sides of a digital project: the business conversations that
                  create an opportunity and the technical execution needed to
                  deliver a useful solution.
                </p>

                <p>
                  Through ArchanaFreelancer, I now work directly with business
                  owners to understand their goals, identify the right digital
                  approach and deliver websites, mobile applications, SEO
                  initiatives and automation solutions.
                </p>

                <p>
                  My experience with projects such as Sinara Global, the Ambika
                  Shopping App and Medlance has strengthened my ability to
                  manage requirements, communicate with clients and turn ideas
                  into working digital products.
                </p>

                <p className="font-semibold text-slate-900">
                  The objective is simple: make technology understandable,
                  useful and valuable for the business adopting it.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* EXPERIENCE */}
        <section className="bg-white py-20 lg:py-24">
          <Container>
            <SectionHeader
              eyebrow="EXPERIENCE"
              title="A journey across"
              highlight="business development and digital delivery."
              description="Corporate experience and direct client work have shaped a practical, consultative approach to technology projects."
              align="center"
            />

            <div className="mx-auto mt-14 max-w-5xl">
              {experience.map((item, index) => (
                <article
                  key={`${item.company}-${item.period}`}
                  className="relative grid gap-5 border-l border-emerald-200 pb-10 pl-8 last:pb-0 sm:grid-cols-[160px_1fr] sm:gap-8 sm:pl-10"
                >
                  <div className="absolute -left-[7px] top-1 h-[13px] w-[13px] rounded-full border-[3px] border-white bg-emerald-600 shadow-[0_0_0_1px_rgba(5,150,105,0.25)]" />

                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    {item.period}
                  </p>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">
                      {item.role}
                    </h3>

                    <p className="mt-1 font-semibold text-emerald-700">
                      {item.company}
                    </p>

                    <p className="mt-4 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* SKILLS */}
        <section className="bg-[#f7fcf9] py-20 lg:py-24">
          <Container>
            <SectionHeader
              eyebrow="CAPABILITIES"
              title="Business understanding."
              highlight="Technical execution."
              description="A combined skill set that supports both client conversations and digital product delivery."
              align="center"
            />

            <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Container>
        </section>

        {/* VALUES */}
        <section className="bg-white py-20 lg:py-24">
          <Container>
            <SectionHeader
              eyebrow="WHY WORK WITH ME"
              title="A dependable approach to"
              highlight="digital projects."
              description="Projects are handled with clarity, ownership and a strong focus on creating value for the business."
            />

            <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {values.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-[0_28px_70px_rgba(15,23,42,0.09)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* APPROACH */}
        <section className="bg-[#f7fcf9] py-20 lg:py-24">
          <Container>
            <div className="grid items-center gap-12 rounded-[32px] border border-emerald-950/10 bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.06)] sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  My Approach
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl">
                  Clear thinking before
                  <span className="block text-emerald-700">
                    technical execution.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-slate-600">
                  A successful project begins with the right questions,
                  realistic planning and a shared understanding of what the
                  solution needs to achieve.
                </p>
              </div>

              <ul className="space-y-4">
                {approach.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f7fcf9] p-4 text-slate-700"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />

                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}