"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, description, align = "left", light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      {eyebrow && (
        <span
          className={cn(
            "font-mono text-xs uppercase tracking-[0.2em]",
            light ? "text-brass-300" : "text-brass-600"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-semibold sm:text-4xl",
          light ? "text-ivory-50" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed", light ? "text-ivory-100/70" : "text-ink-500")}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
