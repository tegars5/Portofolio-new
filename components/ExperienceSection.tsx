import React from 'react';
import { Experience } from '../types';
import { IconBriefcase } from './Icons';

const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'TechFlow Solutions',
    period: '2021 — Present',
    description: 'Leading the frontend architecture for the core SaaS product. Improved build times by 40% and mentored junior developers. Spearheaded the migration from legacy options API to Composition API.',
    technologies: ['Vue 3', 'TypeScript', 'Vite', 'GraphQL']
  },
  {
    id: '2',
    role: 'Frontend Developer',
    company: 'Creative Digital Agency',
    period: '2019 — 2021',
    description: 'Built award-winning marketing sites and interactive web experiences for Fortune 500 clients. Collaborated closely with designers to implement pixel-perfect UIs with complex animations.',
    technologies: ['React', 'GSAP', 'WebGL', 'Contentful']
  },
  {
    id: '3',
    role: 'UI/UX Developer',
    company: 'StartUp Inc',
    period: '2017 — 2019',
    description: 'First engineering hire. Designed and implemented the MVP of the customer portal. Established initial coding standards and CI/CD pipelines.',
    technologies: ['JavaScript', 'Sass', 'Figma', 'Jest']
  }
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
          {EXPERIENCES.map(exp => (
            <div 
              key={exp.id} 
              className="group p-6 rounded-xl border border-transparent hover:border-border hover:bg-surface/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-lg font-medium text-text-main group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                <span className="text-sm font-mono text-text-muted mt-1 md:mt-0">{exp.period}</span>
              </div>
              
              <div className="text-base text-text-main/80 mb-4 font-medium">
                {exp.company}
              </div>
              
              <p className="text-sm text-text-muted leading-relaxed max-w-2xl mb-4">
                {exp.description}
              </p>

              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
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