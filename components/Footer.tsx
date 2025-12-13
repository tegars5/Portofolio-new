import React from 'react';
import { IconGithub, IconTwitter, IconMail } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="py-12 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-sm font-medium text-text-main">
            Alex Developer
          </span>
          <span className="text-sm text-text-muted">
            Building digital products with attention to detail.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-text-muted hover:text-primary transition-colors">
            <span className="sr-only">GitHub</span>
            <IconGithub />
          </a>
          <a href="#" className="text-text-muted hover:text-primary transition-colors">
            <span className="sr-only">Twitter</span>
            <IconTwitter />
          </a>
          <a href="mailto:hello@example.com" className="text-text-muted hover:text-primary transition-colors">
            <span className="sr-only">Email</span>
            <IconMail />
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 mt-8 text-center md:text-left">
        <p className="text-xs text-text-muted/50">
          © {new Date().getFullYear()} All rights reserved. Designed with Linear aesthetic.
        </p>
      </div>
    </footer>
  );
};