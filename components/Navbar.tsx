"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

/*  Custom SK logo  */
function Logo() {
  return (
    <a href="#hero" className="flex items-center gap-2.5 group">
      {/* Geometric hex mark */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        className="flex-shrink-0"
      >
        {/* Outer hexagon */}
        <path
          d="M18 2 L32 10 L32 26 L18 34 L4 26 L4 10 Z"
          stroke="#FF9900"
          strokeWidth="1.5"
          fill="none"
          className="transition-all duration-300 group-hover:stroke-[#00d4d4]"
        />
        {/* Inner hex accent */}
        <path
          d="M18 8 L27 13 L27 23 L18 28 L9 23 L9 13 Z"
          stroke="#FF9900"
          strokeWidth="0.75"
          fill="rgba(255,153,0,0.05)"
          opacity="0.6"
        />
        {/* S path */}
        <path
          d="M13.5 14.5 C13.5 14.5 11.5 14.5 11.5 16.2 C11.5 17.9 13.5 17.5 15 18
             C16.5 18.5 16.5 20 16.5 20 C16.5 21.8 14 21.8 13 21.8"
          stroke="#FF9900"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* K path */}
        <path
          d="M18.5 14.5 L18.5 21.8"
          stroke="#FF9900"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18.5 18 L23 14.5"
          stroke="#FF9900"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18.5 18 L23 21.8"
          stroke="#FF9900"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      {/* Wordmark */}
      <span className="font-syne font-extrabold text-lg tracking-widest text-slate-800 dark:text-slate-100 group-hover:text-orange transition-colors duration-200">
        SK<span className="text-orange">.</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      if (pathname !== "/" && pathname !== "/home") {
        router.push("/home" + href);
        return;
      }
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navBase =
    "fixed top-0 left-0 right-0 z-[100] px-6 md:px-14 py-5 flex justify-between items-center transition-all duration-300";
  const navScrolled =
    "border-b border-light-border dark:border-dark-border bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-xl";

  return (
    <nav className={`${navBase} ${scrolled ? navScrolled : ""}`}>
      <Logo />

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <button
              onClick={() => handleNavClick(l.href)}
              className="text-[0.7rem] uppercase tracking-widest text-light-muted dark:text-dark-muted hover:text-orange dark:hover:text-orange transition-colors duration-200"
            >
              {l.label}
            </button>
          </li>
        ))}
        <li>
          <Link
            href="/cover-letter"
            className="text-[0.7rem] uppercase tracking-widest text-light-muted dark:text-dark-muted hover:text-teal dark:hover:text-teal transition-colors duration-200"
          >
            Cover Letter
          </Link>
        </li>
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 flex items-center justify-center border border-light-border dark:border-dark-border
                       text-light-muted dark:text-dark-muted hover:border-orange hover:text-orange transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        )}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border md:hidden">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNavClick(l.href)}
              className="block w-full text-left px-6 py-4 text-[0.75rem] uppercase tracking-widest
                         text-light-muted dark:text-dark-muted hover:text-orange
                         border-b border-light-border dark:border-dark-border last:border-0 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <Link
            href="/cover-letter"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-[0.75rem] uppercase tracking-widest text-light-muted dark:text-dark-muted hover:text-teal transition-colors"
          >
            Cover Letter
          </Link>
        </div>
      )}
    </nav>
  );
}
