"use client";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { PdfPreviewModal } from "@/components/ui/pdf-preview-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { useI18n } from "@/lib/i18n";

export function LearningPath() {
  const { t } = useI18n();

  return (
    <section className="scroll-mt-20 border-b border-line bg-panel/30" id="learning-path">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading eyebrow={t.learning.eyebrow} title={t.learning.title} />
        <div className="pt-4">
          {portfolio.learningPath.map((item, index) => (
            <article
              className="grid gap-4 border-b border-line py-8 md:grid-cols-[1fr_1.4fr_1fr] md:gap-10"
              key={item.degree}
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                {t.learning.items[index].period}
              </p>
              <div>
                <h3 className="font-mono text-xl font-semibold uppercase tracking-[-0.04em] text-ink">
                  {t.learning.items[index].degree}
                </h3>
                <a
                  aria-label={`${t.learning.mapLabel}: ${item.institution}`}
                  className="group mt-2 inline-flex items-center gap-2 text-muted transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                  href={item.mapsUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.institution}
                  <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted md:justify-self-end">
                {t.learning.items[index].note}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-line pt-12 lg:mt-24 lg:pt-16">
          <div className="grid gap-5 border-b border-line pb-8 md:grid-cols-[1fr_2fr] md:items-end">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
              <span aria-hidden="true">{"// "}</span>
              {t.learning.certificationEyebrow}
            </p>
            <div>
              <h2 className="font-mono text-3xl font-semibold uppercase leading-[1.05] tracking-[-0.06em] text-ink sm:text-4xl lg:text-5xl">
                {t.learning.certificationTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                {t.learning.certificationDescription}
              </p>
            </div>
          </div>

          <div className="pt-4">
            {portfolio.certifications.map((certificate) => (
              <article
                className="grid gap-5 border-b border-line py-8 md:grid-cols-[1fr_1.4fr_1fr] md:items-center md:gap-10"
                key={certificate.title}
              >
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                  {t.learning.certificateIssuer}
                </p>
                <div>
                  <h3 className="font-mono text-xl font-semibold uppercase tracking-[-0.04em] text-ink">
                    {certificate.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                    {t.learning.certificateDescription}
                  </p>
                </div>
                <div className="md:justify-self-end">
                  <PdfPreviewModal
                    documentTitle={certificate.title}
                    downloadLabel={t.learning.downloadCertificate}
                    eyebrow={t.learning.certificationEyebrow}
                    file={certificate.file}
                    triggerLabel={t.learning.viewCertificate}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
