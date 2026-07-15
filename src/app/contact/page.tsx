import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import CTA from "@/components/home/CTA";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Contact | ArchanaFreelancer Digital Solutions",
  description:
    "Let's discuss your website, mobile app, AI automation or digital transformation project.",
};

const faqs = [
  {
    q: "How long does a website project take?",
    a: "Most business websites take between 2–6 weeks depending on complexity and content readiness.",
  },
  {
    q: "Do you develop mobile applications?",
    a: "Yes. Flutter applications for Android and iOS along with supporting backend systems.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Absolutely. Website modernization and performance improvements are one of our core services.",
  },
  {
    q: "Do you provide SEO?",
    a: "Yes. We offer technical SEO, on-page optimization and lead generation strategies.",
  },
  {
    q: "What happens after launch?",
    a: "We continue to support, improve and maintain your digital solution as your business grows.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}

        <section className="relative overflow-hidden bg-gradient-to-br from-[#020d0b] via-[#052b21] to-[#071b17] py-20 sm:py-24 lg:py-28">

          <Container>

            <div className="max-w-4xl">

              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">
                Contact
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                Let uss build something
                <span className="block text-[#86efac]">
                  exceptional together.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-emerald-50/75">
                Whether you are planning a new website, mobile application,
                AI automation or digital transformation project,
                I did love to hear about it.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="https://wa.me/919952912004"
                  className="inline-flex items-center gap-2 rounded-full bg-[#86efac] px-7 py-4 font-semibold text-[#052e22] transition hover:bg-white"
                >
                  <MessageCircle size={18}/>
                  WhatsApp Me
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#052e22]"
                >
                  Explore Services
                  <ArrowRight size={18}/>
                </Link>

              </div>

            </div>

          </Container>

        </section>

        {/* CONTACT */}

        <section className="bg-[#f7fcf9] py-20">

          <Container>

            <SectionHeader
              eyebrow="GET IN TOUCH"
              title="Let's discuss your"
              highlight="next project."
              description="Choose the easiest way to reach me."
            />

            <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">

              {/* FORM */}

              <div className="rounded-[32px] bg-white p-10 shadow-lg">

                <div className="grid gap-6 md:grid-cols-2">

                  <input placeholder="Full Name" className="rounded-xl border p-4"/>

                  <input placeholder="Email Address" className="rounded-xl border p-4"/>

                  <input placeholder="Phone Number" className="rounded-xl border p-4"/>

                  <input placeholder="Company" className="rounded-xl border p-4"/>

                </div>

                <input
                  placeholder="Service Required"
                  className="mt-6 w-full rounded-xl border p-4"
                />

                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="mt-6 w-full rounded-xl border p-4"
                />

                <button className="mt-8 rounded-full bg-emerald-700 px-8 py-4 font-semibold text-white transition hover:bg-emerald-800">
                  Send Message
                </button>

              </div>

              {/* INFO */}

              <div className="space-y-6">

                <div className="rounded-[28px] bg-white p-8 shadow-lg">
                  <Mail className="text-emerald-700"/>
                  <h3 className="mt-5 text-2xl font-bold">
                    Email
                  </h3>

                  <p className="mt-3 text-slate-600">
                    ceo@archanafreelancer.com
                  </p>
                </div>

                <div className="rounded-[28px] bg-white p-8 shadow-lg">
                  <Phone className="text-emerald-700"/>
                  <h3 className="mt-5 text-2xl font-bold">
                    Phone
                  </h3>

                  <p className="mt-3 text-slate-600">
                    +91 9952912004
                  </p>
                </div>

                <div className="rounded-[28px] bg-white p-8 shadow-lg">
                  <MapPin className="text-emerald-700"/>
                  <h3 className="mt-5 text-2xl font-bold">
                    Location
                  </h3>

                  <p className="mt-3 text-slate-600">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>

                <div className="rounded-[28px] bg-white p-8 shadow-lg">
                  <Clock3 className="text-emerald-700"/>
                  <h3 className="mt-5 text-2xl font-bold">
                    Working Hours
                  </h3>

                  <p className="mt-3 text-slate-600">
                    Monday – Saturday
                    <br/>
                    8:00 AM – 10:00 PM IST
                  </p>

                  
                </div>

              </div>

            </div>

          </Container>

        </section>

        {/* FAQ */}

        <section className="bg-white py-20">

          <Container>

            <SectionHeader
              eyebrow="FAQ"
              title="Questions"
              highlight="people often ask."
              description=""
              align="center"
            />

            <div className="mx-auto mt-12 max-w-5xl space-y-6">

              {faqs.map((faq)=>(
                <div
                  key={faq.q}
                  className="rounded-3xl border border-slate-200 p-8"
                >
                  <h3 className="text-xl font-bold">
                    {faq.q}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    {faq.a}
                  </p>
                </div>
              ))}

            </div>

          </Container>

        </section>

        <CTA/>

      </main>

      <Footer/>

    </>
  );
}