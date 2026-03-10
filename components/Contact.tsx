"use client";

import { useReveal } from "./useReveal";

const contactItems = [
  { icon: "\u2709", label: "Email",    value: "sokimheng@email.com" },
  { icon: "\U0001f4cd", label: "Location", value: "Phnom Penh, Cambodia" },
  { icon: "\u2601", label: "Employer", value: "Amazon Web Services (AWS)" },
  { icon: "\U0001f393", label: "Education", value: "Institute of Technology of Cambodia" },
];

const socials = [
  { label: "GH", href: "#", title: "GitHub" },
  { label: "in", href: "#", title: "LinkedIn" },
  { label: "X",  href: "#", title: "Twitter / X" },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative z-10 px-6 md:px-14 py-24 border-t border-light-border dark:border-dark-border grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
    >
      {/* Left */}
      <div>
        <p className="reveal section-tag">Let&apos;s Collaborate</p>
        <h2
          className="reveal reveal-delay-1 font-syne font-extrabold leading-[0.95] tracking-tight text-slate-800 dark:text-slate-100 mt-6 mb-8"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          Let&apos;s<br />build<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #00d4d4" }}>
            together
          </span>
        </h2>
        <p className="reveal reveal-delay-2 text-sm leading-loose text-light-muted dark:text-dark-muted max-w-md">
          Open to challenging projects, collaborations, and conversations about
          cloud-scale systems and beautiful user experiences.
        </p>

        {/* Socials */}
        <div className="reveal reveal-delay-3 flex gap-3 mt-8">
          {socials.map((s) => (
            <a
              key={s.title}
              href={s.href}
              title={s.title}
              className="w-11 h-11 flex items-center justify-center border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted text-sm font-syne font-bold hover:border-orange hover:text-orange hover:bg-orange/5 transition-all duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="reveal reveal-delay-2 flex flex-col gap-4">
        {contactItems.map((c) => (
          <div
            key={c.label}
            className="flex items-start gap-4 p-5 border border-light-border dark:border-dark-border hover:border-orange transition-colors duration-200"
          >
            <span className="text-xl mt-0.5">{c.icon}</span>
            <div>
              <p className="text-[0.58rem] uppercase tracking-[0.15em] text-light-muted dark:text-dark-muted mb-1">{c.label}</p>
              <p className="text-[0.85rem] text-slate-700 dark:text-slate-200">{c.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
