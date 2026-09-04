"use client";

import { useEffect, useId, useRef, type RefObject } from "react";
import { ArrowUpRight } from "lucide-react";

interface RotatingBadgeProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  /** "ink" on light backgrounds, "cream" on dark ones. */
  tone?: "ink" | "cream";
}

const POINTS = 36;
const RADIUS = 46;

function restPoint(i: number) {
  const a = (i / POINTS) * Math.PI * 2 - Math.PI / 2;
  return { x: 50 + Math.cos(a) * RADIUS, y: 50 + Math.sin(a) * RADIUS };
}

function smoothPath(pts: { x: number; y: number }[]) {
  const n = pts.length;
  let d = "";
  for (let i = 0; i < n; i++) {
    const p0 = pts[i];
    const p1 = pts[(i + 1) % n];
    const mx = (p0.x + p1.x) / 2;
    const my = (p0.y + p1.y) / 2;
    d += i === 0 ? `M ${mx} ${my}` : ` Q ${p0.x} ${p0.y} ${mx} ${my}`;
  }
  return `${d} Z`;
}

/**
 * Circular CTA whose outline is a live string.
 *
 * The border is not a CSS circle — it is a closed path of points that lean
 * toward the cursor, then spring back. Hover also speeds the spin and lifts
 * the arrow, which is the missing hover design from the reference.
 */
export function RotatingBadge({
  text,
  href,
  onClick,
  className = "",
  tone = "ink",
}: RotatingBadgeProps) {
  const arcId = `badge-arc-${useId().replace(/:/g, "")}`;
  const wrapRef = useRef<HTMLElement>(null);
  const to = href ?? (onClick ? undefined : "#contact");
  const rimRef = useRef<SVGPathElement>(null);

  const color = tone === "ink" ? "text-ink" : "text-cream";
  const rim = tone === "ink" ? "rgba(10,10,10,0.28)" : "rgba(241,234,224,0.32)";
  const rimHover = tone === "ink" ? "#0a0a0a" : "#f1eae0";

  useEffect(() => {
    const wrap = wrapRef.current;
    const rimEl = rimRef.current;
    if (!wrap || !rimEl) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const pts = Array.from({ length: POINTS }, (_, i) => {
      const rest = restPoint(i);
      return { ...rest, ox: rest.x, oy: rest.y };
    });

    rimEl.setAttribute("d", smoothPath(pts));
    if (reduced) return;

    let mx = 50;
    let my = 18;
    let active = 0;
    let target = 0;
    let held = false;
    let frame = 0;
    let running = true;

    const loop = (now: number) => {
      if (!running) return;

      if (!held) {
        const t = now / 1000;
        mx = 50 + Math.sin(t * 0.8) * 28;
        my = 50 + Math.cos(t * 1.05) * 28;
        target = 0.55;
      }

      active += (target - active) * 0.14;

      for (const p of pts) {
        const dx = mx - p.ox;
        const dy = my - p.oy;
        const dist = Math.hypot(dx, dy);
        const reach = 34;
        const pull = dist < reach ? (1 - dist / reach) * 18 * active : 0;
        const tx = p.ox + (dx / (dist || 1)) * pull;
        const ty = p.oy + (dy / (dist || 1)) * pull;
        p.x += (tx - p.x) * 0.22;
        p.y += (ty - p.y) * 0.22;
      }

      rimEl.setAttribute("d", smoothPath(pts));
      rimEl.setAttribute("stroke", active > 0.35 ? rimHover : rim);
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width) * 100;
      my = ((e.clientY - r.top) / r.height) * 100;
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      held = dist < r.width * 0.85;
      target = held ? 1 : 0.55;
    };

    const onLeave = () => {
      held = false;
      target = 0.55;
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerdown", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    wrap.addEventListener("pointerup", onLeave);
    wrap.addEventListener("pointercancel", onLeave);
    frame = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerdown", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      wrap.removeEventListener("pointerup", onLeave);
      wrap.removeEventListener("pointercancel", onLeave);
    };
  }, [rim, rimHover]);

  const shell = `group relative grid h-28 w-28 place-items-center ${color} ${className}`;
  const label = text.replace(/[·\s]+$/, "");

  const inner = (
    <>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <path
          ref={rimRef}
          fill="none"
          stroke={rim}
          strokeWidth="0.7"
          className="transition-[stroke] duration-200"
        />
      </svg>

      <svg viewBox="0 0 100 100" className="badge-spin pointer-events-none absolute inset-0 h-full w-full">
        <defs>
          <path
            id={arcId}
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
        </defs>

        <text className="fill-current text-[7px] font-semibold uppercase">
          <textPath
            href={`#${arcId}`}
            startOffset="0"
            textLength="232"
            lengthAdjust="spacing"
          >
            {text}
          </textPath>
        </text>
      </svg>

      <ArrowUpRight
        size={20}
        strokeWidth={1.5}
        className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </>
  );

  if (to) {
    return (
      <a ref={wrapRef as RefObject<HTMLAnchorElement>} href={to} aria-label={label} data-elastic className={shell}>
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={wrapRef as RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      aria-label={label}
      data-elastic
      className={shell}
    >
      {inner}
    </button>
  );
}
