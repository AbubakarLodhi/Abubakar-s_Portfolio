export const PHONE_HERO_READY_EVENT = "phone-hero-ready";

function getPhoneScrollTarget(container: HTMLElement) {
  const education = container.querySelector<HTMLElement>(
    '[data-phone-section="education"]'
  );

  if (education) {
    const top =
      education.getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop -
      12;
    return Math.max(72, Math.min(top, container.scrollHeight * 0.38));
  }

  return Math.min(150, container.scrollHeight * 0.2);
}

export function runPhoneIntroScroll() {
  const container = document.getElementById("phone-scroll");
  if (!container) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  container.scrollTop = 0;
  if (reduced) return;

  const scrollDown = () => {
    const target = getPhoneScrollTarget(container);
    container.scrollTo({ top: target, behavior: "smooth" });
  };

  const scrollHome = () => {
    container.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Wait for scaled layout + fonts before scrolling
  window.setTimeout(scrollDown, 250);
  window.setTimeout(scrollHome, 1300);
}

export function notifyPhoneHeroReady() {
  runPhoneIntroScroll();
  window.dispatchEvent(new Event(PHONE_HERO_READY_EVENT));
}
