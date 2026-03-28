// ── Portfolio Data ──
// Edit this file to customize your portfolio content.

export const personalInfo = {
  name: "Alex Morgan",
  roles: [
    "Full Stack Developer",
    "UI/UX Designer",
    "Creative Technologist",
    "Open Source Contributor",
  ],
  tagline: "I craft digital experiences that live at the intersection of design and technology.",
  description:
    "Passionate developer with 5+ years of experience building modern web applications. I specialize in creating beautiful, performant, and accessible digital products that make a difference.",
  email: "hello@alexmorgan.dev",
  location: "San Francisco, CA",
  resumeUrl: "#",
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Dribbble", url: "https://dribbble.com", icon: "dribbble" },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  { name: "React", icon: "react", category: "Frontend", level: 95 },
  { name: "TypeScript", icon: "typescript", category: "Frontend", level: 90 },
  { name: "Next.js", icon: "nextjs", category: "Frontend", level: 88 },
  { name: "Tailwind CSS", icon: "tailwind", category: "Frontend", level: 95 },
  { name: "Node.js", icon: "nodejs", category: "Backend", level: 85 },
  { name: "Python", icon: "python", category: "Backend", level: 82 },
  { name: "PostgreSQL", icon: "postgresql", category: "Backend", level: 80 },
  { name: "MongoDB", icon: "mongodb", category: "Backend", level: 78 },
  { name: "Docker", icon: "docker", category: "DevOps", level: 75 },
  { name: "AWS", icon: "aws", category: "DevOps", level: 72 },
  { name: "Git", icon: "git", category: "Tools", level: 90 },
  { name: "Figma", icon: "figma", category: "Design", level: 85 },
];

export const projects = [
  {
    title: "VITON (Virtual Try-On)",
    description:
      "A premium fashion e-commerce platform with a luxury minimal UI. Features gender-based shopping, smooth animations, and a secure admin dashboard for real-time product management.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    github: "https://github.com/TahmidSadat02/VITON.-Virtual-Try-on-",
    live: "",
    featured: true,
  },
  {
    title: "Classroom Management System",
    description:
      "A role-based classroom manager built with PHP and MySQL. Supports admin control, course management, teacher file uploads, and student downloads — all through a clean, structured web interface.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/TahmidSadat02/classroom_management_system",
    live: "",
    featured: true,
  },
];

export const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    companyUrl: "https://example.com",
    period: "2024 – Present",
    description:
      "Leading the frontend architecture for the company's flagship SaaS product. Migrated legacy codebase to React 18 with TypeScript, reducing bundle size by 40% and improving load times by 60%.",
    tech: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    role: "Full Stack Developer",
    company: "InnovateLab",
    companyUrl: "https://example.com",
    period: "2022 – 2024",
    description:
      "Built and maintained multiple client-facing web applications. Implemented CI/CD pipelines and established coding standards that reduced bug rates by 35%.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "DesignStudio",
    companyUrl: "https://example.com",
    period: "2021 – 2022",
    description:
      "Developed responsive, pixel-perfect UIs from Figma designs. Collaborated with UX team to improve user engagement metrics by 25%.",
    tech: ["React", "Sass", "Redux", "Storybook"],
  },
  {
    role: "Junior Developer",
    company: "StartupXYZ",
    companyUrl: "https://example.com",
    period: "2020 – 2021",
    description:
      "Contributed to the development of the company's MVP. Built RESTful APIs and integrated third-party services for payments and notifications.",
    tech: ["JavaScript", "Express", "MongoDB", "AWS"],
  },
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Open Source Contributions", value: "100+" },
];
