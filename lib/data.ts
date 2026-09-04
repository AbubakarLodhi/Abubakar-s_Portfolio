export const SITE = {
  name: "Abubakar Khan Lodhi",
  role: "Full Stack Developer",
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
  { label: "Focus", value: "Full Stack / Web" },
  { label: "Experience", value: "2+ Years" },
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
    "I'm Abubakar — a full stack developer working in Laravel, PHP, React, and Next.js, building scalable web apps, REST APIs, and automation workflows.",
    "I also build AI-powered applications, chatbots, and ML/DL models, and I lean on AI-assisted development for faster debugging, optimization, and problem-solving.",
  ],
} as const;

/** Expertise rows shown in the Expertise section. */
export const EXPERTISE = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building fast, responsive and scalable applications end to end with Laravel, React and Next.js.",
    tags: ["Laravel", "React", "Next.js"],
    icon: "layers" as const,
  },
  {
    number: "02",
    title: "Frontend Engineering",
    description:
      "Turning static designs into expressive, responsive interfaces through typed components and considered motion.",
    tags: ["TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    icon: "code" as const,
  },
  {
    number: "03",
    title: "Backend & APIs",
    description:
      "Designing REST APIs and data models with clear separation of concerns and dependable performance.",
    tags: ["Node.js", "Express", "Django", "MySQL", "PostgreSQL"],
    icon: "server" as const,
  },
  {
    number: "04",
    title: "AI & Automation",
    description:
      "Building AI-powered apps, chatbots, and ML/DL models, plus automated QA tooling for work that is tedious by hand.",
    tags: ["Python", "Deep Learning", "OpenCV", "Puppeteer"],
    icon: "bot" as const,
  },
] as const;

/** Marquee strips around the Work title. */
export const TECH_MARQUEE = [
  "React JS",
  "Next.js",
  "TypeScript",
  "Laravel",
  "PHP",
  "Node.js",
  "Tailwind CSS",
  "MySQL",
  "PostgreSQL",
  "Python",
  "GSAP",
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
    "Building scalable full-stack web applications with Laravel, React, and Next.js.",
  items: [
    {
      badge: "Current",
      role: "Web Developer",
      company: "WeRQA",
      period: "July 2026 — Present",
      points: [
        "Develop and maintain modern full-stack web applications using Laravel, PHP, React.js, and Next.js, delivering features from implementation through deployment.",
        "Design responsive and reusable frontend components with seamless integration between frontend, backend services, and APIs.",
        "Optimize application performance, debug production issues, and improve system efficiency while delivering new features based on project requirements.",
        "Collaborate across the software development lifecycle to ship reliable, maintainable, and user-focused products in a fast-paced environment.",
      ],
    },
    {
      badge: "Internship",
      role: "Web Developer Intern",
      company: "WeRQA",
      period: "April 2026 — July 2026",
      points: [
        "Developed and maintained full-stack web applications using Laravel, PHP, React.js, and Next.js, contributing to features across frontend and backend systems.",
        "Built responsive, scalable interfaces and integrated application functionality with backend services and APIs.",
        "Implemented new features, resolved UI and functional issues, and optimized application performance to improve reliability and user experience.",
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
    body: "A full-stack CRM/POS platform built and deployed with Laravel 12, Filament, and MySQL. It ships separate merchant and staff panels with authentication, invoicing, reporting, and demo accounts. I resolved production login and session issues, improved deployment reliability on live hosting, and designed reusable components that tie the frontend, backend, and database into one maintainable business workflow.",
    tags: ["Laravel", "Filament", "Livewire", "MySQL", "Tailwind CSS", "Vite"],
    highlights: [
      "Merchant and staff panels with authentication and demo accounts",
      "Invoicing and reporting built on Laravel 12 and Filament",
      "Fixed production login and session failures on live hosting",
      "Reusable components across frontend, backend, and database layers",
    ],
  },
  {
    id: "prism",
    number: "02",
    title: "Prism — AI Creative Studio",
    shortDesc:
      "AI studio for image, video, and prompt generation with workspaces and a co-pilot chatbot.",
    body: "Prism is a full-stack AI creative studio built with Next.js and TypeScript for image, video, and prompt generation. It provides project workspaces, authentication, and an AI co-pilot chatbot, and is designed around reusable components and AI-powered workflows for generating and managing creative content.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    highlights: [
      "Image, video, and prompt generation in one workspace",
      "Project workspaces with authentication",
      "AI co-pilot chatbot for guided creation",
      "Component-driven architecture around AI workflows",
    ],
  },
  {
    id: "app_lens",
    number: "03",
    title: "App Lens",
    shortDesc:
      "Web QA tool that scans sites for UI issues, broken links, console errors, and accessibility problems.",
    body: "App Lens is a web QA and testing tool that scans websites for UI issues, broken links, console errors, and accessibility problems. It auto-generates test cases, captures screenshots and recordings, and exports reports — all organized by project. Built with React, Node.js, and Puppeteer, it runs in the browser or as an Electron desktop app for full-site automation without CORS limits.",
    tags: ["Vite", "React", "TypeScript", "Express", "Node.js", "Electron", "Puppeteer"],
    highlights: [
      "Automated UI, link, console, and accessibility scanning",
      "Auto-generated test cases with screenshots and recordings",
      "Browser and Electron desktop modes for full-site automation",
      "Project-based reports and export workflows",
    ],
  },
  {
    id: "werqa_site",
    number: "04",
    title: "WeRQA Website",
    shortDesc:
      "Platform stability and visual flow optimization through testing and precise code fixes.",
    body: "Contributed to the WeRQA platform's stability and visual flow by conducting comprehensive testing and implementing precise code fixes for homepage animations and the Team section.",
    tags: ["HTML", "CSS"],
    highlights: [
      "Comprehensive testing of homepage animations and Team section",
      "Implemented precise code fixes for visual flow improvements",
      "Ensured platform stability and production-ready quality",
    ],
  },
  {
    id: "chest_xray",
    number: "05",
    title: "Chest X-Ray Detection",
    shortDesc:
      "Deep learning system for pneumonia detection from chest X-ray images.",
    body: "Developed a deep learning-based system using Python to detect pneumonia from chest X-ray images. Implemented DenseNet and EfficientNet-B0 models to classify images as Normal or Pneumonia, achieving high accuracy through advanced feature extraction and model optimization.",
    tags: ["Python", "Deep Learning", "AI"],
    highlights: [
      "DenseNet and EfficientNet-B0 model implementation",
      "Normal vs. Pneumonia image classification pipeline",
      "High accuracy via advanced feature extraction",
    ],
  },
];
