"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HERO_DISPLAY, SITE } from "@/lib/data";
import { LiquidText } from "@/components/creative/LiquidText";
import { RotatingBadge } from "@/components/creative/RotatingBadge";
import { TouchableString } from "@/components/creative/TouchableString";
import { isIntroReady, onIntroReady } from "@/lib/intro-ready";

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const [ready, setReady] = useState(isIntroReady);

  useEffect(() => onIntroReady(() => setReady(true)), []);

  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col overflow-hidden bg-cream text-ink"
    >
      <div className="flex flex-1 flex-col justify-center px-5 pb-28 pt-24 sm:px-8 lg:px-14">
        <motion.div
          variants={rise}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <LiquidText
            text={HERO_DISPLAY.word}
            className="mx-auto w-full max-w-[min(100%,68rem)] text-ink"
          />
        </motion.div>

        <motion.h1
          variants={rise}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="-mt-1 text-center font-heavy text-[clamp(1.6rem,5.2vw,4rem)] uppercase leading-none tracking-tight"
        >
          {HERO_DISPLAY.sub}
          <span className="sr-only"> — {SITE.name}</span>
        </motion.h1>

        <motion.div
          variants={rise}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 flex items-center justify-center gap-4 text-[10px] font-semibold uppercase tracking-wider2 text-ink/70 sm:gap-8 sm:text-[11px]"
        >
          {HERO_DISPLAY.tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-4 sm:gap-8">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-ink/40" />}
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          variants={rise}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-9 flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-wider2 text-ink/60 transition-colors hover:text-ink"
        >
          Scroll to explore
          <TouchableString axis="vertical" tone="ink" className="h-14" />
        </motion.a>
      </div>

      {/* Corner furniture */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between px-5 pb-6 sm:px-8 lg:px-14"
      >
        <p className="text-[10px] uppercase tracking-wider2 text-ink/60">
          ©{new Date().getFullYear()}{" "}
          <span className="font-script text-base normal-case tracking-normal">
            {SITE.name.split(" ")[0].toLowerCase()}
          </span>
        </p>

        <div className="pointer-events-auto flex flex-col items-center gap-3">
          <RotatingBadge text={HERO_DISPLAY.badge} tone="ink" />
          <p className="text-[10px] font-semibold uppercase tracking-wider2 text-ink/70">
            {HERO_DISPLAY.based}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
