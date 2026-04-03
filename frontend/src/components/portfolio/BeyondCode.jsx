import React from 'react';
import {
  Crown,
  Compass,
  Brain,
  Sparkles,
  BookOpen,
  Trophy,
  Camera,
  Zap,
} from 'lucide-react';
import { beyondCode } from '../../data/mock';

const passionIconMap = {
  brain: Brain,
  sparkles: Sparkles,
  book: BookOpen,
  trophy: Trophy,
  camera: Camera,
  zap: Zap,
};

const BeyondCode = () => {
  return (
    <section id="beyond" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-teal-500 font-mono text-sm tracking-wider uppercase mb-3">
            More Than Code
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight">
            Beyond the Terminal
          </h2>
        </div>

        {/* Chess & Travel */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Chess */}
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700/50 transition-all duration-300">
            <div className="aspect-video relative overflow-hidden bg-zinc-900 flex items-center justify-center">
              <img
                src={beyondCode.chess.image}
                alt="FIDE Chess Certificate"
                className="w-full h-full object-contain p-2"
                loading="lazy"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <Crown className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-50">
                  {beyondCode.chess.title}
                </h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {beyondCode.chess.description}
              </p>
              <div className="grid grid-cols-3 gap-3">
                {beyondCode.chess.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-zinc-800/50 rounded-lg p-3 text-center"
                  >
                    <p className="text-teal-400 font-semibold text-sm">
                      {stat.value}
                    </p>
                    <p className="text-zinc-600 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Travel */}
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700/50 transition-all duration-300">
            <div className="aspect-video relative overflow-hidden bg-zinc-900">
              <img
                src={beyondCode.travel.image}
                alt="Travel Heatmap of India"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-50">
                  {beyondCode.travel.title}
                </h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {beyondCode.travel.description}
              </p>
              <div className="grid grid-cols-3 gap-3">
                {beyondCode.travel.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-zinc-800/50 rounded-lg p-3 text-center"
                  >
                    <p className="text-teal-400 font-semibold text-sm">
                      {stat.value}
                    </p>
                    <p className="text-zinc-600 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Passions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {beyondCode.passions.map((passion) => {
            const Icon = passionIconMap[passion.icon] || Zap;
            return (
              <div
                key={passion.name}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5 text-center hover:border-zinc-700/50 hover:bg-zinc-900/80 transition-all duration-300 group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-500/10 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-zinc-500 group-hover:text-teal-400 transition-colors duration-200" />
                </div>
                <p className="text-sm font-medium text-zinc-300">{passion.name}</p>
                <p className="text-xs text-zinc-600 mt-1">{passion.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BeyondCode;
