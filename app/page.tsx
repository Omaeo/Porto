"use client";

import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { LearningPath } from "@/components/sections/learning-path";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      <a
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-signal px-4 py-3 font-mono text-xs font-semibold uppercase text-canvas transition-transform focus:translate-y-0"
        href="#main-content"
      >
        {t.skipToContent}
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningPath />
        <Contact />
      </main>
    </>
  );
}
