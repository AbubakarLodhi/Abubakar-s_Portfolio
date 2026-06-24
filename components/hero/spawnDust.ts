import gsap from "gsap";

interface DustParticle {
  el: HTMLDivElement;
}

const COUNT_MOBILE = 10;
const COUNT_DESKTOP = 22;

export function spawnDust(container: HTMLElement, onComplete?: () => void) {
  const particles: DustParticle[] = [];
  const rect = container.getBoundingClientRect();
  const originX = rect.width * 0.5;
  const originY = rect.height * 0.72;
  const count =
    typeof window !== "undefined" && window.innerWidth < 768
      ? COUNT_MOBILE
      : COUNT_DESKTOP;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    const size = 2 + Math.random() * 5;
    el.className = "premium-hero__dust-particle";
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.left = `${originX}px`;
    el.style.top = `${originY}px`;
    container.appendChild(el);
    particles.push({ el });
  }

  const tl = gsap.timeline({ onComplete });

  particles.forEach((p, i) => {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
    const dist = 40 + Math.random() * 90;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 20;

    tl.fromTo(
      p.el,
      { opacity: 0.9, scale: 1, x: 0, y: 0 },
      {
        opacity: 0,
        scale: 0.2,
        x: dx,
        y: dy,
        duration: 0.5 + Math.random() * 0.4,
        ease: "power2.out",
      },
      i * 0.012
    );
  });

  tl.call(() => {
    particles.forEach((p) => p.el.remove());
  });

  return tl;
}
