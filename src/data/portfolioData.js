export const personalData = {
  name: "Shah Vipul",
  title: "Senior Full-Stack & GenAI Developer",
  tagline: "Building High-Performance Web Architectures & Autonomous AI Systems",
  experienceYears: 6,
  email: "me.svipul@gmail.com",
  phone: "+91 7984498833",
  location: "Ahmedabad, Gujarat, India",
  availableForHire: true,
  resumeLink: "/Shah_Vipul_Resume.pdf",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    stackoverflow: "https://stackoverflow.com",
    email: "mailto:me.svipul@gmail.com"
  },
  summary: `Senior Full-Stack Developer with 6 years of experience building scalable, secure, and resilient web applications in the InsurTech and GenAI domains. Expert in React, Next.js, Node.js, Express, Django, and Flask, with deep specialization in microservices, PostgreSQL, and MongoDB. Pioneer in integrating GenAI chatbots using RAG (Retrieval-Augmented Generation) with OpenAI, AWS Bedrock (LLaMA), CrewAI, and LangChain.`
};

export const statsData = [
  { label: "Years of Experience", value: "6+", icon: "Briefcase" },
  { label: "Production Projects", value: "15+", icon: "Code" },
  { label: "SLA Problem Resolution", value: "95%", icon: "CheckCircle" },
  { label: "System Uptime Boost", value: "+20%", icon: "TrendingUp" },
];

export const skillsData = {
  "GenAI & AI Agents": [
    { name: "CrewAI & Agentic Workflows", level: 95, icon: "Bot" },
    { name: "LangChain & LangGraph", level: 95, icon: "Cpu" },
    { name: "RAG Systems & Vector DBs (ChromaDB)", level: 92, icon: "Database" },
    { name: "OpenAI GPT-4o & Whisper", level: 95, icon: "Sparkles" },
    { name: "Ollama & HuggingFace Models", level: 90, icon: "Brain" },
    { name: "Vanna AI & n8n Automation", level: 90, icon: "Workflow" }
  ],
  "Frontend": [
    { name: "React.js & React 19", level: 98, icon: "Code2" },
    { name: "Next.js", level: 92, icon: "Layers" },
    { name: "Redux & Redux Toolkit", level: 95, icon: "Box" },
    { name: "Tailwind CSS & SCSS", level: 95, icon: "Palette" },
    { name: "JavaScript (ES6+) & HTML5/CSS3", level: 98, icon: "FileCode" },
    { name: "Svelte & Material UI", level: 85, icon: "Layout" }
  ],
  "Backend": [
    { name: "Node.js & Express.js", level: 95, icon: "Server" },
    { name: "Python, Django & Flask", level: 92, icon: "Terminal" },
    { name: "RESTful APIs & GraphQL", level: 95, icon: "Network" },
    { name: "Microservices Architecture", level: 90, icon: "Component" }
  ],
  "Databases & Caching": [
    { name: "PostgreSQL", level: 92, icon: "Database" },
    { name: "MongoDB", level: 90, icon: "Server" },
    { name: "MySQL", level: 88, icon: "HardDrive" },
    { name: "Redis & Query Optimization", level: 90, icon: "Zap" }
  ],
  "DevOps & Cloud": [
    { name: "AWS (EC2, S3, ECS)", level: 90, icon: "Cloud" },
    { name: "Docker & Containerization", level: 92, icon: "Container" },
    { name: "Kubernetes & Scaling", level: 85, icon: "Boxes" },
    { name: "Nginx & Reverse Proxies", level: 90, icon: "Globe" },
    { name: "CI/CD (Jenkins, GitHub Actions)", level: 88, icon: "GitBranch" },
    { name: "Linux & Shell Scripting", level: 92, icon: "Terminal" }
  ]
};

export const projectsData = [
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
      "Handled multiple microservices at the UI layout level.",
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

export const experienceData = [
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

export const achievementsData = [
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

export const educationData = {
  institution: "Pacific School of Engineering",
  degree: "Bachelor of Engineering in Computer Science",
  score: "CGPA: 8.1 / 10",
  period: "Jul 2015 – Apr 2019",
  location: "Surat, Gujarat, India"
};

export const aiAssistantQuestions = [
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
