import Container from "../ui/Container";
import { services } from "@/data/services";
import SectionHeading from "../ui/SectionHeading";

<SectionHeading
  eyebrow="What We Do"
  title="Technology Solutions That Drive Growth"
  description="From business websites to enterprise software and AI automation, we build digital products that help organizations scale."
/>

export default function Services() {
  return (
    <section className="py-28 bg-slate-50">
      <Container>

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Our Services
          </h2>

          <p className="mt-5 text-slate-600">
            End-to-end digital solutions for businesses of every size.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
  const Icon = service.icon;

  return (
    <div
      key={service.title}
      className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-xl"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-2xl font-semibold">
        {service.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {service.description}
      </p>
    </div>
  );
})}
        </div>

      </Container>
    </section>
  );
}