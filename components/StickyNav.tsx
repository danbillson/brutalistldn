import Link from "next/link";

export function StickyNav({ prev, next }: { prev?: { href: string; label: string }; next?: { href: string; label: string } }) {
  if (!prev && !next) return null;
  return (
    <nav className="sticky bottom-4 z-30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between text-sm">
          <div>
            {prev && (
              <Link href={prev.href} className="underline decoration-[var(--accent)] hover:text-[var(--accent)]">
                ← {prev.label}
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link href={next.href} className="underline decoration-[var(--accent)] hover:text-[var(--accent)]">
                {next.label} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}