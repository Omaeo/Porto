import type { ReactNode } from "react";
import type { IconType } from "react-icons";

type TagProps = {
  children: ReactNode;
  icon?: IconType;
  interactive?: boolean;
};

export function Tag({ children, icon: Icon, interactive = false }: TagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 border border-line bg-canvas/40 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors group-hover:border-signal/40 group-hover:text-ink ${
        interactive
          ? "hover:!border-signal hover:bg-panel hover:!text-signal hover:shadow-signal"
          : ""
      }`}
    >
      {Icon ? <Icon aria-hidden="true" className="h-3.5 w-3.5 shrink-0" /> : null}
      {children}
    </span>
  );
}
