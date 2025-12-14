import React from "react";
import { Experience } from "../types";
import { IconBriefcase } from "./Icons";

const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Fullstack Developer Internship",
    company: "PT Fujiyama Technology Solutions",
    period: "April — November 2025",
    description:
      "Developed and maintained various full-stack applications, including building a new FBE website, contributing to the development of the FTS platform, and creating a cross-platform mobile application. Focused on end-to-end project delivery.", // Deskripsi baru
    technologies: ["Laravel", "Tailwind CSS", "Flutter", "PostgreSQL", "Supabase"], 
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-border/50 bg-gradient-to-b from-background to-surface/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <IconBriefcase />
          </div>
          <h2 className="text-2xl font-semibold text-text-main">Experience</h2>
        </div>

        <div className="space-y-4">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="group p-6 rounded-xl border border-transparent hover:border-border hover:bg-surface/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-lg font-medium text-text-main group-hover:text-primary transition-colors">{exp.role}</h3>
                <span className="text-sm font-mono text-text-muted mt-1 md:mt-0">{exp.period}</span>
              </div>

              <div className="text-base text-text-main/80 mb-4 font-medium">{exp.company}</div>

              <p className="text-sm text-text-muted leading-relaxed max-w-2xl mb-4">{exp.description}</p>

              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-xs text-text-muted/80 font-mono px-1.5 py-0.5 bg-white/5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
