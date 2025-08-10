import Link from "next/link";

const links = [
  { href: "/buildings", label: "Buildings" },
  { href: "/about", label: "About" },
  { href: "/submit", label: "Submit" },
  { href: "https://vercel.com", label: "Deploy" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--hairline)]/100">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-[var(--muted)]">
        <nav className="flex flex-wrap items-center gap-3">
          {links.map((l, idx) => (
            <div key={l.href} className="flex items-center gap-3">
              {idx > 0 && <span className="inline-block w-1 h-1 bg-[var(--accent)] rounded-full" />}
              {l.href.startsWith("http") ? (
                <a href={l.href} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
                  {l.label}
                </a>
              ) : (
                <Link href={l.href} className="hover:text-[var(--accent)]">
                  {l.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-4">© {new Date().getFullYear()} brutalistldn</div>
      </div>
    </footer>
  );
}