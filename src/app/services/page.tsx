import type { Metadata } from "next";
import {
  Bot,
  Code2,
  LayoutDashboard,
  Megaphone,
  Palette,
  Smartphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import CTA from "@/components/home/CTA";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Services | ArchanaFreelancer Digital Solutions",
  description:
    "Website development, mobile applications, AI automation, custom business software, SEO, lead generation and UI/UX services.",
};

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Modern, responsive websites designed to build trust, generate enquiries and support business growth.",
    items: [
      "Corporate and business websites",
      "Landing pages",
      "E-commerce websites",
      "Website redesign",
      "Performance optimization",
      "Responsive development",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Customer-facing and internal mobile applications built around practical business requirements.",
    items: [
      "Flutter applications",
      "Android and iOS experiences",
      "Customer ordering apps",
      "Internal business apps",
      "Payment integration",
      "Admin and reporting modules",
    ],
  },
  {
    icon: Bot,
    title: "AI & Business Automation",
    description:
      "Intelligent workflows that reduce repetitive effort and improve operational efficiency.",
    items: [
      "AI assistants and chatbots",
      "Workflow automation",
      "WhatsApp automation",
      "CRM integrations",
      "Lead follow-up automation",
      "Custom AI-enabled tools",
    ],
  },
  {
    icon: Megaphone,
    title: "SEO & Lead Generation",
    description:
      "Practical digital growth initiatives focused on improving visibility and generating qualified opportunities.",
    items: [
      "Technical and on-page SEO",
      "Local SEO",
      "LinkedIn outreach",
      "Email outreach",
      "Lead generation campaigns",
      "Content strategy",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Custom Business Software",
    description:
      "Purpose-built digital systems for businesses that have outgrown spreadsheets and manual processes.",
    items: [
      "CRM solutions",
      "Admin dashboards",
      "Customer and staff portals",
      "Reporting systems",
      "Order-management tools",
      "Custom web applications",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX & Digital Consulting",
    description:
      "Clear interfaces and practical technology guidance built around users and business objectives.",
    items: [
      "Wireframes and prototypes",
      "Figma designs",
      "Responsive UI design",
      "User journeys",
      "Design systems",
      "Technology consultation",
    ],
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Flutter",
  "Node.js",
  "MongoDB",
  "AWS",
  "Firebase",
  "WordPress",
  "Elementor",
  "Razorpay",
  "Figma",
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#020d0b] via-[#052b21] to-[#071b17] py-20 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute right-[-10%] top-[-30%] h-[600px] w-[600px] rounded-full bg-emerald-400/10 blur-[150px]" />

          <Container className="relative z-10">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">
                Our Services
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                Digital solutions that
                <span className="block text-[#86efac]">
                  move business forward.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-emerald-50/75 sm:text-lg">
                From websites and mobile applications to AI automation,
                custom software and digital growth, every solution is planned
                around your business goals.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
  <Link
    href="/contact"
    className="inline-flex items-center gap-2 rounded-full bg-[#86efac] px-7 py-4 font-semibold text-[#052e22] transition hover:-translate-y-0.5 hover:bg-white"
  >
    Start Your Project
    <ArrowRight size={18} />
  </Link>

  <Link
    href="/#work"
    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#052e22]"
  >
    View Case Studies
  </Link>
</div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section className="bg-[#f7fcf9] py-20 lg:py-24">
          <Container>
            <SectionHeader
              eyebrow="WHAT WE OFFER"
              title="Technology built around"
              highlight="real business needs."
              description="Choose a focused solution or combine multiple capabilities into one integrated project."
            />

            <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {services.map(({ icon: Icon, title, description, items }) => (
                <article
                  key={title}
                  className="group rounded-[28px] border border-emerald-950/10 bg-white p-8 shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-[0_28px_70px_rgba(15,23,42,0.09)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-slate-950">
                    {title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-emerald-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-emerald-700 transition group-hover:gap-3"
                  >
                    Discuss This Service
                    <ArrowRight size={17} />
                  </a>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Technology */}
        <section className="bg-white py-20 lg:py-24">
          <Container>
            <SectionHeader
              eyebrow="TECHNOLOGY"
              title="Modern tools."
              highlight="Practical solutions."
              description="The technology is selected according to the project—not simply because it is fashionable."
              align="center"
            />

            <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-800"
                >
                  {technology}
                </span>
              ))}
            </div>
          </Container>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}