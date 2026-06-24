"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ProjectModal } from "@/components/ProjectModal";
import { Stagger, StaggerItem } from "@/components/ui/Animated";
import { PROJECTS, type Project } from "@/lib/data";
import { sectionAttrs } from "@/lib/nav-sections";

interface ProjectsProps {
  compact?: boolean;
}

export function Projects({ compact = false }: ProjectsProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section
        {...sectionAttrs("works", compact)}
        className={compact ? "section-pad-compact bg-black" : "section-pad bg-black"}
      >
        <div className={compact ? "" : "container-main"}>
          <SectionHeader
            label="Portfolio"
            title="Featured Projects"
            subtitle={
              compact
                ? undefined
                : "Selected work in full-stack development, AI, and web applications."
            }
            light
            compact={compact}
          />

          {compact ? (
            <div className="space-y-3">
              {PROJECTS.map((project) => (
                <article
                  key={project.id}
                  className="card-dark group relative flex flex-col"
                >
                  <span className="font-display text-2xl font-extrabold text-accent-500/20">
                    {project.number}
                  </span>
                  <h3 className="mt-1 font-display text-xs font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[10px] leading-relaxed text-zinc-500">
                    {project.shortDesc}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSelected(project)}
                    className="mt-2 w-full"
                  >
                    View Details
                    <ArrowRight size={12} />
                  </Button>
                </article>
              ))}
            </div>
          ) : (
            <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {PROJECTS.map((project, i) => (
                <StaggerItem
                  key={project.id}
                  type={i % 2 === 0 ? "left" : "right"}
                  className={
                    i === PROJECTS.length - 1 && PROJECTS.length % 2 !== 0
                      ? "md:col-span-2 md:max-w-xl md:justify-self-center md:w-full"
                      : ""
                  }
                >
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="card-dark group relative flex h-full flex-col p-6 sm:p-8"
                  >
                    <span className="font-display text-5xl font-extrabold text-accent-500/20">
                      {project.number}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                      {project.shortDesc}
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSelected(project)}
                      className="mt-6 w-full sm:w-auto"
                    >
                      View Details
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.article>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
        contained={compact}
      />
    </>
  );
}
