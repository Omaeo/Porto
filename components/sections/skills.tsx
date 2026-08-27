"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { getBrandIcon } from "@/components/ui/brand-icon";
import { Tag } from "@/components/ui/tag";
import { portfolio } from "@/data/portfolio";
import { useI18n } from "@/lib/i18n";

export function Skills() {
  const { t } = useI18n();

  return (
    <section className="scroll-mt-20 border-b border-line bg-panel/30" id="skills">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          description={t.skills.description}
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
        />
        <div className="grid border-l border-t border-line lg:grid-cols-3">
          {portfolio.skills.map((group, index) => (
            <article
              className="group min-h-72 border-b border-r border-line bg-panel p-6 transition-colors hover:bg-[#131820] sm:p-8"
              key={group.title}
            >
              <div className="flex items-start justify-between">
                <h3 className="font-mono text-xl font-semibold uppercase tracking-[-0.04em] text-ink">
                  {t.skills.groupTitles[index]}
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
