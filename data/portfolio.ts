export const portfolio = {
  name: "Dewa Putra Hamdani",
  shortName: "Dewa",
  role: "Data Engineer",
  location: "Samarinda, Indonesia",
  availability: "Currently at internship",
  email: "dewaputrahamdani@gmail.com",
  heroImage: "/hero-portrait.svg",
  heroImageAlt: "Portrait placeholder for Your Name",
  intro:
    "Just a student trying to find what he's good at, decided to settle in with Data Engineer for now",
  about: [
    "I am Dewa, i really like Technology and Internet as a whole. I've been surfing through out the internet ever since i was a kid, finding new things everyday including coding at some point.",
    "I enjoy turning complex requirements into simple experiences, improving the systems behind them, and collaborating with people who care about the details.",
  ],
  stats: [
    { value: "02+", label: "Years building" },
    { value: "5", label: "Projects shipped" },
    { value: "88%", label: "Curiosity driven" },
  ],
  skills: [
    {
      title: "Languages",
      index: "01",
      items: ["JavaScript", "Python", "SQL", "HTML", "CSS"],
    },
    {
      title: "Frameworks",
      index: "02",
      items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Tools",
      index: "03",
      items: ["Git", "XAMPP", "Figma", "Vercel", "VS Code", "Antigravity"],
    },
  ],
  projects: [
    {
      number: "01",
      title: "Nature Tour",
      description:
        "A web-based application that allows users to explore and book nature tours, providing information about destinations, itineraries for Nusa Tenggara Timur.",
      tags: ["HTML", "Bootstrap CSS", "PHP", "Laragon", "MySQL"],
      year: "2026",
      status: "Design and developmentx",
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/signal-dashboard",
    },
    {
      number: "02",
      title: "Class Financial Management Web",
      description:
        "A web application for managing class finances, including tracking expenses, and generating reports of monthly financial activities for students and teachers.",
      tags: ["HTML", "Bootstrap CSS", "PHP", "XAMPP", "MySQL"],
      year: "2025",
      status: "Full-stack build",
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/northstar-commerce",
    },
    {
      number: "03",
      title: "UMKM Financial Classification",
      description:
        "A web application that classifies the financial health of small and medium-sized enterprises (UMKM) based on their financial data, providing insights and recommendations for improvement.",
      tags: ["Python", "Streamlit", "Google Colab"],
      year: "2025",
      status: "Design and development",
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/frame-archive",
    },
  ],
  education: [
    {
      period: "2021 — 2024",
      degree: "Normal Student",
      institution: "SMP NEGERI 14 SAMARINDA",
      mapsUrl:
        "https://maps.app.goo.gl/tvMWVgNJySYVAgDo6",
      note: "Surfing in the Internet everyday ",
    },
    {
      period: "Ongoing",
      degree: "Pengembangan Perangkat Lunak dan Gim",
      institution: "SMK NEGERI 7 SAMARINDA",
      mapsUrl:
        "https://maps.app.goo.gl/u95JHnUQBpijP1ia9",
      note: "Web Programmer, Internship, and Data Engineer",
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Omaeo", icon: "GitHub" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/dew_ty2/",
      icon: "Instagram",
    },
  ],
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
] as const;
