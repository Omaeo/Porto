"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";

export type Locale = "en" | "id";

const translations = {
  en: {
    skipToContent: "Skip to content",
    navigation: {
      about: "About",
      skills: "Skills",
      work: "Work",
      learningPath: "Learning Path",
      contact: "Contact Me",
      language: "Language",
      switchLanguage: "Switch language to Indonesian",
      backToTop: "Back to top",
      primaryNavigation: "Primary navigation",
    },
    hero: {
      role: "Full-stack Developer",
      location: "Samarinda, Indonesia",
      availability: "Currently at internship",
      intro:
        "Just a student that's interested in internet and coding primarily python. Trying to explore things everyday. ",
      exploreWork: "Explore selected work",
      sendEmail: "Send an email",
      portrait: "Portrait of Dewa",
      available: "Available",
      timezone: "UTC + 8 (WITA - Central Indonesia Time)",
      basedIn: "Based in",
      profileData: "Profile data",
    },
    about: {
      eyebrow: "About",
      title: "Engineering with intent.",
      photoLabel: "profile.photo",
      paragraphs: [
        "I am Dewa. I really like technology and the internet as a whole. I have been exploring the internet from an early age and remain curious about how digital products work.",
        "I enjoy learning by building, experimenting, and improving practical software that can be useful to others.",
      ],
      statLabels: ["Projects shipped", "Core technologies", "Years learning"],
    },
    skills: {
      eyebrow: "Capabilities",
      title: "Tools From Time to Time.",
      description:
        "Tools used from the early days of coding up until today. Always looking for more things to learn.",
      groupTitles: ["Languages", "Frameworks", "Tools"],
    },
    projects: {
      eyebrow: "Selected work",
      title: "Selective works.",
      description:
        "A selection of product-focused work spanning interface design, application architecture, and production delivery.",
      preview: "Preview",
      previewEyebrow: "Project preview",
      closePreview: "Close project preview",
      previousImage: "Show previous project image",
      nextImage: "Show next project image",
      chooseImage: "Choose project image",
      showImage: "Show project image",
      imageAlt: "website preview",
    },
    learning: {
      eyebrow: "Learning Path",
      title: "Learning Paths.",
      mapLabel: "View on Google Maps",
      items: [
        {
          period: "Ongoing",
          degree: "Software and Game Development",
          note: "Web programmer, intern, and data engineer",
        },
        {
          period: "2021 - 2024",
          degree: "Student",
          note: "Exploring the internet every day",
        },
      ],
      certificationEyebrow: "Certification",
      certificationTitle: "Certifications.",
      certificationDescription:
        "Completed programs and credentials that support my ongoing development.",
      certificateIssuer: "Certificate of Completion",
      certificateDescription:
        "A certificate recognizing participation and learning in coding and artificial intelligence.",
      viewCertificate: "View Certificate",
      downloadCertificate: "Download Certificate",
    },
    contact: {
      eyebrow: "Start a conversation",
      title: "Contact and Social Media Links",
      credit: "Designed and built by Dewa",
    },
    pdf: {
      cvEyebrow: "Curriculum Vitae",
      downloadCv: "Download CV",
      close: "Close document preview",
    },
  },
  id: {
    skipToContent: "Lewati ke konten",
    navigation: {
      about: "Tentang",
      skills: "Keahlian",
      work: "Proyek",
      learningPath: "Jalur Belajar",
      contact: "Hubungi Saya",
      language: "Bahasa",
      switchLanguage: "Ganti bahasa ke Inggris",
      backToTop: "Kembali ke atas",
      primaryNavigation: "Navigasi utama",
    },
    hero: {
      role: "Pengembang Full-stack",
      location: "Samarinda, Indonesia",
      availability: "Sedang menjalani magang",
      intro:
        "Seorang pelajar yang tertarik dengan internet dan koding terutama python. Mencoba hal baru setiap hari.",
      exploreWork: "Lihat proyek pilihan",
      sendEmail: "Kirim email",
      portrait: "Potret Dewa",
      available: "Tersedia",
      timezone: "UTC + 8 (WITA - Waktu Indonesia Tengah)",
      basedIn: "Berdomisili di",
      profileData: "Data profil",
    },
    about: {
      eyebrow: "Tentang",
      title: "Membangun dengan tujuan.",
      photoLabel: "foto.profil",
      paragraphs: [
        "Saya Dewa. Saya sangat menyukai teknologi dan internet secara keseluruhan. Sejak kecil saya telah menjelajahi internet dan selalu penasaran dengan cara kerja produk digital.",
        "Saya senang belajar melalui proses membangun, bereksperimen, dan menyempurnakan perangkat lunak praktis yang dapat berguna bagi orang lain.",
      ],
      statLabels: ["Proyek selesai", "Teknologi utama", "Tahun belajar"],
    },
    skills: {
      eyebrow: "Kemampuan",
      title: "Perkembangan Perangkat.",
      description:
        "Perangkat yang digunakan sejak awal belajar pemrograman hingga sekarang. Selalu mencari hal baru untuk dipelajari.",
      groupTitles: ["Bahasa", "Framework", "Perangkat"],
    },
    projects: {
      eyebrow: "Proyek pilihan",
      title: "Karya Pilihan.",
      description:
        "Pilihan proyek berorientasi produk yang mencakup desain antarmuka, arsitektur aplikasi, dan implementasi produksi.",
      preview: "Pratinjau",
      previewEyebrow: "Pratinjau proyek",
      closePreview: "Tutup pratinjau proyek",
      previousImage: "Tampilkan gambar proyek sebelumnya",
      nextImage: "Tampilkan gambar proyek berikutnya",
      chooseImage: "Pilih gambar proyek",
      showImage: "Tampilkan gambar proyek",
      imageAlt: "pratinjau situs",
    },
    learning: {
      eyebrow: "Jalur Belajar",
      title: "Jalur Belajar.",
      mapLabel: "Lihat di Google Maps",
      items: [
        {
          period: "Berlangsung",
          degree: "Pengembangan Perangkat Lunak dan Gim",
          note: "Programmer web, peserta magang, dan data engineer",
        },
        {
          period: "2021 - 2024",
          degree: "Pelajar",
          note: "Menjelajahi internet setiap hari",
        },
      ],
      certificationEyebrow: "Sertifikasi",
      certificationTitle: "Sertifikasi.",
      certificationDescription:
        "Program dan kredensial yang telah diselesaikan untuk mendukung perkembangan kemampuan saya.",
      certificateIssuer: "Sertifikat Penyelesaian",
      certificateDescription:
        "Sertifikat yang mengakui partisipasi dan pembelajaran dalam bidang koding dan kecerdasan artifisial.",
      viewCertificate: "Lihat Sertifikat",
      downloadCertificate: "Unduh Sertifikat",
    },
    contact: {
      eyebrow: "Mulai percakapan",
      title: "Kontak dan Tautan Media Sosial",
      credit: "Dirancang dan dibuat oleh Dewa",
    },
    pdf: {
      cvEyebrow: "Daftar Riwayat Hidup",
      downloadCv: "Unduh CV",
      close: "Tutup pratinjau dokumen",
    },
  },
} as const;

type Dictionary = (typeof translations)[Locale];

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const localeStorageKey = "portfolio-locale";
const localeChangeEvent = "portfolio-locale-change";

function getLocaleSnapshot(): Locale {
  const savedLocale = window.localStorage.getItem(localeStorageKey);
  return savedLocale === "id" ? "id" : "en";
}

function subscribeToLocale(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(localeChangeEvent, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(localeChangeEvent, callback);
  };
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore<Locale>(subscribeToLocale, getLocaleSnapshot, () => "en");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    window.localStorage.setItem(localeStorageKey, nextLocale);
    window.dispatchEvent(new Event(localeChangeEvent));
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
