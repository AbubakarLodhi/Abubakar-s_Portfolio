"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  /** Render inside the phone screen instead of full-page overlay */
  contained?: boolean;
}

export function ProjectModal({ project, onClose, contained = false }: ProjectModalProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (contained) {
      setPortalRoot(document.getElementById("phone-modal-root"));
    }
  }, [contained]);

  useEffect(() => {
    if (!project) return;

    const phoneScroll = document.getElementById("phone-scroll");

    if (contained) {
      if (phoneScroll) phoneScroll.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "hidden";
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      if (contained) {
        if (phoneScroll) phoneScroll.style.overflow = "";
      } else {
        document.body.style.overflow = "";
      }
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, contained, handleKey]);

  const modal = (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={
            contained
              ? "pointer-events-auto absolute inset-0 z-50 flex items-end justify-center"
              : "fixed inset-0 z-[200] flex items-end justify-center p-3 sm:items-center sm:p-4"
          }
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: contained ? 20 : 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: contained ? 16 : 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={
              contained
                ? "relative z-10 max-h-full w-full overflow-y-auto border-t border-accent-500/30 bg-black shadow-glow"
                : "relative z-10 max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-t-xl border border-accent-500/30 bg-black shadow-glow sm:max-h-[85dvh] sm:rounded-none"
            }
          >
            <header
              className={
                contained
                  ? "flex items-center justify-between p-3 pb-0"
                  : "flex items-center justify-between p-5 pb-0"
              }
            >
              <span className="border border-accent-500/40 bg-accent-500/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-accent-500">
                Project {project.number}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center border border-white/20 text-zinc-400 hover:text-white"
                aria-label="Close"
              >
                <X size={contained ? 14 : 16} />
              </button>
            </header>

            <div className={contained ? "mx-3 mt-3 h-px bg-accent-500" : "mx-5 mt-4 h-px bg-accent-500"} />

            <div className={contained ? "p-3" : "p-5"}>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-500">
                Overview
              </p>
              <h2
                id="modal-title"
                className={
                  contained
                    ? "mt-1.5 font-display text-sm font-bold text-white"
                    : "mt-2 font-display text-xl font-bold text-white"
                }
              >
                {project.title}
              </h2>

              <div className="mt-2 flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 px-1.5 py-0.5 text-[9px] text-zinc-400 sm:text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p
                className={
                  contained
                    ? "mt-3 text-[11px] leading-relaxed text-zinc-400"
                    : "mt-4 text-sm leading-relaxed text-zinc-400"
                }
              >
                {project.body}
              </p>

              <ul className={contained ? "mt-3 space-y-1.5" : "mt-4 space-y-2"}>
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className={
                      contained
                        ? "relative pl-3 text-[10px] text-zinc-500 before:absolute before:left-0 before:top-1 before:h-1 before:w-1 before:bg-accent-500"
                        : "relative pl-4 text-xs text-zinc-500 before:absolute before:left-0 before:top-1.5 before:h-1 before:w-1 before:bg-accent-500"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <footer
              className={
                contained
                  ? "border-t border-white/10 p-3"
                  : "border-t border-white/10 p-5"
              }
            >
              <Button
                variant="dark"
                onClick={onClose}
                className={contained ? "w-full text-xs" : "w-full sm:w-auto"}
              >
                Close
              </Button>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (contained) {
    if (!portalRoot) return null;
    return createPortal(modal, portalRoot);
  }

  return modal;
}
