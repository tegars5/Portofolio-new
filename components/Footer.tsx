import React from 'react';
import { IconGithub, IconTwitter, IconMail, IconWhatsApp } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="py-12 border-t border-border bg-background relative overflow-hidden">
      {/* Background glow for footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <span className="text-lg font-bold text-text-main tracking-tight">
            Alex Developer
          </span>
          <span className="text-sm text-text-muted max-w-xs">
            Building digital products with attention to detail. Open for new opportunities.
          </span>
        </div>

        {/* Consolidated Icon Links */}
        <div className="flex items-center gap-4">
          <a 
            href="mailto:hello@alex.dev" 
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 text-text-muted hover:text-primary transition-all group"
            aria-label="Email"
          >
            <IconMail className="w-5 h-5" />
          </a>
          
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#25D366]/50 text-text-muted hover:text-[#25D366] transition-all group"
            aria-label="WhatsApp"
          >
            <IconWhatsApp className="w-5 h-5" />
          </a>

          <a 
            href="#" 
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-text-muted hover:text-white transition-all group"
            aria-label="GitHub"
          >
            <IconGithub className="w-5 h-5" />
          </a>
          
          <a 
            href="#" 
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#1DA1F2]/50 text-text-muted hover:text-[#1DA1F2] transition-all group"
            aria-label="Twitter"
          >
            <IconTwitter className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 mt-12 text-center md:text-left border-t border-white/5 pt-8">
        <p className="text-xs text-text-muted/50">
          © {new Date().getFullYear()} Alex Developer. All rights reserved. Designed with Linear aesthetic.
        </p>
      </div>
    </footer>
  );
};