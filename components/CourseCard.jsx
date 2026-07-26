"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

export default function CourseCard({ course }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-40, 40], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-40, 40], [-6, 6]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative rounded-xl2 border border-brass-500/15 bg-ivory-50 p-6 shadow-premium transition-shadow hover:shadow-glow"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-brass-600">
        {course.category.replace(/-/g, " ")}
      </span>
      <h3 className="mt-2 font-display text-xl font-semibold text-navy-950">{course.shortTitle}</h3>
      <p className="mt-2 text-sm text-ink-500 line-clamp-2">{course.tagline}</p>
      <div className="mt-4 flex items-center gap-2 text-xs text-ink-500">
        <Clock size={14} className="text-brass-500" />
        {course.duration}
      </div>
      <Link
        href={`/courses/${course.slug}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-950 focus-ring"
      >
        View Course
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  );
}
