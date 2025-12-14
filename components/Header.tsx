import React, { useState, useEffect } from "react";
import { NavItem } from "../types";
import { IconMenu, IconClose } from "./Icons";

const NAV_ITEMS: NavItem[] = [
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Tools", id: "tools" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "footer" },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // Close menu on click
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent border-transparent"}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-lg tracking-tight text-text-main cursor-pointer hover:text-white transition-colors relative z-50" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          tegars
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 md:gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${activeSection === item.id ? "text-text-main bg-white/5" : "text-text-muted hover:text-text-main hover:bg-white/5"}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center z-50">
          <button className="p-2 text-text-muted hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center gap-2 w-full px-8 max-w-sm">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg font-medium transition-colors w-full text-center py-3 border-b border-white/5 rounded-lg hover:bg-white/5 ${activeSection === item.id ? "text-primary" : "text-text-main hover:text-white"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
