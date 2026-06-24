"use client";

import { forwardRef } from "react";

export const CrackOverlay = forwardRef<SVGSVGElement>(function CrackOverlay(_, ref) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 280 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden
    >
      <path
        className="crack-line"
        d="M10 70 L45 25 L72 40 L98 15 L125 35 L152 10 L178 30 L205 18 L232 42 L258 28 L270 55"
        stroke="url(#crackGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        pathLength="1"
      />
      <path
        className="crack-line"
        d="M45 25 L38 55 L55 68"
        stroke="#9a9a9a"
        strokeWidth="1.4"
        strokeLinecap="round"
        pathLength="1"
      />
      <path
        className="crack-line"
        d="M125 35 L118 62 L140 75"
        stroke="#8a8a8a"
        strokeWidth="1.2"
        strokeLinecap="round"
        pathLength="1"
      />
      <path
        className="crack-line"
        d="M178 30 L172 58 L190 72"
        stroke="#7a7a7a"
        strokeWidth="1.2"
        strokeLinecap="round"
        pathLength="1"
      />
      <path
        className="crack-line"
        d="M98 15 L88 38 L105 50"
        stroke="#a0a0a0"
        strokeWidth="1"
        strokeLinecap="round"
        pathLength="1"
      />
      <path
        className="crack-line"
        d="M232 42 L225 65 L245 78"
        stroke="#6b6b6b"
        strokeWidth="1"
        strokeLinecap="round"
        pathLength="1"
      />
      <defs>
        <linearGradient id="crackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0e0e0" />
          <stop offset="50%" stopColor="#a8a8a8" />
          <stop offset="100%" stopColor="#5a5a5a" />
        </linearGradient>
      </defs>
    </svg>
  );
});
