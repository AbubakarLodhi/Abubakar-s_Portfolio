"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { notifyIntroReady } from "@/lib/intro-ready";

const COLUMNS = 6;
const COUNT_DURATION = 1900;

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [percent, setPercent] = useState(0);
  const [wiping, setWiping] = useState(false);
  const finished = useRef(false);

  const finish = useRef(() => {
    if (finished.current) return;
    finished.current = true;
    document.body.style.overflow = "";
    notifyIntroReady();
  });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      finish.current();
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_DURATION);
      // Ease-out so the last digits slow down.
      setPercent(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setWiping(true);
      }
    };

    frame = requestAnimationFrame(tick);

    // Safety net: never trap the page behind the loader.
    const bail = window.setTimeout(() => {
      finish.current();
      setVisible(false);
    }, 6000);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(bail);
      finish.current();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] overflow-hidden bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* Counter + arc */}
          <motion.div
            animate={{ opacity: wiping ? 0 : 1, y: wiping ? -24 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8"
          >
            <span className="font-display text-6xl leading-none tracking-tight text-gold-light sm:text-7xl">
              {percent}%
            </span>

            <svg viewBox="0 0 100 100" className="h-16 w-16 animate-spin [animation-duration:1.1s]">
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                className="text-gold-light"
                strokeDasharray="180 240"
              />
            </svg>
          </motion.div>

          {/* Cream columns wipe up to hand off to the hero */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: COLUMNS }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: wiping ? 1 : 0 }}
                transition={{
                  duration: 0.55,
                  delay: wiping ? i * 0.06 : 0,
                  ease: [0.76, 0, 0.24, 1],
                }}
                onAnimationComplete={() => {
                  if (wiping && i === COLUMNS - 1) {
                    finish.current();
                    setVisible(false);
                  }
                }}
                style={{ transformOrigin: "bottom" }}
                className="h-full flex-1 bg-cream"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
