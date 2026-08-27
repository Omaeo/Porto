"use client";

import { useI18n, type Locale } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const nextLocale: Locale = locale === "en" ? "id" : "en";

  return (
    <button
      aria-label={t.navigation.switchLanguage}
      className="inline-flex h-8 items-center gap-1 border border-line px-2 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
      onClick={() => setLocale(nextLocale)}
      title={t.navigation.language}
      type="button"
    >
      <span className={locale === "en" ? "text-signal" : undefined}>EN</span>
      <span aria-hidden="true">/</span>
      <span className={locale === "id" ? "text-signal" : undefined}>ID</span>
    </button>
  );
}
