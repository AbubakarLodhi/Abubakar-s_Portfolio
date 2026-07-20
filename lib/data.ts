export const SITE = {
  name: "Abubakar Khan Lodhi",
  role: "Full Stack Developer",
  tagline: "Full Stack · Laravel · React · Next.js · AI/ML",
  location: "Lahore, Pakistan",
  email: "a.blodhi000@gmail.com",
  phone: "+92 346 1000454",
  github: "https://github.com/AbubakarLodhi",
  linkedin: "https://www.linkedin.com/in/abubakar-lodhi",
  resume: "/cv/Abubakar_s_Resume.pdf",
  image: "/pictures/abubakar_lodhi.png",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About me" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#works", label: "Projects" },
  { href: "#contact", label: "Contact me" },
] as const;

export const HERO = {
  greeting: "Hi, I am",
  title: "Abubakar Khan Lodhi",
  role: "Full Stack Developer",
  description:
    "Results-driven Full Stack Developer specializing in scalable web applications with Laravel, PHP, React.js, Next.js, and TypeScript. I build high-performance solutions with clean architecture, automation workflows, and quality-focused development — plus hands-on experience in chatbots, machine learning, and deep learning models for real-world applications.",
} as const;

export const EDUCATION = {
  label: "Academics",
  title: "Education",
  subtitle: "Building a strong foundation in computer science and software engineering.",
  items: [
    {
      school: "University of Management and Technology",
      degree: "BS in Computer Science",
      period: "Oct 2022 — Present",
      gpa: "3.18 / 4.0",
      coursework: [
        "Programming Fundamentals",
        "Object Oriented Programming",
        "Data Structures & Algorithms",
        "Database Systems",
        "Operating Systems",
        "Artificial Intelligence",
        "Deep Learning",
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
        "Develop and maintain modern full-stack web applications using Laravel, PHP, React.js, and Next.js.",
        "Design responsive, scalable solutions with seamless frontend and backend integration.",
        "Optimize code and system efficiency while delivering new features across the software lifecycle.",
        "Collaborate to ship reliable, maintainable, and user-focused web applications.",
      ],
    },
    {
      badge: "Internship",
      role: "Web Developer Intern",
      company: "WeRQA",
      period: "April 2026 — July 2026",
      points: [
        "Developed and maintained full-stack web applications using Laravel, PHP, React.js, and Next.js.",
        "Built scalable web solutions, implemented new features, and optimized performance across the stack.",
      ],
    },
  ],
} as const;

export const LANGUAGES = [
  "C++",
  "HTML",
  "CSS",
  "React.js",
  "Next.js",
  "TypeScript",
  "PHP",
  "Laravel",
  "Python",
] as const;

export const TOOL_LOGOS = [
  { src: "/logos/bugzilla.jpeg", alt: "Bugzilla" },
  { src: "/logos/chrome-devtools.png", alt: "Chrome DevTools" },
  { src: "/logos/figma.png", alt: "Figma" },
  { src: "/logos/github.png", alt: "GitHub" },
  { src: "/logos/Jira.png", alt: "Jira" },
  { src: "/logos/jmeter.png", alt: "JMeter" },
  { src: "/logos/mysql.png", alt: "MySQL" },
  { src: "/logos/playwright.png", alt: "Playwright" },
  { src: "/logos/promp.jpg", alt: "Prompt Engineering" },
  { src: "/logos/slack.png", alt: "Slack" },
  { src: "/logos/testrails.jpeg", alt: "TestRails" },
  { src: "/logos/trello.png", alt: "Trello" },
  { src: "/logos/vs code.jpeg", alt: "VS Code" },
] as const;

export const CORE_SKILLS = [
  { src: "/logos/API testing.png", label: "API Testing" },
  { src: "/logos/Automation Testing.png", label: "Automation Testing" },
  { src: "/logos/Maunal Testing.png", label: "Manual Testing" },
  { src: "/logos/Performance testing.png", label: "Performance Testing" },
] as const;

export type ProjectId =
  | "app_lens"
  | "werqa_site"
  | "chest_xray"
  | "contact_book"
  | "kellyas"
  | "railway";

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
    id: "app_lens",
    number: "01",
    title: "App Lens",
    shortDesc:
      "Web QA tool that scans sites for UI issues, broken links, console errors, and accessibility problems.",
    body: "App Lens is a web QA and testing tool that scans websites for UI issues, broken links, console errors, and accessibility problems. It auto-generates test cases, captures screenshots and recordings, and exports reports — all organized by project. Built with React, Node.js, and Puppeteer, it runs in the browser or as an Electron desktop app for full-site automation without CORS limits.",
    tags: ["Vite", "React", "TypeScript", "Express", "Node.js", "Electron"],
    highlights: [
      "Automated UI, link, console, and accessibility scanning",
      "Auto-generated test cases with screenshots and recordings",
      "Browser and Electron desktop modes for full-site automation",
      "Project-based reports and export workflows",
    ],
  },
  {
    id: "werqa_site",
    number: "02",
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
    number: "03",
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
  {
    id: "contact_book",
    number: "04",
    title: "Contact Book",
    shortDesc:
      "Console-based contact manager built with C++ and core data structures.",
    body: "Developed a console-based Contact Book application using C++, implementing core Data Structures and Algorithms such as linked lists, trees, and sorting/searching techniques. Users can add, search, update, and delete contacts efficiently.",
    tags: ["C++", "DSA", "Console App"],
    highlights: [
      "Linked lists, trees, and sorting/searching algorithms",
      "Add, search, update, and delete contact operations",
      "Strong memory management and algorithmic problem-solving",
    ],
  },
  {
    id: "kellyas",
    number: "05",
    title: "Kellyas UI Template",
    shortDesc:
      "Responsive front-end template with modern UI and intuitive navigation.",
    body: "Designed and developed a responsive front-end website template using HTML and CSS. The layout includes a modern user interface with clean design and intuitive navigation, showcasing strong understanding of front-end web development and UI/UX principles.",
    tags: ["HTML", "CSS", "UI/UX"],
    highlights: [
      "Clean, modern responsive layout",
      "Intuitive navigation and visual hierarchy",
      "Reusable template design patterns",
    ],
  },
  {
    id: "railway",
    number: "06",
    title: "Railway Management System",
    shortDesc:
      "Interactive front-end for train schedules, bookings, and secure login.",
    body: "Developed the front-end of a Railway Management System using HTML, CSS, and JavaScript. The interface includes interactive train schedules, booking forms, and login credentials with a responsive, user-friendly design.",
    tags: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Interactive train schedules and booking forms",
      "Secure login credential workflows",
      "Fully responsive and user-friendly interface",
    ],
  },
];
