import { cn } from "@/lib/formatters";

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "prose prose-invert max-w-none",
        "prose-headings:font-[var(--font-heading)] prose-headings:tracking-tight prose-headings:text-[var(--paper)]",
        "prose-p:text-[var(--paper)]/90 prose-a:text-[var(--paper)]",
        "prose-a:underline decoration-[var(--accent)]/50 decoration-1 underline-offset-2 hover:decoration-[var(--accent)]",
        "prose-hr:border-[0.5px] prose-hr:border-[var(--hairline)]",
        "prose-strong:text-[var(--paper)]",
        className
      )}
    >
      {children}
    </div>
  );
}