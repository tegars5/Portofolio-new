import React from "react";
import { Education } from "../types";
import { IconEducation } from "./Icons";

const EDUCATION_DATA: Education[] = [
  {
    id: "1",
    degree: "Software Engineering",
    institution: "Institut Teknologi dan Bisnis Bina Sarana Global",
    period: "2022 - present",
    description:
      "Currently pursuing a degree with a strong focus on modern software development methodologies, full-stack programming (Vue.js, Laravel), and cross-platform mobile application development (Flutter). Actively participating in project-based learning and practical coding assignments.",
  },
];

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative border-t border-border/50 bg-gradient-to-b from-surface/10 to-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <IconEducation />
          </div>
          <h2 className="text-2xl font-semibold text-text-main">Education</h2>
        </div>

        <div className="space-y-4">
          {EDUCATION_DATA.map((edu) => (
            <div key={edu.id} className="group p-6 rounded-xl border border-border/40 bg-surface/5 hover:border-border hover:bg-surface/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-lg font-medium text-text-main group-hover:text-white transition-colors">{edu.degree}</h3>
                <span className="text-sm font-mono text-text-muted mt-1 md:mt-0">{edu.period}</span>
              </div>

              <div className="text-base text-primary/90 mb-3 font-medium">{edu.institution}</div>

              {edu.description && <p className="text-sm text-text-muted leading-relaxed max-w-2xl">{edu.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
