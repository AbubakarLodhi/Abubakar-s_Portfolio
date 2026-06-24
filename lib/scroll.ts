import { PHONE_SECTION_MAP } from "@/lib/nav-sections";

export function scrollPhoneToSection(sectionId: string) {
  const container = document.getElementById("phone-scroll");
  if (!container) return;

  const phoneId = PHONE_SECTION_MAP[sectionId] ?? sectionId;
  const target = container.querySelector<HTMLElement>(
    `[data-phone-section="${phoneId}"]`
  );
  if (!target) return;

  const top =
    target.getBoundingClientRect().top -
    container.getBoundingClientRect().top +
    container.scrollTop;
  container.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function getMainSections(): HTMLElement[] {
  return Array.from(
    document.querySelectorAll<HTMLElement>(
      "#portfolio, main section[id], main footer[id]"
    )
  ).filter((el) => !el.closest("#phone-scroll"));
}

export function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId);
  if (target && !target.closest("#phone-scroll")) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  scrollPhoneToSection(sectionId);
}

export function getActiveSection(): string {
  const sections = getMainSections();
  if (!sections.length) return "portfolio";

  const nearBottom =
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 120;

  if (nearBottom) return "contact";

  const marker = window.scrollY + window.innerHeight * 0.28;
  let current = "portfolio";

  for (const section of sections) {
    const top = section.offsetTop;
    if (marker >= top) {
      current = section.id;
    }
  }

  return current;
}
