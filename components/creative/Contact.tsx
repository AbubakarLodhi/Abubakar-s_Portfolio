"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/creative/Reveal";
import {
  ArrowUpRight,
  CheckCircle2,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
} from "lucide-react";
import { CONTACT_COPY, SITE } from "@/lib/data";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email me",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Linkedin,
    label: "Connect",
    value: "LinkedIn",
    href: SITE.linkedin,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: SITE.location,
    href: SITE.github,
  },
] as const;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!accessKey) {
      setStatus("error");
      setError("Contact form is not configured yet.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this, humans never see it.
    if (data.get("company")) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
          subject: "[Portfolio] New message",
          from_name: "Portfolio Contact Form",
          replyto: String(data.get("email") ?? "").trim(),
        }),
      });

      const result = (await response.json()) as { success: boolean; message?: string };
      if (!result.success) throw new Error(result.message ?? "Failed to send message.");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send message.");
    }
  };

  return (
    <footer
      id="contact"
      className="grid-lines relative overflow-hidden border-t border-ink-line bg-ink pt-20 pb-6 lg:pt-28"
    >
      {/* Warm glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="container-main relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal
              as="h2"
              duration={0.85}
              className="text-[clamp(2rem,6vw,3.75rem)] font-medium leading-[1.05] tracking-tight"
            >
              <>
                {CONTACT_COPY.headline.map((part) => (
                  <span
                    key={part.text}
                    className={`block ${part.gold ? "text-gold" : "text-cream"}`}
                  >
                    {part.text}
                  </span>
                ))}
              </>
            </Reveal>

            <Reveal
              as="p"
              delay={0.1}
              duration={0.7}
              className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted"
            >
              {CONTACT_COPY.blurb}
            </Reveal>

            <div className="mt-10 space-y-3">
              {CHANNELS.map(({ icon: Icon, label, value, href }, i) => (
                <Reveal key={label} delay={0.15 + i * 0.08} duration={0.6}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-ink-line bg-ink-card px-4 py-3.5 transition-colors hover:border-gold/40"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-ink-line text-ink-muted transition-colors group-hover:border-gold/40 group-hover:text-gold">
                      <Icon size={15} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider2 text-ink-faint">
                        {label}
                      </span>
                      <span className="block truncate text-sm text-cream">{value}</span>
                    </span>

                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink-line text-ink-muted transition-all group-hover:border-gold group-hover:text-gold">
                      <ArrowUpRight size={14} />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <Reveal
            delay={0.1}
            duration={0.85}
            className="rounded-2xl border border-ink-line bg-ink-card p-6 sm:p-8"
          >
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 size={34} className="text-gold" />
                <p className="mt-4 text-lg font-medium text-cream">Message sent</p>
                <p className="mt-2 max-w-xs text-sm text-ink-muted">
                  Thanks for reaching out — I&apos;ll reply from {SITE.email} shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-xs font-semibold uppercase tracking-wider2 text-gold hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <fieldset disabled={status === "loading"} className="space-y-5 disabled:opacity-60">
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden
                  />

                  <div>
                    <label
                      htmlFor="c-name"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-wider2 text-ink-muted"
                    >
                      Name
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      autoComplete="name"
                      placeholder="Your name"
                      className="field"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="c-email"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-wider2 text-ink-muted"
                    >
                      Email
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@email.com"
                      className="field"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="c-message"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-wider2 text-ink-muted"
                    >
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      required
                      minLength={10}
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="field resize-y"
                    />
                  </div>

                  {status === "error" && error && (
                    <p role="alert" className="text-xs text-red-400">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-cream px-6 py-3.5 text-xs font-semibold uppercase tracking-wider2 text-ink transition-colors hover:bg-gold disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowUpRight size={14} />
                      </>
                    )}
                  </button>
                </fieldset>
              </form>
            )}
          </Reveal>
        </div>

        {/* Footer bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink-line pt-6 sm:flex-row">
          <p className="text-[10px] uppercase tracking-wider2 text-ink-faint">
            ©{new Date().getFullYear()}{" "}
            <span className="font-script text-base normal-case tracking-normal text-cream">
              {SITE.name.split(" ")[0].toLowerCase()}
            </span>
          </p>

          <p className="text-[10px] uppercase tracking-wider2 text-ink-faint">
            {SITE.role} <span className="mx-2 text-gold/40">—</span> {SITE.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
