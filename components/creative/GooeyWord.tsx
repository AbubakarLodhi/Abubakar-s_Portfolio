"use client";

import { useId } from "react";

interface Drip {
  cx: number;
  r: number;
  distance: number;
  duration: number;
  delay: number;
}

const DRIPS: Drip[] = [
  { cx: 120, r: 11, distance: 130, duration: 4.6, delay: 0 },
  { cx: 205, r: 7, distance: 105, duration: 5.4, delay: 1.4 },
  { cx: 300, r: 13, distance: 150, duration: 5.0, delay: 0.7 },
  { cx: 395, r: 6, distance: 95, duration: 6.1, delay: 2.2 },
  { cx: 470, r: 10, distance: 125, duration: 4.4, delay: 1.1 },
  { cx: 560, r: 8, distance: 115, duration: 5.7, delay: 0.35 },
  { cx: 655, r: 12, distance: 140, duration: 4.9, delay: 1.9 },
  { cx: 745, r: 6, distance: 100, duration: 6.4, delay: 0.9 },
  { cx: 835, r: 10, distance: 135, duration: 5.2, delay: 2.6 },
  { cx: 915, r: 8, distance: 110, duration: 4.7, delay: 1.6 },
];

/**
 * Oversized word whose bottom edge melts into falling blobs.
 *
 * The word and the drips share one gooey filter (blur + alpha contrast), so a
 * blob fuses with the letter above it until it has fallen far enough to break
 * away.
 */
export function GooeyWord({
  text,
  className = "",
  fillClass = "fill-gold",
  compact = false,
}: {
  text: string;
  className?: string;
  fillClass?: string;
  /** Tighter frame so short words keep their existing type size. */
  compact?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const gooId = `goo-${uid}`;
  const vbW = compact ? 500 : 1000;
  const vbH = compact ? 230 : 420;
  const fontSize = compact ? 210 : 320;
  const textY = compact ? 198 : 252;
  const dripY = compact ? 194 : 246;
  const drips = compact
    ? DRIPS.map((drip) => ({
        ...drip,
        cx: 40 + (drip.cx / 1000) * 420,
        r: drip.r * 0.7,
        distance: drip.distance * 0.55,
      }))
    : DRIPS;

  return (
    <svg
      viewBox={`0 0 ${vbW} ${vbH}`}
      preserveAspectRatio="xMidYMid meet"
      className={`${compact ? "h-full w-auto" : "w-full"} overflow-visible ${className}`}
      role="img"
      aria-label={text}
    >
      <defs>
        {/* Blur then crush the alpha ramp: nearby shapes fuse, but the
            letterforms keep their edges. */}
        <filter id={gooId} x="-15%" y="-15%" width="130%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -19"
          />
        </filter>
      </defs>

      <g filter={`url(#${gooId})`} className={fillClass}>
        <text
          x="0"
          y={textY}
          textLength={vbW}
          lengthAdjust="spacingAndGlyphs"
          fontSize={fontSize}
          className="font-display"
        >
          {text}
        </text>

        {drips.map((drip, i) => (
          <circle
            key={i}
            className="drip"
            cx={drip.cx}
            cy={dripY}
            r={drip.r}
            style={
              {
                "--drip-distance": `${drip.distance}px`,
                "--drip-duration": `${drip.duration}s`,
                "--drip-delay": `${drip.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </g>
    </svg>
  );
}
