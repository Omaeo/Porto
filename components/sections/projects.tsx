import { getBrandIcon } from "@/components/ui/brand-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { portfolio } from "@/data/portfolio";

export function Projects() {
  return (
    <section className="scroll-mt-20 border-b border-line" id="work">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          description="A selection of product-focused work spanning interface design, application architecture, and production delivery."
          eyebrow="Selected work"
          title="Selective works."
        />

        <div>
          {portfolio.projects.map((project) => (
            <article
              className="group grid gap-8 border-b border-line py-10 transition-colors lg:grid-cols-[5rem_1.4fr_1fr] lg:items-center lg:gap-12 lg:py-14"
              key={project.number}
            >
              <span className="font-mono text-xs text-signal">[{project.number}]</span>
              <div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <h3 className="font-mono text-2xl font-semibold uppercase tracking-[-0.05em] text-ink transition-colors group-hover:text-signal sm:text-4xl">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {project.year}
                  </span>
                </div>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag icon={getBrandIcon(tag)} key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
              <div className="lg:justify-self-end lg:text-right">
                <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {project.status}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
