"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();

  return (
    <section className="scroll-mt-20 border-b border-line" id="about">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
        <div className="grid gap-12 pt-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <div className="relative aspect-square max-w-xs border border-line bg-panel p-5">
              <div aria-hidden="true" className="absolute -right-2 -top-2 h-5 w-5 border-r border-t border-signal" />
              <div aria-hidden="true" className="absolute -bottom-2 -left-2 h-5 w-5 border-b border-l border-signal" />
              <div className="grid h-full place-items-center border border-dashed border-line bg-canvas">
                <div className="text-center">
                  <span className="font-mono text-7xl font-semibold tracking-[-0.1em] text-outline">
                    {portfolio.shortName}
                  </span>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    OmZeroo / Omoe / Omaeo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-6 text-xl leading-9 text-muted sm:text-2xl sm:leading-10">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <dl className="mt-12 grid border-l border-t border-line sm:grid-cols-3">
              {portfolio.stats.map((stat, index) => (
                <div className="border-b border-r border-line p-5" key={stat.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {t.about.statLabels[index]}
                  </dt>
                  <dd className="mt-3 font-mono text-2xl font-semibold text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
