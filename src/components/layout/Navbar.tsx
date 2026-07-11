"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "../ui/Container";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-slate-100 bg-white">
      <Container>
        <nav className="flex h-[76px] items-center justify-between">
          <a href="#" className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-950">
              ArchanaFreelancer
            </span>

            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-700">
              Technology · AI · Growth
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-emerald-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#work"
              className="text-sm font-semibold text-slate-700 transition hover:text-emerald-700"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Book a Consultation
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="rounded-lg p-2 text-slate-800 lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-slate-100 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-medium text-slate-700"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                className="mt-2 rounded-full bg-emerald-700 px-5 py-3 text-center font-semibold text-white"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}