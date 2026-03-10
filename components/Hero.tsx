"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const phrases = [
  "Full Stack Developer",
  "AWS Cloud Engineer",
  "Problem Solver",
  "Scalable Systems Architect",
];

const stats = [
  { value: "3+", label: "Years Experience", color: "text-[#FF9900]" },
  { value: "AWS", label: "Cloud Expert", color: "text-[#0ea5e9]" },
  { value: "20+", label: "Projects Delivered", color: "text-purple-400" },
  { value: "99.9%", label: "Uptime Achieved", color: "text-emerald-400" },
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const speed = deleting ? 45 : 95;

    timerRef.current = setTimeout(() => {
      if (!deleting) {
        setTyped(current.substring(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setTyped(current.substring(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timerRef.current);
  }, [typed, deleting, phraseIdx, charIdx]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-slate-950 bg-slate-50">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 bg-gradient-to-br from-slate-50 via-orange-50/30 to-blue-50/30 opacity-90" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_60%_-20%,rgba(255,153,0,0.12),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_40%_120%,rgba(14,165,233,0.1),transparent_60%)]" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-24 left-12 w-24 h-24 rounded-full bg-[#FF9900]/15 blur-2xl animate-float" />
      <div className="absolute bottom-32 right-16 w-36 h-36 rounded-full bg-[#0ea5e9]/15 blur-2xl animate-float-delay" />
      <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-purple-500/15 blur-2xl animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border dark:border-slate-700/60 border-slate-200 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium dark:text-slate-300 text-slate-600">
            Available for new opportunities
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">Sok Kimheng</span>
        </h1>

        {/* Typewriter */}
        <div
          className={`text-xl md:text-3xl font-mono dark:text-slate-400 text-slate-500 mb-8 h-10 flex items-center justify-center transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="typing-cursor">{typed}</span>
        </div>

        {/* Description */}
        <p
          className={`max-w-2xl mx-auto text-lg dark:text-slate-400 text-slate-600 mb-12 leading-relaxed transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Full Stack Developer with{" "}
          <span className="text-[#FF9900] font-semibold">3 years</span> of
          experience architecting scalable cloud solutions at{" "}
          <span className="text-[#FF9900] font-semibold">AWS</span>. Specialized
          in distributed systems, serverless architectures, and high-performance
          web applications.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 transition-all duration-700 delay-[400ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <button
            onClick={() => handleScroll("#projects")}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9900] text-slate-900 font-bold hover:bg-orange-400 transition-all hover:scale-105 shadow-xl shadow-orange-500/30"
          >
            View My Work <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="flex items-center gap-2 px-8 py-4 rounded-full glass border dark:border-slate-700 border-slate-300 dark:hover:border-[#FF9900] hover:border-[#FF9900] dark:text-slate-100 text-slate-700 font-semibold transition-all hover:scale-105 hover:text-[#FF9900]"
          >
            Contact Me
          </button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-5 card-hover border dark:border-slate-700/50 border-slate-200"
            >
              <div className={`text-3xl font-bold mb-1 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm dark:text-slate-400 text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 dark:text-slate-500 text-slate-400" />
      </div>
    </section>
  );
}
