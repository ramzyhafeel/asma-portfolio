import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Boxes,
  ShieldCheck,
  Headset,
  GraduationCap,
  Briefcase,
} from "lucide-react";

import projectClinicImg from "../assets/project-clinic.jpg";
import projectTourismImg from "../assets/project-tourism.jpg";
import projectDevhubImg from "../assets/project-devhub.jpg";
import aboutImg from "../assets/fathima-about.jpg";
import avatarImg from "../assets/fathima-avatar.png";

export const siteData = {
  name: "Fathima Asma",
  fullName: "Fathima Asma",
  tagline: "Software Engineering Undergraduate",
  location: "Sri Lanka",
  email: "fathima.asma.swe@gmail.com",
  avatar: avatarImg,
  aboutImage: aboutImg,

  nav: [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skill", href: "#skills", id: "skills" },
    { label: "Project", href: "#projects", id: "projects" },
    { label: "Blogs", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ],

  socialLinks: [
    { label: "GitHub", href: "https://github.com", Icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
    { label: "Email", href: "mailto:fathima.asma.swe@gmail.com", Icon: Mail },
  ],

  hero: {
    eyebrow: "WELCOME TO MY PORTFOLIO",
    greeting: "Hi, I'm ",
    name: "Fathima Asma.",
    title: "Software Engineering Undergraduate",
    subtitle:
      "Passionate about building meaningful digital solutions, with hands-on project experience and a strong desire to learn, collaborate, and grow. Currently seeking an internship opportunity.",
    ctaPrimary: "Explore My Projects →",
    ctaSecondary: "Let's Connect ↗",
    statusBadge: "Open to Internship Opportunities",
    spokenIntroTranscript:
      "Hi, I'm Fathima Asma. I'm a software engineering undergraduate, and I'm currently looking for an internship opportunity.",
  },

  about: {
    eyebrow: "GET TO KNOW ME",
    title: "Crafting thoughtful software with purpose & curiosity.",
    subtitle:
      "Undergraduate software engineer dedicated to building practical, reliable digital experiences.",
    paragraphs: [
      "I am Fathima Asma, a third-year Software Engineering undergraduate at SLIIT with a genuine curiosity for how software can simplify daily workflows and bring meaningful value to users. Over the past few years, I have balanced academic excellence (3.65 CGPA) with real-world software implementation roles.",
      "Having coordinated deployments and automated testing workflows at Unilever and Datamation Systems, I understand that great engineering isn't just about syntax—it's about reliability, edge-case resilience, and collaborating seamlessly with cross-functional teams.",
      "I am currently actively seeking a software engineering internship where I can immerse myself in full-stack development, contribute to mission-driven projects, and learn alongside thoughtful mentors.",
    ],
    stats: [
      { label: "Current Education", value: "3rd Year Undergraduate", detail: "SLIIT (CGPA 3.65)" },
      { label: "Industry Experience", value: "1.5+ Years", detail: "Unilever & Datamation" },
      { label: "Focus Areas", value: "Full Stack & QA", detail: "React, Node, SQL" },
      { label: "Availability", value: "Immediate", detail: "Internship Opportunities" },
    ],
  },

  expertise: {
    eyebrow: "CORE COMPETENCIES",
    title: "What I Bring to the Table",
    subtitle:
      "Specialized in modern web technologies, structured quality assurance, and reliable software delivery.",
    cards: [
      {
        icon: Code2,
        title: "Fullstack Web Development",
        description:
          "Building responsive, high-performance web applications using React, modern JavaScript, Node.js, and structured CSS design systems.",
      },
      {
        icon: Boxes,
        title: "Software Architecture & Data",
        description:
          "Designing clean data models with PostgreSQL, MongoDB, and SQLite, ensuring data integrity and scalable modular architecture.",
      },
      {
        icon: ShieldCheck,
        title: "Quality Assurance & Testing",
        description:
          "Validating system reliability through functional test cases, defect tracking, and regression testing prior to live releases.",
      },
      {
        icon: Headset,
        title: "Deployment & Coordination",
        description:
          "Bridging development and real-world deployment with clear documentation, stakeholder alignment, and Git version control.",
      },
    ],
  },

  skills: {
    eyebrow: "TECHNICAL PROFICIENCY",
    title: "Skills & Technologies",
    subtitle: "Core languages, frameworks, and developer tools in my workflow.",
    categories: [
      {
        name: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "PHP"],
      },
      {
        name: "Frontend & UI",
        items: ["React", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Figma", "Vite"],
      },
      {
        name: "Backend & APIs",
        items: ["Node.js", "Express", "REST APIs", "Postman"],
      },
      {
        name: "Databases & Cloud",
        items: ["MongoDB", "PostgreSQL", "SQLite", "Firebase", "Docker", "Git", "Vercel"],
      },
    ],
  },

  projects: {
    eyebrow: "PORTFOLIO WORK",
    title: "Featured Projects",
    subtitle:
      "Hands-on projects developed for real-world scenarios, emphasizing performance, clean UI, and robust logic.",
    filters: ["All", "React", "Node.js", "Electron", "SQLite", "Tailwind", "Full Stack"],
    items: [
      {
        id: "p1",
        title: "Clinic Inventory Management System",
        description:
          "Offline-first inventory and reporting system built for medical clinic stock management, batch expiry tracking, and local automated PDF/Excel reports without requiring active internet connectivity.",
        tags: ["React", "Node.js", "Electron", "SQLite", "Tailwind"],
        imageUrl: projectClinicImg,
        githubUrl: "https://github.com",
        demoUrl: "",
        category: "Desktop & Web Application",
      },
      {
        id: "p2",
        title: "Tourism Agency Platform – Lanka Memo Holidays",
        description:
          "Modern travel agency website engineered with custom booking inquiries, interactive itinerary showcases, fluid responsive animations, and fast load times deployed on Netlify.",
        tags: ["React", "Node.js", "Express", "Tailwind", "Hosting"],
        imageUrl: projectTourismImg,
        githubUrl: "https://github.com",
        demoUrl: "https://lankamemoholidays.lk/",
        category: "Client Web Application",
      },
      {
        id: "p3",
        title: "DevStack Hub – System & Architecture Monitor",
        description:
          "Full-stack developer dashboard showcasing service health metrics, repository analytics, and API latency tracking with modular React components and Node.js microservices.",
        tags: ["React", "Node.js", "Full Stack", "Tailwind"],
        imageUrl: projectDevhubImg,
        githubUrl: "https://github.com",
        demoUrl: "",
        category: "Full Stack Showcase",
      },
    ],
  },

  experience: {
    eyebrow: "JOURNEY & BACKGROUND",
    title: "Experience & Education",
    subtitle: "Hands-on industry exposure and strong academic foundation in software engineering.",
    tabs: [
      {
        key: "experience",
        label: "Work Experience",
        icon: Briefcase,
        items: [
          {
            title: "Software Implementation Coordinator",
            org: "Unilever",
            period: "Aug 2023 - Jul 2024",
            location: "Sri Lanka",
            description:
              "Coordinated enterprise tool enhancements, automation workflows, and cross-functional quality validation for FMCG distribution systems.",
            highlights: [
              "Executed functional and integration testing for enterprise SAP and SFA modules using structured test cases",
              "Identified and resolved 40+ critical defects prior to production go-live, ensuring system quality and release readiness",
              "Assisted in deploying the distribution management system across multiple distribution channels, optimizing logistics workflows",
              "Utilized Git for version control and ran MySQL scripts to perform cross-environment data integrity audits",
            ],
          },
          {
            title: "Software Implementation & Support Intern",
            org: "Datamation Systems",
            period: "Sep 2022 - Apr 2023",
            location: "Sri Lanka",
            description:
              "Supported client platform rollout and diagnostic automation across the software lifecycle.",
            highlights: [
              "Participated in deployment of Sales Force Automation (SFA) and DMS platforms for commercial clients",
              "Ensured configuration accuracy, schema integrity, and system stability during rollout phases",
              "Automated diagnostic and QA reporting queries using SQL, significantly reducing manual validation overhead",
              "Collaborated with Dev and QA teams via GitHub version control, minimizing post-deployment bugs",
            ],
          },
        ],
      },
      {
        key: "education",
        label: "Education",
        icon: GraduationCap,
        items: [
          {
            title: "BSc (Hons) in Software Engineering",
            org: "SLIIT (Sri Lanka Institute of Information Technology)",
            period: "2023 - Present (3rd Year)",
            location: "Sri Lanka",
            description:
              "3rd-year Software Engineering undergraduate with a strong academic record (CGPA: 3.65). Focusing on software architecture, full-stack web technologies, database design, and object-oriented paradigms.",
            highlights: [
              "High academic standing with current CGPA of 3.65 / 4.00",
              "Developing scalable applications using React, Node.js, and relational / NoSQL databases",
              "Coursework: Software Architecture, Algorithms, Database Systems, Web Application Development, Software Quality Engineering",
            ],
          },
          {
            title: "GCE Advanced Level (Physical Science)",
            org: "Zahira College",
            period: "Completed 2021",
            location: "Sri Lanka",
            description:
              "Successfully completed GCE Advanced Level examinations in the Physical Science stream with strong performance across Physics, Combined Mathematics, and English.",
          },
        ],
      },
    ],
  },

  contact: {
    eyebrow: "GET IN TOUCH",
    title: "Let's Build Something Meaningful.",
    subtitle:
      "I'm open to internship opportunities, collaboration, and learning experiences. Let's connect.",
    emailNote: "Feel free to send a message or email me directly at:",
  },
};