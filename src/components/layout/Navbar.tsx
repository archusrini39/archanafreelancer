"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Container from "../ui/Container";

const links = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/92 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/85 backdrop-blur-lg"
      }`}
    >
      <Container>
        <nav className="flex h-[68px] items-center justify-between">
          <Link
            href="/"
            aria-label="ArchanaFreelancer home"
            className="flex shrink-0 items-center"
            onClick={closeMenu}
          >
            <Image
              src="/logo-dark.png"
              alt="ArchanaFreelancer logo"
              width={145}
              height={48}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-emerald-700 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-emerald-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#work"
              className="text-sm font-semibold text-slate-700 transition-colors duration-300 hover:text-emerald-700"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg"
            >
              Book a Consultation
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="rounded-xl border border-slate-200 p-2 text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-100 py-5">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#work"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-emerald-700"
              >
                View Portfolio
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-full bg-emerald-700 px-5 py-3.5 text-center font-semibold text-white transition hover:bg-emerald-800"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}