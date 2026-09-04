"use client";

import { useEffect, useId, useRef } from "react";

interface LiquidTextProps {
  text: string;
  className?: string;
  /** How hard the word warps while the pointer is over it. */
  strength?: number;
}

/**
 * Oversized word that melts under the pointer.
 *
 * On desktop it warps on hover. On touch it warps while a finger is down,
 * and it keeps a lighter idle melt while the word is on screen so mobile
 * still gets the same effect without a cursor.
 */
export function LiquidText({ text, className = "", strength = 22 }: LiquidTextProps) {
  const uid = useId().replace(/:/g, "");
  const filterId = `liquid-${uid}`;
  const wrapRef = useRef<HTMLDivElement>(null);
  const dispRef = useRef<SVGFEDisplacementMapElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  const target = useRef(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const disp = dispRef.current;
    const turb = turbRef.current;
    if (!wrap || !disp || !turb) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let current = 0;
    let frame = 0;
    let running = true;
    let inView = true;

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.2 },
    );
    io.observe(wrap);

    const loop = (now: number) => {
      if (!running) return;
      const idle = inView && target.current === 0 ? strength * 0.4 : 0;
      const goal = Math.max(target.current, idle);
      current += (goal - current) * 0.09;

      if (current > 0.01) {
        disp.setAttribute("scale", current.toFixed(2));
        const fx = 0.006 + Math.sin(now / 1400) * 0.003;
        const fy = 0.014 + Math.cos(now / 1100) * 0.005;
        turb.setAttribute("baseFrequency", `${fx.toFixed(4)} ${fy.toFixed(4)}`);
      } else {
        disp.setAttribute("scale", "0");
      }

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);

    const engage = () => (target.current = strength);
    const release = () => (target.current = 0);

    wrap.addEventListener("pointerenter", engage);
    wrap.addEventListener("pointerleave", release);
    wrap.addEventListener("pointerdown", engage);
    wrap.addEventListener("pointerup", release);
    wrap.addEventListener("pointercancel", release);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      io.disconnect();
      wrap.removeEventListener("pointerenter", engage);
      wrap.removeEventListener("pointerleave", release);
      wrap.removeEventListener("pointerdown", engage);
      wrap.removeEventListener("pointerup", release);
      wrap.removeEventListener("pointercancel", release);
    };
  }, [strength]);

  return (
    <div ref={wrapRef} className={className}>
      <svg
        viewBox="0 0 1000 250"
        preserveAspectRatio="xMidYMid meet"
        className="w-full overflow-visible"
        role="img"
        aria-label={text}
      >
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              ref={turbRef}
              type="fractalNoise"
              baseFrequency="0.006 0.014"
              numOctaves={2}
              seed={7}
              result="noise"
            />
            <feDisplacementMap
              ref={dispRef}
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        <text
          x="0"
          y="232"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          fontSize="300"
          className="font-display fill-current"
          filter={`url(#${filterId})`}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
