import { Navbar } from "@/components/Navbar";
import { PhoneShowcase } from "@/components/PhoneShowcase";
import { SiteHero } from "@/components/SiteHero";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <PhoneShowcase />
      <main className="min-w-0 overflow-x-clip">
        <SiteHero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}
