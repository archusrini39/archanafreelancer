import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

import Container from "../ui/Container";

import {
 FaLinkedinIn,
 FaGithub,
 FaInstagram,
 FaFacebookF,
 FaYoutube,
} from "react-icons/fa";


import Image from "next/image";
const services = [
  "Web Development",
  "Mobile Applications",
  "AI & Automation",
  "UI / UX Design",
  "Business Solutions",
];

const company = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];


export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_0.85fr_1fr] lg:gap-12 lg:py-14">
          {/* Brand */}
          <div>
            <Image
              src="/logo-dark.png"
              alt="Archana S"
              width={165}
              height={52}
              className="h-11 w-auto object-contain"
            />

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
              Archana
              <span className="text-emerald-700">Freelancer</span>
            </h2>

            <p className="mt-1 font-medium text-emerald-700">
              Digital Solutions
            </p>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
              Helping businesses grow through websites, mobile applications,
              AI-powered automation and modern digital solutions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
    href="https://www.linkedin.com/in/archanas1981/"
    target="_blank"
    rel="noreferrer"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition hover:bg-emerald-600 hover:text-white"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://github.com/archusrini39"
    target="_blank"
    rel="noreferrer"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition hover:bg-emerald-600 hover:text-white"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.instagram.com/archusrini2025/"
    target="_blank"
    rel="noreferrer"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition hover:bg-emerald-600 hover:text-white"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.facebook.com/archana.srinivasan3/"
    target="_blank"
    rel="noreferrer"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition hover:bg-emerald-600 hover:text-white"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.youtube.com/@archanasrinivasan5215"
    target="_blank"
    rel="noreferrer"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition hover:bg-emerald-600 hover:text-white"
  >
    <FaYoutube />
  </a>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-slate-950">Services</h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-sm text-slate-600 transition hover:text-emerald-700"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-bold text-slate-950">Company</h3>

            <ul className="mt-5 space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-600 transition hover:text-emerald-700"
                  >
                    {item.label}
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-slate-950">Contact</h3>

            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <a
                href="mailto:ceo@archanafreelancer.com"
                className="flex items-start gap-3 transition hover:text-emerald-700"
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-emerald-700" />
                ceo@archanafreelancer.com
              </a>

              <a
                href="tel:+919952912004"
                className="flex items-center gap-3 transition hover:text-emerald-700"
              >
                <Phone size={17} className="shrink-0 text-emerald-700" />
                +91 9952912004
              </a>

              <p className="flex items-center gap-3">
                <MapPin size={17} className="shrink-0 text-emerald-700" />
                Chennai, India
              </p>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-700 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-700 hover:text-white"
            >
              Let&apos;s Work Together
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ArchanaFreelancer. All rights reserved.
          </p>

          <p>Designed &amp; Developed by Archana Srinivasan</p>
        </div>
      </Container>
    </footer>
  );
}
