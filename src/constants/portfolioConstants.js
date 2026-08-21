// Centralized Portfolio Constants & Configuration

export const EMAILJS_CONFIG = {
  publicKey: 'aHKtzY6MsTuX_kgxB',
  serviceId: 'service_6tx16bs',
  templateId: 'template_ownc6la',
};

export const SECTION_FLAGS = {
  hero: true,
  about: true,            // Master flag for About section
  aboutProfile: true,     // Sub-flag: Bio & 4 Core Pillars (Left Column)
  aboutTerminal: false,   // Sub-flag: Interactive CrewAI Agent Terminal (Right Column)
  skills: true,
  projects: true,
  aiAssistant: true,
  experience: true,
  achievements: true,
  education: true,
  contact: true,
};

export const COLOR_PALETTES = [
  {
    id: 'cyan',
    name: 'Cyber Cyan',
    primary: '#06b6d4',
    secondary: '#6366f1',
    gradient: 'from-cyan-500 via-indigo-500 to-emerald-400',
    btnGradient: 'from-cyan-500 via-indigo-600 to-emerald-500',
    accentText: 'text-cyan-400',
    accentBg: 'bg-cyan-500',
    accentBorder: 'border-cyan-500/30',
    glowClass: 'shadow-cyan-500/25',
    activeTab: 'bg-gradient-to-r from-cyan-500 to-indigo-600',
  },
  {
    id: 'emerald',
    name: 'Emerald Mint',
    primary: '#10b981',
    secondary: '#06b6d4',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    btnGradient: 'from-emerald-500 via-teal-600 to-cyan-500',
    accentText: 'text-emerald-400',
    accentBg: 'bg-emerald-500',
    accentBorder: 'border-emerald-500/30',
    glowClass: 'shadow-emerald-500/25',
    activeTab: 'bg-gradient-to-r from-emerald-500 to-teal-600',
  },
  {
    id: 'amber',
    name: 'Sunset Amber',
    primary: '#f59e0b',
    secondary: '#ef4444',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    btnGradient: 'from-amber-500 via-orange-600 to-rose-500',
    accentText: 'text-amber-400',
    accentBg: 'bg-amber-500',
    accentBorder: 'border-amber-500/30',
    glowClass: 'shadow-amber-500/25',
    activeTab: 'bg-gradient-to-r from-amber-500 to-orange-600',
  },
  {
    id: 'rose',
    name: 'Neon Rose',
    primary: '#f43f5e',
    secondary: '#a855f7',
    gradient: 'from-rose-400 via-pink-500 to-purple-500',
    btnGradient: 'from-rose-500 via-pink-600 to-purple-500',
    accentText: 'text-rose-400',
    accentBg: 'bg-rose-500',
    accentBorder: 'border-rose-500/30',
    glowClass: 'shadow-rose-500/25',
    activeTab: 'bg-gradient-to-r from-rose-500 to-pink-600',
  },
  {
    id: 'violet',
    name: 'Electric Violet',
    primary: '#8b5cf6',
    secondary: '#3b82f6',
    gradient: 'from-violet-400 via-purple-500 to-blue-500',
    btnGradient: 'from-violet-500 via-purple-600 to-blue-500',
    accentText: 'text-violet-400',
    accentBg: 'bg-violet-500',
    accentBorder: 'border-violet-500/30',
    glowClass: 'shadow-violet-500/25',
    activeTab: 'bg-gradient-to-r from-violet-500 to-purple-600',
  }
];

export const UI_STRINGS = {
  brandInitials: "SV",
  dayModeLabel: "Day Mode",
  nightModeLabel: "Night Mode",
  paletteTitle: "Color Palette",
  resumeFileName: "Shah_Vipul_Resume.pdf",
  downloadResumeText: "Resume",
  downloadResumeFull: "Download Resume PDF",
  downloadCVText: "Download CV",
  availableBadge: "Senior Full-Stack & GenAI Developer • 6+ Years Exp",
  statusReady: "Status: Ready",
  
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    aiAssistant: "AI Assistant",
    experience: "Experience",
    achievements: "Achievements",
    contact: "Contact"
  },

  hero: {
    eyebrow: "FULL-STACK & GEN AI DEVELOPER • 6 YEARS EXP",
    titlePrefix: "Architecting ",
    titleGradient1: "Scalable Web Apps",
    titleMiddle: " & ",
    titleGradient2: "Agentic AI Workflows",
    introPrefix: "Hi, I'm ",
    name: "Shah Vipul",
    introText: ". Senior Developer specialized in building high-concurrency InsurTech platforms with ",
    techHighlight1: "React, Node.js & Python",
    introMiddle: ", and pioneering autonomous ",
    techHighlight2: "CrewAI & LangChain GenAI systems",
    introSuffix: ".",
    btnProjects: "Explore Featured Projects",
    btnContact: "Get In Touch",
    matrixTitle: "Core Technology Matrix"
  },

  about: {
    eyebrow: "About Me",
    headingPrefix: "Architecting Scalable Apps with ",
    headingGradient: "6 Years of Engineering",
    subheading: "Bridging complex full-stack enterprise requirements with modern generative AI capabilities.",
    cardTitle: "Senior Software Developer Profile",
    bioParagraph1: "Senior Full-Stack Developer with 6 years of experience building scalable, secure, and resilient web applications in the InsurTech and GenAI domains. Expert in React, Next.js, Node.js, Express, Django, and Flask, with deep specialization in microservices, PostgreSQL, and MongoDB. Pioneer in integrating GenAI chatbots using RAG (Retrieval-Augmented Generation) with OpenAI, AWS Bedrock (LLaMA), CrewAI, and LangChain.",
    bioParagraph2Prefix: "Based in ",
    location: "Ahmedabad, India",
    bioParagraph2Middle: ", I lead full-stack development at ",
    company: "Digiqt Technolabs",
    bioParagraph2Suffix: ", overseeing end-to-end frontend architectures, high-speed backend microservices, robust CI/CD pipelines, and cutting-edge GenAI agent workflows.",
    pillars: [
      {
        title: "Performance Tuning",
        desc: "Reduced quote calculation times by 60% with CDN, caching, and Grunt scripts."
      },
      {
        title: "GenAI & Agents",
        desc: "CrewAI multi-agent flows, LangChain RAG, and Vanna AI query engines."
      },
      {
        title: "InsurTech & Security",
        desc: "Strict InfoSec compliance, microservices security, and SLA reliability."
      },
      {
        title: "DevOps & Cloud",
        desc: "AWS (EC2, S3), Docker container clustering, Nginx, and Kubernetes."
      }
    ],
    terminalTitle: "crewai_brd_agent_runner.py",
    terminalRunBtn: "Run Live Agent Sim",
    terminalRunningBtn: "Running Agent...",
    terminalComment: "# Shah Vipul's Automated Multi-Agent Code Generation Pipeline",
    terminalProcessing: "Processing agent step...",
    terminalFooterTech: "CrewAI + Ollama + Python"
  },

  skills: {
    eyebrow: "Technical Expertise",
    headingPrefix: "Skills & ",
    headingGradient: "Technology Stack",
    subheading: "6+ years of mastery spanning modern web frameworks, cloud DevOps, and cutting-edge GenAI agent engineering.",
    proficiencyLabel: "Expert Proficiency",
    bannerEyebrow: "Featured Capability",
    bannerTitle: "Autonomous GenAI & Agentic Systems Development",
    bannerDesc: "Specialized in multi-agent orchestration (CrewAI), RAG retrieval pipelines (LangChain, ChromaDB), NL-to-SQL query generation (Vanna AI, Gemini 2.5), and automated Telegram/Google Meet workflows.",
    bannerBtn: "Test AI Twin Demo"
  },

  projects: {
    eyebrow: "Portfolio Showcase",
    headingPrefix: "Featured ",
    headingGradient: "Projects & AI Innovations",
    subheading: "Explore 10+ production web platforms and agentic GenAI systems designed and built by Shah Vipul.",
    featuredBadge: "★ Featured",
    modalTechTitle: "Technologies & Frameworks",
    modalOverviewTitle: "Overview",
    modalHighlightsTitle: "Key Features & Architectural Impact",
    modalCloseBtn: "Close Window",
    modalInquireBtn: "Inquire About Project",
    cardActionText: "View Full Details & Architecture"
  },

  aiAssistant: {
    eyebrow: "Interactive GenAI Playground",
    headingPrefix: "Chat with ",
    headingGradient: "Shah Vipul's AI Twin",
    subheading: "Test a simulated RAG assistant trained on Shah Vipul's work history and project metrics.",
    botName: "Vipul AI Assistant",
    botSubtitle: "Powered by RAG Context Engine",
    resetTooltip: "Reset Conversation",
    sampleQueriesLabel: "Sample Queries:",
    inputPlaceholder: "Ask about Shah Vipul's experience, GenAI tools, or quote optimizations...",
    sendBtn: "Send",
    initialGreeting: "👋 Hi! I am Shah Vipul's AI Assistant. Ask me anything about Vipul's 6+ years of experience, CrewAI projects, backend architecture, or tech stack!",
    resetGreeting: "👋 Chat reset! Ask me anything about Vipul's experience or tech stack.",
    fallbackReply: "Vipul is a Senior Software Developer with 6+ years of experience in React.js, Node.js, Python, PostgreSQL, AWS, and GenAI (CrewAI, LangChain, RAG). For specific inquiries, contact him directly at me.svipul@gmail.com!"
  },

  experience: {
    eyebrow: "Career Progression",
    headingPrefix: "Work Experience & ",
    headingGradient: "Leadership",
    subheading: "6+ years of driving engineering excellence and leading full-stack teams.",
    responsibilitiesHeader: "Key Responsibilities & Deliverables"
  },

  achievements: {
    eyebrow: "Recognition & Milestones",
    headingPrefix: "Awards & ",
    headingGradient: "Engineering Impact",
    subheading: "Proven track record of high performance, leadership awards, and architectural optimizations.",
    verifiedMilestone: "Verified Organizational Milestone"
  },

  education: {
    eyebrow: "Education",
    institution: "Pacific School of Engineering",
    degree: "Bachelor of Engineering in Computer Science",
    score: "CGPA: 8.1 / 10",
    period: "Jul 2015 – Apr 2019",
    location: "Surat, Gujarat, India"
  },

  contact: {
    eyebrow: "Get In Touch",
    headingPrefix: "Let's Build Something ",
    headingGradient: "Extraordinary",
    subheading: "Whether you need a Senior Full-Stack Lead, a GenAI/RAG architect, or advice on high-concurrency systems, reach out anytime!",
    directEmailLabel: "Direct Email",
    phoneLabel: "Phone / WhatsApp",
    locationLabel: "Location",
    downloadCardTitle: "Download Official Resume",
    downloadCardSubtitle: "Updated 2026 PDF Version",
    downloadBtn: "Download PDF",
    formTitle: "Send Shah Vipul a Direct Message",
    successTitle: "Message Sent Successfully!",
    successTextPrefix: "Thank you for reaching out. Your message has been sent to ",
    successTextSuffix: ". Shah Vipul will reply to your email shortly!",
    sendAnotherBtn: "Send Another Message",
    nameLabel: "Your Name *",
    namePlaceholder: "e.g. Sarah Jenkins",
    emailLabel: "Your Email *",
    emailPlaceholder: "sarah@company.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "Senior Full-Stack & GenAI Developer Opportunity",
    messageLabel: "Message *",
    messagePlaceholder: "Hello Vipul, we saw your portfolio and would love to discuss a project...",
    submitBtn: "Send Inquiry",
    sendingBtn: "Sending Email..."
  },

  footer: {
    backToTop: "Back to top",
    builtWith: "Built with ",
    techStackName: "React JS & Tailwind CSS",
    rightsReserved: "Shah Vipul. All rights reserved."
  }
};

export const PERSONAL_DATA = {
  name: "Shah Vipul",
  title: "Senior Full-Stack & GenAI Developer",
  tagline: "Building High-Performance Web Architectures & Autonomous AI Systems",
  experienceYears: 6,
  email: "me.svipul@gmail.com",
  phone: "+91 7984498833",
  location: "Ahmedabad, Gujarat, India",
  availableForHire: true,
  resumeLink: "./Shah_Vipul_Resume.pdf",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    stackoverflow: "https://stackoverflow.com",
    email: "mailto:me.svipul@gmail.com"
  }
};

export const STATS_DATA = [
  { label: "Years of Experience", value: "6+", icon: "Briefcase" },
  { label: "Production Projects", value: "15+", icon: "Code" },
  { label: "SLA Problem Resolution", value: "95%", icon: "CheckCircle" },
  { label: "System Uptime Boost", value: "+20%", icon: "TrendingUp" }
];

export const TECH_BADGES = [
  'React.js', 'Next.js', 'Node.js', 'Python', 'Django', 'Flask', 
  'CrewAI', 'LangChain', 'OpenAI GPT-4o', 'PostgreSQL', 'MongoDB', 
  'Docker', 'AWS EC2/S3', 'Tailwind CSS', 'Redux', 'GraphQL'
];

export const TERMINAL_STEPS = [
  { text: "$ python run_crewai_pipeline.py --input BRD_InsurTech_Engine.pdf", color: "text-slate-400 dark:text-slate-300" },
  { text: "[1/4] BRD Analyser Agent: Extracting business rules and microservices requirements...", color: "text-cyan-500 dark:text-cyan-400" },
  { text: "      ✓ Identified 4 sub-modules: Quote Engine, Claim Gateway, Auth, Policy Vault.", color: "text-emerald-500 dark:text-emerald-400" },
  { text: "[2/4] Sub-Module Creator: Decomposing into token-safe execution tasks...", color: "text-cyan-500 dark:text-cyan-400" },
  { text: "      ✓ Schema validated against PostgreSQL & MongoDB specs.", color: "text-emerald-500 dark:text-emerald-400" },
  { text: "[3/4] Code Writer & Combiner: Generating React UI & Node.js REST endpoints...", color: "text-indigo-500 dark:text-indigo-400" },
  { text: "      ✓ Synthetic unit test suite generation complete (100% coverage).", color: "text-emerald-500 dark:text-emerald-400" },
  { text: "[4/4] Template Integrator & Runner: Validating build inside Docker sandbox...", color: "text-cyan-500 dark:text-cyan-400" },
  { text: ">>> BUILD SUCCESSFUL: Production-ready code compiled in 1.4 seconds!", color: "text-emerald-600 dark:text-emerald-300 font-bold" }
];

export const SKILLS_DATA = {
  "GenAI & AI Agents": [
    { name: "CrewAI & Agentic Workflows", level: 95 },
    { name: "LangChain & LangGraph", level: 95 },
    { name: "RAG Systems & Vector DBs (ChromaDB)", level: 92 },
    { name: "OpenAI GPT-4o & Whisper", level: 95 },
    { name: "Ollama & HuggingFace Models", level: 90 },
    { name: "Vanna AI & n8n Automation", level: 90 }
  ],
  "Frontend": [
    { name: "React.js & React 19", level: 98 },
    { name: "Next.js", level: 92 },
    { name: "Redux & Redux Toolkit", level: 95 },
    { name: "Tailwind CSS & SCSS", level: 95 },
    { name: "JavaScript (ES6+) & HTML5/CSS3", level: 98 },
    { name: "Svelte & Material UI", level: 85 }
  ],
  "Backend": [
    { name: "Node.js & Express.js", level: 95 },
    { name: "Python, Django & Flask", level: 92 },
    { name: "RESTful APIs & GraphQL", level: 95 },
    { name: "Microservices Architecture", level: 90 }
  ],
  "Databases & Caching": [
    { name: "PostgreSQL", level: 92 },
    { name: "MongoDB", level: 90 },
    { name: "MySQL", level: 88 },
    { name: "Redis & Query Optimization", level: 90 }
  ],
  "DevOps & Cloud": [
    { name: "AWS (EC2, S3, ECS)", level: 90 },
    { name: "Docker & Containerization", level: 92 },
    { name: "Kubernetes & Scaling", level: 85 },
    { name: "Nginx & Reverse Proxies", level: 90 },
    { name: "CI/CD (Jenkins, GitHub Actions)", level: 88 },
    { name: "Linux & Shell Scripting", level: 92 }
  ]
};

export const PROJECTS_DATA = [
  {
    id: "brd-code-gen",
    title: "AI-Driven Code Generation from BRDs",
    category: "GenAI / AI Agents",
    duration: "May 2025 – Present",
    tagline: "Autonomous Multi-Agent Architecture for Translating BRD Documents to Production Code",
    tools: ["CrewAI", "Ollama", "Python", "LLMs"],
    featured: true,
    description: "Designed and implemented an end-to-end system that transforms Business Requirement Documents (BRDs) into production-ready code using a multi-agent architecture.",
    highlights: [
      "BRD Analyser: Interprets complex specifications and extracts high-level modules.",
      "Module Creators: Breaks modules into manageable sub-modules to stay within context windows.",
      "Code Writer & Combiner: Generates sub-module code and seamlessly merges into main codebase.",
      "Template Integrator & Code Runner: Validates code execution against predefined templates.",
      "Leveraged CrewAI flows for parallel step-by-step reasoning in a single automated iteration."
    ]
  },
  {
    id: "nl-sql-bot",
    title: "Natural Language to SQL Query Bot",
    category: "GenAI / AI Agents",
    duration: "Feb 2025",
    tagline: "Conversational Natural Language Interface for Instant Database Querying",
    tools: ["Vanna AI", "LangChain", "ChromaDB", "OpenAI GPT-4o", "Sentence Transformers"],
    featured: true,
    description: "Built an intelligent conversational agent that parses natural language questions, translates them to precise SQL queries, executes them on target databases, and formats output into human-readable answers.",
    highlights: [
      "Intent Parsing: Uses Vanna AI & LangChain to parse user questions into structured SQL.",
      "Semantic Search: Leverages ChromaDB for vector context retrieval.",
      "Human-Readable Synthesis: Uses Sentence Transformers to convert tabular SQL outputs into intuitive natural language summaries."
    ]
  },
  {
    id: "mythology-chatbot",
    title: "Mythology Conversational RAG Chatbot",
    category: "GenAI / AI Agents",
    duration: "Aug 2025 – Present",
    tagline: "Bilingual (Hindi & English) Personalised AI Engine with Semantic Search",
    tools: ["LangChain", "HuggingFace", "React.js", "Express.js", "Tailwind CSS", "MUI"],
    featured: true,
    description: "Developing a bilingual personalized mythology chatbot delivering context-aware answers tailored to individual user background, age group, and tone preference.",
    highlights: [
      "User Profiling: Customizes response length, language, and tone based on user profile.",
      "Dual Embeddings: Utilizes AkshitaS/bhasha-embed-v0 for semantic search in Hindi and English.",
      "Response Adaptation: Fine-tuned with Sentence Transformers for natural conversational flow."
    ]
  },
  {
    id: "telegram-automation",
    title: "Telegram Command-Based Meeting & Email Automation",
    category: "Automation & Workflows",
    duration: "Jan 2025",
    tagline: "Voice & Text-Driven Bot for Hands-Free Google Workspace Actions",
    tools: ["n8n", "OpenAI Whisper", "Telegram API", "Google Meet API"],
    featured: true,
    description: "Created a voice- and text-driven automation bot in Telegram that lets users schedule Google Meet calls and dispatch emails effortlessly.",
    highlights: [
      "Multi-Modal Input: Accepts audio voice notes and text commands via Telegram.",
      "Speech-to-Text: Uses OpenAI Whisper for accurate voice transcription.",
      "Automated Workflows: Triggers n8n workflows for Google Meet scheduling and email dispatches with real-time Telegram confirmations."
    ]
  },
  {
    id: "db-chatter",
    title: "DB Chatter – Natural Language DB Assistant",
    category: "GenAI / AI Agents",
    duration: "Jul 2025",
    tagline: "AI DB Query Engine powered by Gemini 2.5 Flash",
    tools: ["Vanna AI", "Gemini 2.5 Flash", "Sentence Transformers", "Python"],
    featured: false,
    description: "AI interface to convert natural language prompts into dynamic database DDLs and SQL queries with low latency using Gemini 2.5 Flash.",
    highlights: [
      "Generates database DDLs dynamically for scalable query execution.",
      "Sentence Transformers for intent matching.",
      "Integrated Gemini 2.5 Flash for high accuracy and rapid response handling."
    ]
  },
  {
    id: "hdfc-chatbot",
    title: "HDFC Life Insurance Chatbot",
    category: "Full Stack & InsurTech",
    duration: "Jul 2023",
    tagline: "Enterprise Conversational Journey Engine for Insurance Platform",
    tools: ["React.js", "Node.js", "REST APIs", "Redis Caching", "InfoSec"],
    featured: true,
    description: "Designed and implemented multiple conversational journeys to enhance customer engagement and streamline term insurance selection for HDFC Life.",
    highlights: [
      "Implemented caching and polling strategies to slash chatbot response latency.",
      "Integrated user feedback & rating engine to continuously optimize accuracy.",
      "Complied with strict InfoSec requirements and microservices security standard."
    ]
  },
  {
    id: "retiral-planner",
    title: "Retiral Planner & Financial Rater Engine",
    category: "Full Stack & InsurTech",
    duration: "Jan 2022 – Jul 2022",
    tagline: "Financial Retirement Readiness Platform & Custom Graph Engine",
    tools: ["React.js", "Redux", "Express.js", "PostgreSQL", "Knex.js", "S3", "EC2"],
    featured: false,
    description: "Interactive application enabling users to calculate financial retirement readiness using a custom-built rating engine.",
    highlights: [
      "Built financial rater from scratch for retirement score calculation.",
      "Created custom interactive charts and automated daily reporting cron jobs.",
      "Hosted frontend on AWS S3 and backend on EC2 behind Nginx reverse proxy."
    ]
  },
  {
    id: "term-insurance",
    title: "Enterprise Term Cover Insurance Platform",
    category: "Full Stack & InsurTech",
    duration: "Aug 2022 – Present",
    tagline: "Scalable Term Cover E-commerce Journey",
    tools: ["React.js", "Redux", "Material UI", "REST APIs"],
    featured: false,
    description: "Core module development and optimization for selling term cover insurance to high volumes of retail customers.",
    highlights: [
      "Architected modular React components for smooth policy purchase flows.",
      "Optimized legacy code performance and state management."
    ]
  },
  {
    id: "pace-safety",
    title: "PACE Safety Construction Site Monitoring UI",
    category: "Full Stack & InsurTech",
    duration: "Jun 2021 – Dec 2021",
    tagline: "Real-time Incident Monitoring & Prevention Dashboard",
    tools: ["React.js", "Redux", "Material UI", "Microservices"],
    featured: false,
    description: "Built complete front-end interface from scratch for monitoring safety incidents on industrial construction sites across multiple microservices.",
    highlights: [
      "Handled multiple microservices at the UI level.",
      "Implemented Redux data caching to optimize API payload transfers."
    ]
  },
  {
    id: "plancover",
    title: "Plancover B2B Organization Insurance Calculator",
    category: "Full Stack & InsurTech",
    duration: "Jan 2021 – May 2021",
    tagline: "Corporate Policy Estimation & Multi-Vendor Engine",
    tools: ["React.js", "Django", "PostgreSQL", "Pandas", "Web Workers"],
    featured: false,
    description: "B2B platform calculating organizational insurance coverage and presenting multi-vendor policy proposals.",
    highlights: [
      "Created complex insurance estimation calculator in Django backend.",
      "Utilized Web Workers for background load processing during lead generation bursts.",
      "Parsed vendor Excel data using Pandas."
    ]
  }
];

export const EXPERIENCE_DATA = [
  {
    company: "Digiqt Technolabs",
    role: "Senior Software Developer",
    period: "Jan 2021 – Present",
    location: "Ahmedabad, India",
    type: "Full-Time",
    responsibilities: [
      "Frontend & Backend Architecture: Scaled applications with React.js, Next.js, Node.js, Express, Flask, and Django, serving thousands of daily active users.",
      "AI & GenAI Integration: Built multi-agent BRD code generators (CrewAI), NL-to-SQL bots (Vanna AI), and RAG chatbots (LangChain, OpenAI, LLMs).",
      "Database & Performance: Designed high-performance PostgreSQL, MySQL, and MongoDB schemas; tuned indexing to achieve sub-100ms query responses.",
      "DevOps & Infrastructure: Created CI/CD deployment pipelines using Docker, Jenkins, and GitHub Actions; managed AWS (EC2/S3) and Nginx.",
      "Team Leadership: Led a team of developers, conducted rigorous code reviews, ensured InfoSec compliance, and delivered projects on target."
    ]
  }
];

export const ACHIEVEMENTS_DATA = [
  {
    title: "Awarded Best Knowledge Sharing Person",
    issuer: "Human Resources Department",
    date: "Feb 2022",
    description: "Recognized across the company for mentoring junior developers and leading technical workshops on React & modern backend patterns."
  },
  {
    title: "The MVP Award (CEO Recognition)",
    issuer: "Chief Executive Officer",
    date: "Dec 2021 & Aug 2022",
    description: "Awarded Most Valuable Player twice for exceptional problem-solving and delivering critical InsurTech releases ahead of deadline."
  },
  {
    title: "Server Overload Resolution & Zero-Downtime Scaling",
    issuer: "Production Architecture",
    date: "2023 - 2024",
    description: "Deployed Nginx load balancers and Docker container clusters with Kubernetes auto-scaling, eliminating server overloads during traffic spikes."
  },
  {
    title: "Quote Calculation Time Reduction",
    issuer: "Performance Optimization",
    date: "2023",
    description: "Compressed scripts using Grunt, configured AWS CloudFront CDN, and optimized S3 delivery, reducing quote calculation load times by over 60%."
  },
  {
    title: "95% Production SLA Resolution & 20% System Uptime Boost",
    issuer: "System Reliability",
    date: "2022 - Present",
    description: "Maintained 95% SLA resolution rate and increased overall system availability by 20% through active monitoring and predictive maintenance."
  }
];

export const AI_ASSISTANT_QUESTIONS = [
  {
    question: "What is Shah Vipul's core tech stack?",
    answer: "Vipul's core stack includes React.js, Next.js, Redux, Node.js, Express.js, Python (Django & Flask), PostgreSQL, MongoDB, AWS, Docker, and cutting-edge GenAI frameworks like CrewAI, LangChain, Vanna AI, and OpenAI GPT-4o."
  },
  {
    question: "How much total experience does Vipul have?",
    answer: "Vipul has 6+ years of hands-on experience building full-stack web applications, scalable InsurTech platforms, and autonomous GenAI multi-agent workflows."
  },
  {
    question: "Tell me about his CrewAI project.",
    answer: "Vipul built an 'AI-Driven Code Generation from BRDs' tool using CrewAI and Ollama. It breaks down BRDs using 4 autonomous sub-agents (BRD Analyser, Module Creator, Code Writer & Runner) to generate production-ready code in a single automated iteration!"
  },
  {
    question: "What performance optimizations has he achieved?",
    answer: "He reduced quote calculation times by >60% via Grunt script compression and AWS CDN, resolved severe server overloads with Nginx + Docker clustering + Kubernetes, and boosted system uptime by 20%."
  },
  {
    question: "How can I contact Vipul for hire?",
    answer: "You can email Vipul directly at me.svipul@gmail.com or call +91 7984498833. He is currently located in Ahmedabad, India and open to senior developer opportunities!"
  }
];
