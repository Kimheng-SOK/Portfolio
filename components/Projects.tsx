"use client";

import { useReveal } from "./useReveal";

const projects = [
  {
    num:      "01",
    category: "Cloud Dashboard",
    name:     "AWS Resource Monitor",
    desc:     "Real-time dashboard for monitoring AWS resource utilization across multiple accounts. Built with React and WebSockets, pulling live metrics from CloudWatch APIs with sub-second update latency.",
    stack:    "React · Lambda · CloudWatch",
    href:     "#",
  },
  {
    num:      "02",
    category: "Serverless API",
    name:     "Microservices Platform",
    desc:     "Event-driven microservices architecture using AWS Lambda, SQS, and DynamoDB to handle 500k+ daily transactions with 99.99% uptime and near-zero cold-start latency.",
    stack:    "Lambda · SQS · DynamoDB",
    href:     "#",
  },
  {
    num:      "03",
    category: "SaaS Product",
    name:     "E-Commerce Engine",
    desc:     "Full-featured multi-vendor e-commerce platform with inventory management, real-time analytics, and payment processing. Supports 10k+ concurrent users with PostgreSQL and Redis caching.",
    stack:    "Next.js · Node.js · PostgreSQL",
    href:     "#",
  },
  {
    num:      "04",
    category: "DevOps Tool",
    name:     "Infrastructure as Code CLI",
    desc:     "Python CLI tool to auto-generate Terraform modules and CloudFormation stacks from architectural diagrams. Reduces infrastructure provisioning time by 70% for internal teams.",
    stack:    "Python · Terraform · AWS CDK",
    href:     "#",
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" ref={ref} className="relative z-10 px-6 md:px-14 py-24">
      <p className="reveal section-tag">Selected Work</p>
      <h2
        className="reveal reveal-delay-1 font-syne font-extrabold text-slate-800 dark:text-slate-100 leading-tight mt-4 mb-14"
        style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
      >
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <div
            key={p.num}
            className={`reveal reveal-delay-${i % 3} group bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border overflow-hidden hover:border-orange transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="relative p-8 border-b border-light-border dark:border-dark-border">
              <span className="absolute top-4 right-6 font-syne font-extrabold text-5xl text-light-border dark:text-dark-border group-hover:text-orange/15 transition-colors duration-300 leading-none select-none">
                {p.num}
              </span>
              <p className="text-[0.63rem] uppercase tracking-[0.15em] text-teal mb-3">{p.category}</p>
              <h3 className="font-syne font-bold text-xl text-slate-800 dark:text-slate-100 mb-3">{p.name}</h3>
              <p className="text-[0.78rem] leading-loose text-light-muted dark:text-dark-muted">{p.desc}</p>
            </div>
            <div className="px-8 py-5 flex items-center justify-between">
              <span className="text-[0.63rem] tracking-wide text-light-dim dark:text-dark-dim">{p.stack}</span>
              <a
                href={p.href}
                className="flex items-center gap-1.5 text-[0.68rem] uppercase tracking-widest text-orange hover:gap-3 transition-all duration-200"
              >
                View {"\u2192"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
