import { navigation, portfolio } from "@/data/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          aria-label="Back to top"
          className="flex items-center gap-3 font-mono text-sm font-bold tracking-[-0.04em] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
          href="#top"
        >
          <span className="grid h-8 w-8 place-items-center border border-signal text-[10px] text-signal">
            {portfolio.shortName}
          </span>
          <span className="hidden sm:inline">PORTFOLIO_V1</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
          href="#contact"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
