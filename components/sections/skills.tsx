import { SectionHeading } from "@/components/ui/section-heading";
import { getBrandIcon } from "@/components/ui/brand-icon";
import { Tag } from "@/components/ui/tag";
import { portfolio } from "@/data/portfolio";

export function Skills() {
  return (
    <section className="scroll-mt-20 border-b border-line bg-panel/30" id="skills">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          description="Tools used from the early days of coding up until the current days. Looking for more things to learn."
          eyebrow="Capabilities"
          title="Tools From Time to Time."
        />
        <div className="grid border-l border-t border-line lg:grid-cols-3">
          {portfolio.skills.map((group) => (
            <article
              className="group min-h-72 border-b border-r border-line bg-panel p-6 transition-colors hover:bg-[#131820] sm:p-8"
              key={group.title}
            >
              <div className="flex items-start justify-between">
                <h3 className="font-mono text-xl font-semibold uppercase tracking-[-0.04em] text-ink">
                  {group.title}
                </h3>
                <span className="font-mono text-xs text-signal">[{group.index}]</span>
              </div>
              <div className="mt-16 flex flex-wrap gap-2 ">
                {group.items.map((item) => (
                  <Tag icon={getBrandIcon(item)} interactive key={item}>
                    {item}
                  </Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
