export const SITE = {
  name: "Abubakar Khan Lodhi",
  role: "Full Stack Developer",
  tagline: "Full Stack · Automation Testing · Web Applications",
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
  role: "Full Stack Developer / Automation Engineer",
  description:
    "Dedicated Full Stack Developer focused on delivering high-quality digital solutions — intelligent chatbots, rigorous automation testing, and scalable web applications for global clients.",
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
    "Industry experience building web applications, chatbots, and quality-driven digital solutions.",
  items: [
    {
      badge: "Internship",
      role: "Intern",
      company: "WeRQA",
      points: [
        "Developed intelligent chatbots and executed rigorous automation testing for global clients.",
        "Built company portfolios, websites, and scalable web applications with a quality-driven approach.",
        "Bridged frontend and backend development with reliable test automation for seamless user experiences.",
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
    id: "werqa_site",
    number: "01",
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
    number: "02",
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
    number: "03",
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
    number: "04",
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
    number: "05",
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
