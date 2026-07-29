"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { SITE } from "@/data/site";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const wordVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const letter = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function RevealWords({ text, className }) {
  return (
    <motion.span variants={wordVariants} initial="hidden" animate="show" className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top mr-[0.28em]">
          <motion.span variants={letter} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy-950 pt-32 pb-20">
      <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
      <div className="absolute -right-24 top-24 h-[420px] w-[420px] opacity-70 sm:h-[520px] sm:w-[520px]">
        <HeroScene />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-brass-500/30 bg-brass-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-brass-300">
          Sikar, Rajasthan · Est. Computer Institute &amp; College
        </span>

        <h1 className="mt-8 max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-ivory-50 sm:text-6xl">
          <RevealWords text="Where Sikar's careers" />
          <br />
          <RevealWords text="are built, one skill at a time." className="text-gradient-brass" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 max-w-xl text-lg text-ivory-100/70"
        >
          {SITE.name} blends a full degree college with a dedicated computer institute — BCA and MCA
          degrees alongside job-ready courses in web development, digital marketing, and data
          analytics, backed by a placement cell that stays with you until you're hired.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/admissions/form"
            className="group inline-flex items-center gap-2 rounded-xl bg-brass-500 px-6 py-3.5 font-semibold text-navy-950 shadow-glow transition-transform hover:-translate-y-0.5 focus-ring"
          >
            Start Your Admission
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/course-category/computer-courses"
            className="inline-flex items-center gap-2 rounded-xl glass-panel px-6 py-3.5 font-semibold text-ivory-50 transition-transform hover:-translate-y-0.5 focus-ring"
          >
            <PlayCircle size={18} />
            Explore Courses
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
