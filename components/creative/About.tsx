"use client";

import Image from "next/image";
import { Code2, Github, Linkedin } from "lucide-react";
import { ABOUT_COPY, ABOUT_FACTS, SITE } from "@/lib/data";
import { Reveal } from "@/components/creative/Reveal";
import { SectionHeading } from "@/components/creative/SectionHeading";
import { TouchableString } from "@/components/creative/TouchableString";

const LINKS = [
  { href: SITE.github, Icon: Github, label: "GitHub" },
  { href: SITE.linkedin, Icon: Linkedin, label: "LinkedIn" },
  { href: SITE.resume, Icon: Code2, label: "Resume" },
] as const;

export function About() {
  return (
    <section
      id="about"
      className="grid-lines relative overflow-hidden bg-ink py-20 lg:py-28"
    >
      <div className="container-main">
        <SectionHeading index="02" kicker="The person behind the work" title="About Me" />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-16">
          {/* Portrait */}
          <Reveal
            direction="left"
            duration={0.9}
            className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink-line bg-ink-card"
          >
            <>
              <Image
                src={SITE.image}
                alt={SITE.name}
                fill
                sizes="(max-width: 1024px) 100vw, 340px"
                className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-70" />

              <span className="absolute left-4 top-4 text-[11px] font-semibold uppercase tracking-wider2 text-cream opacity-100 transition-all duration-500 md:-translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                {SITE.name}
              </span>

              <div className="absolute bottom-4 right-4 flex flex-col gap-2 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                {LINKS.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-full bg-cream text-ink transition-colors hover:bg-gold"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </>
          </Reveal>

          {/* Statement + facts */}
          <div>
            <Reveal as="p" direction="fade" duration={0.6} className="eyebrow flex items-center gap-3">
              <>
                <span className="h-px w-8 bg-gold/50" />
                {ABOUT_COPY.eyebrow}
              </>
            </Reveal>

            <Reveal
              as="h3"
              delay={0.1}
              duration={0.8}
              className="mt-4 text-[clamp(1.4rem,3.2vw,2.4rem)] font-medium uppercase leading-[1.15] tracking-tight"
            >
              <>
                {ABOUT_COPY.statement.map((part, i) => (
                  <span key={i} className={part.gold ? "text-gold" : "text-cream"}>
                    {part.text}
                  </span>
                ))}
              </>
            </Reveal>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {ABOUT_COPY.columns.map((col, i) => (
                <Reveal
                  key={i}
                  as="p"
                  delay={0.15 + i * 0.1}
                  duration={0.7}
                  className="text-sm leading-relaxed text-ink-muted"
                >
                  {col}
                </Reveal>
              ))}
            </div>

            <TouchableString tone="gold" className="my-8" />

            <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3">
              {ABOUT_FACTS.map((fact, i) => (
                <Reveal key={fact.label} delay={i * 0.06} duration={0.55}>
                  <>
                    <p className="text-[9px] font-semibold uppercase tracking-wider3 text-ink-faint">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider2 text-gold">
                      {fact.value}
                    </p>
                  </>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
