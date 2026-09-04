"use client";

import { useEffect, useId, useRef } from "react";

interface TouchableStringProps {
  className?: string;
  /** Gold on dark sections, ink on the cream hero. */
  tone?: "gold" | "ink";
  axis?: "horizontal" | "vertical";
}

function pointFromEvent(e: PointerEvent, wrap: HTMLElement) {
  const r = wrap.getBoundingClientRect();
  return {
    x: e.clientX,
    y: e.clientY,
    nx: (e.clientX - r.left) / Math.max(r.width, 1),
    ny: (e.clientY - r.top) / Math.max(r.height, 1),
    r,
  };
}

/**
 * Elastic line the pointer can pull — mouse or finger.
 *
 * While nobody is touching it, the line keeps a light idle wave so the
 * motion still reads on mobile, where there is no hovering cursor.
 */
export function TouchableString({
  className = "",
  tone = "gold",
  axis = "horizontal",
}: TouchableStringProps) {
  const uid = useId().replace(/:/g, "");
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);

  const vertical = axis === "vertical";
  const stroke = tone === "gold" ? "#ddd0aa" : "#0a0a0a";

  useEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;
    const glow = glowRef.current;
    if (!wrap || !path) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cx = 0.5;
    let cy = 0.5;
    let tx = 0.5;
    let ty = 0.5;
    let pulling = 0;
    let targetPull = 0;
    let held = false;
    let inView = true;
    let frame = 0;
    let running = true;

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.15 },
    );
    io.observe(wrap);

    const draw = () => {
      if (vertical) {
        const x = 40 + (cx - 0.5) * 56 * pulling;
        const y = 12 + cy * 156;
        const d = `M 40 8 Q ${x.toFixed(1)} ${y.toFixed(1)} 40 176`;
        path.setAttribute("d", d);
        glow?.setAttribute("d", d);
      } else {
        const x = 40 + cx * 920;
        const y = 40 + (cy - 0.5) * 58 * pulling;
        const d = `M 20 40 Q ${x.toFixed(1)} ${y.toFixed(1)} 980 40`;
        path.setAttribute("d", d);
        glow?.setAttribute("d", d);
      }
    };

    const loop = (now: number) => {
      if (!running) return;

      if (!held && inView) {
        const t = now / 1000;
        tx = 0.5 + Math.sin(t * 0.9) * 0.28;
        ty = 0.5 + Math.cos(t * 1.15) * 0.35;
        targetPull = 0.42;
      } else if (!held) {
        tx = 0.5;
        ty = 0.5;
        targetPull = 0;
      }

      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      pulling += (targetPull - pulling) * 0.12;
      draw();
      frame = requestAnimationFrame(loop);
    };

    const apply = (e: PointerEvent) => {
      const { x, y, nx, ny, r } = pointFromEvent(e, wrap);
      const pad = 90;
      const inside =
        x >= r.left - pad &&
        x <= r.right + pad &&
        y >= r.top - pad &&
        y <= r.bottom + pad;

      if (!inside && !held) return;

      held = true;
      tx = Math.min(1, Math.max(0, nx));
      ty = Math.min(1, Math.max(0, ny));
      const lineY = r.top + r.height / 2;
      const lineX = r.left + r.width / 2;
      const dist = vertical ? Math.abs(x - lineX) : Math.abs(y - lineY);
      targetPull = Math.max(0.35, 1 - dist / 110);
    };

    const release = () => {
      held = false;
    };

    window.addEventListener("pointermove", apply, { passive: true });
    window.addEventListener("pointerdown", apply, { passive: true });
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    frame = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      io.disconnect();
      window.removeEventListener("pointermove", apply);
      window.removeEventListener("pointerdown", apply);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
    };
  }, [vertical]);

  return (
    <div
      ref={wrapRef}
      data-elastic
      aria-hidden
      className={`${vertical ? "h-16 w-8" : "h-10 w-full"} ${className}`}
    >
      <svg
        viewBox={vertical ? "0 0 80 184" : "0 0 1000 80"}
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient
            id={`string-fade-${uid}`}
            x1="0"
            y1="0"
            x2={vertical ? "0" : "1"}
            y2={vertical ? "1" : "0"}
          >
            <stop offset="0%" stopColor={stroke} stopOpacity="0" />
            <stop offset="18%" stopColor={stroke} stopOpacity="0.85" />
            <stop offset="82%" stopColor={stroke} stopOpacity="0.85" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0" />
          </linearGradient>
          <filter id={`string-glow-${uid}`} x="-20%" y="-80%" width="140%" height="260%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          ref={glowRef}
          d={vertical ? "M 40 8 Q 40 92 40 176" : "M 20 40 Q 500 40 980 40"}
          fill="none"
          stroke={stroke}
          strokeWidth={vertical ? 1.2 : 2.4}
          strokeOpacity={0.22}
          strokeLinecap="round"
          filter={`url(#string-glow-${uid})`}
        />
        <path
          ref={pathRef}
          d={vertical ? "M 40 8 Q 40 92 40 176" : "M 20 40 Q 500 40 980 40"}
          fill="none"
          stroke={`url(#string-fade-${uid})`}
          strokeWidth={vertical ? 1.1 : 1.5}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
