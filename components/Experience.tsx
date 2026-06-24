"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EXPERIENCE } from "@/lib/data";
import { sectionAttrs } from "@/lib/nav-sections";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface ExperienceProps {
  compact?: boolean;
}

function ExperienceItem({
  item,
  compact,
}: {
  item: (typeof EXPERIENCE.items)[number];
  compact: boolean;
}) {
  return (
    <>
      <span
        className={`absolute bg-accent-500 ${
          compact
            ? "-left-[calc(1rem+3px)] top-1.5 h-1.5 w-1.5"
            : "-left-[calc(1.5rem+4px)] top-2 h-2 w-2 sm:-left-[calc(2rem+4px)]"
        }`}
      />

      <span
        className={`border border-accent-500/30 font-bold uppercase tracking-wider text-accent-500 ${
          compact ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs"
        }`}
      >
        {item.badge}
      </span>

      <h3
        className={`mt-2 font-display font-bold text-white ${
          compact ? "text-sm" : "text-xl"
        }`}
      >
        {item.role}
      </h3>
      <p
        className={`font-semibold text-zinc-400 ${
          compact ? "mb-2 text-xs" : "mb-4 text-sm"
        }`}
      >
        {item.company}
      </p>

      <ul className={compact ? "space-y-1.5" : "space-y-2"}>
        {item.points.map((point) => (
          <li
            key={point}
            className={`relative pl-4 leading-relaxed text-zinc-500 before:absolute before:left-0 before:text-accent-500 before:content-['→'] ${
              compact ? "text-[11px]" : "text-sm"
            }`}
          >
            {point}
          </li>
        ))}
      </ul>
    </>
  );
}

export function Experience({ compact = false }: ExperienceProps) {
  const timelineClass = `relative border-l border-accent-500/40 ${
    compact ? "pl-4" : "pl-6 sm:pl-8"
  }`;

  return (
    <section
      {...sectionAttrs("experience", compact)}
      className={compact ? "section-pad-compact bg-black" : "section-pad bg-black"}
    >
      <div className={compact ? "" : "container-main"}>
        <SectionHeader
          label={EXPERIENCE.label}
          title={EXPERIENCE.title}
          subtitle={compact ? undefined : EXPERIENCE.subtitle}
          light
          compact={compact}
        />

        {compact ? (
          <div className={timelineClass}>
            {EXPERIENCE.items.map((item) => (
              <article
                key={item.company}
                className="relative pb-6 last:pb-0"
              >
                <ExperienceItem item={item} compact />
              </article>
            ))}
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className={timelineClass}
          >
            {EXPERIENCE.items.map((item) => (
              <motion.article
                key={item.company}
                variants={fadeUp}
                className="relative pb-10 last:pb-0"
              >
                <ExperienceItem item={item} compact={false} />
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
