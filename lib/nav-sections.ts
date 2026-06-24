/** Main-page section ids tracked by the navbar */
export const MAIN_SECTIONS = [
  "portfolio",
  "about",
  "education",
  "experience",
  "skills",
  "works",
  "contact",
] as const;

export type MainSectionId = (typeof MAIN_SECTIONS)[number];

/** Which main sections highlight each nav item */
export const NAV_ACTIVE_GROUPS: Record<string, readonly MainSectionId[]> = {
  about: ["about", "education"],
  experience: ["experience"],
  skills: ["skills"],
  works: ["works"],
  contact: ["contact"],
};

/** Map main-page section → phone scroll target */
export const PHONE_SECTION_MAP: Record<string, string> = {
  portfolio: "portfolio",
  about: "portfolio",
  education: "education",
  experience: "experience",
  skills: "skills",
  works: "works",
  contact: "contact",
};

export function sectionAttrs(sectionId: string, compact?: boolean) {
  return compact
    ? { "data-phone-section": sectionId }
    : { id: sectionId };
}
