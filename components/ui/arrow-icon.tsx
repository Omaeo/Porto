type ArrowIconProps = {
  className?: string;
  external?: boolean;
};

export function ArrowIcon({ className = "", external = false }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 16 16"
    >
      {external ? (
        <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.5" />
      ) : (
        <path d="M2 8h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
      )}
    </svg>
  );
}
