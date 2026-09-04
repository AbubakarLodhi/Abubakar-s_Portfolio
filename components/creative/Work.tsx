"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { DISCIPLINE_MARQUEE, PROJECTS, TECH_MARQUEE, type Project } from "@/lib/data";
import { GooeyWord } from "@/components/creative/GooeyWord";
import { Marquee } from "@/components/creative/Marquee";
import { Reveal } from "@/components/creative/Reveal";
import { RotatingBadge } from "@/components/creative/RotatingBadge";
import { TouchableString } from "@/components/creative/TouchableString";

const CARD_TINTS = [
  "from-[#1d1b16] via-[#12110e] to-[#0a0a0a]",
  "from-[#16191d] via-[#0f1113] to-[#0a0a0a]",
  "from-[#1d1616] via-[#131010] to-[#0a0a0a]",
  "from-[#161d1a] via-[#101312] to-[#0a0a0a]",
  "from-[#1a1620] via-[#121016] to-[#0a0a0a]",
  "from-[#1d1a16] via-[#131110] to-[#0a0a0a]",
];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <Reveal>
    <article
      onClick={onOpen}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-ink-line bg-gradient-to-br ${CARD_TINTS[index % CARD_TINTS.length]} px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-20`}
    >
      {/* Ghost numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[10rem] leading-none text-cream/[0.035] transition-transform duration-700 group-hover:scale-110 sm:text-[16rem]"
      >
        {project.number}
      </span>

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0 max-w-2xl">
          <p className="eyebrow">
            {project.tags[0]} project <span className="mx-2 text-gold/50">—</span>{" "}
            {project.number}
          </p>

          <h3 className="mt-4 text-[clamp(1.75rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-tight text-cream">
            {project.title}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
            {project.shortDesc}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-ink-line px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider2 text-ink-muted transition-colors group-hover:border-gold/40 group-hover:text-gold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <RotatingBadge
            text="VIEW PROJECT · VIEW PROJECT ·"
            tone="cream"
            onClick={onOpen}
          />
        </div>
      </div>

      {/* Hover sheen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-gold/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
    </Reveal>
  );
}

export function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);

  return (
    <>
      <section
        id="work"
        className="grid-lines relative overflow-hidden border-t border-ink-line bg-ink pb-20 pt-16 lg:pb-28"
      >
        <Marquee
          items={TECH_MARQUEE}
          duration={38}
          separator="·"
          className="border-y border-ink-line py-3"
          itemClassName="text-ink-faint"
        />

        <div className="container-main mt-14 flex flex-col items-center">
          <p className="text-[11px] font-semibold uppercase tracking-wider2 text-cream/80">
            Scroll to explore my
          </p>
          <TouchableString axis="vertical" tone="gold" className="mt-3 h-12" />

          <div className="mt-6 w-full max-w-[min(100%,72rem)]">
            <GooeyWord text="WORK" />
          </div>
        </div>

        <Marquee
          items={DISCIPLINE_MARQUEE}
          direction="right"
          duration={30}
          className="border-y border-ink-line py-3"
          itemClassName="text-cream/80"
        />

        {/* Statement */}
        <div className="container-main relative mt-20">
          <Reveal
            as="h2"
            duration={0.9}
            className="font-heavy text-[clamp(2rem,8vw,6rem)] uppercase leading-[0.92] tracking-tight text-cream/10"
          >
            <>
              I build web apps
              <br />
              that feel alive.
            </>
          </Reveal>

          <p className="mt-6 text-[11px] font-semibold uppercase tracking-wider2 text-gold">
            My Work
          </p>

          <div className="mt-8 space-y-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detail overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              className="max-h-[85svh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-ink-line bg-ink-card p-6 sm:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="eyebrow">Project {selected.number}</p>
                  <h3 className="mt-2 text-2xl font-medium tracking-tight text-cream sm:text-3xl">
                    {selected.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink-line text-ink-muted transition-colors hover:border-gold hover:text-gold"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-ink-line px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider2 text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-ink-muted">{selected.body}</p>

              <p className="mt-8 text-[10px] font-semibold uppercase tracking-wider3 text-ink-faint">
                Key highlights
              </p>
              <ul className="mt-4 space-y-3">
                {selected.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-cream/85">
                    <ArrowUpRight size={15} className="mt-0.5 shrink-0 text-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
