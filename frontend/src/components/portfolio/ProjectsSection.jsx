import React from 'react';
import { ArrowUpRight, Layers, Cpu, Eye, Bot } from 'lucide-react';
import { Badge } from '../ui/badge';
import { projects } from '../../data/mock';

const categoryIcons = {
  GenAI: Bot,
  'CV/ML': Eye,
  Embedded: Cpu,
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-teal-500 font-mono text-sm tracking-wider uppercase mb-3">
            What I've Built
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const CategoryIcon = categoryIcons[project.category] || Layers;
            return (
              <div
                key={project.id}
                className={`group relative bg-zinc-900/50 border rounded-2xl p-8 transition-all duration-300 cursor-default ${
                  project.featured
                    ? 'border-teal-500/20 hover:border-teal-500/40'
                    : 'border-zinc-800/50 hover:border-zinc-700/50'
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/20 text-xs">
                      Featured
                    </Badge>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/10 transition-colors duration-200">
                      <CategoryIcon className="w-5 h-5 text-zinc-400 group-hover:text-teal-400 transition-colors duration-200" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-50 group-hover:text-teal-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-500">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm">
                    <ArrowUpRight className="w-4 h-4 text-teal-500" />
                    <span className="text-teal-400 font-medium">{project.impact}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-zinc-800/80 text-zinc-400 border-0 text-xs hover:bg-zinc-700/80 hover:text-zinc-300 transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
