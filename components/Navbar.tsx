"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { NAV_ACTIVE_GROUPS, type MainSectionId } from "@/lib/nav-sections";
import { scrollToSection, getActiveSection } from "@/lib/scroll";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("portfolio");

  const updateActive = useCallback(() => {
    setActive(getActiveSection());
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        updateActive();
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateActive]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    scrollToSection(href.slice(1));
    setMenuOpen(false);
  };

  const isActive = (href: string) => {
    const key = href.slice(1);
    const group = NAV_ACTIVE_GROUPS[key];
    if (group) return group.includes(active as MainSectionId);
    return active === key;
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-shadow duration-300 ${
          scrolled ? "glass-nav shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-[max(1rem,env(safe-area-inset-left))] sm:px-6 lg:px-10 xl:px-16">
          <motion.button
            type="button"
            onClick={() => scrollToSection("portfolio")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`font-display text-xl font-extrabold tracking-tighter transition-colors sm:text-2xl ${
              active === "portfolio" ? "text-accent-500" : "text-white"
            }`}
          >
            AKL<span className="text-accent-500">.</span>
          </motion.button>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-white md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className="hidden items-center gap-3 md:gap-4 lg:gap-5 xl:gap-8 md:flex">
            {NAV_LINKS.map((link, i) => {
              const isContact = link.href === "#contact";

              return (
                <motion.button
                  key={link.href}
                  type="button"
                  onClick={() => handleNav(link.href)}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ y: -1 }}
                  className={
                    isContact
                      ? `rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all md:px-5 md:text-xs ${
                          isActive(link.href)
                            ? "bg-accent-600 text-white shadow-glow-sm"
                            : "bg-accent-500 text-white hover:bg-accent-600 hover:shadow-glow-sm"
                        }`
                      : `text-xs font-medium tracking-wide transition-colors md:text-sm ${
                          isActive(link.href)
                            ? "text-accent-500"
                            : "text-zinc-400 hover:text-white"
                        }`
                  }
                >
                  {link.label}
                </motion.button>
              );
            })}
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[calc(4rem+env(safe-area-inset-top))] z-40 bg-black/70 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top))] z-50 max-h-[calc(100dvh-4rem-env(safe-area-inset-top))] overflow-y-auto border-b border-white/10 bg-black p-4 shadow-xl md:hidden"
            >
              <button
                type="button"
                onClick={() => scrollToSection("portfolio")}
                className={`mb-1 block w-full px-4 py-3 text-left text-sm font-medium tracking-wide ${
                  active === "portfolio" ? "text-accent-500" : "text-zinc-400"
                }`}
              >
                Home
              </button>
              {NAV_LINKS.map((link) => {
                const isContact = link.href === "#contact";

                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => handleNav(link.href)}
                    className={
                      isContact
                        ? `mt-2 block w-full rounded-full px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-white ${
                            isActive(link.href) ? "bg-accent-600" : "bg-accent-500"
                          }`
                        : `block w-full px-4 py-3 text-left text-sm font-medium tracking-wide ${
                            isActive(link.href) ? "text-accent-500" : "text-zinc-400"
                          }`
                    }
                  >
                    {link.label}
                  </button>
                );
              })}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
