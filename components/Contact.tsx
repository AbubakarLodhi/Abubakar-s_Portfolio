"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Animated } from "@/components/ui/Animated";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/data";
import { sectionAttrs } from "@/lib/nav-sections";

const socials = [
  { href: SITE.github, icon: Github, label: "GitHub" },
  { href: SITE.linkedin, icon: Linkedin, label: "LinkedIn" },
] as const;

interface ContactProps {
  compact?: boolean;
}

export function Contact({ compact = false }: ContactProps) {
  if (compact) {
    return (
      <footer
        {...sectionAttrs("contact", true)}
        className="section-pad-compact bg-surface-100 text-center"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-500">
          Contact
        </span>
        <div className="mx-auto mt-3 h-px w-10 bg-accent-500" />
        <h2 className="mt-3 font-display text-base font-extrabold text-white">
          Let&apos;s work together
        </h2>
        <p className="mt-2 text-[10px] text-zinc-400">
          <strong className="text-white">Location:</strong> {SITE.location}
        </p>
        <p className="mt-1 text-[10px] text-zinc-400">
          <strong className="text-white">Call:</strong> {SITE.phone}
        </p>
        <p className="mt-1 break-all text-[9px] text-zinc-500">{SITE.email}</p>
        <div className="mt-4 flex justify-center gap-2">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="flex h-8 w-8 items-center justify-center border border-white/10 bg-black text-white hover:border-accent-500 hover:text-accent-500"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Button href={`mailto:${SITE.email}`} variant="pill">
            <Mail size={12} />
            Email Me
          </Button>
        </div>
        <ContactForm compact />
        <p className="mt-6 border-t border-white/10 pt-4 text-[8px] uppercase tracking-widest text-zinc-600">
          © 2026 {SITE.name}
        </p>
      </footer>
    );
  }

  return (
    <footer id="contact" className="section-pad bg-black text-center">
      <div className="container-main">
        <Animated type="fade">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
            Contact
          </span>
        </Animated>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-4 h-px w-16 origin-center bg-accent-500"
        />

        <Animated type="up" delay={0.08}>
          <h2 className="mt-6 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Ready to work together?
          </h2>
        </Animated>

        <Animated type="up" delay={0.14}>
          <p className="mt-4 text-lg text-zinc-400">
            <strong className="text-accent-500">Location:</strong> {SITE.location}
          </p>
          <p className="mt-2 text-lg text-zinc-400">
            <strong className="text-accent-500">Call:</strong> {SITE.phone}
          </p>
          <p className="mt-2 break-all text-sm text-zinc-500 sm:break-normal sm:text-base">
            {SITE.email}
          </p>
        </Animated>

        <Animated type="pop" delay={0.2}>
          <div className="mt-8 flex justify-center gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center border border-white/10 bg-surface-100 text-white transition-colors hover:border-accent-500 hover:text-accent-500"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </Animated>

        <Animated type="pop" delay={0.28}>
          <ContactForm />
        </Animated>

        <Animated type="fade" delay={0.36}>
          <p className="mt-16 border-t border-white/10 pt-8 text-[10px] uppercase tracking-widest text-zinc-600 sm:text-xs">
            © 2026 {SITE.name} · {SITE.tagline} · All Rights Reserved
          </p>
        </Animated>
      </div>
    </footer>
  );
}
