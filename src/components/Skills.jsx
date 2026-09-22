import React, { useState } from 'react';
import { UI_STRINGS, SKILLS_DATA } from '../constants/portfolioConstants';
import { Code2, Server, Bot, Database, Cloud, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

const categoryIcons = {
  "GenAI & AI Agents": Bot,
  "Frontend": Code2,
  "Backend": Server,
  "Databases & Caching": Database,
  "DevOps & Cloud": Cloud,
};

const skillFocusMap = {
  "CrewAI & Agentic Workflows": "Autonomous Multi-Agent Crews & LangGraph Orchestration",
  "LangChain & LangGraph": "Production RAG Retrieval & Context Windows",
  "RAG Systems & Vector DBs (ChromaDB)": "Semantic Search, Embeddings & Vector Indexing",
  "OpenAI GPT-4o & Whisper": "Multi-Modal Voice Transcription & Function Calling",
  "Ollama & HuggingFace Models": "Local Model Serving, Quantization & Private LLMs",
  "Vanna AI & n8n Automation": "NL-to-SQL Pipelines & Automated Business Flows",
  "React.js & React 19": "Concurrent Rendering, Custom Hooks & Scalable SPAs",
  "Next.js": "Server-Side Rendering, App Router & Static Generation",
  "Redux & Redux Toolkit": "Normalized State Slices, Caching & Data Flow",
  "Tailwind CSS & SCSS": "Design Token Systems, Responsive Layouts & Fluid UI",
  "JavaScript (ES6+) & HTML5/CSS3": "Asynchronous Event Loops, Web Workers & DOM APIs",
  "Svelte & Material UI": "Component Libraries & High-Velocity Prototyping",
  "Node.js & Express.js": "High-Throughput REST APIs & Event-Driven Microservices",
  "Python, Django & Flask": "Data Processing Pipelines, REST Frameworks & Async Jobs",
  "RESTful APIs & GraphQL": "API Schema Design, Microservices Gateways & Rate Limiting",
  "Microservices Architecture": "Service Decoupling, Inter-Service Auth & Resilient Retries",
  "PostgreSQL": "Relational Modeling, Index Tuning & Complex Joins",
  "MongoDB": "Document Schema Design, Aggregation Pipelines & Sharding",
  "MySQL": "Relational Data Storage, Query Plans & Transactions",
  "Redis & Query Optimization": "Sub-millisecond Key-Value Caching & In-Memory Sessions",
  "AWS (EC2, S3, ECS)": "Cloud Infrastructure, Bucket Policies & Container Scaling",
  "Docker & Containerization": "Multi-Stage Dockerfiles, Isolation & Compose Networks",
  "Kubernetes & Scaling": "Pod Orchestration, Ingress Routing & Zero-Downtime Rolling Updates",
  "Nginx & Reverse Proxies": "Load Balancing, SSL Termination & Static Asset Caching",
  "CI/CD (Jenkins, GitHub Actions)": "Automated Build/Test Workflows & Deployment Pipelines",
  "Linux & Shell Scripting": "Server Administration, Bash Automation & Cron Orchestration",
};

export default function Skills() {
  const categories = Object.keys(SKILLS_DATA);
  const [activeCategory, setActiveCategory] = useState("GenAI & AI Agents");

  return (
    <section id="skills" className="py-24 theme-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-accent-soft-bg theme-accent-color text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{UI_STRINGS.skills.eyebrow}</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold theme-text-heading tracking-tight">
            {UI_STRINGS.skills.headingPrefix}
            <span className="gradient-text">{UI_STRINGS.skills.headingGradient}</span>
          </h3>
          <p className="mt-4 theme-text-muted text-base">
            {UI_STRINGS.skills.subheading}
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat] || Code2;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs transition-all duration-150 ${
                  isActive
                    ? 'btn-accent shadow-md font-semibold'
                    : 'glass-panel theme-text-muted hover:theme-text-heading hover:border-slate-400 dark:hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'theme-accent-color'}`} />
                <span>{cat}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 theme-text-muted'}`}>
                  {SKILLS_DATA[cat]?.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* High-Signal Competency Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-14">
          {SKILLS_DATA[activeCategory]?.map((skill, idx) => {
            const focus = skillFocusMap[skill.name] || "Production Enterprise Implementation";
            const isTopTier = skill.level >= 95;
            
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl glass-panel transition-all hover:border-slate-400 dark:hover:border-slate-700 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-bold theme-text-heading text-sm sm:text-base group-hover:theme-accent-color transition-colors">
                      {skill.name}
                    </h4>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold shrink-0 ${
                      isTopTier
                        ? 'theme-accent-soft-bg theme-accent-color border theme-accent-soft-border'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}>
                      {isTopTier ? 'Core Lead' : 'Advanced'}
                    </span>
                  </div>

                  <p className="text-xs theme-text-muted leading-relaxed mb-3">
                    {focus}
                  </p>
                </div>

                <div className="pt-2.5 border-t theme-border flex items-center justify-between text-[11px] font-mono theme-text-muted">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Production Verified</span>
                  </span>
                  <span className="theme-text-dim">6+ Yrs Exp</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Architecture Showcase Banner */}
        <div className="max-w-5xl mx-auto rounded-xl p-6 sm:p-7 glass-panel theme-accent-soft-border shadow-lg relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-mono theme-accent-color uppercase font-semibold">
                <Bot className="w-4 h-4" />
                <span>{UI_STRINGS.skills.bannerEyebrow}</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold theme-text-heading">
                {UI_STRINGS.skills.bannerTitle}
              </h4>
              <p className="theme-text-muted text-xs sm:text-sm max-w-2xl leading-relaxed">
                {UI_STRINGS.skills.bannerDesc}
              </p>
            </div>
            <a
              href="#ai-assistant"
              className="btn-accent px-5 py-2.5 rounded-xl text-xs font-semibold shadow-md whitespace-nowrap flex items-center gap-2 self-start md:self-auto"
            >
              <span>{UI_STRINGS.skills.bannerBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
