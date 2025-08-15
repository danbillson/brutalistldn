import { cn } from "@/lib/formatters";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--hairline)] px-2 py-0.5 text-xs text-[var(--muted)]",
        "hover:text-[var(--paper)] hover:underline decoration-[var(--accent)] underline-offset-2",
        className
      )}
    >
      {children}
    </span>
  );
}