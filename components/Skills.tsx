"use client";

import { useEffect, useRef, useState } from "react";
import { Layout, Server, Cloud } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Layout,
    color: "text-[#0ea5e9]",
    iconBg: "bg-[#0ea5e9]/15",
    barColor: "bg-[#0ea5e9]",
    skills: [
      { name: "React / Next.js", pct: 95 },
      { name: "TypeScript", pct: 90 },
      { name: "Tailwind CSS", pct: 92 },
      { name: "Vue.js", pct: 85 },
    ],
    delay: 0,
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-[#FF9900]",
    iconBg: "bg-[#FF9900]/15",
    barColor: "bg-[#FF9900]",
    skills: [
      { name: "Node.js / Express", pct: 94 },
      { name: "Python / Django", pct: 88 },
      { name: "GraphQL", pct: 85 },
      { name: "REST APIs", pct: 96 },
    ],
    delay: 100,
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-emerald-400",
    iconBg: "bg-emerald-400/15",
    barColor: "bg-emerald-400",
    skills: [
      { name: "AWS (Lambda, EC2, S3)", pct: 95 },
      { name: "Docker / Kubernetes", pct: 90 },
      { name: "CI/CD (Jenkins, GH)", pct: 88 },
      { name: "Terraform / CloudFormation", pct: 85 },
    ],
    delay: 200,
  },
];

const extraTags = [
  "PostgreSQL","MongoDB","Redis","Kafka","Elasticsearch","Git","Linux","Nginx","RabbitMQ","Prometheus",
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            if (!animated) setAnimated(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 dark:bg-slate-900/50 bg-slate-100/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#FF9900]/10 text-[#FF9900] mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Technical <span className="text-[#FF9900]">Skills</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-500">
            Technologies I work with daily
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="glass rounded-2xl p-6 border dark:border-slate-700/60 border-slate-200 reveal"
                style={{ transitionDelay: `${group.delay}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-11 h-11 rounded-xl ${group.iconBg} flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 ${group.color}`} />
                  </div>
                  <h3 className="text-lg font-bold">{group.title}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm dark:text-slate-400 text-slate-500">
                          {skill.pct}%
                        </span>
                      </div>
                      <div className="w-full dark:bg-slate-700 bg-slate-200 rounded-full h-1.5">
                        <div
                          className={`skill-bar ${group.barColor} h-1.5 rounded-full`}
                          style={{ width: animated ? `${skill.pct}%` : "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5 reveal">
          {extraTags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full dark:bg-slate-800 bg-slate-100 border dark:border-slate-700 border-slate-200 text-sm cursor-default hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
