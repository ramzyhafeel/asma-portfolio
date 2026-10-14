import {
  Linkedin,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  Sparkles,
  MessageSquare,
  CalendarCheck,
  Laptop,
  Users,
  Award,
  Languages,
} from "lucide-react";

import projectClinicImg from "../assets/project-clinic.jpg";
import projectTourismImg from "../assets/project-tourism.jpg";
import projectDevhubImg from "../assets/project-devhub.jpg";
import aboutImg from "../assets/fathima-about.jpg";
import avatarImg from "../assets/fathima-avatar.png";

export const siteData = {
  name: "Fathima Asma",
  fullName: "Fathima Asma",
  tagline: "HNDIT Undergraduate & Executive Professional",
  location: "Kegalle, Sri Lanka",
  email: "asma.firouss@gmail.com",
  phone: "+94 76 824 5631",
  linkedin: "https://www.linkedin.com/in/asmafirous",
  avatar: avatarImg,
  aboutImage: aboutImg,

  nav: [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skill", href: "#skills", id: "skills" },
    { label: "Project", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ],

  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/asmafirous", Icon: Linkedin },
    { label: "Email", href: "mailto:asma.firouss@gmail.com", Icon: Mail },
    { label: "Phone", href: "tel:+94768245631", Icon: Phone },
  ],

  hero: {
    eyebrow: "WELCOME TO MY PORTFOLIO",
    greeting: "Hi, I'm ",
    name: "Fathima Asma.",
    title: "HNDIT Undergraduate & Executive Professional",
    subtitle:
      "Motivated and detail-oriented undergraduate student pursuing HNDIT at SLIATE, with a strong background in English communication, organization, and teamwork. Completed a Diploma in English at University of Peradeniya. Actively seeking to contribute to Royal Travels as a Female Executive in a remote role.",
    ctaPrimary: "Explore My Background →",
    ctaSecondary: "Let's Connect ↗",
    statusBadge: "Open to Remote & Executive Opportunities",
    spokenIntroTranscript:
      "Hi, I'm Fathima Asma. I'm pursuing HNDIT at SLIATE with a Diploma in English from the University of Peradeniya, and I'm actively seeking to contribute as an Executive in a remote role.",
  },

  about: {
    eyebrow: "GET TO KNOW ME",
    title: "Empowering organizations with articulate communication, tech skills & dedication.",
    subtitle:
      "HNDIT Undergraduate at SLIATE with a Diploma in English from the University of Peradeniya, based in Kegalle, Sri Lanka.",
    paragraphs: [
      "I am Fathima Asma, an undergraduate student pursuing the Higher National Diploma in Information Technology (HNDIT) at SLIATE, based in Kegalle, Sri Lanka. With a completed Diploma in English from the prestigious University of Peradeniya, I bring together technical computer literacy, articulate communication, and methodical organizational excellence.",
      "My practical experience includes organizing cultural and academic university events for SLIATE, managing registration and communication desks, and conducting volunteer English language tutoring and peer workshops. Recognized for leadership in student activities and active participation in university debate and speech competitions, I thrive in collaborative, dynamic environments.",
      "I am actively seeking to contribute to Royal Travels as a Female Executive in a remote role, leveraging my interpersonal abilities, scheduling precision, digital office tool proficiency, and customer-centric mindset to drive seamless day-to-day operations.",
    ],
    stats: [
      { label: "Current Education", value: "HNDIT (SLIATE)", detail: "Expected Graduation 2026" },
      { label: "English Diploma", value: "Univ. of Peradeniya", detail: "Completed 2023" },
      { label: "Secondary Education", value: "Zahira College", detail: "Completed 2021 (Mawanella)" },
      { label: "Target Role", value: "Female Executive", detail: "Remote / Royal Travels" },
    ],
  },

  expertise: {
    eyebrow: "CORE COMPETENCIES",
    title: "What I Bring to the Table",
    subtitle:
      "A versatile professional skill set combining fluent English communication, modern IT proficiency, and reliable administrative coordination.",
    cards: [
      {
        icon: MessageSquare,
        title: "Executive Communication",
        description:
          "Articulate written and verbal English communication, public speaking, customer interaction, professional correspondence, and speech presentation.",
      },
      {
        icon: CalendarCheck,
        title: "Event Planning & Coordination",
        description:
          "Organizing academic and cultural university events, participant scheduling, registration desk operations, and smooth workflow management.",
      },
      {
        icon: Laptop,
        title: "Digital & Office Technology",
        description:
          "Skilled in MS Office (Word, Excel, PowerPoint), Google Workspace, Zoom, professional email etiquette, and HNDIT information systems.",
      },
      {
        icon: Users,
        title: "Team Leadership & Tutoring",
        description:
          "Guiding peer learning groups, volunteer English language tutoring, role-play confidence building, and cross-functional team collaboration.",
      },
    ],
  },

  skills: {
    eyebrow: "KEY QUALIFICATIONS",
    title: "Skills & Proficiencies",
    subtitle: "Core communication, digital technologies, organizational systems, and language fluencies.",
    categories: [
      {
        name: "Communication",
        items: [
          "Public Speaking",
          "Customer Interaction",
          "Professional Writing",
          "Speech & Debate",
          "Presentation Skills",
          "Active Listening",
        ],
      },
      {
        name: "Organization",
        items: [
          "Event Planning",
          "Scheduling",
          "Task Coordination",
          "Registration Desk Management",
          "Time Management",
          "Administrative Support",
        ],
      },
      {
        name: "Technology & Tools",
        items: [
          "MS Word",
          "MS Excel",
          "MS PowerPoint",
          "Google Workspace",
          "Email Etiquette",
          "Zoom & Virtual Meetings",
          "IT Fundamentals",
          "Web Basics",
        ],
      },
      {
        name: "Languages",
        items: [
          "English (Fluent)",
          "Sinhala (Native)",
          "Tamil (Basic)",
        ],
      },
      {
        name: "Personal Strengths",
        items: [
          "Self-motivated",
          "Independent",
          "Adaptable",
          "Team-oriented",
          "Detail-oriented",
          "Problem Solving",
        ],
      },
    ],
  },

  projects: {
    eyebrow: "PORTFOLIO & SHOWCASE",
    title: "Featured Projects",
    subtitle:
      "Hands-on applications built with modern frontend frameworks, backend APIs, and relational/NoSQL databases.",
    filters: ["All", "React", "JavaScript", "Java", "Node.js", "MySQL", "MongoDB"],
    items: [
      {
        id: "p1",
        title: "Trendy Website",
        description:
          "Responsive, user-friendly modern web application featuring modular front-end architecture and structured relational data management.",
        highlights: [
          "Designed a responsive and user-friendly interface using HTML, CSS and JavaScript.",
          "Added interactive front-end behaviour and reusable page components.",
          "Designed MySQL tables to organize and manage application data.",
        ],
        tags: ["HTML", "CSS", "JavaScript", "MySQL"],
        imageUrl: projectTourismImg,
        githubUrl: "https://www.linkedin.com/in/asmafirous",
        demoUrl: "",
        category: "Web Application",
      },
      {
        id: "p2",
        title: "Learning Management System (LMS)",
        description:
          "Comprehensive educational software system engineered for course enrollment, user management, and structured academic learning.",
        highlights: [
          "Developed core LMS features for users, courses and learning-related information.",
          "Used Java with MySQL for application logic and structured data management.",
          "Managed source code and project versions using Git and GitHub.",
        ],
        tags: ["Java", "MySQL", "JavaScript", "HTML", "CSS"],
        imageUrl: projectClinicImg,
        githubUrl: "https://www.linkedin.com/in/asmafirous",
        demoUrl: "",
        category: "Educational System",
      },
      {
        id: "p3",
        title: "AI Resume Analyzer",
        description:
          "Full-stack resume analysis application that parses candidate resume content, extracts key skills, and delivers role-aligned feedback.",
        highlights: [
          "Built a full-stack resume analysis interface with React and a Node.js/Express backend.",
          "Created a workflow to analyze resume content and provide role-related feedback.",
          "Used MongoDB for application data and GitHub for version control and collaboration.",
        ],
        tags: ["React", "Node.js", "Express", "MongoDB"],
        imageUrl: projectDevhubImg,
        githubUrl: "https://www.linkedin.com/in/asmafirous",
        demoUrl: "",
        category: "Full Stack & AI",
      },
    ],
  },

  experience: {
    eyebrow: "JOURNEY & BACKGROUND",
    title: "Experience, Education & Achievements",
    subtitle: "Hands-on volunteering, academic milestones, and student leadership.",
    tabs: [
      {
        key: "experience",
        label: "Experience & Volunteering",
        icon: Briefcase,
        items: [
          {
            title: "Student Volunteer & Organizer",
            org: "SLIATE University Events",
            period: "2022 – 2024",
            location: "Kandy, Sri Lanka",
            description:
              "Organized and coordinated cultural and academic university events, ensuring seamless logistical flow and vibrant student participation.",
            highlights: [
              "Organized cultural and academic events, coordinating with over 10+ participants",
              "Assisted in communication and registration desks, ensuring smooth event flow",
              "Supported peer learning groups and workshops to improve English proficiency",
              "Developed organizational and leadership skills through active participation",
            ],
          },
          {
            title: "Volunteer English Tutor",
            org: "Community-Based Program",
            period: "2021 – 2022",
            location: "Kandy, Sri Lanka",
            description:
              "Conducted community English conversation and grammar sessions for school students, fostering language confidence and public speaking skills.",
            highlights: [
              "Conducted English conversation and grammar sessions for school students",
              "Encouraged confidence-building through role-plays and public speaking",
              "Strengthened communication and teaching skills while engaging with youth",
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
            title: "Higher National Diploma in Information Technology (HNDIT)",
            org: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
            period: "Expected Graduation 2026",
            location: "Sri Lanka",
            description:
              "Currently pursuing HNDIT, gaining strong competencies in IT fundamentals, office automation, web technologies, software systems, and data management.",
            highlights: [
              "Pursuing Higher National Diploma in Information Technology (HNDIT)",
              "Coursework: Information Technology Fundamentals, Web Basics, Database Systems, Office Automation",
              "Active in university IT seminars, academic forums, and student committees",
            ],
          },
          {
            title: "Diploma in English",
            org: "University of Peradeniya",
            period: "Completed – 2023",
            location: "Peradeniya, Sri Lanka",
            description:
              "Successfully completed comprehensive English diploma, mastering advanced communication, professional writing, formal presentations, and linguistics.",
            highlights: [
              "Completed Diploma in English at the University of Peradeniya (2023)",
              "Mastered public speaking, formal presentation delivery, and business correspondence",
              "Represented institution in debate and speech competitions",
            ],
          },
          {
            title: "GCE Advanced Level Examination",
            org: "Zahira College Mawanella",
            period: "Completed – 2021",
            location: "Mawanella, Sri Lanka",
            description:
              "Successfully completed GCE Advanced Level examinations with strong performance in academics and extracurricular student activities.",
            highlights: [
              "Completed GCE A/L examination in 2021",
              "Active participant in school English literary society and student events",
            ],
          },
        ],
      },
      {
        key: "achievements",
        label: "Achievements & Activities",
        icon: Sparkles,
        items: [
          {
            title: "Debate & Speech Competitions",
            org: "University Level",
            period: "2022 – 2024",
            location: "Sri Lanka",
            description:
              "Represented University in inter-faculty speech and debate competitions, demonstrating critical thinking, articulate reasoning, and stage presence.",
            highlights: [
              "Represented University in debate and speech competitions",
              "Delivered speeches on communication, student leadership, and technology",
            ],
          },
          {
            title: "Student English Day Leadership",
            org: "SLIATE English Department",
            period: "2023",
            location: "Sri Lanka",
            description:
              "Recognized for leadership and initiative in planning, scheduling, and hosting student English Day programs and literary workshops.",
            highlights: [
              "Recognized for leadership in organizing student English Day programs",
              "Coordinated event agenda, stage hosting, and student registration",
            ],
          },
          {
            title: "Career Guidance & IT Seminars",
            org: "Professional Workshops",
            period: "2022 – Present",
            location: "Sri Lanka",
            description:
              "Proactively participated in career development seminars, IT workshops, and remote work readiness programs.",
            highlights: [
              "Participated in career guidance workshops and IT seminars",
              "Continuously expanding digital skills in remote executive workflows",
            ],
          },
        ],
      },
    ],
  },

  contact: {
    eyebrow: "GET IN TOUCH",
    title: "Let's Connect & Collaborate.",
    subtitle:
      "Actively seeking to contribute to Royal Travels as a Female Executive in a remote role. Feel free to send a message, call, or email directly.",
    emailNote: "Reach out directly via email or phone:",
  },
};