"use client";

import { useEffect, useRef } from "react";
import { useReveal } from "./useReveal";

const skills = [
  {
    icon: "\u26db",
    name: "Frontend",
    list: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    pct: 92,
  },
  {
    icon: "\u2699",
    name: "Backend",
    list: ["Node.js / Express", "Python / FastAPI", "GraphQL", "REST APIs"],
    pct: 88,
  },
  {
    icon: "\u2601",
    name: "AWS Cloud",
    list: ["Lambda / EC2 / S3", "DynamoDB / RDS", "API Gateway", "CloudFormation"],
    pct: 90,
  },
  {
    icon: "\U0001f5c4",
    name: "Databases",
    list: ["PostgreSQL", "DynamoDB", "MongoDB", "Redis"],
    pct: 85,
  },
  {
    icon: "\U0001f433",
    name: "DevOps / CI-CD",
    list: ["Docker / Kubernetes", "GitHub Actions", "Terraform", "Prometheus"],
    pct: 82,
  },
  {
    icon: "\U0001f512",
    name: "Security & Auth",
    list: ["OAuth 2.0 / JWT", "AWS IAM / Cognito", "OWASP Standards", "HTTPS / SSL"],
    pct: 80,
  },
];

function SkillCard({ icon, name, list, pct }: typeof skills[0]) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = `scaleX(${pct / 100})`;
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el.parentElement!);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div className="relative bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-8 overflow-hidden group transition-colors duration-200 hover:border-orange/40">
      <div className="absolute inset-0 bg-gradient-to-b from-orange/0 to-orange/0 group-hover:from-orange/5 transition-all duration-500 pointer-events-none" />
      <span className="text-3xl block mb-4">{icon}</span>
      <h3 className="font-syne font-bold text-base text-slate-800 dark:text-slate-100 mb-3">{name}</h3>
      <ul className="text-[0.72rem] leading-loose text-light-muted dark:text-dark-muted">
        {list.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <div className="mt-5 h-px bg-light-border dark:bg-dark-border overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-orange to-teal origin-left transition-transform duration-1000 ease-out"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
      <p className="text-right text-[0.6rem] tracking-wider text-light-dim dark:text-dark-dim mt-1">{pct}%</p>
    </div>
  );
}

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" ref={ref} className="relative z-10 px-6 md:px-14 py-24">
      <p className="reveal section-tag">Technical Expertise</p>
      <h2
        className="reveal reveal-delay-1 font-syne font-extrabold text-slate-800 dark:text-slate-100 leading-tight mt-4 mb-14"
        style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
      >
        Skills &amp; Stack
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-light-border dark:bg-dark-border border border-light-border dark:border-dark-border">
        {skills.map((s) => (
          <SkillCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}
