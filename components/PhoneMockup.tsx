"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

const LOGICAL_WIDTH = 300;

interface PhonePreviewCanvasProps {
  children: ReactNode;
  scrollClassName: string;
  scrollRef: React.Ref<HTMLDivElement>;
}

function PhonePreviewCanvas({
  children,
  scrollClassName,
  scrollRef,
}: PhonePreviewCanvasProps) {
  const localScrollRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  const setScrollRef = useCallback(
    (node: HTMLDivElement | null) => {
      localScrollRef.current = node;
      if (typeof scrollRef === "function") scrollRef(node);
      else if (scrollRef) scrollRef.current = node;
    },
    [scrollRef]
  );

  useEffect(() => {
    const scroll = localScrollRef.current;
    if (scroll) scroll.scrollTop = 0;
  }, []);

  useEffect(() => {
    const scroll = localScrollRef.current;
    const canvas = canvasRef.current;
    const spacer = spacerRef.current;
    if (!scroll || !canvas || !spacer) return;

    const apply = () => {
      const width = scroll.clientWidth;
      if (width <= 0) return;

      const scale = width / LOGICAL_WIDTH;

      if (scale >= 0.96) {
        canvas.style.width = "100%";
        canvas.style.transform = "none";
        spacer.style.height = "";
      } else {
        canvas.style.width = `${LOGICAL_WIDTH}px`;
        canvas.style.transform = `scale(${scale})`;
        canvas.style.transformOrigin = "top left";
        spacer.style.height = `${canvas.offsetHeight * scale}px`;
      }
    };

    const schedule = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(apply);
    };

    schedule();
    const ro = new ResizeObserver(schedule);
    ro.observe(scroll);
    ro.observe(canvas);

    const images = canvas.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.complete) img.addEventListener("load", schedule, { once: true });
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={setScrollRef} id="phone-scroll" className={scrollClassName}>
      <div ref={spacerRef} className="phone-preview-spacer">
        <div ref={canvasRef} className="phone-preview-canvas">
          {children}
        </div>
      </div>
    </div>
  );
}

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "hero";
}

export const PhoneMockup = forwardRef<HTMLDivElement, PhoneMockupProps>(
  function PhoneMockup({ children, className = "", variant = "default" }, ref) {
    const isHero = variant === "hero";
    const rootClass =
      className || (isHero ? "w-full" : "w-[240px] sm:w-[265px] lg:w-[285px]");

    const scrollClassName = isHero
      ? "phone-scroll phone-scroll--hero absolute inset-0 overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y"
      : "phone-scroll h-[min(420px,46dvh)] overflow-y-auto overscroll-contain sm:h-[min(480px,50dvh)] md:h-[min(520px,52dvh)] lg:h-[min(575px,56vh)]";

    return (
      <div className={`relative ${rootClass}`}>
        <div
          className="absolute -left-[3px] top-[26%] h-6 w-[3px] rounded-l-sm bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 lg:-left-[4px] lg:h-9 lg:w-[4px]"
          aria-hidden
        />
        <div
          className="absolute -left-[3px] top-[38%] h-8 w-[3px] rounded-l-sm bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 lg:-left-[4px] lg:h-12 lg:w-[4px]"
          aria-hidden
        />
        <div
          className="absolute -right-[3px] top-[32%] h-10 w-[3px] rounded-r-sm bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-900 lg:-right-[4px] lg:h-14 lg:w-[4px]"
          aria-hidden
        />

        <div
          className="relative rounded-[2rem] p-[6px] shadow-phone lg:rounded-[2.85rem] lg:p-[11px]"
          style={{
            background:
              "linear-gradient(145deg, #d4d4d8 0%, #a1a1aa 18%, #71717a 45%, #3f3f46 72%, #27272a 100%)",
            boxShadow:
              "0 16px 40px rgba(0,0,0,0.75), 0 0 30px rgba(255,87,34,0.1), inset 0 1px 0 rgba(255,255,255,0.35), inset -2px 0 6px rgba(0,0,0,0.4)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-y-4 left-[4px] w-[1.5px] rounded-full bg-white/40 lg:inset-y-6 lg:left-[6px] lg:w-[2px]"
            aria-hidden
          />

          <div
            className="absolute left-1/2 top-[10px] z-30 h-[14px] w-[56px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] lg:top-[18px] lg:h-[24px] lg:w-[96px]"
            aria-hidden
          />

          <div
            className={`relative overflow-hidden bg-black ring-1 ring-black/80 ${
              isHero
                ? "aspect-[9/19.5] w-full rounded-[1.45rem] lg:rounded-[2.35rem]"
                : "rounded-[2.35rem]"
            }`}
          >
            {isHero ? (
              <PhonePreviewCanvas scrollClassName={scrollClassName} scrollRef={ref}>
                {children}
              </PhonePreviewCanvas>
            ) : (
              <div ref={ref} id="phone-scroll" className={scrollClassName}>
                {children}
              </div>
            )}
            <div
              id="phone-modal-root"
              className="pointer-events-none absolute inset-0 z-40 overflow-hidden"
              aria-hidden
            />
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-[6px] rounded-[1.45rem] lg:inset-[11px] lg:rounded-[2.35rem]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, transparent 42%, transparent 70%, rgba(255,255,255,0.04) 100%)",
          }}
          aria-hidden
        />

        <div
          className="pointer-events-none absolute -bottom-2 left-1/2 h-3 w-[65%] -translate-x-1/2 rounded-full bg-black/60 blur-md lg:-bottom-3 lg:h-4 lg:w-[70%]"
          aria-hidden
        />
      </div>
    );
  }
);
