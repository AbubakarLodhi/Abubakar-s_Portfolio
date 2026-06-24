"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AtSign, Github, Linkedin } from "lucide-react";
import { InvertText } from "@/components/ui/InvertText";
import { HERO, SITE } from "@/lib/data";

const socials = [
  { href: `mailto:${SITE.email}`, icon: AtSign, label: "Email" },
  { href: SITE.github, icon: Github, label: "GitHub" },
  { href: SITE.linkedin, icon: Linkedin, label: "LinkedIn" },
] as const;

export function Hero() {
  return (
    <section
      id="portfolio"
      className="relative min-h-screen overflow-hidden bg-surface-50"
    >
      {/* Black diagonal panel */}
      <div
        aria-hidden
        className="hero-diagonal absolute inset-0 bg-black lg:left-[20%]"
      />

      <div className="relative z-10 flex min-h-screen flex-col pt-28 pb-12 lg:pt-32">
        <div className="container-main relative flex flex-1 flex-col justify-center">
          {/* Hero text — wide enough to cross the diagonal */}
          <div className="relative z-20 max-w-[90vw] sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <InvertText
              as="p"
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-normal sm:text-xl"
            >
              {HERO.greeting}
            </InvertText>

            <InvertText
              as="h1"
              initial={{ y: 32 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-1 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {HERO.title}
            </InvertText>

            <InvertText
              as="p"
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-3 text-lg font-light sm:text-xl lg:text-2xl"
            >
              {HERO.role}
            </InvertText>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-6 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base lg:hidden"
            >
              {HERO.description}
            </motion.p>
          </div>

          {/* Portrait — right side, below text layer */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none relative mx-auto mt-10 w-full max-w-sm lg:pointer-events-auto lg:absolute lg:right-4 lg:top-1/2 lg:mx-0 lg:mt-0 lg:max-w-none lg:-translate-y-1/2 xl:right-8"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] lg:ml-auto">
              <Image
                src={SITE.image}
                alt={SITE.name}
                fill
                priority
                sizes="(max-width: 1024px) 420px, 480px"
                className="object-contain object-bottom"
              />
            </div>
          </motion.div>
        </div>

        {/* Social icons — bottom left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="container-main mt-10 flex gap-4 lg:mt-0 lg:absolute lg:bottom-12 lg:left-4 lg:right-auto xl:left-8"
        >
          {socials.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              title={label}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="social-neumorphic"
            >
              <Icon size={20} strokeWidth={1.75} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
