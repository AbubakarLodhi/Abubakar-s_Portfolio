"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonHover, buttonTap } from "@/lib/animations";

type Variant = "primary" | "outline" | "ghost" | "dark" | "pill" | "accent";

const styles: Record<Variant, string> = {
  primary: "bg-accent-500 text-white hover:bg-accent-600 hover:shadow-glow-sm",
  accent: "bg-accent-500 text-white hover:bg-accent-600",
  pill:
    "rounded-full bg-accent-500 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-accent-600 hover:shadow-glow-sm",
  outline:
    "border border-white/30 bg-transparent text-white hover:border-accent-500 hover:text-accent-500",
  ghost:
    "border border-accent-500/40 bg-transparent text-accent-500 hover:bg-accent-500 hover:text-white",
  dark:
    "border border-white/20 bg-transparent text-white hover:border-accent-500 hover:text-accent-500",
};

interface ButtonProps {
  variant?: Variant;
  href?: string;
  download?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
}

const motionProps = {
  whileHover: buttonHover,
  whileTap: buttonTap,
  transition: { type: "spring" as const, stiffness: 400, damping: 20 },
};

function isExternalOrAsset(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("#") ||
    href.includes(".pdf")
  );
}

export function Button({
  variant = "primary",
  href,
  download,
  onClick,
  className = "",
  children,
  type = "button",
}: ButtonProps) {
  const rounded = variant === "pill" ? "" : "rounded-sm";
  const classes = `inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-5 sm:py-3 sm:text-sm ${rounded} ${styles[variant]} ${className}`;

  if (href) {
    if (isExternalOrAsset(href)) {
      return (
        <motion.a
          href={href}
          download={download}
          onClick={onClick}
          className={classes}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
