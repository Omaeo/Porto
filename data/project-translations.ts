import { portfolio } from "@/data/portfolio";
import type { Locale } from "@/lib/i18n";

type ProjectNumber = (typeof portfolio.projects)[number]["number"];

type ProjectTranslation = {
  description: string;
  status: string;
  previewDescription: string;
};

const indonesianProjectTranslations = {
  "01": {
    description:
      "Aplikasi web yang memungkinkan pengguna menjelajahi dan memesan wisata alam, lengkap dengan informasi destinasi dan rencana perjalanan di Nusa Tenggara Timur.",
    status: "Desain dan pengembangan",
    previewDescription:
      "Aplikasi Nature Tour memungkinkan pengguna menjelajahi dan memesan wisata alam di Nusa Tenggara Timur. Aplikasi ini dibuat untuk keperluan proyek sekolah dan menyediakan informasi destinasi, rencana perjalanan, serta pilihan pemesanan. Aplikasi ini dibangun menggunakan HTML, Bootstrap CSS, PHP, Laragon, dan MySQL.",
  },
  "02": {
    description:
      "Aplikasi web untuk mengelola keuangan kelas, termasuk mencatat pengeluaran dan membuat laporan aktivitas keuangan bulanan untuk siswa dan guru.",
    status: "Pengembangan full-stack",
    previewDescription:
      "Aplikasi Class Financial Management Web membantu mencatat pengeluaran kelas dan membuat laporan keuangan bulanan untuk siswa dan guru. Aplikasi ini dibangun menggunakan HTML, Bootstrap CSS, PHP, XAMPP, dan MySQL.",
  },
  "03": {
    description:
      "Aplikasi web yang mengklasifikasikan kesehatan keuangan usaha mikro, kecil, dan menengah berdasarkan data keuangan serta memberikan wawasan dan rekomendasi untuk perbaikan.",
    status: "Analisis dan visualisasi data",
    previewDescription:
      "Aplikasi UMKM Financial Classification menggunakan Python, Streamlit, dan Google Colab untuk menganalisis serta memvisualisasikan kesehatan keuangan usaha mikro, kecil, dan menengah. Aplikasi ini memberikan wawasan dan rekomendasi perbaikan berdasarkan data keuangan.",
  },
} satisfies Record<ProjectNumber, ProjectTranslation>;

export function getLocalizedProjects(locale: Locale) {
  return portfolio.projects.map((project) => {
    if (locale === "en") {
      return project;
    }

    const translation = indonesianProjectTranslations[project.number];

    return {
      ...project,
      description: translation.description,
      status: translation.status,
      preview: {
        ...project.preview,
        description: translation.previewDescription,
      },
    };
  });
}
