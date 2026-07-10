import Container from "../ui/Container";

const industries = [
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Education",
  "Startups",
  "Enterprise",
];

export default function TrustedBy() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Building Solutions For
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Businesses Across Industries
          </h2>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-full border border-slate-200 bg-white px-8 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}