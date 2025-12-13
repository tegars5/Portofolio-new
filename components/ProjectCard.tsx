import React from 'react';
import { Project } from '../types';
import { IconArrowUpRight } from './Icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a 
      href={project.link || '#'} 
      className="group relative flex flex-col h-full bg-surface border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-text-muted/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
    >
      {/* Image Container with Overlay */}
      <div className="relative aspect-video overflow-hidden bg-[#1A1C20]">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-text-main group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <div className="text-text-muted group-hover:text-primary transition-colors opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 duration-300">
            <IconArrowUpRight />
          </div>
        </div>
        
        <p className="text-sm text-text-muted leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-0.5 text-xs font-medium text-text-muted bg-white/5 border border-white/5 rounded-md group-hover:border-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};