"use client";

import { useEffect, useRef } from "react";
import { Code2, Check } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    desc: "End-to-end application development with modern frameworks",
  },
  {
    title: "Cloud Architecture",
    desc: "AWS infrastructure design and serverless solutions",
  },
  {
    title: "API Development",
    desc: "RESTful and GraphQL APIs with high performance",
  },
  {
    title: "Database Optimization",
    desc: "SQL and NoSQL database design and query optimization",
  },
];

const tags = ["Problem Solver", "Cloud Native", "Agile Methodology", "DevOps"];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent dark:via-slate-900/40 via-slate-100/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="reveal">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#FF9900]/10 text-[#FF9900] mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Building the{" "}
              <span className="text-[#FF9900]">Future</span> of Cloud
              Infrastructure
            </h2>
            <p className="dark:text-slate-400 text-slate-600 mb-6 leading-relaxed">
              As a Full Stack Developer at AWS, I&apos;ve spent the last 3 years
              designing and implementing enterprise-grade solutions that handle
              millions of requests daily. My expertise spans from React frontends
              to Lambda-powered microservices.
            </p>
            <p className="dark:text-slate-400 text-slate-600 mb-8 leading-relaxed">
              I&apos;m passionate about creating efficient, scalable systems that
              solve real business problems. Whether it&apos;s optimizing database
              queries or architecting serverless workflows, I bring a
              data-driven approach to every project.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full dark:bg-slate-800 bg-slate-100 border dark:border-slate-700 border-slate-200 text-sm font-medium hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — card */}
          <div className="relative reveal" style={{ transitionDelay: "150ms" }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF9900] to-[#0ea5e9] rounded-3xl opacity-10 blur-2xl" />
            <div className="relative glass rounded-2xl p-8 border dark:border-slate-700/60 border-slate-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2.5">
                <Code2 className="w-5 h-5 text-[#FF9900]" />
                What I Do
              </h3>
              <ul className="space-y-5">
                {services.map((s) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FF9900]/15 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#FF9900]" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{s.title}</div>
                      <div className="text-sm dark:text-slate-400 text-slate-500 mt-0.5">
                        {s.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
