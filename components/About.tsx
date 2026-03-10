"use client";

import { useReveal } from "./useReveal";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "AWS Lambda", "DynamoDB", "Docker", "Terraform", "PostgreSQL",
  "Redis", "GraphQL",
];

const stats = [
  { num: "3+",  label: "Years at AWS" },
  { num: "20+", label: "Projects Shipped" },
  { num: "12+", label: "AWS Services" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-10 px-6 md:px-14 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
    >
      {/* Left */}
      <div>
        <p className="reveal section-tag">About Me</p>
        <h2 className="reveal reveal-delay-1 font-syne font-extrabold leading-[1.05] mt-5 mb-7 text-slate-800 dark:text-slate-100" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
          Crafting digital<br />experiences that scale
        </h2>
        <p className="reveal reveal-delay-2 text-sm leading-loose text-light-muted dark:text-dark-muted mb-4">
          As a Full Stack Developer at AWS, I&#39;ve spent the last 3 years
          designing and implementing enterprise-grade solutions that handle
          millions of requests daily. My expertise spans from React frontends
          to Lambda-powered microservices.
        </p>
        <p className="reveal reveal-delay-2 text-sm leading-loose text-light-muted dark:text-dark-muted">
          I&#39;m passionate about creating efficient, scalable systems that solve
          real business problems  combining deep backend engineering with a
          passion for intuitive UI.
        </p>

        {/* Stats */}
        <div className="reveal reveal-delay-3 mt-12 grid grid-cols-3 border border-light-border dark:border-dark-border">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative px-4 py-6 group overflow-hidden ${i < 2 ? "border-r border-light-border dark:border-dark-border" : ""}`}
            >
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="font-syne font-extrabold text-3xl text-orange leading-none mb-1">{s.num}</div>
              <div className="text-[0.62rem] uppercase tracking-widest text-light-muted dark:text-dark-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right  card */}
      <div className="reveal reveal-delay-2">
        <div className="relative bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-8">
          {/* Top gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange to-teal" />

          {/* AWS badge */}
          <div className="inline-flex items-center gap-2 bg-orange/5 border border-orange/25 px-4 py-2 mb-7 text-[0.72rem] tracking-widest text-orange">
            <span></span> Amazon Web Services  Software Engineer
          </div>

          {/* Code snippet */}
          <p className="text-[0.6rem] uppercase tracking-widest text-light-dim dark:text-dark-dim mb-3">
            Current Stack
          </p>
          <div className="bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border px-5 py-4 text-[0.74rem] leading-loose font-mono">
            <span className="text-teal">const</span>{" "}
            <span className="text-slate-700 dark:text-slate-300">developer</span> = {"{"}
            <br />
            &nbsp;&nbsp;<span className="text-teal">name:</span>{" "}
            <span className="text-green-500">&quot;Sok Kimheng&quot;</span>,
            <br />
            &nbsp;&nbsp;<span className="text-teal">role:</span>{" "}
            <span className="text-green-500">&quot;Full Stack Dev&quot;</span>,
            <br />
            &nbsp;&nbsp;<span className="text-teal">company:</span>{" "}
            <span className="text-green-500">&quot;AWS&quot;</span>,
            <br />
            &nbsp;&nbsp;<span className="text-teal">experience:</span>{" "}
            <span className="text-orange">3</span>,
            <br />
            &nbsp;&nbsp;<span className="text-teal">focus:</span>{" "}
            [<span className="text-green-500">&quot;cloud&quot;</span>,{" "}
            <span className="text-green-500">&quot;scale&quot;</span>]
            <br />
            {"}"}
          </div>

          {/* Tech chips */}
          <p className="text-[0.6rem] uppercase tracking-widest text-light-dim dark:text-dark-dim mt-6 mb-3">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="text-[0.65rem] tracking-wider px-3 py-1.5 border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:border-teal hover:text-teal transition-colors duration-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
