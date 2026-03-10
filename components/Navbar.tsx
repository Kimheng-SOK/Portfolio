"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "/cover-letter", label: "Cover Letter" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    if (href.startsWith("#")) {
      if (pathname !== "/") {
        router.push("/" + href);
        return;
      }
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b
        ${
          scrolled
            ? "dark:bg-slate-950/90 bg-white/90 backdrop-blur-xl border-slate-200 dark:border-slate-800 shadow-lg shadow-black/10"
            : "bg-transparent border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF9900] to-[#0ea5e9] flex items-center justify-center text-slate-900 font-bold text-sm group-hover:scale-110 transition-transform shadow-lg">
              SK
            </div>
            <span className="font-bold text-lg tracking-tight dark:text-white">
              Sok<span className="text-[#FF9900]">Kimheng</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#FF9900] dark:hover:text-[#FF9900] transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#FF9900] dark:hover:text-[#FF9900] transition-colors"
                >
                  {link.label}
                </button>
              )
            )}
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 rounded-full bg-[#FF9900] text-slate-900 font-semibold text-sm hover:bg-orange-400 transition-all hover:scale-105 shadow-lg shadow-orange-500/25"
            >
              Get in Touch
            </button>
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:border-[#FF9900] transition-colors bg-slate-100 dark:bg-slate-800"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-[#FF9900]" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>
            )}
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-[#FF9900]" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg dark:text-slate-300 text-slate-600"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t dark:border-slate-800 border-slate-100
          ${mobileOpen ? "max-h-96 dark:bg-slate-950/95 bg-white/95 backdrop-blur-xl" : "max-h-0"}`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium dark:text-slate-300 text-slate-600 dark:hover:bg-slate-800 hover:bg-slate-100 hover:text-[#FF9900] transition-all"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium dark:text-slate-300 text-slate-600 dark:hover:bg-slate-800 hover:bg-slate-100 hover:text-[#FF9900] transition-all"
              >
                {link.label}
              </button>
            )
          )}
          <button
            onClick={() => handleNavClick("#contact")}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#FF9900]"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
