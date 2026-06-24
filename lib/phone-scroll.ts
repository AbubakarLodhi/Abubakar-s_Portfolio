export function scrollPhoneToSection(sectionId: string) {
  const container = document.getElementById("phone-scroll");
  const target = container?.querySelector<HTMLElement>(`#${sectionId}`);
  if (!container || !target) return;

  const top = target.offsetTop - container.offsetTop;
  container.scrollTo({ top, behavior: "smooth" });
}
