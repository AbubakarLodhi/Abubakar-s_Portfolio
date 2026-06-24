"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LANGUAGES, TOOL_LOGOS } from "@/lib/data";
import { sectionAttrs } from "@/lib/nav-sections";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface SkillsProps {
  compact?: boolean;
}

function LanguageGrid({ compact }: { compact: boolean }) {
  const cellClass = `group flex items-center gap-3 border border-white/[0.08] bg-black ${
    compact ? "px-3 py-2.5" : "px-4 py-3.5 transition-colors hover:border-accent-500/30 sm:px-5 sm:py-4"
  }`;

  return (
    <>
      <p
        className={`mb-4 font-bold uppercase tracking-[0.2em] text-zinc-500 ${
          compact ? "text-[10px]" : "text-xs"
        }`}
      >
        Languages & Frameworks
      </p>

      <div
        className={`grid gap-2 ${
          compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        }`}
      >
        {LANGUAGES.slice(0, -1).map((lang) => (
          <div key={lang} className={cellClass}>
            <span
              className={`shrink-0 rounded-full bg-accent-500/15 ${
                compact ? "h-1.5 w-1.5" : "h-2 w-2"
              }`}
            />
            <span
              className={`font-medium text-zinc-200 ${
                compact ? "text-[11px]" : "text-sm transition-colors group-hover:text-white"
              }`}
            >
              {lang}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex justify-center">
        <div
          className={`group flex w-full max-w-[calc(50%-0.25rem)] items-center gap-3 border border-white/[0.08] bg-black sm:max-w-[calc(33.333%-0.33rem)] lg:max-w-[calc(25%-0.375rem)] ${
            compact ? "px-3 py-2.5" : "px-4 py-3.5 transition-colors hover:border-accent-500/30 sm:px-5 sm:py-4"
          }`}
        >
          <span
            className={`shrink-0 rounded-full bg-accent-500/15 ${
              compact ? "h-1.5 w-1.5" : "h-2 w-2"
            }`}
          />
          <span
            className={`font-medium text-zinc-200 ${
              compact ? "text-[11px]" : "text-sm transition-colors group-hover:text-white"
            }`}
          >
            {LANGUAGES[LANGUAGES.length - 1]}
          </span>
        </div>
      </div>
    </>
  );
}

function ToolsRow({ compact }: { compact: boolean }) {
  const logos = compact ? TOOL_LOGOS : [...TOOL_LOGOS, ...TOOL_LOGOS];

  return (
    <div className={compact ? "mt-8" : ""}>
      <p
        className={`mb-4 font-bold uppercase tracking-[0.2em] text-zinc-500 ${
          compact ? "text-[10px]" : "text-xs"
        }`}
      >
        Tools & Platforms
      </p>

      <div
        className={`relative overflow-hidden border border-white/[0.08] bg-black/60 ${
          compact ? "py-3" : "py-6"
        }`}
        style={
          compact
            ? undefined
            : {
                maskImage:
                  "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
              }
        }
      >
        <div
          className={
            compact
              ? "flex flex-wrap justify-center gap-2 px-2"
              : "marquee-track flex w-max items-center gap-4 sm:gap-6"
          }
        >
          {logos.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className={`skill-pill flex shrink-0 items-center justify-center ${
                compact ? "h-9 min-w-[72px] px-2" : "h-16 min-w-[130px] px-6"
              }`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={compact ? 56 : 100}
                height={compact ? 22 : 40}
                className={`w-auto object-contain opacity-90 ${
                  compact ? "h-5" : "h-9 transition-opacity hover:opacity-100"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Skills({ compact = false }: SkillsProps) {
  return (
    <section
      {...sectionAttrs("skills", compact)}
      className={compact ? "section-pad-compact bg-surface-100" : "section-pad bg-surface-100"}
    >
      <div className={compact ? "" : "container-main"}>
        <SectionHeader
          label="Skills"
          title={compact ? "Tech Stack" : "Skills & Technologies"}
          subtitle={
            compact
              ? undefined
              : "Languages, frameworks, and tools I use to build and deliver quality software."
          }
          light
          compact={compact}
        />

        {compact ? (
          <div className="mb-6">
            <LanguageGrid compact />
            <ToolsRow compact />
          </div>
        ) : (
          <>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
              className="mb-14"
            >
              <motion.div variants={fadeUp}>
                <LanguageGrid compact={false} />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
            >
              <ToolsRow compact={false} />
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
