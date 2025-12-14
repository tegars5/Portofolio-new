import React from "react";
import { Project } from "../types";
import { ProjectCard } from "./ProjectCard";
import { IconCode } from "./Icons";

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Hotel Booking App",
    description: "A cross-platform mobile application for hotel reservations, built using Flutter and Firebase, featuring state management powered by GetX for reactive performance.",
    tags: ["Flutter", "Firebase", "GetX"],
    imageUrl: "/images/projects/project1.png",
    link: "#",
  },
  {
    id: "2",
    title: "Enterprise Management System (Full-Stack)",
    description: "Developed a robust internal management system with a decoupled architecture. Frontend built with React/TypeScript, backend powered by Laravel 11 API.",
    tags: ["Laravel 11", "React", "TypeScript", "API", "Mysql"],
    imageUrl: "/images/projects/project2.jpg",
    link: "#",
  },
  {
    id: "3",
    title: "Find House App",
    description: "A mobile application to search and book properties, focusing on high-quality UI/UX and smooth performance across iOS and Android.",
    tags: ["Flutter", "Dart"],
    imageUrl: "/images/projects/project3.png",
    link: "#",
  },
  {
    id: "4",
    title: "GO-BOOK App",
    description: "A Flutter-based mobile application for reading and managing e-books, successfully launched and available on the Google Play Store.",
    tags: ["Flutter", "Mobile", "Dart"],
    imageUrl: "/images/projects/project4.png",
    link: "#",
  },
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
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
