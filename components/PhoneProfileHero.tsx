"use client";

import Image from "next/image";
import { HERO, SITE } from "@/lib/data";

export function PhoneProfileHero() {
  return (
    <section
      data-phone-section="portfolio"
      className="relative bg-black px-3 pb-5 pt-8"
    >
      <div className="relative mx-auto mb-3 h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-accent-500">
        <Image
          src={SITE.image}
          alt={SITE.name}
          fill
          priority
          className="object-cover"
          sizes="56px"
        />
      </div>
      <p className="text-[10px] text-zinc-400">{HERO.greeting}</p>
      <h1 className="font-display text-base font-extrabold leading-tight text-white">
        {HERO.title}
      </h1>
      <p className="mt-1 text-[11px] font-light text-accent-500">{HERO.role}</p>
      <p className="mt-2 text-[10px] leading-relaxed text-zinc-500">
        {HERO.description}
      </p>
      <div className="mt-3 h-px w-10 bg-accent-500" />
    </section>
  );
}
