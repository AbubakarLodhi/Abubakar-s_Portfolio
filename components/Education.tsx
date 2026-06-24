"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EDUCATION } from "@/lib/data";
import { sectionAttrs } from "@/lib/nav-sections";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface EducationProps {
  compact?: boolean;
}

function EducationCard({
  item,
  compact,
}: {
  item: (typeof EDUCATION.items)[number];
  compact: boolean;
}) {
  return (
    <div className={`flex items-start ${compact ? "gap-3" : "gap-4"}`}>
      <div
        className={`flex shrink-0 items-center justify-center bg-accent-500 text-white ${
          compact ? "h-9 w-9" : "h-12 w-12"
        }`}
      >
        <GraduationCap size={compact ? 16 : 24} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span
            className={`bg-accent-500/20 font-bold uppercase tracking-wider text-accent-500 ${
              compact ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs"
            }`}
          >
            {item.period}
          </span>
          <span
            className={`font-semibold text-zinc-500 ${
              compact ? "text-[10px]" : "text-sm"
            }`}
          >
            GPA: {item.gpa}
          </span>
        </div>
        <h3
          className={`mt-2 font-display font-bold text-white ${
            compact ? "text-sm" : "text-xl"
          }`}
        >
          {item.degree}
        </h3>
        <p
          className={`font-semibold text-zinc-400 ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          {item.school}
        </p>

        <div className={compact ? "mt-3" : "mt-5"}>
          <p
            className={`mb-2 font-bold uppercase tracking-wider text-zinc-500 ${
              compact ? "text-[10px]" : "text-xs"
            }`}
          >
            {compact ? "Coursework" : "Relevant Coursework"}
          </p>
          <div className={`flex flex-wrap ${compact ? "gap-1.5" : "gap-2"}`}>
            {item.coursework.map((course) => (
              <span
                key={course}
                className={`border border-white/10 bg-surface-50 text-zinc-400 ${
                  compact ? "px-2 py-1 text-[10px]" : "px-3 py-1.5 text-xs"
                }`}
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Education({ compact = false }: EducationProps) {
  return (
    <section
      {...sectionAttrs("education", compact)}
      className={compact ? "section-pad-compact bg-surface-100" : "section-pad bg-surface-100"}
    >
      <div className={compact ? "" : "container-main"}>
        <SectionHeader
          label={EDUCATION.label}
          title={EDUCATION.title}
          subtitle={compact ? undefined : EDUCATION.subtitle}
          light
          compact={compact}
        />

        {compact ? (
          <div className="space-y-4">
            {EDUCATION.items.map((item) => (
              <article
                key={item.school}
                className="border border-white/10 bg-black p-4"
              >
                <EducationCard item={item} compact />
              </article>
            ))}
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="space-y-4 sm:space-y-6"
          >
            {EDUCATION.items.map((item) => (
              <motion.article
                key={item.school}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="border border-white/10 bg-black p-6 sm:p-8"
              >
                <EducationCard item={item} compact={false} />
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
