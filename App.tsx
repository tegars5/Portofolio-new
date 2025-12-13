import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ToolsSection } from './components/ToolsSection';
import { EducationSection } from './components/EducationSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text-main font-sans selection:bg-primary/30 selection:text-primary-100">
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <ExperienceSection />
        <ToolsSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;