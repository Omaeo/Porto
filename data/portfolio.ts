export const portfolio = {
  name: "Dewa Putra Hamdani",
  shortName: "Dewa",
  role: "Full-stack Developer",
  location: "Samarinda, Indonesia",
  availability: "Currently at internship",
  email: "dewaputrahamdani@gmail.com",
  heroImage: "/hero-portrait.svg",
  heroImageAlt: "TwoTime PFP",
  cv: {
    file: "/Dewa_Putra_Hamdani_CV.pdf",
  },
  intro:
    "Just a student that's interested in internet and coding primarily python. Trying to explore things everyday. ",
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
      preview: {
        description:
          "The Nature Tour application allows users to explore and book nature tours in Nusa Tenggara Timur. It was made for school project purposes, and it provides information about destinations, itineraries, and booking options. The application was built using HTML, Bootstrap CSS, PHP, Laragon, and MySQL.",
        images: [
          "/Natour Preview (1).webp",
          "/Natour Preview (2).webp",
          "/Natour Preview (3).webp",
        ],
      },
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
      preview: {
        description:
          "The Class Financial Management Web application helps in tracking class expenses and generating monthly financial reports for students and teachers. It was built using HTML, Bootstrap CSS, PHP, XAMPP, and MySQL.",
        images: [
          "/kas kelas preview (1).webp",
          "/kas kelas preview (2).webp",
          "/kas kelas preview (3).webp",
        ],
      },
    },
    {
      number: "03",
      title: "UMKM Financial Classification",
      description:
        "A web application that classifies the financial health of small and medium-sized enterprises (UMKM) based on their financial data, providing insights and recommendations for improvement.",
      tags: ["Python", "Streamlit", "Google Colab"],
      year: "2025",
      status: "Data analysis and visualization",
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/frame-archive",
      preview: {
        description:
          "The UMKM Financial Classification application uses Python, Streamlit, and Google Colab to analyze and visualize the financial health of small and medium-sized enterprises. It provides insights and recommendations for improvement based on their financial data.",
        images: [
          "/umkm1.png",
        ],
      },
    },
  ],
  learningPath: [
    {
      period: "Ongoing",
      degree: "Pengembangan Perangkat Lunak dan Gim",
      institution: "SMK NEGERI 7 SAMARINDA",
      mapsUrl:
        "https://maps.app.goo.gl/u95JHnUQBpijP1ia9",
      note: "Web Programmer, Internship, and Data Engineer",
    },
    {
      period: "2021 — 2024",
      degree: "Normal Student",
      institution: "SMP NEGERI 14 SAMARINDA",
      mapsUrl:
        "https://maps.app.goo.gl/tvMWVgNJySYVAgDo6",
      note: "Surfing in the Internet everyday ",
    },
  ],
  certifications: [
    {
      title: "Koding dan Kecerdasan Artifisial",
      issuer: "Certificate of Completion",
      description:
        "A certificate recognizing participation and learning in coding and artificial intelligence.",
      file: "/DewaPutraHamdani Sertifikat KA-AI.pdf",
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Omaeo", icon: "GitHub" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dewa-putra-76a72842b/",
      icon: "LinkedIn",
    },
  ],
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Learning Path", href: "#learning-path" },
  { label: "Contact Me", href: "#contact" },
] as const;
