"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/data";

export function Nav() {
  const [onLight, setOnLight] = useState(true);
  const [open, setOpen] = useState(false);

  // The hero is the only light section — flip the nav colours once past it.
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOnLight(entry.isIntersecting),
      { rootMargin: "-60px 0px -95% 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const tone = onLight ? "text-ink" : "text-cream";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${tone}`}
      >
        <div className="flex items-center justify-between px-5 py-4 sm:px-8 lg:px-14">
          <a
            href="#home"
            className="font-script text-2xl leading-none sm:text-3xl"
            aria-label={SITE.name}
          >
            {SITE.name.split(" ")[0].toLowerCase()}
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[11px] font-semibold uppercase tracking-wider2 transition-opacity hover:opacity-100"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-50 flex h-8 w-8 flex-col items-end justify-center gap-1.5"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 4, width: 22 } : { rotate: 0, y: 0, width: 22 }}
              className="block h-px bg-current"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -3, width: 22 } : { rotate: 0, y: 0, width: 14 }}
              className="block h-px bg-current"
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-ink px-8 sm:px-14"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl uppercase leading-[1.05] tracking-tight text-cream transition-colors hover:text-gold sm:text-7xl"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-wider2 text-ink-muted"
            >
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                {SITE.email}
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold">
                LinkedIn
              </a>
              <a href={SITE.github} target="_blank" rel="noreferrer" className="hover:text-gold">
                GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
