"use client";

import { PhoneProfileHero } from "@/components/PhoneProfileHero";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export function PortfolioContent() {
  return (
    <div className="bg-black">
      <PhoneProfileHero />
      <Education compact />
      <Experience compact />
      <Skills compact />
      <Projects compact />
      <Contact compact />
    </div>
  );
}
