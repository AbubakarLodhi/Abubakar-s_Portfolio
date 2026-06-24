"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HERO, SITE } from "@/lib/data";

export function SiteHero() {
  return (
    <section id="about" className="section-pad border-t border-white/5 bg-black">
      <div className="container-main grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent-500 sm:text-sm">
            {HERO.greeting}
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            {HERO.title}
          </h2>
          <p className="mt-3 text-lg font-light text-zinc-400 sm:text-xl">{HERO.role}</p>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-zinc-500 sm:text-base lg:mx-0">
            {HERO.description}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button href={SITE.resume} download variant="pill">
              <Download size={16} />
              Download Resume
            </Button>
            <Button href="#contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-sm md:max-w-md"
        >
          <div className="absolute -inset-4 bg-accent-500/10 blur-2xl" />
          <div className="relative h-full overflow-hidden border border-accent-500/30">
            <Image
              src={SITE.image}
              alt={SITE.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
