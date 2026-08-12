import { ArrowIcon } from "@/components/ui/arrow-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";

export function Education() {
  return (
    <section className="scroll-mt-20 border-b border-line bg-panel/30" id="education">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading eyebrow="Education" title="Learning Paths." />
        <div className="pt-4">
          {portfolio.education.map((item) => (
            <article
              className="grid gap-4 border-b border-line py-8 md:grid-cols-[1fr_1.4fr_1fr] md:gap-10"
              key={item.degree}
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                {item.period}
              </p>
              <div>
                <h3 className="font-mono text-xl font-semibold uppercase tracking-[-0.04em] text-ink">
                  {item.degree}
                </h3>
                <a
                  aria-label={`View ${item.institution} on Google Maps`}
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
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
