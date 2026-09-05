import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UI_STRINGS, PROJECTS_DATA } from '../constants/portfolioConstants';
import ProjectModal from './ProjectModal';
import { ArrowRight, FolderGit2, Star, Calendar, ExternalLink } from 'lucide-react';

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
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-accent-soft-bg theme-accent-color text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{UI_STRINGS.projects.eyebrow}</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold theme-text-heading tracking-tight">
            {UI_STRINGS.projects.headingPrefix}
            <span className="gradient-text">{UI_STRINGS.projects.headingGradient}</span>
          </h3>
          <p className="mt-4 theme-text-muted text-base">
            {UI_STRINGS.projects.subheading}
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count = cat === "All" ? PROJECTS_DATA.length : PROJECTS_DATA.filter(p => p.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? 'btn-accent shadow-md font-semibold'
                    : 'glass-panel theme-text-muted hover:theme-text-heading hover:border-slate-400 dark:hover:border-slate-700'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 theme-text-muted'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Case Study Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group rounded-xl glass-panel p-6 flex flex-col justify-between cursor-pointer transition-colors duration-200 hover:border-slate-400 dark:hover:border-slate-600 shadow-md relative"
              >
                <div>
                  {/* Meta Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono theme-accent-soft-bg theme-accent-color border theme-accent-soft-border font-medium">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-amber-500 font-semibold">
                        <Star className="w-3 h-3 fill-amber-500" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold theme-text-heading mb-1.5 group-hover:theme-accent-color transition-colors line-clamp-1">
                    {project.title}
                  </h4>

                  {/* Tagline */}
                  <p className="text-xs theme-accent-color font-medium mb-3 line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs theme-text-muted leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tools?.slice(0, 4).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-[11px] font-mono theme-text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools?.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-[11px] font-mono theme-text-dim">
                        +{project.tools.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-3 border-t theme-border flex items-center justify-between text-xs font-semibold theme-accent-color">
                    <span>{UI_STRINGS.projects.cardActionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
