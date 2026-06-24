"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PhoneMockup } from "@/components/PhoneMockup";
import { PortfolioContent } from "@/components/PortfolioContent";
import { CrackOverlay } from "@/components/hero/CrackOverlay";
import { spawnDust } from "@/components/hero/spawnDust";
import { notifyPhoneHeroReady } from "@/lib/phone-auto-scroll";

export function PremiumHeroScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const crackWrapRef = useRef<HTMLDivElement>(null);
  const crackSvgRef = useRef<SVGSVGElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const dustRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const anchor = anchorRef.current;
    if (!scene || !anchor) return;

    const PHONE_RATIO = 2.2;
    const MAX_WIDTH = 260;

    const fitPhone = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        anchor.style.removeProperty("width");
        return;
      }

      const { width: sceneW, height: sceneH } = scene.getBoundingClientRect();
      if (sceneW <= 0 || sceneH <= 0) return;

      const width = Math.min(sceneW * 0.72, sceneH * 0.92 / PHONE_RATIO, MAX_WIDTH);
      anchor.style.width = `${Math.max(118, Math.floor(width))}px`;
    };

    fitPhone();
    const ro = new ResizeObserver(fitPhone);
    ro.observe(scene);
    window.addEventListener("resize", fitPhone, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fitPhone);
    };
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    const inner = innerRef.current;
    const phone = phoneRef.current;
    const crackWrap = crackWrapRef.current;
    const crackSvg = crackSvgRef.current;
    const glow = glowRef.current;
    const dust = dustRef.current;
    const copy = copyRef.current;

    if (!scene || !inner || !phone || !crackWrap || !crackSvg || !glow || !dust) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const crackLines = crackSvg.querySelectorAll<SVGPathElement>(".crack-line");

    const setIdle = () => {
      gsap.set(phone, { y: 0, rotation: 0, force3D: true });
      gsap.set(crackWrap, { opacity: 1, scale: 1 });
      gsap.set(glow, { opacity: 0, scale: 0.6 });
      crackLines.forEach((line) => {
        gsap.set(line, {
          strokeDasharray: 1,
          strokeDashoffset: 0,
        });
      });
    };

    if (reduced) {
      setIdle();
      if (copy) gsap.set(copy, { opacity: 1, x: 0 });
      notifyPhoneHeroReady();
      return;
    }

    const isMobile = window.innerWidth < 768;
    const dropY = isMobile
      ? -(scene.getBoundingClientRect().height * 1.1)
      : -(window.innerHeight * 1.15);

    gsap.set(phone, { y: dropY, rotation: -6, force3D: true });
    gsap.set(crackWrap, { opacity: 0, scale: 0.85 });
    gsap.set(glow, { opacity: 0, scale: 0.5 });
    crackLines.forEach((line) => {
      gsap.set(line, { strokeDasharray: 1, strokeDashoffset: 1 });
    });

    if (copy) gsap.set(copy, { opacity: 0, x: 48 });
    if (labelRef.current) gsap.set(labelRef.current, { opacity: 0, y: 16 });
    if (titleRef.current) gsap.set(titleRef.current, { opacity: 0, y: 28 });
    if (descRef.current) gsap.set(descRef.current, { opacity: 0, y: 20 });
    if (hintRef.current) gsap.set(hintRef.current, { opacity: 0 });

    const triggerImpact = () => {
      gsap.to(inner, {
        x: isMobile ? 3 : 6,
        y: isMobile ? 2 : 4,
        duration: 0.04,
        repeat: isMobile ? 3 : 7,
        yoyo: true,
        ease: "none",
        onComplete: () => gsap.set(inner, { x: 0, y: 0, clearProps: "transform" }),
      });

      gsap.to(glow, {
        opacity: 0.85,
        scale: 1.8,
        duration: 0.12,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
        onComplete: () => gsap.to(glow, { opacity: 0, duration: 0.5 }),
      });

      gsap.to(crackWrap, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: "back.out(1.4)",
      });

      crackLines.forEach((line, i) => {
        gsap.to(line, {
          strokeDashoffset: 0,
          duration: 0.45,
          delay: i * 0.04,
          ease: "power2.out",
        });
      });

      spawnDust(dust);
    };

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(phone, {
      y: 0,
      rotation: 0,
      duration: 1.35,
      ease: "power2.in",
    })
      .to(phone, {
        y: -18,
        duration: 0.12,
        ease: "power2.out",
      })
      .to(phone, {
        y: 0,
        duration: 0.55,
        ease: "bounce.out",
        onStart: triggerImpact,
      })
      .to(
        phone,
        {
          y: 6,
          duration: 0.06,
          repeat: 1,
          yoyo: true,
          ease: "sine.inOut",
        },
        "-=0.15"
      );

    if (copy) {
      tl.to(
        copy,
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" },
        "-=0.35"
      );
    }
    if (labelRef.current) {
      tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.7");
    }
    if (titleRef.current) {
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.65 }, "-=0.55");
    }
    if (descRef.current) {
      tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.4");
    }
    if (hintRef.current) {
      tl.to(hintRef.current, { opacity: 1, duration: 0.45 }, "-=0.2");
    }

    tl.eventCallback("onComplete", () => {
      gsap.set(phone, { clearProps: "transform" });
      notifyPhoneHeroReady();
    });

    return () => {
      tl.kill();
      gsap.killTweensOf([phone, inner, glow, crackWrap, crackLines]);
    };
  }, []);

  return (
    <section id="portfolio" className="premium-hero">
      {/* Cinematic background */}
      <div className="premium-hero__bg" aria-hidden />
      <div className="premium-hero__spotlight premium-hero__spotlight--left" aria-hidden />
      <div className="premium-hero__spotlight premium-hero__spotlight--accent" aria-hidden />
      <div className="premium-hero__vignette" aria-hidden />
      <div className="premium-hero__grain" aria-hidden />

      <div className="premium-hero__layout">
        <div ref={sceneRef} className="premium-hero__scene">
          <div ref={innerRef} className="premium-hero__scene-inner">
            <div ref={glowRef} className="premium-hero__impact-glow" aria-hidden />

            <div ref={crackWrapRef} className="premium-hero__cracks" aria-hidden>
              <CrackOverlay ref={crackSvgRef} />
            </div>

            <div ref={dustRef} className="premium-hero__dust-layer" aria-hidden />

            <div ref={anchorRef} className="premium-hero__phone-anchor">
              <div ref={phoneRef} className="premium-hero__phone">
                <div className="premium-hero__phone-tilt">
                  <PhoneMockup className="w-full" variant="hero">
                    <PortfolioContent />
                  </PhoneMockup>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div ref={copyRef} className="premium-hero__copy">
          <div className="premium-hero__glass mx-auto w-full lg:mx-0">
            <p
              ref={labelRef}
              className="premium-hero__label mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500 sm:mb-4 sm:text-xs sm:tracking-[0.35em]"
            >
              Abubakar Khan Lodhi
            </p>

            <h1
              ref={titleRef}
              className="premium-hero__title font-display text-[clamp(1.75rem,7.5vw,4.75rem)] font-extrabold leading-[1.08] tracking-tight"
            >
              <span className="block text-white">Full Stack</span>
              <span className="block text-accent-500">Developer</span>
              <span className="block text-white">Portfolio</span>
            </h1>

            <p
              ref={descRef}
              className="premium-hero__desc mx-auto mt-4 max-w-md text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-base lg:mx-0 lg:text-lg"
            >
              Scroll inside the phone or continue down the page to explore my full
              portfolio — education, experience, skills, projects, and contact.
            </p>

            <div
              ref={hintRef}
              className="premium-hero__hint mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-[11px] text-zinc-500 sm:mt-8 sm:text-sm lg:justify-start lg:text-left"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-accent-500 shadow-[0_0_12px_rgba(255,87,34,0.8)]" />
              Scroll the phone or the page below
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
