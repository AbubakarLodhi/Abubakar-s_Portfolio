"use client";

import { Reveal } from "@/components/creative/Reveal";
import { TouchableString } from "@/components/creative/TouchableString";

interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: string;
}

/** Centred gold title with a live string underneath. */
export function SectionHeading({ index, kicker, title }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Reveal as="p" className="eyebrow" duration={0.6}>
        <>
          {index} <span className="mx-2 text-gold/50">—</span> {kicker}
        </>
      </Reveal>

      <Reveal
        as="h2"
        delay={0.08}
        duration={0.7}
        className="mt-3 font-heavy text-[clamp(1.75rem,5vw,3rem)] uppercase leading-none tracking-tight text-gold"
      >
        {title}
      </Reveal>

      <TouchableString tone="gold" className="mt-2 max-w-xl" />
    </div>
  );
}
