"use client";

import { useReveal } from "./useReveal";

const experiences = [
  {
    date:    "2022 — Present",
    role:    "Software Development Engineer",
    company: "Amazon Web Services (AWS)",
    desc:    "Leading full stack development for internal cloud tooling used by thousands of AWS customers worldwide. Architected microservices on Lambda, built high-throughput APIs, and delivered responsive React dashboards for real-time infrastructure monitoring.",
    tags:    ["AWS Lambda", "React", "TypeScript", "Node.js", "DynamoDB", "CloudFormation"],
    active:  true,
  },
  {
    date:    "2021 — 2022",
    role:    "Junior Full Stack Developer",
    company: "Tech Startup — Phnom Penh",
    desc:    "Built and shipped two SaaS products from scratch: an e-commerce management platform and a logistics dashboard. Developed REST APIs with Express.js, integrated payment gateways, and deployed Docker + CI/CD pipelines.",
    tags:    ["Vue.js", "Express.js", "PostgreSQL", "Docker", "Stripe API"],
    active:  false,
  },
  {
    date:    "2020 — 2021",
    role:    "Frontend Intern",
    company: "Digital Agency",
    desc:    "Developed responsive web interfaces for local businesses. Learned React, accessibility standards, and performance optimization while collaborating with senior developers on production deployments.",
    tags:    ["React", "CSS3", "Figma", "Git"],
    active:  false,
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" ref={ref} className="relative z-10 px-6 md:px-14 py-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <p className="reveal section-tag">Career Timeline</p>
          <h2 className="reveal reveal-delay-1 font-syne font-extrabold text-slate-800 dark:text-slate-100 leading-tight mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Work Experience
          </h2>
        </div>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-orange via-teal to-transparent" />

        {experiences.map((exp, i) => (
          <div key={exp.role} className={`reveal reveal-delay-${i} relative pl-12 pb-14 last:pb-0`}>
            {/* Dot */}
            <div
              className={`absolute left-[-6px] top-1.5 w-3 h-3 rounded-full border-2 ${
                exp.active
                  ? "bg-orange border-orange shadow-[0_0_0_4px_rgba(255,153,0,0.15),0_0_20px_rgba(255,153,0,0.3)]"
                  : "bg-light-bg dark:bg-dark-bg border-orange/50"
              }`}
            />

            <p className="text-[0.65rem] uppercase tracking-[0.15em] text-light-muted dark:text-dark-muted mb-2">{exp.date}</p>
            <h3 className="font-syne font-bold text-xl text-slate-800 dark:text-slate-100 mb-1">{exp.role}</h3>
            <p className="flex items-center gap-2 text-orange text-[0.8rem] tracking-widest mb-4">
              <span className="block w-6 h-px bg-orange" />
              {exp.company}
            </p>
            <p className="text-sm leading-loose text-light-muted dark:text-dark-muted max-w-2xl mb-5">{exp.desc}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((t) => (
                <span key={t} className="text-[0.63rem] tracking-wider px-3 py-1 bg-orange/5 border border-orange/20 text-orange">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
