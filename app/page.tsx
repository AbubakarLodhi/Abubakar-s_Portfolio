import { Preloader } from "@/components/creative/Preloader";
import { SmoothScroll } from "@/components/creative/SmoothScroll";
import { Cursor } from "@/components/creative/Cursor";
import { Nav } from "@/components/creative/Nav";
import { Hero } from "@/components/creative/Hero";
import { About } from "@/components/creative/About";
import { Expertise } from "@/components/creative/Expertise";
import { Work } from "@/components/creative/Work";
import { Experience } from "@/components/creative/Experience";
import { Contact } from "@/components/creative/Contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <Cursor />
      <Nav />
      <main className="min-w-0">
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
