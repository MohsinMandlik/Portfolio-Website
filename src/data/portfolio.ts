export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  primaryRole: string;
  secondaryRole: string;
  specialization: string;
  heroSupportingText: string;
  email: string;
  logo: string;
  bio: string;
  footerRole: string;
  copyrightYear: number;
  resumeUrl: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
}

export interface Discipline {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string;
  image: string;
  link?: string;
  github?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Mohsin Mandlik",
  firstName: "MOHSIN",
  lastName: "MANDLIK",
  primaryRole: "AI ENGINEER",
  secondaryRole: "AI AUTOMATION SPECIALIST",
  specialization: "AI Engineer",
  heroSupportingText:
    "Building AI-powered systems, automation workflows, and digital products for real-world businesses.",
  email: "moshinmandlik999@gmail.com",
  logo: "MOHSIN",
  bio: "I'm an AI Engineer and technology enthusiast focused on building practical digital and AI-powered solutions for real-world businesses. I work across web development, 3D experiences, AI agents, chatbots, automation, mobile applications, CRM/ERP systems, and digital marketing to turn business requirements into working products.",
  footerRole: "AI ENGINEER",
  copyrightYear: 2026,
  resumeUrl: "/resume.pdf",
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/MohsinMandlik",
  linkedin: "https://www.linkedin.com/in/mohsin-mandlik-099533321/",
  instagram: "https://instagram.com/_mohsin_.01",
};

export const disciplines: { discipline1: Discipline; discipline2: Discipline } = {
  discipline1: {
    title: "AI ENGINEERING",
    subtitle: "AI",
    description:
      "I build AI-powered applications and intelligent systems using LLMs, AI agents, APIs and modern software engineering technologies.",
    skills: [
      "Python",
      "LLMs",
      "Generative AI",
      "AI Agents",
      "RAG",
      "FastAPI",
      "API Integration",
      "Prompt Engineering",
      "Chatbots",
      "Voice Agents",
    ],
  },
  discipline2: {
    title: "AI AUTOMATION & SOFTWARE",
    subtitle: "AUTOMATION",
    description:
      "I design complete digital systems and automated workflows that connect AI, software, APIs and business processes to solve real-world requirements.",
    skills: [
      "n8n",
      "Workflow Automation",
      "REST APIs",
      "Web Development",
      "Next.js",
      "React",
      "Node.js",
      "Three.js",
      "CRM / ERP",
      "Digital Marketing Automation",
    ],
  },
};

export const experiences: ExperienceItem[] = [
  {
    id: "01",
    role: "AI AUTOMATION SPECIALIST",
    company: "MKGlobo Solutions",
    duration: "2026",
    description:
      "Worked as an AI Automation Specialist, developing and integrating AI-powered workflows, automation systems, and creative technology solutions. Worked with AI models, automation platforms, APIs, and generative AI tools to streamline real-world business and content workflows.",
  },
  {
    id: "02",
    role: "AI & SOFTWARE DEVELOPER",
    company: "Freelance",
    duration: "2026 — PRESENT",
    description:
      "Currently working with multiple real-world clients to design and develop technology solutions based on their business requirements. My work includes custom websites, 3D web experiences, AI systems, voice agents, chatbots, social media automation, mobile applications, CRM/ERP systems, and digital marketing automation.",
  },
  {
    id: "03",
    role: "TECH ENTHUSIAST & INDEPENDENT BUILDER",
    company: "Independent Projects",
    duration: "ONGOING",
    description:
      "Exploring emerging technologies and building experimental products across AI, automation, software development, and creative technology. I continuously experiment with new tools, architectures, and AI capabilities to turn ideas into practical solutions.",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "01",
    title: "BusinessLens AI",
    category: "AI BUSINESS INTELLIGENCE PLATFORM",
    description:
      "An AI-powered business intelligence platform that processes business information through an automated AI pipeline to generate structured analysis and actionable insights.",
    tools:
      "Next.js, React, TypeScript, Tailwind CSS, n8n, LLMs, AI Automation, APIs",
    image: "/images/businesslens_ai.jpg",
  },
  {
    id: "02",
    title: "ResQFood",
    category: "REAL-TIME FULL-STACK PLATFORM",
    description:
      "A real-time surplus food rescue platform built to connect available food with people and organizations that can put it to use.",
    tools:
      "MongoDB, Express.js, React, Node.js, Socket.io, Tailwind CSS, Vite, Cloudinary, Mapbox",
    image: "/images/resqfood.jpg",
  },
  {
    id: "03",
    title: "RhinoMCP AI CAD Generator",
    category: "AI + CAD AUTOMATION",
    description:
      "An AI-powered CAD workflow connecting a local AI model with Rhino through MCP, allowing natural-language instructions to drive CAD generation and automation.",
    tools: "Python, Qwen, Ollama, MCP, Rhino, AI Agents, Local LLM",
    image: "/images/rhinomcp_cad.jpg",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "AI / AUTOMATION",
    skills: [
      "Generative AI",
      "LLMs",
      "AI Agents",
      "RAG",
      "Prompt Engineering",
      "n8n",
      "Workflow Automation",
      "Chatbots",
      "Voice Agents",
    ],
  },
  {
    category: "SOFTWARE",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    category: "DATABASE / CLOUD",
    skills: ["MongoDB", "PostgreSQL", "AWS"],
  },
  {
    category: "3D / CREATIVE TECHNOLOGY",
    skills: ["Three.js", "AI Image Generation", "AI Video Generation"],
  },
];
