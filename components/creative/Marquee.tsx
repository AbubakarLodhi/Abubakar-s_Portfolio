"use client";

interface MarqueeProps {
  items: readonly string[];
  direction?: "left" | "right";
  duration?: number;
  separator?: string;
  className?: string;
  itemClassName?: string;
}

export function Marquee({
  items,
  direction = "left",
  duration = 32,
  separator = "+",
  className = "",
  itemClassName = "",
}: MarqueeProps) {
  // Rendered twice so the -50% translate loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div className={`marquee w-full overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        data-direction={direction}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`flex shrink-0 items-center gap-8 px-8 text-[11px] font-semibold uppercase tracking-wider2 ${itemClassName}`}
          >
            {item}
            <span aria-hidden className="text-gold/40">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
