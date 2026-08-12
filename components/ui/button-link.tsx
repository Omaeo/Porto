import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/arrow-icon";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  external = false,
  ...props
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "border-signal bg-signal text-canvas hover:bg-transparent hover:text-signal"
      : "border-line bg-panel text-ink hover:border-signal hover:text-signal";

  return (
    <a
      className={`group inline-flex min-h-12 items-center justify-center gap-3 border px-5 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal ${styles} ${className}`}
      {...props}
    >
      {children}
      <ArrowIcon
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        external={external}
      />
    </a>
  );
}
