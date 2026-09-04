"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "fade";
type Tag = "div" | "p" | "h2" | "h3" | "article" | "span" | "li";

const OFFSETS: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 26 },
  left: { x: -40 },
  right: { x: 40 },
  fade: {},
};

// Built once so the element type stays stable between renders. The props we
// pass are common to every tag, so sharing motion.div's signature is safe.
const MOTION = {
  div: motion.div,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
  article: motion.article,
  span: motion.span,
  li: motion.li,
} as Record<Tag, typeof motion.div>;

interface RevealProps {
  children: ReactNode;
  as?: Tag;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Scroll-triggered entrance.
 *
 * When the visitor prefers reduced motion the element renders in its final
 * state straight away, so content is never left stranded at opacity 0 waiting
 * for an observer that will not animate it.
 */
export function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.75,
  className = "",
}: RevealProps) {
  const reduced = useReducedMotion();
  const Tag = as;

  if (reduced) {
    const Plain = Tag;
    return <Plain className={className}>{children}</Plain>;
  }

  const MotionTag = MOTION[Tag];
  const offset = OFFSETS[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    show: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
