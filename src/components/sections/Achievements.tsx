"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, BadgeCheck, Award } from "lucide-react";
import { achievementsData } from "../../data/portfolioData";

const categoryIcons = {
  competition: Trophy,
  certification: BadgeCheck,
  award: Award,
};

const categoryLabels = {
  competition: "Competition",
  certification: "Certification",
  award: "Award",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Achievements = () => {
  const [filter, setFilter] = useState("all");

  const filters = ["all", "competition", "certification", "award"];

  const filtered =
    filter === "all"
      ? achievementsData
      : achievementsData.filter((a) => a.category === filter);

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Milestones & Recognition</span>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Competitions, certifications, and moments that shaped my journey
          </p>
        </motion.div>

        <motion.div
          className="achievements-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              className={`achievement-filter-btn${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          key={filter}
        >
          {filtered.map((item) => {
            const Icon =
              categoryIcons[item.category as keyof typeof categoryIcons] ??
              Award;
            return (
              <motion.div
                key={item.id}
                className="achievement-card"
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="achievement-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="achievement-img"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                      const fallback =
                        e.currentTarget.parentElement?.querySelector(
                          ".achievement-img-fallback",
                        ) as HTMLElement | null;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="achievement-img-fallback">
                    <Icon size={40} />
                  </div>
                  <div className="achievement-category-badge">
                    <Icon size={12} />
                    {categoryLabels[
                      item.category as keyof typeof categoryLabels
                    ] ?? item.category}
                  </div>
                  {item.placement && (
                    <div className="achievement-placement-badge">
                      {item.placement}
                    </div>
                  )}
                </div>

                <div className="achievement-content">
                  <div className="achievement-meta">
                    <span className="achievement-year">{item.year}</span>
                    <span className="achievement-org">{item.organization}</span>
                  </div>
                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
