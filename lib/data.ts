export const SITE = {
  name: "Abubakar Khan Lodhi",
  role: "Software Engineer | Full Stack Developer",
  location: "Lahore, Pakistan",
  email: "a.blodhi000@gmail.com",
  github: "https://github.com/AbubakarLodhi",
  linkedin: "https://www.linkedin.com/in/abubakar-lodhi",
  resume: "/cv/Abubakar_s_Resume.pdf",
  image: "/pictures/abubakar_lodhi.png",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

/** Hero — oversized display word plus the small tag row beneath it. */
export const HERO_DISPLAY = {
  word: "FULL STACK",
  sub: "DEVELOPER",
  tags: ["Interfaces", "Code", "Experience"],
  badge: "LET'S WORK TOGETHER · LET'S WORK TOGETHER ·",
  based: "Based in Pakistan",
} as const;

/** About — the six-cell fact grid under the statement. */
export const ABOUT_FACTS = [
  { label: "Based", value: "Lahore, Pakistan" },
  { label: "Focus", value: "Full Stack / Software" },
  { label: "Experience", value: "6 Months" },
  { label: "Mindset", value: "Always Learning" },
  { label: "Projects Done", value: "5+" },
  { label: "Education", value: "BS Computer Science" },
] as const;

export const ABOUT_COPY = {
  eyebrow: "Who am I ?",
  statement: [
    { text: "I BUILD ", gold: false },
    { text: "SCALABLE WEB ", gold: true },
    { text: "APPS WHERE ", gold: false },
    { text: "CLEAN CODE ", gold: true },
    { text: "MEETS ", gold: false },
    { text: "REAL IMPACT.", gold: true },
  ],
  columns: [
    "I'm Abubakar — a software engineer and full stack developer building scalable web applications with Laravel, PHP, React.js, Next.js, and TypeScript, including REST API integration, responsive design, debugging, performance optimization, and deployment.",
    "I also build AI-powered applications, chatbots, automation workflows, and ML/DL models, with a strong focus on reliable, maintainable, and user-focused software solutions.",
  ],
} as const;

/** Expertise rows shown in the Expertise section. */
export const EXPERTISE = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building scalable web applications end to end with Laravel, PHP, React.js, Next.js, and TypeScript — from features through deployment.",
    tags: ["Laravel", "React.js", "Next.js", "TypeScript"],
    icon: "layers" as const,
  },
  {
    number: "02",
    title: "Frontend Engineering",
    description:
      "Designing responsive, reusable interfaces with typed components, Tailwind CSS, and considered motion.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "GSAP"],
    icon: "code" as const,
  },
  {
    number: "03",
    title: "Backend & APIs",
    description:
      "Integrating frontend systems with backend services, REST APIs, and databases for maintainable application workflows.",
    tags: ["Node.js", "Express.js", "Laravel", "Livewire", "MySQL", "PostgreSQL"],
    icon: "server" as const,
  },
  {
    number: "04",
    title: "AI & Automation",
    description:
      "Building AI-powered apps, chatbots, automation workflows, and ML/DL models — plus QA tooling with Puppeteer.",
    tags: ["Python", "Chatbots", "Deep Learning", "OpenCV", "Puppeteer"],
    icon: "bot" as const,
  },
] as const;

/** Marquee strips around the Work title. */
export const TECH_MARQUEE = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Laravel",
  "PHP",
  "Node.js",
  "Vite",
  "Tailwind CSS",
  "MySQL",
  "PostgreSQL",
  "Python",
  "Filament",
] as const;

export const DISCIPLINE_MARQUEE = [
  "Full Stack",
  "Interactive Web",
  "Creative Development",
  "Automation",
  "UI Engineering",
] as const;

export const CONTACT_COPY = {
  headline: [
    { text: "Let's create", gold: false },
    { text: "something", gold: true },
    { text: "meaningful.", gold: false },
  ],
  blurb:
    "Have a project in mind, a question, or simply want to talk about an idea? I'd love to hear from you.",
} as const;

export const EDUCATION = {
  label: "Academics",
  title: "Education",
  subtitle: "Building a strong foundation in computer science and software engineering.",
  items: [
    {
      school: "University of Management and Technology",
      degree: "BS in Computer Science",
      period: "2022 — 2026",
      coursework: [
        "Programming Fundamentals",
        "Object Oriented Programming",
        "Data Structures & Algorithms",
        "Database Systems",
        "Operating Systems",
        "Artificial Intelligence",
        "Deep Learning",
        "Machine Learning",
      ],
    },
  ],
} as const;

export const EXPERIENCE = {
  label: "Career",
  title: "Professional Experience",
  subtitle:
    "Building scalable full-stack software applications with Laravel, PHP, React.js, and Next.js.",
  items: [
    {
      badge: "Current",
      role: "Software Engineer | Full Stack Developer",
      company: "WeRQA",
      period: "July 2026 — Present",
      points: [
        "Develop and maintain full-stack software applications using Laravel, PHP, React.js, and Next.js, contributing across frontend, backend, API, and database layers.",
        "Design and implement responsive, reusable, and maintainable application components while integrating frontend systems with backend services and REST APIs.",
        "Debug and resolve application and production issues, optimize performance, and improve system reliability while delivering features based on project requirements.",
        "Contribute throughout the software development lifecycle, including development, testing, debugging, deployment, and maintenance of reliable and scalable applications.",
      ],
    },
    {
      badge: "Internship",
      role: "Full Stack Web Developer Intern",
      company: "WeRQA",
      period: "April 2026 — July 2026",
      points: [
        "Developed and maintained full-stack software applications using Laravel, PHP, React.js, and Next.js, contributing across frontend, backend, API, and database layers.",
        "Designed and implemented responsive, scalable, and maintainable application features, integrating frontend components with backend services, REST APIs, and databases.",
        "Implemented new features, debugged and resolved functional and system-level issues, and optimized application performance to improve reliability, maintainability, and user experience.",
      ],
    },
  ],
} as const;

export const LANGUAGES = [
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "PHP",
  "SQL",
  "HTML",
  "CSS",
] as const;

export type ProjectId =
  | "crm"
  | "prism"
  | "app_lens"
  | "werqa_site"
  | "chest_xray";

export interface Project {
  id: ProjectId;
  number: string;
  title: string;
  shortDesc: string;
  body: string;
  tags: string[];
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "crm",
    number: "01",
    title: "CRM / POS Platform",
    shortDesc:
      "Full-stack CRM and POS with merchant and staff panels, invoicing, and reporting.",
    body: "Built and deployed a full-stack CRM/POS using Laravel 12, Filament, and MySQL with merchant/staff panels, authentication, invoicing, reporting, and demo accounts. Resolved production login and session issues and improved deployment reliability on live hosting. Designed reusable application components and integrated frontend, backend, and database functionality for a maintainable business workflow.",
    tags: ["PHP", "Laravel", "Filament", "Livewire", "MySQL", "Tailwind CSS", "Vite"],
    highlights: [
      "Merchant and staff panels with authentication, invoicing, and reporting",
      "Resolved production login and session issues on live hosting",
      "Improved deployment reliability",
      "Reusable components across frontend, backend, and database layers",
    ],
  },
  {
    id: "prism",
    number: "02",
    title: "Prism — AI Creative Studio",
    shortDesc:
      "AI studio for image, video, and prompt generation with workspaces and a co-pilot chatbot.",
    body: "Built a full-stack AI creative studio using Next.js and TypeScript for image, video, and prompt generation, with project workspaces, authentication, and an AI co-pilot chatbot. Designed the application around reusable components and AI-powered workflows for generating and managing creative content.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    highlights: [
      "Image, video, and prompt generation in one studio",
      "Project workspaces with authentication",
      "AI co-pilot chatbot for guided creation",
      "Reusable components around AI-powered workflows",
    ],
  },
  {
    id: "app_lens",
    number: "03",
    title: "App Lens",
    shortDesc:
      "Automated web QA tool that detects UI issues, broken links, console errors, and accessibility problems.",
    body: "Built an automated web QA and testing tool that detects UI issues, broken links, console errors, and accessibility problems across websites. Automated test-case generation, screenshot and recording capture, and report generation to streamline website quality assurance workflows. Built with React, Node.js, and Puppeteer, with Electron support for full-site automation without browser CORS limitations.",
    tags: ["Vite", "React", "TypeScript", "Express", "Node.js", "Electron", "Puppeteer"],
    highlights: [
      "Automated UI, link, console, and accessibility detection",
      "Automated test-case generation with screenshots and recordings",
      "Report generation for QA workflows",
      "Electron support for full-site automation without CORS limits",
    ],
  },
  {
    id: "werqa_site",
    number: "04",
    title: "WeRQA Website",
    shortDesc:
      "Platform stability and visual flow improvements through testing and precise code fixes.",
    body: "Contributed to the platform's stability and visual flow by conducting comprehensive testing and implementing precise code fixes for the homepage animations and the Team section.",
    tags: ["HTML", "CSS"],
    highlights: [
      "Comprehensive testing of homepage animations and Team section",
      "Precise code fixes for visual flow improvements",
      "Improved platform stability",
    ],
  },
  {
    id: "chest_xray",
    number: "05",
    title: "Chest X-Ray Detection",
    shortDesc:
      "Deep learning system for pneumonia detection from chest X-ray images.",
    body: "Developed a deep learning-based system using Python to detect pneumonia from chest X-ray images. Implemented DenseNet and EfficientNet-B0 models to classify images as Normal or Pneumonia, achieving high accuracy and reliable performance through advanced feature extraction and model optimization techniques.",
    tags: ["Python", "Deep Learning"],
    highlights: [
      "DenseNet and EfficientNet-B0 model implementation",
      "Normal vs. Pneumonia image classification",
      "High accuracy via advanced feature extraction and optimization",
    ],
  },
];
