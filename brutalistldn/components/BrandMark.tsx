import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 font-[var(--font-heading)]">
      <span className="text-xl font-bold tracking-tight">brutalistldn</span>
      <span className="inline-block w-2 h-2 bg-[var(--accent)]" aria-hidden />
    </Link>
  );
}