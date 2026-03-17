"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="not-found-page">
      {/* Blurred blobs in background */}
      <div className="not-found-blob not-found-blob--1" />
      <div className="not-found-blob not-found-blob--2" />

      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Big 404 */}
        <motion.div
          className="not-found-code"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          404
        </motion.div>

        <motion.h1
          className="not-found-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="not-found-desc"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Looks like this page wandered off. Let&apos;s get you back on track.
        </motion.p>

        <motion.div
          className="not-found-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link href="/" className="not-found-btn-primary">
            <Home size={16} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="not-found-btn-ghost"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
