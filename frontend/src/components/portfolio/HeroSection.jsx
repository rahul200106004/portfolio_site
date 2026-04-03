import React, { useEffect, useState } from 'react';
import { ArrowDown, Mail, MapPin, Briefcase } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { personalInfo } from '../../data/mock';

const terminalLines = [
  { key: 'const', text: 'const ', highlight: 'rahul', rest: ' = {' },
  { key: 'role', text: '  role: ', value: '"AI Engineer",' },
  { key: 'focus', text: '  focus: ', value: '"GenAI & RAG Pipelines",' },
  { key: 'stack', text: '  stack: ', value: '["LangChain", "Azure", "FastAPI"],' },
  { key: 'motto', text: '  motto: ', value: '"Curiosity is my OS"' },
  { key: 'close', text: '};', value: '' },
];

const HeroSection = () => {
  const [terminalVisible, setTerminalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTerminalVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.07),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.03),transparent_40%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge
                  variant="outline"
                  className="border-teal-500/30 text-teal-400 bg-teal-500/5 px-3 py-1"
                >
                  <Briefcase className="w-3 h-3 mr-1.5" />
                  {personalInfo.totalExperience} Experience
                </Badge>
                <Badge
                  variant="outline"
                  className="border-zinc-700 text-zinc-400 bg-zinc-800/30 px-3 py-1"
                >
                  <MapPin className="w-3 h-3 mr-1.5" />
                  {personalInfo.location}
                </Badge>
              </div>

              <p className="text-teal-500 font-mono text-sm tracking-wider uppercase">
                Hello, I'm
              </p>

              <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.9]">
                <span className="text-zinc-50">{personalInfo.firstName}</span>
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  {personalInfo.lastName}
                </span>
              </h1>
            </div>

            <p className="text-xl sm:text-2xl text-zinc-500 font-light leading-relaxed max-w-xl italic border-l-2 border-teal-500/30 pl-4">
              "{personalInfo.tagline}"
            </p>

            <p className="text-zinc-400 leading-relaxed max-w-lg">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-500 text-white px-8 transition-colors duration-200"
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50 px-8 transition-colors duration-200"
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right - Terminal */}
          <div
            className={`hidden lg:block transition-all duration-700 ${
              terminalVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/50">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-zinc-600 font-mono">about.js</span>
              </div>
              <div className="p-6 font-mono text-sm leading-loose">
                {terminalLines.map((line, idx) => (
                  <div
                    key={line.key}
                    className="transition-all duration-500"
                    style={{
                      transitionDelay: `${(idx + 1) * 150}ms`,
                      opacity: terminalVisible ? 1 : 0,
                      transform: terminalVisible ? 'translateX(0)' : 'translateX(-10px)',
                    }}
                  >
                    <span className="text-zinc-500">{line.text}</span>
                    {line.highlight && (
                      <span className="text-teal-400">{line.highlight}</span>
                    )}
                    {line.rest && <span className="text-zinc-500">{line.rest}</span>}
                    {line.value && <span className="text-amber-400">{line.value}</span>}
                  </div>
                ))}
                <div className="mt-2 flex items-center">
                  <span className="text-teal-500">{'>'}</span>
                  <span className="w-2 h-5 bg-teal-500 ml-1 animate-pulse rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-zinc-600" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
