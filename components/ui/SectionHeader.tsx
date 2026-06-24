"use client";

import { motion } from "framer-motion";
import { fadeUp, lineGrow, viewport } from "@/lib/animations";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  compact?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
  compact = false,
}: SectionHeaderProps) {
  const labelClass = `mb-2 inline-block font-bold uppercase tracking-[0.2em] text-accent-500 ${
    compact ? "text-[10px]" : "text-xs"
  }`;
  const lineClass = `mb-3 origin-left bg-accent-500 ${
    compact ? "mb-3 h-px w-10" : "mb-5 h-0.5 w-16"
  }`;
  const titleClass = `font-display font-bold tracking-tight ${
    compact ? "text-lg" : "text-2xl sm:text-3xl md:text-4xl"
  } ${light ? "text-white" : "text-white"}`;
  const subtitleClass = `mt-2 text-zinc-400 ${
    compact ? "text-xs leading-relaxed" : "mt-3 max-w-xl text-base"
  }`;

  if (compact) {
    return (
      <div className="mb-5">
        <span className={labelClass}>{label}</span>
        <div className={lineClass} />
        <h2 className={`font-display text-base font-bold tracking-tight text-white`}>
          {title}
        </h2>
        {subtitle && <p className={subtitleClass}>{subtitle}</p>}
      </div>
    );
  }

  return (
    <div className="mb-10 sm:mb-12 md:mb-14">
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        className={labelClass}
      >
        {label}
      </motion.span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={lineGrow}
        className={lineClass}
      />

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        transition={{ delay: 0.08 }}
        className={titleClass}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          transition={{ delay: 0.14 }}
          className={subtitleClass}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
