"use client";

import { motion } from "framer-motion";

const SHARDS = [
  { id: 1, w: 20, h: 14, dx: -95, dy: -75, rotate: -50, delay: 0, duration: 0.8, origin: "bottom right" },
  { id: 2, w: 14, h: 11, dx: -55, dy: -105, rotate: 35, delay: 0.02, duration: 0.85, origin: "center" },
  { id: 3, w: 24, h: 17, dx: 15, dy: -90, rotate: 65, delay: 0.04, duration: 0.9, origin: "bottom left" },
  { id: 4, w: 16, h: 12, dx: 70, dy: -65, rotate: -25, delay: 0.01, duration: 0.75, origin: "center" },
  { id: 5, w: 18, h: 13, dx: 105, dy: -40, rotate: 48, delay: 0.03, duration: 0.82, origin: "top left" },
  { id: 6, w: 11, h: 9, dx: -115, dy: -30, rotate: -65, delay: 0.05, duration: 0.88, origin: "center" },
  { id: 7, w: 22, h: 16, dx: -70, dy: 15, rotate: 28, delay: 0.02, duration: 0.78, origin: "bottom" },
  { id: 8, w: 15, h: 11, dx: 45, dy: 25, rotate: -38, delay: 0.04, duration: 0.92, origin: "center" },
  { id: 9, w: 17, h: 13, dx: 90, dy: 8, rotate: 55, delay: 0.01, duration: 0.74, origin: "top" },
  { id: 10, w: 12, h: 10, dx: -35, dy: -55, rotate: -18, delay: 0.03, duration: 0.81, origin: "center" },
  { id: 11, w: 19, h: 14, dx: 5, dy: -115, rotate: 72, delay: 0.05, duration: 0.95, origin: "bottom left" },
  { id: 12, w: 10, h: 8, dx: -100, dy: -50, rotate: -55, delay: 0.02, duration: 0.77, origin: "center" },
  { id: 13, w: 16, h: 12, dx: 60, dy: -95, rotate: 18, delay: 0.04, duration: 0.86, origin: "top right" },
  { id: 14, w: 13, h: 10, dx: -60, dy: -85, rotate: 42, delay: 0.01, duration: 0.79, origin: "center" },
  { id: 15, w: 18, h: 13, dx: 80, dy: -70, rotate: -42, delay: 0.03, duration: 0.84, origin: "bottom" },
  { id: 16, w: 9, h: 7, dx: -20, dy: -70, rotate: 20, delay: 0.02, duration: 0.73, origin: "center" },
  { id: 17, w: 14, h: 10, dx: 35, dy: -50, rotate: -30, delay: 0.04, duration: 0.8, origin: "top" },
  { id: 18, w: 11, h: 9, dx: -80, dy: -95, rotate: 58, delay: 0.01, duration: 0.87, origin: "center" },
];

interface RockShardsProps {
  active: boolean;
}

export function RockShards({ active }: RockShardsProps) {
  if (!active) return null;

  return (
    <div
      className="pointer-events-none absolute bottom-[30%] left-[38%] z-30 sm:bottom-[32%] sm:left-[40%] lg:bottom-[34%] lg:left-[42%]"
      aria-hidden
    >
      {SHARDS.map((shard) => (
        <motion.div
          key={shard.id}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
          animate={{
            x: shard.dx,
            y: shard.dy,
            opacity: 0,
            scale: 0.15,
            rotate: shard.rotate,
          }}
          transition={{
            duration: shard.duration,
            delay: shard.delay,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          style={{
            width: shard.w,
            height: shard.h,
            clipPath: "polygon(15% 100%, 35% 5%, 100% 20%, 75% 100%)",
            background: "linear-gradient(145deg, #b8b8b8 0%, #6b6b6b 50%, #3a3a3a 100%)",
            boxShadow: "0 0 4px rgba(0,0,0,0.5)",
          }}
          className="absolute"
        />
      ))}
    </div>
  );
}
