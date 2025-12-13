import React from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { IconCode } from './Icons';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Dashboard',
    description: 'A high-performance analytics dashboard for fintech applications featuring real-time data visualization via WebSockets.',
    tags: ['Vue.js', 'D3.js', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/nexus/800/450',
    link: '#'
  },
  {
    id: '2',
    title: 'Aether Design System',
    description: 'Comprehensive design system library used across 12+ products, ensuring UI consistency and accessibility compliance.',
    tags: ['React', 'TypeScript', 'Storybook'],
    imageUrl: 'https://picsum.photos/seed/aether/800/450',
    link: '#'
  },
  {
    id: '3',
    title: 'Chronos Task Manager',
    description: 'Productivity tool focusing on keyboard-first navigation and offline-first capabilities using local database sync.',
    tags: ['Electron', 'React', 'SQLite'],
    imageUrl: 'https://picsum.photos/seed/chronos/800/450',
    link: '#'
  },
  {
    id: '4',
    title: 'Vanguard E-Commerce',
    description: 'Headless e-commerce frontend built for speed and SEO, achieving perfect Lighthouse scores.',
    tags: ['Next.js', 'Shopify', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/seed/vanguard/800/450',
    link: '#'
  }
];

export const WorkSection: React.FC = () => {
  return (
    <section id="work" className="py-24 relative border-t border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <IconCode />
          </div>
          <h2 className="text-2xl font-semibold text-text-main">Selected Work</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};