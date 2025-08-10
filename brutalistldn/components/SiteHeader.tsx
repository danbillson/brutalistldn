"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

const nav = [
  { href: "/buildings", label: "Buildings" },
  { href: "/map", label: "Map" },
  { href: "/about", label: "About" },
  { href: "/submit", label: "Submit" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg)]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-14">
          <BrandMark />
          <nav className="flex items-center gap-6 text-sm">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[var(--accent)]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div
        className="transition-all duration-200 ease-out"
        style={{
          height: scrolled ? 1 : 0,
          background: "var(--hairline)",
        }}
      />
    </header>
  );
}