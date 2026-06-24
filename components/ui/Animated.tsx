"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  popIn,
  viewport,
} from "@/lib/animations";

type AnimationType = "up" | "left" | "right" | "scale" | "pop" | "fade";

const variants = {
  up: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
  pop: popIn,
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } },
};

interface AnimatedProps extends HTMLMotionProps<"div"> {
  type?: AnimationType;
  delay?: number;
  children: React.ReactNode;
}

export function Animated({
  type = "up",
  delay = 0,
  children,
  className,
  ...props
}: AnimatedProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants[type]}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  className?: string;
  children: React.ReactNode;
}

export function Stagger({ className, children }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  type = "up",
  className,
  children,
}: {
  type?: AnimationType;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={variants[type]} className={className}>
      {children}
    </motion.div>
  );
}
