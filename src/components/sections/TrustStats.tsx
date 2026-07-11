import Container from "../ui/Container";

const industries = [
  "Retail",
  "Recruitment",
  "Professional Services",
  "Architecture",
  "FMCG",
  "Startups",
];

const stats = [
  {
    value: "6+",
    label: "Years of Experience",
  },
  {
    value: "10+",
    label: "Digital Projects",
  },
  {
    value: "8+",
    label: "Industries Supported",
  },
  {
    value: "3",
    label: "Global Markets",
  },
];

export default function TrustStats() {
  return (
    <section className="relative overflow-hidden bg-[#eaf8f1] pb-24 pt-14 sm:pb-28 lg:pb-32">
      <Container>
        {/* TRUST LABEL */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
            Supporting growing businesses
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Building thoughtful digital solutions across industries
          </h2>
        </div>

        {/* INDUSTRY CHIPS */}
        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-full border border-emerald-900/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm"
            >
              {industry}
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-2 overflow-hidden rounded-[30px] border border-emerald-950/10 bg-white/70 shadow-[0_24px_70px_rgba(15,80,55,0.08)] backdrop-blur-md lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-9 text-center sm:px-8 sm:py-11 ${
                index % 2 !== 0
                  ? "border-l border-emerald-950/10"
                  : ""
              } ${
                index >= 2
                  ? "border-t border-emerald-950/10 lg:border-t-0"
                  : ""
              } ${
                index > 0 ? "lg:border-l lg:border-emerald-950/10" : ""
              }`}
            >
              <p className="text-4xl font-bold tracking-tight text-emerald-800 sm:text-5xl">
                {stat.value}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* INTRODUCTION */}
        <div
          id="about"
          className="mx-auto mt-24 max-w-4xl text-center sm:mt-28 lg:mt-36"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
            What we believe
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-7xl">
            Technology that helps
            <span className="block text-emerald-700">
              businesses grow.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We combine business understanding, thoughtful design and modern
            technology to build websites, applications and intelligent
            solutions that solve real operational and growth challenges.
          </p>
        </div>
      </Container>
    </section>
  );
}