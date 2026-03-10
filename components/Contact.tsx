"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, Twitter, FileText, Send } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: FileText, href: "#cover-letter", label: "Resume" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900 bg-gradient-to-b from-white to-slate-50" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,153,0,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#FF9900]/10 text-[#FF9900] mb-4">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let&apos;s Work{" "}
            <span className="text-[#FF9900]">Together</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-500 mb-12">
            Have a project in mind? I&apos;m always open to new opportunities.
          </p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-10 border dark:border-slate-700/60 border-slate-200 reveal">
          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <a
              href="mailto:sok.kimheng@email.com"
              className="flex items-center gap-4 p-4 rounded-xl dark:bg-slate-800/50 bg-slate-100 hover:dark:bg-slate-800 hover:bg-slate-200 transition-all group"
            >
              <div className="w-11 h-11 rounded-full bg-[#FF9900]/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-[#FF9900]" />
              </div>
              <div className="text-left">
                <div className="text-xs dark:text-slate-400 text-slate-500">Email</div>
                <div className="font-semibold text-sm">sok.kimheng@email.com</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 p-4 rounded-xl dark:bg-slate-800/50 bg-slate-100 hover:dark:bg-slate-800 hover:bg-slate-200 transition-all group"
            >
              <div className="w-11 h-11 rounded-full bg-[#0ea5e9]/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5 text-[#0ea5e9]" />
              </div>
              <div className="text-left">
                <div className="text-xs dark:text-slate-400 text-slate-500">LinkedIn</div>
                <div className="font-semibold text-sm">/in/sokkimheng</div>
              </div>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg dark:bg-slate-800 bg-slate-100 border dark:border-slate-700 border-slate-200 focus:border-[#FF9900] focus:outline-none transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg dark:bg-slate-800 bg-slate-100 border dark:border-slate-700 border-slate-200 focus:border-[#FF9900] focus:outline-none transition-colors text-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-lg dark:bg-slate-800 bg-slate-100 border dark:border-slate-700 border-slate-200 focus:border-[#FF9900] focus:outline-none transition-colors text-sm"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg dark:bg-slate-800 bg-slate-100 border dark:border-slate-700 border-slate-200 focus:border-[#FF9900] focus:outline-none transition-colors resize-none text-sm"
            />
            <button
              type="submit"
              className={`w-full py-3.5 rounded-lg font-bold transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-sm shadow-lg
                ${sent
                  ? "bg-emerald-500 text-white shadow-emerald-500/25"
                  : "bg-[#FF9900] text-slate-900 hover:bg-orange-400 shadow-orange-500/25"
                }`}
            >
              {sent ? "Message Sent! 🎉" : <>Send Message <Send className="w-4 h-4" /></>}
            </button>
          </form>
        </div>

        {/* Social icons */}
        <div className="mt-10 flex justify-center gap-4 reveal">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-11 h-11 rounded-full glass border dark:border-slate-700 border-slate-300 flex items-center justify-center hover:border-[#FF9900] hover:text-[#FF9900] transition-all hover:scale-110"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
