"use client";

import { useEffect, useRef } from "react";
import { CloudCog, ShoppingCart, Bot, ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Serverless Analytics Platform",
    desc: "Real-time data processing pipeline using Lambda, Kinesis, and S3. Processes 5TB of data daily with sub-second latency.",
    tags: ["Lambda", "DynamoDB", "React", "Kinesis"],
    icon: CloudCog,
    gradient: "from-[#FF9900]/25 to-slate-800/50",
    accent: "text-[#FF9900]",
    badge: "AWS",
    badgeColor: "text-[#FF9900]",
    delay: 0,
  },
  {
    title: "E-Commerce Microservices",
    desc: "Scalable e-commerce platform with microservices architecture. Features real-time inventory and payment processing.",
    tags: ["Node.js", "Docker", "Kubernetes", "PostgreSQL"],
    icon: ShoppingCart,
    gradient: "from-[#0ea5e9]/25 to-slate-800/50",
    accent: "text-[#0ea5e9]",
    badge: "Full Stack",
    badgeColor: "text-[#0ea5e9]",
    delay: 100,
  },
  {
    title: "AI Task Manager",
    desc: "Intelligent task management app with NLP capabilities. Uses AWS Comprehend for sentiment analysis and auto-tagging.",
    tags: ["Python", "TensorFlow", "Vue.js", "AWS Comprehend"],
    icon: Bot,
    gradient: "from-purple-500/25 to-slate-800/50",
    accent: "text-purple-400",
    badge: "AI/ML",
    badgeColor: "text-purple-400",
    delay: 200,
  },
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#FF9900]/10 text-[#FF9900] mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="text-[#FF9900]">Projects</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-500">
            Some of my recent work at AWS and personal projects
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="glass rounded-2xl overflow-hidden border dark:border-slate-700/60 border-slate-200 card-hover reveal group"
                style={{ transitionDelay: `${p.delay}ms` }}
              >
                {/* Thumbnail */}
                <div
                  className={`h-44 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      className={`w-16 h-16 ${p.accent} opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500`}
                    />
                  </div>
                  {/* Grid texture */}
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-2.5 py-1 rounded-full dark:bg-slate-900/80 bg-white/80 text-xs font-semibold border dark:border-slate-700 border-slate-200 ${p.badgeColor}`}
                    >
                      {p.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className={`text-lg font-bold mb-2 group-hover:${p.accent} transition-colors`}
                  >
                    {p.title}
                  </h3>
                  <p className="dark:text-slate-400 text-slate-500 text-sm mb-4 leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded dark:bg-slate-800 bg-slate-100 text-xs dark:text-slate-300 text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2 border-t dark:border-slate-700/50 border-slate-200">
                    <a
                      href="#"
                      className={`text-sm font-medium ${p.accent} hover:underline flex items-center gap-1.5`}
                    >
                      Live Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#"
                      className="text-sm font-medium dark:text-slate-400 text-slate-500 hover:dark:text-white hover:text-slate-900 flex items-center gap-1.5 transition-colors"
                    >
                      Code <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all */}
        <div className="mt-12 text-center reveal">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border dark:border-slate-700 border-slate-300 dark:hover:border-[#FF9900] hover:border-[#FF9900] hover:text-[#FF9900] transition-all text-sm font-medium"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
