"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ── Tech badge data ─────────────────────────────────────── */
type Tech = {
  name: string;
  icon: string;
  color: string;
  bg: string;
  delay: string;
};

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const ring1: Tech[] = [
  {
    name: "React",
    icon: `${DI}/react/react-original.svg`,
    color: "#61dafb",
    bg: "rgba(97,218,251,0.12)",
    delay: "0s",
  },
  {
    name: "TypeScript",
    icon: `${DI}/typescript/typescript-original.svg`,
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.12)",
    delay: "-3.75s",
  },
  {
    name: "Python",
    icon: `${DI}/python/python-original.svg`,
    color: "#ffd343",
    bg: "rgba(255,211,67,0.12)",
    delay: "-7.5s",
  },
  {
    name: "AWS",
    icon: `${DI}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
    color: "#FF9900",
    bg: "rgba(255,153,0,0.12)",
    delay: "-11.25s",
  },
];

const ring2: Tech[] = [
  {
    name: "Next.js",
    icon: `${DI}/nextjs/nextjs-original.svg`,
    color: "#94a3b8",
    bg: "rgba(148,163,184,0.12)",
    delay: "0s",
  },
  {
    name: "Node.js",
    icon: `${DI}/nodejs/nodejs-original.svg`,
    color: "#68a063",
    bg: "rgba(104,160,99,0.12)",
    delay: "-5.5s",
  },
  {
    name: "Docker",
    icon: `${DI}/docker/docker-original.svg`,
    color: "#2496ed",
    bg: "rgba(36,150,237,0.12)",
    delay: "-11s",
  },
  {
    name: "PostgreSQL",
    icon: `${DI}/postgresql/postgresql-original.svg`,
    color: "#336791",
    bg: "rgba(51,103,145,0.12)",
    delay: "-16.5s",
  },
];

const ring3: Tech[] = [
  {
    name: "Git",
    icon: `${DI}/git/git-original.svg`,
    color: "#f05032",
    bg: "rgba(240,80,50,0.12)",
    delay: "0s",
  },
  {
    name: "MongoDB",
    icon: `${DI}/mongodb/mongodb-original.svg`,
    color: "#47a248",
    bg: "rgba(71,162,72,0.12)",
    delay: "-7.5s",
  },
  {
    name: "Tailwind",
    icon: `${DI}/tailwindcss/tailwindcss-original.svg`,
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.12)",
    delay: "-15s",
  },
  {
    name: "GraphQL",
    icon: `${DI}/graphql/graphql-plain.svg`,
    color: "#e10098",
    bg: "rgba(225,0,152,0.12)",
    delay: "-22.5s",
  },
];

/* ── Single orbiting badge ───────────────────────────────── */
function TechBadge({ icon, color, bg, name }: Tech) {
  return (
    <div
      title={name}
      className="orbit-badge w-11 h-11 rounded-full flex items-center justify-center
                 border shadow-lg select-none"
      style={{ background: bg, borderColor: `${color}55` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon}
        alt={name}
        width={26}
        height={26}
        className="w-[26px] h-[26px] object-contain"
      />
    </div>
  );
}

/* ── Hero section ────────────────────────────────────────── */
export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  const fade = (delay: string) =>
    `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${delay}`;

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-14 pt-28 pb-20 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        {/* LEFT — text content */}
        <div className="flex-1 max-w-2xl">
          <p
            className={`${fade("delay-100")} mb-7 text-[0.68rem] uppercase tracking-[0.22em] text-orange`}
          >
            <span className="opacity-50 mr-2">//</span>
            Full Stack Developer &amp; Cloud Engineer
          </p>

          <h1
            className={`${fade("delay-200")} font-syne font-extrabold leading-[0.92] tracking-tight`}
            style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)" }}
          >
            <span className="text-slate-800 dark:text-slate-100">SOK</span>
            <br />
            <span
              className="text-transparent"
              style={
                { WebkitTextStroke: "1.5px #FF9900" } as React.CSSProperties
              }
            >
              KIM
            </span>
            <span className="text-slate-800 dark:text-slate-100">HENG</span>
          </h1>

          <p
            className={`${fade("delay-300")} mt-8 max-w-lg text-light-muted dark:text-dark-muted leading-relaxed`}
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2.5vw, 1.45rem)",
            }}
          >
            Building scalable systems at{" "}
            <strong className="text-orange not-italic">AWS</strong> — where
            backend precision meets fluid front-end craft.
          </p>

          <div className={`${fade("delay-500")} flex flex-wrap gap-4 mt-12`}>
            <a
              href="#projects"
              className="btn-clip bg-orange text-black font-syne font-bold text-[0.78rem] uppercase
                         tracking-widest px-8 py-3.5 hover:bg-orange-dim transition-colors duration-200
                         flex items-center gap-2"
            >
              View My Work <span>&#x2197;</span>
            </a>
            <a
              href="#contact"
              className="border border-light-border dark:border-dark-border text-light-muted
                         dark:text-dark-muted text-[0.73rem] uppercase tracking-widest px-7 py-3.5
                         hover:border-teal hover:text-teal transition-colors duration-200 flex items-center gap-2"
            >
              Get In Touch
            </a>
          </div>

          <div
            className={`${fade("delay-700")} flex items-center gap-3 mt-16 text-[0.62rem] uppercase tracking-[0.18em] text-light-dim dark:text-dark-dim`}
          >
            <div className="relative w-10 h-px bg-light-dim dark:bg-dark-dim overflow-hidden scroll-anim" />
            Scroll to explore
          </div>
        </div>

        {/* RIGHT — profile photo + orbit rings */}
        <div
          className={`${fade("delay-300")} relative hidden lg:block flex-shrink-0`}
          style={{ width: 520, height: 520 }}
        >
          {/* Decorative orbit ring lines */}
          {[300, 410, 520].map((size, i) => (
            <div
              key={size}
              className="absolute rounded-full border border-dashed pointer-events-none"
              style={{
                width: size,
                height: size,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderColor: `rgba(30,45,61,${0.55 - i * 0.12})`,
              }}
            />
          ))}

          {/* Profile photo — public/image.png */}
          <div
            className="absolute z-10 rounded-full overflow-hidden border-2 border-orange/70
                       shadow-[0_0_50px_rgba(255,153,0,0.25),0_0_0_6px_rgba(255,153,0,0.08)]"
            style={{
              width: 250,
              height: 250,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* SK fallback — hidden once image loads */}
            <div className="absolute inset-0 bg-dark-card flex items-center justify-center">
              <span className="font-syne font-extrabold text-4xl text-orange/70 select-none">
                SK
              </span>
            </div>
            <Image
              src="/image.png"
              alt="Sok Kimheng"
              width={250}
              height={250}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Ring 1 — radius 130px, 15s  */}
          {ring1.map((t) => (
            <div
              key={t.name}
              className="orbit-item"
              style={{
                animationName: "orbit-r1",
                animationDuration: "15s",
                animationDelay: t.delay,
              }}
            >
              <TechBadge {...t} />
            </div>
          ))}

          {/* Ring 2 — radius 185px, 22s */}
          {ring2.map((t) => (
            <div
              key={t.name}
              className="orbit-item"
              style={{
                animationName: "orbit-r2",
                animationDuration: "22s",
                animationDelay: t.delay,
              }}
            >
              <TechBadge {...t} />
            </div>
          ))}

          {/* Ring 3 — radius 240px, 30s */}
          {ring3.map((t) => (
            <div
              key={t.name}
              className="orbit-item"
              style={{
                animationName: "orbit-r3",
                animationDuration: "30s",
                animationDelay: t.delay,
              }}
            >
              <TechBadge {...t} />
            </div>
          ))}
        </div>
      </div>

      {/* Years badge on tablet (orbit hidden) */}
      <div className="absolute right-6 md:right-14 bottom-20 hidden sm:flex lg:hidden flex-col items-center gap-3">
        <div className="relative w-24 h-24 flex flex-col items-center justify-center border border-light-border dark:border-dark-border rounded-full">
          <div className="spin-ring absolute inset-[-6px] border border-orange/40 rounded-full" />
          <span className="font-syne font-extrabold text-3xl text-orange leading-none">
            3+
          </span>
          <span className="text-[0.55rem] uppercase tracking-widest text-light-muted dark:text-dark-muted text-center leading-tight">
            Years
            <br />
            Exp.
          </span>
        </div>
      </div>
    </section>
  );
}
