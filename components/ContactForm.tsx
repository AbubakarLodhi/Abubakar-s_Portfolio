"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";

interface ContactFormProps {
  compact?: boolean;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const inputClass =
  "w-full border border-white/10 bg-surface-100 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-accent-500/60 focus:ring-1 focus:ring-accent-500/30";

const inputClassCompact =
  "w-full border border-white/10 bg-black px-2.5 py-2 text-[11px] text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-accent-500/60";

export function ContactForm({ compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    if (!accessKey) {
      setStatus("error");
      setError("Contact form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("company")) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "Portfolio contact").trim();
    const message = String(data.get("message") ?? "").trim();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject: `[Portfolio] ${subject}`,
          message,
          from_name: "Portfolio Contact Form",
          replyto: email,
        }),
      });

      const result = (await response.json()) as Web3FormsResponse;

      if (!result.success) {
        throw new Error(result.message ?? "Failed to send message.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send message.");
    }
  };

  if (status === "success") {
    return (
      <div
        className={
          compact
            ? "mt-4 border border-accent-500/30 bg-accent-500/5 p-4 text-center"
            : "mx-auto mt-10 max-w-xl border border-accent-500/30 bg-accent-500/5 p-8 text-center"
        }
      >
        <CheckCircle2 className="mx-auto text-accent-500" size={compact ? 24 : 32} />
        <p className={`mt-3 font-semibold text-white ${compact ? "text-xs" : "text-lg"}`}>
          Message sent!
        </p>
        <p className={`mt-1 text-zinc-400 ${compact ? "text-[10px]" : "text-sm"}`}>
          Thanks for reaching out. I&apos;ll get back to you at {SITE.email} soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={`mt-4 text-accent-500 hover:underline ${compact ? "text-[10px]" : "text-sm"}`}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        compact
          ? "mt-4 space-y-2.5 text-left"
          : "mx-auto mt-10 max-w-xl space-y-4 text-left"
      }
    >
      <fieldset
        disabled={status === "loading"}
        className={compact ? "space-y-2.5 disabled:opacity-70" : "space-y-4 disabled:opacity-70"}
      >
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />

        <div className={compact ? "space-y-2.5" : "grid gap-4 sm:grid-cols-2"}>
          <div>
            <label
              htmlFor={compact ? "phone-name" : "contact-name"}
              className={`mb-1.5 block font-medium text-zinc-400 ${compact ? "text-[10px]" : "text-xs"}`}
            >
              Name
            </label>
            <input
              id={compact ? "phone-name" : "contact-name"}
              name="name"
              type="text"
              required
              minLength={2}
              autoComplete="name"
              placeholder="Your name"
              className={compact ? inputClassCompact : inputClass}
            />
          </div>

          <div>
            <label
              htmlFor={compact ? "phone-email" : "contact-email"}
              className={`mb-1.5 block font-medium text-zinc-400 ${compact ? "text-[10px]" : "text-xs"}`}
            >
              Email
            </label>
            <input
              id={compact ? "phone-email" : "contact-email"}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={compact ? inputClassCompact : inputClass}
            />
          </div>
        </div>

        {!compact && (
          <div>
            <label
              htmlFor="contact-subject"
              className="mb-1.5 block text-xs font-medium text-zinc-400"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="Project inquiry"
              className={inputClass}
            />
          </div>
        )}

        {compact && (
          <input type="hidden" name="subject" value="Phone portfolio contact" />
        )}

        <div>
          <label
            htmlFor={compact ? "phone-message" : "contact-message"}
            className={`mb-1.5 block font-medium text-zinc-400 ${compact ? "text-[10px]" : "text-xs"}`}
          >
            Message
          </label>
          <textarea
            id={compact ? "phone-message" : "contact-message"}
            name="message"
            required
            minLength={10}
            rows={compact ? 3 : 5}
            placeholder="Tell me about your project..."
            className={`${compact ? inputClassCompact : inputClass} resize-y`}
          />
        </div>

        {status === "error" && error && (
          <p className={`text-red-400 ${compact ? "text-[10px]" : "text-sm"}`} role="alert">
            {error}
          </p>
        )}

        <div className={compact ? "" : "flex justify-center pt-2"}>
          <Button
            type="submit"
            variant="pill"
            className={compact ? "w-full text-[10px]" : "min-w-[180px]"}
            onClick={undefined}
          >
            {status === "loading" ? (
              <>
                <Loader2 size={compact ? 12 : 16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={compact ? 12 : 16} />
                Send Message
              </>
            )}
          </Button>
        </div>

        {!compact && (
          <p className="text-center text-xs text-zinc-600">
            Messages are delivered to{" "}
            <a href={`mailto:${SITE.email}`} className="text-accent-500 hover:underline">
              {SITE.email}
            </a>
          </p>
        )}
      </fieldset>
    </form>
  );
}
