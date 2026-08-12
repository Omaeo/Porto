import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const nameParts = portfolio.name.trim().split(/\s+/);

  return (
    <section
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden border-b border-line"
      id="top"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-[1440px] px-5 sm:px-8 lg:grid-cols-[1fr_21rem] lg:px-12">
        <div className="flex flex-col justify-center py-20 lg:border-r lg:border-line lg:pr-12">
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            {portfolio.availability}
          </div>

          <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-muted">
            {portfolio.role} / {portfolio.location}
          </p>
          <h1 className="max-w-5xl font-mono text-[clamp(3.5rem,10vw,9.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.085em] text-ink">
            {nameParts.map((part, index) => (
              <span className="block" key={`${part}-${index}`}>
                {index === 1 ? <span className="text-outline">{part}</span> : part}
                {index === nameParts.length - 1 ? (
                  <span aria-hidden="true" className="cursor-blink text-signal">
                    _
                  </span>
                ) : null}
              </span>
            ))}
          </h1>
          <p className="mt-9 max-w-xl text-lg leading-8 text-muted sm:text-xl">
            {portfolio.intro}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#work">Explore selected work</ButtonLink>
            <ButtonLink href={`mailto:${portfolio.email}`} variant="secondary">
              Send an email
            </ButtonLink>
          </div>
        </div>

        <aside className="flex flex-col justify-center gap-5 border-t border-line py-8 lg:border-t-0 lg:pl-8">
          <figure className="group relative mx-auto w-full max-w-md border border-line bg-panel p-2 shadow-signal lg:max-w-none">
            <span aria-hidden="true" className="absolute -left-px -top-px z-10 h-6 w-6 border-l-2 border-t-2 border-signal" />
            <span aria-hidden="true" className="absolute -bottom-px -right-px z-10 h-6 w-6 border-b-2 border-r-2 border-signal" />
            <div className="relative aspect-[4/5] overflow-hidden bg-canvas">
              <Image
                alt={portfolio.heroImageAlt}
                className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                fill
                priority
                sizes="(max-width: 1023px) 448px, 304px"
                src={portfolio.heroImage}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-signal/5 mix-blend-color" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-canvas via-canvas/80 to-transparent px-4 pb-4 pt-16">
                <figcaption className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
                  Portrait / 001
                </figcaption>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-signal">
                  Available
                </span>
              </div>
            </div>
          </figure>

          <div className="flex items-center justify-between border-x border-line px-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
            <span>UTC + 8 (WITA — Central Indonesia Time). </span>
            <span>Based in {portfolio.location}</span>
          </div>

          <div className="border border-line bg-panel p-4 font-mono text-[11px] leading-5 shadow-signal">
            <div className="mb-4 flex items-center gap-2 border-b border-line pb-3">
              <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
              <span className="h-2 w-2 rounded-full bg-[#ffd166]" />
              <span className="h-2 w-2 rounded-full bg-signal" />
              <span className="ml-auto text-[9px] uppercase tracking-widest text-muted">
                profile.ts
              </span>
            </div>
            <p><span className="text-red">TS2322: Type &apos;string&apos; is not assignable to type &apos;number&apos;.<br></br>
                                          src/utils.ts:18:7<br></br>
                                          18 const age: number = &quot;17&quot;;<br></br>
                                                  ~~~
            </span></p>
          </div>
        </aside>
      </div>
    </section>
  );
}
