"use client";

import { useEffect, useRef, useState } from "react";
import { Download, FileText, Printer, Check } from "lucide-react";

const coverLetterData = {
  date: "March 2025",
  recipient: {
    name: "Hiring Manager",
    company: "Your Company Name",
    address: "Company Address, City, Country",
  },
  sender: {
    name: "Sok Kimheng",
    title: "Full Stack Developer & AWS Cloud Engineer",
    email: "sok.kimheng@email.com",
    phone: "+1 (555) 000-0000",
    location: "Phnom Penh, Cambodia",
    linkedin: "linkedin.com/in/sokkimheng",
    github: "github.com/sokkimheng",
  },
  paragraphs: [
    `I am writing to express my strong interest in a Senior Software Engineer / Full Stack Developer position at your esteemed organization. With over three years of hands-on experience building and scaling enterprise-grade applications at Amazon Web Services (AWS), I am confident that my technical depth, cloud expertise, and passion for delivering high-quality software make me an excellent fit for your team.`,
    `In my current role as a Software Development Engineer at AWS, I have architected and maintained serverless systems processing over 10 million daily requests, leveraging services such as AWS Lambda, API Gateway, DynamoDB, Kinesis, and S3. I successfully led the migration of a legacy monolithic platform to a microservices architecture — a project that reduced infrastructure costs by 40% and significantly improved system reliability to 99.9% uptime. Beyond technical execution, I have mentored junior engineers, established team-wide code review standards, and driven adoption of modern CI/CD practices that cut deployment cycles by 60%.`,
    `On the frontend, I bring extensive proficiency in React, Next.js, and TypeScript, crafting performant, accessible user interfaces supported by Tailwind CSS and component-driven design systems. On the backend, I have built robust REST and GraphQL APIs with Node.js and Python, underpinned by both relational (PostgreSQL) and NoSQL (DynamoDB, MongoDB) databases. I am equally comfortable with container orchestration via Docker and Kubernetes, infrastructure-as-code with Terraform and CloudFormation, and observability tooling including Prometheus and Elasticsearch.`,
    `What excites me most is the opportunity to contribute to an engineering culture that values technical excellence, continuous learning, and meaningful impact. I thrive in collaborative, agile environments where I can both lead technical decisions and learn from talented peers. I am particularly drawn to challenges that require balancing performance, scalability, and developer experience — areas where I have a proven track record.`,
    `I would welcome the opportunity to discuss how my background aligns with your team's goals. Thank you for your time and consideration. I look forward to the possibility of contributing to your organization's success.`,
  ],
  closing: "Warm regards,",
};

export default function CoverLetter() {
  const sectionRef = useRef<HTMLElement>(null);
  const printRef = useRef<HTMLDivElement>(null);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05, rootMargin: "0px 0px -60px 0px" }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handlePrintDownload = () => {
    // Open print dialog scoped to the cover letter
    const printWindow = window.open("", "_blank", "width=900,height=1200");
    if (!printWindow || !printRef.current) return;

    const content = printRef.current.innerHTML;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Cover Letter – Sok Kimheng</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: 'Outfit', Georgia, serif;
              font-size: 11pt;
              line-height: 1.75;
              color: #1a1a2e;
              background: #ffffff;
              padding: 56px 64px;
              max-width: 800px;
              margin: 0 auto;
            }
            .header-top {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              margin-bottom: 40px;
              padding-bottom: 24px;
              border-bottom: 2px solid #FF9900;
            }
            .sender-name {
              font-size: 22pt;
              font-weight: 700;
              color: #1a1a2e;
              letter-spacing: -0.5px;
            }
            .sender-title {
              font-size: 10pt;
              color: #FF9900;
              font-weight: 600;
              margin-top: 4px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .contact-info {
              text-align: right;
              font-size: 9pt;
              color: #555;
              line-height: 1.8;
            }
            .contact-info a { color: #555; text-decoration: none; }
            .date { margin-bottom: 28px; color: #666; font-size: 10pt; }
            .recipient { margin-bottom: 28px; }
            .recipient-name { font-weight: 600; color: #1a1a2e; }
            .recipient-detail { color: #555; font-size: 10pt; }
            .salutation { font-weight: 600; margin-bottom: 20px; color: #1a1a2e; }
            .body-para { margin-bottom: 16px; color: #333; text-align: justify; }
            .body-para:first-of-type::first-letter {
              font-size: 2em; font-weight: 700; float: left;
              line-height: 0.8; margin: 4px 6px 0 0; color: #FF9900;
            }
            .closing { margin-top: 32px; color: #1a1a2e; font-weight: 500; }
            .sig-name { font-size: 16pt; font-weight: 700; color: #1a1a2e; margin-top: 8px; }
            .sig-title { font-size: 10pt; color: #FF9900; font-weight: 600; }
            .footer-bar {
              margin-top: 48px;
              padding-top: 16px;
              border-top: 1px solid #eee;
              font-size: 8pt;
              color: #aaa;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="header-top">
            <div>
              <div class="sender-name">${coverLetterData.sender.name}</div>
              <div class="sender-title">${coverLetterData.sender.title}</div>
            </div>
            <div class="contact-info">
              <div>${coverLetterData.sender.email}</div>
              <div>${coverLetterData.sender.phone}</div>
              <div>${coverLetterData.sender.location}</div>
              <div>${coverLetterData.sender.linkedin}</div>
            </div>
          </div>
          <div class="date">${coverLetterData.date}</div>
          <div class="recipient">
            <div class="recipient-name">${coverLetterData.recipient.name}</div>
            <div class="recipient-detail">${coverLetterData.recipient.company}</div>
            <div class="recipient-detail">${coverLetterData.recipient.address}</div>
          </div>
          <div class="salutation">Dear ${coverLetterData.recipient.name},</div>
          ${coverLetterData.paragraphs.map((p) => `<p class="body-para">${p}</p>`).join("")}
          <div class="closing">${coverLetterData.closing}</div>
          <div class="sig-name">${coverLetterData.sender.name}</div>
          <div class="sig-title">${coverLetterData.sender.title}</div>
          <div class="footer-bar">${coverLetterData.sender.email} &nbsp;·&nbsp; ${coverLetterData.sender.phone} &nbsp;·&nbsp; ${coverLetterData.sender.location}</div>
        </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 500);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section
      id="cover-letter"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 dark:bg-slate-950 bg-white pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,153,0,0.07),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#FF9900]/10 text-[#FF9900] mb-4">
            For HR &amp; Recruiters
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Cover <span className="text-[#FF9900]">Letter</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-500 mb-6">
            A personal note to your hiring team
          </p>
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handlePrintDownload}
              className={`inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 shadow-lg
                ${downloaded
                  ? "bg-emerald-500 text-white shadow-emerald-500/30"
                  : "bg-[#FF9900] text-slate-900 hover:bg-orange-400 shadow-orange-500/30"
                }`}
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4" /> Print dialog opened!
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" /> Download as PDF
                </>
              )}
            </button>
            <button
              onClick={handlePrintDownload}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border dark:border-slate-700 border-slate-300 dark:hover:border-[#FF9900] hover:border-[#FF9900] hover:text-[#FF9900] transition-all hover:scale-105"
            >
              <Printer className="w-4 h-4" /> Print
            </button>
          </div>
        </div>

        {/* Cover Letter Display */}
        <div
          className="reveal glass rounded-2xl border dark:border-slate-700/60 border-slate-200 overflow-hidden shadow-2xl shadow-black/10"
          style={{ transitionDelay: "150ms" }}
        >
          {/* Top bar */}
          <div className="flex items-center gap-2 px-6 py-4 border-b dark:border-slate-700/60 border-slate-200 dark:bg-slate-900/40 bg-slate-50">
            <FileText className="w-4 h-4 text-[#FF9900]" />
            <span className="text-sm font-medium dark:text-slate-300 text-slate-600">
              Cover Letter — Sok Kimheng.pdf
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>
          </div>

          {/* Letter content */}
          <div
            ref={printRef}
            className="p-8 md:p-12 dark:bg-slate-950/20 bg-white"
          >
            {/* Letterhead */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10 pb-8 border-b-2 border-[#FF9900]">
              <div>
                <h1 className="text-2xl font-bold dark:text-white text-slate-900 tracking-tight">
                  {coverLetterData.sender.name}
                </h1>
                <p className="text-[#FF9900] font-semibold text-sm uppercase tracking-wider mt-1">
                  {coverLetterData.sender.title}
                </p>
              </div>
              <div className="text-right text-sm dark:text-slate-400 text-slate-500 space-y-1">
                <p>{coverLetterData.sender.email}</p>
                <p>{coverLetterData.sender.phone}</p>
                <p>{coverLetterData.sender.location}</p>
                <p>{coverLetterData.sender.linkedin}</p>
              </div>
            </div>

            {/* Date & recipient */}
            <p className="text-sm dark:text-slate-400 text-slate-500 mb-7">
              {coverLetterData.date}
            </p>
            <div className="mb-7">
              <p className="font-semibold dark:text-white text-slate-900">
                {coverLetterData.recipient.name}
              </p>
              <p className="text-sm dark:text-slate-400 text-slate-500">
                {coverLetterData.recipient.company}
              </p>
              <p className="text-sm dark:text-slate-400 text-slate-500">
                {coverLetterData.recipient.address}
              </p>
            </div>

            <p className="font-semibold dark:text-white text-slate-900 mb-6">
              Dear {coverLetterData.recipient.name},
            </p>

            {/* Paragraphs */}
            <div className="space-y-5">
              {coverLetterData.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="dark:text-slate-300 text-slate-700 leading-relaxed text-[15px]"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Closing */}
            <div className="mt-10">
              <p className="dark:text-slate-300 text-slate-700 mb-6">
                {coverLetterData.closing}
              </p>
              <p className="text-xl font-bold dark:text-white text-slate-900">
                {coverLetterData.sender.name}
              </p>
              <p className="text-[#FF9900] font-semibold text-sm mt-1">
                {coverLetterData.sender.title}
              </p>

              <div className="mt-8 pt-6 border-t dark:border-slate-700/50 border-slate-200 flex flex-wrap gap-x-6 gap-y-1 text-xs dark:text-slate-400 text-slate-500">
                <span>{coverLetterData.sender.email}</span>
                <span>{coverLetterData.sender.phone}</span>
                <span>{coverLetterData.sender.location}</span>
                <span>{coverLetterData.sender.github}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs dark:text-slate-500 text-slate-400 mt-5 reveal" style={{ transitionDelay: "250ms" }}>
          Click &quot;Download as PDF&quot; to open the print dialog — select &quot;Save as PDF&quot; in your browser for a clean export.
        </p>
      </div>
    </section>
  );
}
