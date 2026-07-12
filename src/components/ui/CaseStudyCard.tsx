"use client";

import Badge from "./Badge";

interface CaseStudyCardProps {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  image: React.ReactNode;
  reverse?: boolean;
}

export default function CaseStudyCard({
  title,
  category,
  challenge,
  solution,
  outcome,
  technologies,
  image,
  reverse = false,
}: CaseStudyCardProps) {
  return (
    <div
      className={`grid items-center gap-16 py-20 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>{image}</div>

      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-700">
          {category}
        </p>

        <h3 className="mt-3 text-4xl font-bold text-slate-900">
          {title}
        </h3>

        <div className="mt-8 space-y-6">
          <div>
            <h4 className="font-semibold">Challenge</h4>
            <p className="mt-2 text-slate-600">{challenge}</p>
          </div>

          <div>
            <h4 className="font-semibold">Solution</h4>
            <p className="mt-2 text-slate-600">{solution}</p>
          </div>

          <div>
            <h4 className="font-semibold">Outcome</h4>
            <p className="mt-2 text-slate-600">{outcome}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}