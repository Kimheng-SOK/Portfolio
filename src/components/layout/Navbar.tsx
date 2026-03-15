"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Code,
  Mail,
  Menu,
  X,
  Download,
  ChevronDown,
  Sun,
  Moon,
  Trophy,
} from "lucide-react";
import { profileData } from "../../data/portfolioData";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Achievements", href: "#achievements", icon: Trophy },
  { name: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isCVDropdownOpen, setIsCVDropdownOpen] = useState(false);
  const cvDropdownRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close CV dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cvDropdownRef.current &&
        !(cvDropdownRef.current as any).contains(event.target)
      ) {
        setIsCVDropdownOpen(false);
      }
    };

    if (isCVDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCVDropdownOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleCVSelect = (cvType: "TECHNICAL" | "GENERAL") => {
    // openCVInNewTab(cvType);
    setIsCVDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-container">
          {/* Logo */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <div className="logo-icon">
              <span className="logo-mono-s">S</span>
              <span className="logo-mono-k">K</span>
            </div>
            <div className="logo-text">
              <div className="logo-name">{profileData.nickname}</div>
              <div className="logo-title">Full Stack Dev</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="navbar-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={
                    activeSection === item.href.substring(1) ? "active" : ""
                  }
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <item.icon size={18} />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Download CV Dropdown — desktop */}
          <div className="cv-dropdown" ref={cvDropdownRef}>
            <button
              className="cv-download-btn"
              onClick={() => setIsCVDropdownOpen(!isCVDropdownOpen)}
            >
              <Download size={18} />
              <span>Download CV</span>
              <ChevronDown
                size={16}
                className={`dropdown-icon ${isCVDropdownOpen ? "open" : ""}`}
              />
            </button>

            {isCVDropdownOpen && (
              <motion.div
                className="cv-dropdown-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  className="cv-dropdown-item"
                  onClick={() => handleCVSelect("TECHNICAL")}
                >
                  <span>Technical CV</span>
                  <span className="cv-description">For Tech Roles</span>
                </button>
                <button
                  className="cv-dropdown-item"
                  onClick={() => handleCVSelect("GENERAL")}
                >
                  <span>General CV</span>
                  <span className="cv-description">
                    For Call Center / Teaching
                  </span>
                </button>
              </motion.div>
            )}
          </div>

          {/* Theme Toggle — desktop */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-[var(--glass-hover)] transition-colors ml-4 hidden md:block"
              style={{ color: "var(--text-primary)" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-[var(--glass-hover)] transition-colors"
                style={{ color: "var(--text-primary)" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              style={{ display: "flex" }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
            >
              {/* Header */}
              <div className="mobile-drawer-header">
                <a
                  href="#home"
                  className="navbar-logo"
                  onClick={(e) => handleNavClick(e, "#home")}
                >
                  <div className="logo-icon">
                    <span className="logo-mono-s">S</span>
                    <span className="logo-mono-k">K</span>
                  </div>
                  <div className="logo-text">
                    <div className="logo-name">{profileData.nickname}</div>
                    <div className="logo-title">Full Stack Dev</div>
                  </div>
                </a>
                <button
                  className="mobile-drawer-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="mobile-drawer-nav">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`mobile-drawer-link${
                      activeSection === item.href.substring(1) ? " active" : ""
                    }`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 + 0.1 }}
                  >
                    <item.icon size={19} />
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              <div className="mobile-drawer-divider" />

              {/* Footer: CV buttons + theme */}
              <div className="mobile-drawer-footer">
                <button
                  className="mobile-drawer-cv-btn"
                  onClick={() => handleCVSelect("TECHNICAL")}
                >
                  <Download size={16} />
                  Technical CV
                </button>
                <button
                  className="mobile-drawer-cv-btn secondary"
                  onClick={() => handleCVSelect("GENERAL")}
                >
                  <Download size={16} />
                  General CV
                </button>

                {mounted && (
                  <div className="mobile-drawer-theme">
                    <span>Appearance</span>
                    <button
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      {theme === "dark" ? (
                        <Sun size={15} />
                      ) : (
                        <Moon size={15} />
                      )}
                      {theme === "dark" ? "Light mode" : "Dark mode"}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
