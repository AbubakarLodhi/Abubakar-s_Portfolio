"use client";

import { motion } from "framer-motion";

interface RockProps {
  shake?: boolean;
}

export function Rock({ shake = false }: RockProps) {
  return (
    <motion.div
      animate={
        shake
          ? {
              x: [0, -5, 4, -2, 1, 0],
              rotate: [0, -0.8, 0.6, 0],
            }
          : {}
      }
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative w-full"
    >
      <svg
        viewBox="0 0 560 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="rockBase" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="40%" stopColor="#3d3d3d" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </linearGradient>
          <linearGradient id="rockLit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c8c8c8" />
            <stop offset="45%" stopColor="#7a7a7a" />
            <stop offset="100%" stopColor="#3a3a3a" />
          </linearGradient>
          <linearGradient id="rockFacetA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b0b0b0" />
            <stop offset="100%" stopColor="#4a4a4a" />
          </linearGradient>
          <linearGradient id="rockFacetB" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8a8a8a" />
            <stop offset="100%" stopColor="#2e2e2e" />
          </linearGradient>
          <linearGradient id="rockShadowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000" stopOpacity="0" />
            <stop offset="70%" stopColor="#000" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.85" />
          </linearGradient>
          <filter id="rockGrain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="5"
              seed="12"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.15  0 0 0 0 0.15  0 0 0 0 0.15  0 0 0 0.35 0"
              in="noise"
              result="grain"
            />
            <feBlend in="SourceGraphic" in2="grain" mode="multiply" />
          </filter>
          <filter id="rockDrop" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#000" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="280" cy="348" rx="240" ry="18" fill="#000" opacity="0.45" />

        {/* Main rock mass — wide craggy silhouette */}
        <path
          d="M0,360 L0,268 L18,248 L32,262 L48,218 L72,238 L88,192 L112,210 L128,168 L152,186 L168,142 L196,162 L214,118 L238,138 L256,98 L282,122 L300,78 L326,104 L348,68 L372,94 L398,58 L424,88 L448,72 L472,108 L498,86 L524,118 L548,152 L560,198 L560,360 Z"
          fill="url(#rockBase)"
          filter="url(#rockDrop)"
        />

        {/* Left lit face */}
        <path
          d="M0,268 L18,248 L32,262 L48,218 L72,238 L88,192 L112,210 L128,168 L152,186 L168,142 L196,162 L214,118 L238,138 L256,98 L282,122 L300,78 L326,104 L348,68 L372,94 L398,58 L424,88 L448,72 L472,108 L498,86 L524,118 L548,152 L560,198 L560,280 L0,320 Z"
          fill="url(#rockLit)"
          opacity="0.92"
          filter="url(#rockGrain)"
        />

        {/* Crystalline facets — top ridge */}
        <path
          d="M168,142 L196,162 L214,118 L238,138 L256,98 L282,122 L300,78 L326,104 L348,68 L372,94 L398,58 L424,88 L448,72 L472,108 L498,86 L524,118 L548,152"
          stroke="#d8d8d8"
          strokeWidth="0.6"
          opacity="0.35"
          fill="none"
        />

        {/* Facet planes */}
        <path d="M168,142 L196,162 L214,118 L238,138 L256,98 L282,122 L300,78 L326,104 L348,68 L372,94 L398,58 L424,88 L448,72 L472,108 L498,86 L524,118 L548,152 L560,198 L560,280 L420,250 L350,220 L280,200 L200,230 L120,250 L0,268 Z" fill="url(#rockFacetA)" opacity="0.45" />
        <path d="M350,220 L420,250 L560,280 L560,360 L400,360 L320,340 L280,300 Z" fill="url(#rockFacetB)" opacity="0.55" />

        {/* Sharp highlight edges (top-left light) */}
        <path d="M214,118 L238,138 L256,98 L282,122 L300,78 L326,104 L348,68 L372,94 L398,58 L424,88" stroke="#ececec" strokeWidth="1.2" opacity="0.55" fill="none" strokeLinecap="round" />
        <path d="M168,142 L196,162 L214,118" stroke="#f0f0f0" strokeWidth="1" opacity="0.4" fill="none" />
        <path d="M448,72 L472,108 L498,86 L524,118 L548,152" stroke="#a8a8a8" strokeWidth="0.8" opacity="0.35" fill="none" />

        {/* Crack details */}
        <path d="M280,200 L295,175 L308,188" stroke="#1a1a1a" strokeWidth="1.2" opacity="0.5" fill="none" />
        <path d="M200,230 L218,205 L232,218" stroke="#1a1a1a" strokeWidth="1" opacity="0.45" fill="none" />
        <path d="M350,220 L365,195 L378,208" stroke="#1a1a1a" strokeWidth="1" opacity="0.4" fill="none" />
        <path d="M120,250 L138,228 L152,240" stroke="#1a1a1a" strokeWidth="0.9" opacity="0.4" fill="none" />

        {/* Right-side deep shadow overlay */}
        <path
          d="M350,220 L420,250 L560,280 L560,360 L400,360 L320,340 L280,300 L350,220 Z"
          fill="url(#rockShadowGrad)"
          opacity="0.75"
        />

        {/* Contact ridge — where phone rests */}
        <path
          d="M300,78 L326,104 L348,68 L372,94 L398,58 L424,88 L448,72"
          stroke="#e8e8e8"
          strokeWidth="2"
          opacity="0.65"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
