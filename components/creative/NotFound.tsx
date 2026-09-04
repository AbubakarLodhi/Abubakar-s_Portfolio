"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/data";
import { Cursor } from "@/components/creative/Cursor";
import { RotatingBadge } from "@/components/creative/RotatingBadge";
import { GooeyWord } from "@/components/creative/GooeyWord";
import { TouchableString } from "@/components/creative/TouchableString";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export function NotFound() {
  return (
    <>
      <Cursor />

      <div className="relative flex min-h-svh flex-col overflow-hidden bg-cream text-ink">
        <header className="flex items-center justify-between px-5 py-4 sm:px-8 lg:px-14">
          <Link
            href="/"
            className="font-script text-2xl leading-none sm:text-3xl"
            aria-label={SITE.name}
          >
            {SITE.name.split(" ")[0].toLowerCase()}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[11px] font-semibold uppercase tracking-wider2"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center px-5 pb-28 pt-8 sm:px-8">
          <p className="eyebrow text-ink/45">Error — lost in the grid</p>

          <h1
            className="mt-3 h-[clamp(8rem,28vw,18rem)] leading-none"
            aria-label="404"
          >
            <GooeyWord text="404" fillClass="fill-ink" compact />
          </h1>

          <h2 className="mt-2 font-heavy text-[clamp(1.2rem,4vw,2.4rem)] uppercase tracking-tight">
            Page not found
          </h2>

          <TouchableString tone="ink" className="mt-3 max-w-md" />

          <p className="mt-6 max-w-sm text-center text-sm leading-relaxed text-ink/55">
            This route doesn&apos;t exist — or it wandered off. Head back and keep
            exploring the work.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-wider2 transition-colors hover:border-ink hover:bg-ink hover:text-cream"
          >
            Back to home
            <ArrowUpRight size={14} />
          </Link>
        </main>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between px-5 pb-6 sm:px-8 lg:px-14">
          <p className="text-[10px] uppercase tracking-wider2 text-ink/55">
            ©{new Date().getFullYear()}{" "}
            <span className="font-script text-base normal-case tracking-normal">
              {SITE.name.split(" ")[0].toLowerCase()}
            </span>
          </p>

          <div className="pointer-events-auto flex flex-col items-center gap-3">
            <RotatingBadge text="GO HOME · GO HOME ·" href="/" tone="ink" />
            <p className="text-[10px] font-semibold uppercase tracking-wider2 text-ink/70">
              {SITE.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
