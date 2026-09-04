"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Code2, Layers, Server, type LucideIcon } from "lucide-react";
import { EXPERTISE, LANGUAGES } from "@/lib/data";
import { FloatingTech } from "@/components/creative/FloatingTech";
import { Reveal } from "@/components/creative/Reveal";

const ICONS: Record<(typeof EXPERTISE)[number]["icon"], LucideIcon> = {
  layers: Layers,
  code: Code2,
  server: Server,
  bot: Bot,
};

const PREVIEW_TINTS = [
  "from-[#7c5cff] to-[#4a2fd6]",
  "from-[#c6b281] to-[#8a7647]",
  "from-[#2f8fd6] to-[#1b5a8a]",
  "from-[#d65c3a] to-[#8a3320]",
];

export function Expertise() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="expertise"
      className="grid-lines relative overflow-hidden border-t border-ink-line bg-ink py-20 lg:py-28"
    >
      <div className="container-main relative">
        <p className="eyebrow">
          03 <span className="mx-2 text-gold/50">—</span> Expertise
        </p>

        <div className="mt-10 grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          {/* Left column */}
          <div className="relative">
            <FloatingTech className="opacity-70 lg:opacity-100" />

            <div className="relative z-10">
            <Reveal
              as="h2"
              duration={0.8}
              className="relative font-heavy text-[clamp(2rem,5vw,3.25rem)] uppercase leading-[0.95] tracking-tight"
            >
              <>
                <span className="block text-cream/50">My</span>
                <span className="block text-cream">Expertise</span>
              </>
            </Reveal>

            <Reveal
              as="p"
              delay={0.12}
              duration={0.7}
              className="relative mt-6 max-w-sm text-base leading-relaxed text-cream/85"
            >
              <>
                I design and build digital products where{" "}
                <span className="text-gold">design, code and data</span> work as one.
              </>
            </Reveal>

            <Reveal
              as="p"
              delay={0.2}
              duration={0.7}
              className="relative mt-4 max-w-sm text-sm leading-relaxed text-ink-muted"
            >
              From expressive interfaces to the services behind them, I combine full
              stack engineering with a bias toward clarity and performance.
            </Reveal>

            <Reveal delay={0.28} className="relative mt-8 flex flex-wrap gap-2">
              <>
                {LANGUAGES.slice(0, 6).map((lang) => (
                  <span
                    key={lang}
                    className="rounded-md border border-ink-line bg-ink/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider2 text-ink-muted backdrop-blur-sm"
                  >
                    {lang}
                  </span>
                ))}
              </>
            </Reveal>
            </div>
          </div>

          {/* Right column — the list */}
          <div
            className="relative border-t border-ink-line"
            onMouseLeave={() => setActive(null)}
          >
            {EXPERTISE.map((item, i) => {
              const Icon = ICONS[item.icon];
              const isActive = active === i;

              return (
                <Reveal key={item.number} delay={i * 0.08} duration={0.65}>
                  <div
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(active === i ? null : i)}
                    className="group relative flex cursor-pointer items-start gap-5 border-b border-ink-line px-2 py-6 sm:px-4"
                  >
                    {/* Gold indicator bar */}
                    <motion.span
                      animate={{ scaleY: isActive ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-0 h-full w-[2px] bg-gold"
                    />

                    <span className="mt-1 hidden text-[10px] font-semibold tracking-wider2 text-ink-faint sm:block">
                      {item.number}
                    </span>

                    <motion.span
                      animate={{
                        borderColor: isActive ? "rgba(198,178,129,0.6)" : "#232323",
                        color: isActive ? "#c6b281" : "#8a8a8a",
                      }}
                      className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md border"
                    >
                      <Icon size={16} strokeWidth={1.6} />
                    </motion.span>

                    <div className="min-w-0 flex-1">
                      <motion.h3
                        animate={{ color: isActive ? "#c6b281" : "#f1eae0" }}
                        transition={{ duration: 0.25 }}
                        className="text-lg font-medium tracking-tight sm:text-xl"
                      >
                        {item.title}
                      </motion.h3>

                      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[9px] font-semibold uppercase tracking-wider2 text-ink-faint">
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <motion.span
                      animate={{
                        x: isActive ? 3 : 0,
                        y: isActive ? -3 : 0,
                        color: isActive ? "#c6b281" : "#5c5c5c",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 24 }}
                      className="mt-1 shrink-0"
                    >
                      <ArrowUpRight size={16} />
                    </motion.span>

                    {/* Preview card that pops out on hover */}
                    <motion.div
                      initial={false}
                      animate={
                        isActive
                          ? { opacity: 1, scale: 1, rotate: -4 }
                          : { opacity: 0, scale: 0.75, rotate: 4 }
                      }
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className={`pointer-events-none absolute right-3 top-3 h-16 w-20 rounded-xl bg-gradient-to-br shadow-2xl sm:right-8 sm:top-1/2 sm:h-24 sm:w-32 sm:-translate-y-1/2 ${PREVIEW_TINTS[i % PREVIEW_TINTS.length]}`}
                    >
                      <div className="grid h-full place-items-center">
                        <Icon size={30} strokeWidth={1.4} className="text-white/90" />
                      </div>
                    </motion.div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
