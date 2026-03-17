"use client";

import {
  Download,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";
import Link from "next/link";
import {
  profileData,
  skillsData,
  educationData,
  journeyData,
  projectsData,
  achievementsData,
} from "@/data/portfolioData";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);
  const mainJourney = journeyData.filter((j) => j.year !== "Ongoing");

  return (
    <>
      {/* Toolbar — hidden when printing */}
      <div className="resume-toolbar no-print">
        <Link href="/" className="resume-back-btn">
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
        <button onClick={handlePrint} className="resume-print-btn">
          <Download size={16} />
          Download PDF
        </button>
      </div>

      {/* Resume document */}
      <div className="resume-page">
        <div className="resume-doc">
          {/* ── Header ── */}
          <header className="resume-doc-header">
            <div className="resume-doc-name-block">
              <h1 className="resume-doc-name">{profileData.name}</h1>
              <p className="resume-doc-title">{profileData.title}</p>
              <p className="resume-doc-tagline">{profileData.tagline}</p>
            </div>
            <ul className="resume-doc-contact">
              <li>
                <Mail size={12} />
                <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
              </li>
              <li>
                <Phone size={12} />
                <span>{profileData.phone}</span>
              </li>
              <li>
                <MapPin size={12} />
                <span>{profileData.location}</span>
              </li>
              <li>
                <Github size={12} />
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Kimheng-SOK
                </a>
              </li>
              <li>
                <Linkedin size={12} />
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </header>

          {/* ── Summary ── */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Summary</h2>
            <p className="resume-summary-text">{profileData.summary}</p>
          </section>

          {/* ── Technical Skills ── */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Technical Skills</h2>
            <div className="resume-skills-table">
              {(
                [
                  ["Languages", skillsData.languages],
                  ["Frontend", skillsData.frontend],
                  ["Backend", skillsData.backend],
                  ["Database", skillsData.database],
                  ["Tools", skillsData.tools],
                ] as [string, { name: string }[]][]
              ).map(([label, items]) => (
                <div key={label} className="resume-skills-row">
                  <span className="resume-skills-label">{label}</span>
                  <span className="resume-skills-values">
                    {items.map((s) => s.name).join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Experience ── */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Experience &amp; Journey</h2>
            {mainJourney.map((entry, i) => (
              <div key={i} className="resume-entry">
                <div className="resume-entry-row">
                  <span className="resume-entry-title">{entry.title}</span>
                  <span className="resume-entry-year">{entry.year}</span>
                </div>
                <p className="resume-entry-desc">{entry.description}</p>
                {entry.achievements && entry.achievements.length > 0 && (
                  <ul className="resume-entry-bullets">
                    {entry.achievements.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          {/* ── Education ── */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Education</h2>
            {educationData.map((edu, i) => (
              <div key={i} className="resume-entry">
                <div className="resume-entry-row">
                  <span className="resume-entry-title">{edu.degree}</span>
                  <span className="resume-entry-year">{edu.year}</span>
                </div>
                <p className="resume-entry-org">{edu.school}</p>
                <p className="resume-entry-desc">{edu.description}</p>
                {edu.achievements && (
                  <ul className="resume-entry-bullets">
                    {edu.achievements.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          {/* ── Projects ── */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Projects</h2>
            {featuredProjects.map((project) => (
              <div key={project.id} className="resume-entry">
                <div className="resume-entry-row">
                  <span className="resume-entry-title">{project.title}</span>
                  <span className="resume-entry-year">{project.type}</span>
                </div>
                <div className="resume-project-meta">
                  <span className="resume-entry-org">{project.role}</span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-project-link"
                    >
                      <Globe size={11} />
                      {project.liveUrl}
                    </a>
                  )}
                </div>
                <p className="resume-entry-desc">{project.description}</p>
                <div className="resume-tech-tags">
                  {project.technologies.map((t) => (
                    <span key={t} className="resume-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* ── Achievements ── */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Achievements</h2>
            {achievementsData.map((ach) => (
              <div key={ach.id} className="resume-entry">
                <div className="resume-entry-row">
                  <span className="resume-entry-title">{ach.title}</span>
                  <span className="resume-entry-year">{ach.year}</span>
                </div>
                <div className="resume-achievement-meta">
                  <span className="resume-entry-org">{ach.organization}</span>
                  {ach.placement && (
                    <span className="resume-placement-chip">
                      {ach.placement}
                    </span>
                  )}
                </div>
                <p className="resume-entry-desc">{ach.description}</p>
              </div>
            ))}
          </section>

          {/* ── Languages ── */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Languages</h2>
            <div className="resume-lang-row">
              {profileData.languages.map((lang) => (
                <span key={lang} className="resume-lang-chip">
                  {lang}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
