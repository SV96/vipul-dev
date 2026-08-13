import React, { useState } from 'react';
import { UI_STRINGS, PROJECTS_DATA } from '../constants/portfolioConstants';
import ProjectModal from './ProjectModal';
import { ArrowRight } from 'lucide-react';

const categories = ["All", "GenAI / AI Agents", "Full Stack & InsurTech", "Automation & Workflows"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 theme-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest theme-accent-color font-mono mb-3">
            {UI_STRINGS.projects.eyebrow}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold theme-text-heading tracking-tight">
            {UI_STRINGS.projects.headingPrefix}
            <span className="gradient-text">{UI_STRINGS.projects.headingGradient}</span>
          </h3>
          <p className="mt-4 theme-text-muted text-base">
            {UI_STRINGS.projects.subheading}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'btn-accent shadow-lg scale-105 font-bold'
                  : 'glass-panel theme-text-muted hover:theme-text-heading'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl glass-panel p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative overflow-hidden"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-0 right-0">
                  <div className="btn-accent text-[10px] font-mono uppercase px-3 py-1 rounded-bl-xl font-bold tracking-wider shadow-md">
                    {UI_STRINGS.projects.featuredBadge}
                  </div>
                </div>
              )}

              <div>
                {/* Category & Duration */}
                <div className="flex items-center gap-2 text-xs font-mono theme-accent-color mb-3">
                  <span className="px-2.5 py-0.5 rounded-md theme-accent-soft-bg border theme-accent-soft-border">
                    {project.category}
                  </span>
                  <span className="theme-text-muted">• {project.duration}</span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold theme-text-heading mb-2 group-hover:theme-accent-color transition-colors line-clamp-1">
                  {project.title}
                </h4>

                {/* Tagline */}
                <p className="text-xs theme-accent-color font-medium mb-4 line-clamp-2 opacity-90">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs theme-text-muted leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools?.slice(0, 4).map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded glass-panel text-[11px] font-mono theme-text-main"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools?.length > 4 && (
                    <span className="px-2 py-0.5 rounded glass-panel text-[11px] font-mono theme-text-muted">
                      +{project.tools.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t theme-border flex items-center justify-between text-xs font-semibold theme-accent-color group-hover:opacity-80">
                  <span>{UI_STRINGS.projects.cardActionText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
