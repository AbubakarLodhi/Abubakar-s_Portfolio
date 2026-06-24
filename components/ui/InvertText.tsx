"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type Tag = "p" | "h1" | "h2" | "span";

const motionTags: Record<Tag, typeof motion.p> = {
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  span: motion.span,
};

interface InvertTextProps extends HTMLMotionProps<"p"> {
  as?: Tag;
  className?: string;
  children: React.ReactNode;
}

export function InvertText({
  as = "p",
  className = "",
  children,
  ...props
}: InvertTextProps) {
  const Component = motionTags[as];

  return (
    <Component
      className={`text-white mix-blend-difference ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
