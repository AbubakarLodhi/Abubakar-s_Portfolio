"use client";

import { EDUCATION, EXPERIENCE } from "@/lib/data";
import { Reveal } from "@/components/creative/Reveal";
import { SectionHeading } from "@/components/creative/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="grid-lines relative overflow-hidden border-t border-ink-line bg-ink py-20 lg:py-28"
    >
      <div className="container-main">
        <SectionHeading index="05" kicker="Where I've been" title="Experience" />

        <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="eyebrow mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-gold/50" />
              Career
            </p>

            <div className="relative border-l border-ink-line pl-6 sm:pl-8">
              {EXPERIENCE.items.map((item, i) => (
                <Reveal
                  key={`${item.company}-${item.role}`}
                  delay={i * 0.1}
                  duration={0.7}
                  className="relative pb-12 last:pb-0"
                >
                  <>
                    <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full bg-gold sm:-left-[2.4rem]" />

                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-medium tracking-tight text-cream">
                        {item.role}
                      </h3>
                      <span className="rounded-full border border-gold/40 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider2 text-gold">
                        {item.badge}
                      </span>
                    </div>

                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider2 text-ink-muted">
                      {item.company} <span className="mx-2 text-gold/40">—</span>{" "}
                      {item.period}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-gold/50" />
              Education
            </p>

            {EDUCATION.items.map((item) => (
              <Reveal
                key={item.school}
                duration={0.7}
                className="rounded-2xl border border-ink-line bg-ink-card p-6"
              >
                <>
                  <h3 className="text-lg font-medium tracking-tight text-cream">
                    {item.degree}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-muted">{item.school}</p>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-semibold uppercase tracking-wider2">
                    <span className="text-gold">{item.period}</span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-md border border-ink-line px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider2 text-ink-muted"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
