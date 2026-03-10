import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Homepage() {
  return (
    <main className="relative min-h-screen bg-light-bg dark:bg-dark-bg text-slate-800 dark:text-slate-200 transition-colors duration-300">
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden />

      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-grid-light dark:bg-grid-dark bg-grid"
        aria-hidden
      />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
