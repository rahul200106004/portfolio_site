import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo } from '../../data/mock';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Beyond Code', href: '#beyond' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo('#hero')}
          className="font-heading font-bold text-xl text-zinc-50 tracking-tight hover:text-teal-400 transition-colors duration-200"
        >
          {personalInfo.firstName}
          <span className="text-teal-500">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-3 py-2 text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-200 rounded-lg hover:bg-zinc-800/50"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-teal-500/30 text-teal-400 hover:bg-teal-500/10 hover:border-teal-500/50 transition-all duration-200"
            onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
          >
            <FileDown className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>

        <button
          className="md:hidden text-zinc-400 hover:text-zinc-50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-3 text-left text-sm text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800/50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="mt-2 border-teal-500/30 text-teal-400 hover:bg-teal-500/10"
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
            >
              <FileDown className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
