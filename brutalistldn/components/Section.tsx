type Props = {
  id?: string;
  kicker?: string;
  title?: string;
  lede?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Section({ id, kicker, title, lede, children, className }: Props) {
  return (
    <section id={id} className={"py-12 md:py-16 " + (className ?? "") }>
      <div className="mx-auto max-w-6xl px-4">
        {(kicker || title || lede) && (
          <header className="mb-8">
            {kicker && <div className="kicker mb-2">{kicker}</div>}
            {title && <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold tracking-tight text-[var(--paper)]">{title}</h2>}
            {lede && <p className="mt-3 max-w-2xl text-[var(--muted)]">{lede}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}