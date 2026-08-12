import { ArrowIcon } from "@/components/ui/arrow-icon";
import { getBrandIcon } from "@/components/ui/brand-icon";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  return (
    <section className="relative overflow-hidden" id="contact">
      <div aria-hidden="true" className="contact-glow absolute inset-0 -z-10" />
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
          {"// Start a conversation"}
        </p>
        <h2 className="mt-8 max-w-6xl font-mono text-[clamp(3rem,9vw,8rem)] font-semibold uppercase leading-[0.88] tracking-[-0.08em] text-ink">
          Contact and Social Media links
        </h2>
        <a
          className="group mt-12 inline-flex max-w-full items-center gap-4 border-b border-signal pb-3 font-mono text-lg text-ink transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal sm:text-3xl"
          href={`mailto:${portfolio.email}`}
        >
          <span className="truncate">{portfolio.email}</span>
          <ArrowIcon className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
        </a>

        <div className="mt-20 flex flex-col justify-between gap-10 border-t border-line pt-8 md:flex-row md:items-end">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {portfolio.socials.map((social) => {
              const SocialIcon = getBrandIcon(social.icon);

              return (
                <a
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                  href={social.href}
                  key={social.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <SocialIcon aria-hidden="true" className="h-4 w-4 shrink-0" />
                  {social.label}
                  <ArrowIcon className="h-3.5 w-3.5" external />
                </a>
              );
            })}
          </div>
          <p className="font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-muted md:text-right">
            Designed and built by someone
          </p>
        </div>
      </div>
    </section>
  );
}
