"use client";

/** Small brand-ish marks that drift behind the expertise copy. */

function React_({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="6" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="2.5">
        <ellipse cx="32" cy="32" rx="27" ry="10.5" />
        <ellipse cx="32" cy="32" rx="27" ry="10.5" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="27" ry="10.5" transform="rotate(120 32 32)" />
      </g>
    </svg>
  );
}

function JavaScript({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect width="64" height="64" rx="10" fill="#F7DF1E" />
      <text
        x="34"
        y="48"
        textAnchor="middle"
        fontSize="30"
        fontWeight="700"
        fontFamily="var(--font-inter), sans-serif"
        fill="#0a0a0a"
      >
        JS
      </text>
    </svg>
  );
}

function TypeScript({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect width="64" height="64" rx="10" fill="#3178C6" />
      <text
        x="34"
        y="47"
        textAnchor="middle"
        fontSize="28"
        fontWeight="700"
        fontFamily="var(--font-inter), sans-serif"
        fill="#ffffff"
      >
        TS
      </text>
    </svg>
  );
}

function Html5({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M8 4h48l-4.4 49L32 60 12.4 53z" fill="#E44D26" />
      <path d="M32 9v46l15.9-5.7L51.6 9z" fill="#F16529" />
      <path
        d="M32 20H19.5l.5 6H32v6H20.9l1.4 15.5L32 50v-6.3l-5.3-1.5-.4-4.2H32z"
        fill="#EBEBEB"
      />
      <path
        d="M32 20v6h12l-.5 6H32v6h5.9l-.5 4.3L32 43.7V50l9.8-3.5L44.4 20z"
        fill="#fff"
      />
    </svg>
  );
}

function Css3({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M8 4h48l-4.4 49L32 60 12.4 53z" fill="#1572B6" />
      <path d="M32 9v46l15.9-5.7L51.6 9z" fill="#33A9DC" />
      <path
        d="M32 20H19.5l.5 6H32v6H20.9l1.4 15.5L32 50v-6.3l-5.3-1.5-.4-4.2H32z"
        fill="#EBEBEB"
      />
      <path
        d="M32 20v6h12l-.5 6H32v6h5.9l-.5 4.3L32 43.7V50l9.8-3.5L44.4 20z"
        fill="#fff"
      />
    </svg>
  );
}

function NodeMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M32 3 58 18v28L32 61 6 46V18z" fill="#539E43" />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontSize="17"
        fontWeight="700"
        fontFamily="var(--font-inter), sans-serif"
        fill="#ffffff"
      >
        node
      </text>
    </svg>
  );
}

// Positioned to sit in the gaps around the copy rather than on top of it.
const MARKS = [
  { Mark: React_, top: "6%", left: "72%", size: 52, lift: 22, duration: 7, delay: 0, rotate: -10 },
  { Mark: NodeMark, top: "30%", left: "84%", size: 38, lift: 20, duration: 8, delay: 0.9, rotate: 8 },
  { Mark: JavaScript, top: "62%", left: "4%", size: 40, lift: 16, duration: 8.5, delay: 0.6, rotate: 12 },
  { Mark: Html5, top: "74%", left: "34%", size: 44, lift: 20, duration: 6.5, delay: 1.1, rotate: -6 },
  { Mark: Css3, top: "84%", left: "58%", size: 38, lift: 18, duration: 9, delay: 0.3, rotate: 14 },
  { Mark: TypeScript, top: "88%", left: "16%", size: 42, lift: 14, duration: 7.5, delay: 1.5, rotate: -14 },
] as const;

export function FloatingTech({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 origin-top scale-75 sm:scale-90 lg:scale-100 ${className}`}
      aria-hidden
    >
      {MARKS.map(({ Mark, top, left, size, lift, duration, delay, rotate }, i) => (
        <span
          key={i}
          className="float-tech absolute drop-shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
          style={
            {
              top,
              left,
              width: size,
              height: size,
              "--tech-lift": `${lift}px`,
              "--tech-duration": `${duration}s`,
              "--tech-delay": `${delay}s`,
              "--tech-rotate": `${rotate}deg`,
            } as React.CSSProperties
          }
        >
          <Mark className="h-full w-full" />
        </span>
      ))}
    </div>
  );
}
