import React from 'react';
import { IconVSCode, IconFigma, IconGit, IconTerminal, IconChrome, IconDatabase } from './Icons';
import { Tool } from '../types';

const TOOLS: Tool[] = [
  {
    name: 'VS Code',
    description: 'Primary editor',
    icon: IconVSCode
  },
  {
    name: 'Figma',
    description: 'Design & Prototyping',
    icon: IconFigma
  },
  {
    name: 'Git',
    description: 'Version Control',
    icon: IconGit
  },
  {
    name: 'Terminal',
    description: 'Zsh & Oh My Zsh',
    icon: IconTerminal
  },
  {
    name: 'Chrome',
    description: 'DevTools Mastery',
    icon: IconChrome
  },
  {
    name: 'PostgreSQL',
    description: 'Database',
    icon: IconDatabase
  }
];

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-24 relative border-t border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-text-main">Tools & Software</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {TOOLS.map((tool) => (
            <div 
              key={tool.name} 
              className="group flex items-center gap-4 p-4 rounded-xl border border-border/40 bg-surface/20 hover:bg-surface hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
            >
              <div className="p-2.5 rounded-lg bg-background border border-border/50 text-text-muted group-hover:text-primary group-hover:border-primary/20 transition-colors">
                <tool.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-text-main group-hover:text-white transition-colors">
                  {tool.name}
                </div>
                <div className="text-xs text-text-muted font-normal mt-0.5">
                  {tool.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};