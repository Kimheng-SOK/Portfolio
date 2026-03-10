"use client";

import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

const experiences = [
  {
    period: "2021 – Present",
    role: "Software Development Engineer",
    company: "Amazon Web Services (AWS)",
    color: "text-[#FF9900]",
    dotColor: "bg-[#FF9900]",
    bullets: [
      "Architected serverless applications handling 10M+ daily requests using Lambda, API Gateway, and DynamoDB",
      "Reduced infrastructure costs by 40% through optimized auto-scaling and spot instance strategies",
      "Led migration of monolithic applications to microservices architecture serving 500K+ users",
      "Mentored 4 junior engineers; established code review and testing standards across the team",
    ],
    align: "right",
  },
  {
    period: "2020 – 2021",
    role: "Junior Full Stack Developer",
    company: "Tech Startup",
    color: "text-[#0ea5e9]",
    dotColor: "bg-[#0ea5e9]",
    bullets: [
      "Developed full-stack web applications using React, Node.js, and PostgreSQL",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with cross-functional teams in Agile environment across 3 product releases",
      "Built reusable component library that cut UI development time by 35%",
    ],
    align: "left",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 dark:bg-slate-900/50 bg-slate-100/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#FF9900]/10 text-[#FF9900] mb-4">
            Career
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Professional{" "}
            <span className="text-[#FF9900]">Experience</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-500">
            My journey in software development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF9900] via-[#0ea5e9] to-purple-500 opacity-30" />

          {experiences.map((exp, i) => (
            <div
              key={exp.role}
              className={`relative mb-12 last:mb-0 reveal`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="md:flex items-start gap-8">
                {/* Left card */}
                <div
                  className={`md:w-5/12 mb-4 md:mb-0 ${exp.align === "right" ? "md:text-right" : "order-2"}`}
                >
                  <div className="glass rounded-2xl p-6 border dark:border-slate-700/60 border-slate-200 card-hover inline-block w-full text-left">
                    <span className={`text-sm font-semibold ${exp.color}`}>
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-bold mt-1.5">{exp.role}</h3>
                    <p className="dark:text-slate-400 text-slate-500 text-sm mt-1">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 mt-6 items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full ${exp.dotColor} border-4 dark:border-slate-900 border-slate-100 shadow-lg`}
                  />
                </div>

                {/* Right card */}
                <div
                  className={`md:w-5/12 ${exp.align === "left" ? "order-1" : ""}`}
                >
                  <div className="glass rounded-2xl p-6 border dark:border-slate-700/60 border-slate-200">
                    <ul className="space-y-2.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm dark:text-slate-300 text-slate-600">
                          <ChevronRight
                            className={`w-4 h-4 mt-0.5 shrink-0 ${exp.color}`}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
