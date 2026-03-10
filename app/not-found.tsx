"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 text-center transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Glowing background orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF9900]/5 blur-3xl" />
      </div>

      {/* 404 number */}
      <div className="relative mb-4">
        <span
          className="text-[10rem] md:text-[14rem] font-black leading-none select-none
            bg-gradient-to-br from-[#FF9900] via-[#0ea5e9] to-purple-500
            bg-clip-text text-transparent"
        >
          404
        </span>
      </div>

      {/* Message */}
      <h1 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3">
        Page not found
      </h1>
      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-10 text-sm md:text-base leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/homepage"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
            bg-[#FF9900] hover:bg-[#e68a00] text-white transition-colors duration-200 shadow-lg shadow-[#FF9900]/20"
        >
          <Home size={16} />
          Go Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
            border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
        >
          <ArrowLeft size={16} />
          Go Back
        </button>
      </div>
    </div>
  );
}
