import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { BuildingCard } from "@/components/BuildingCard";
import { MotionReveal } from "@/components/MotionReveal";
import { allBuildings } from "@/.contentlayer/generated";

export default function HomePage() {
  const latest = [...allBuildings].sort((a, b) => (b.year ?? 0) - (a.year ?? 0)).slice(0, 6);

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <Image src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed8?q=80&w=1800&auto=format&fit=crop" alt="Barbican" fill className="object-cover grayscale contrast-125" priority />
        </div>
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-24 md:pb-40">
          <div className="kicker mb-3">Index</div>
          <h1 className="font-[var(--font-heading)] text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
            NEW BRUTALISM <span className="text-[var(--accent)]">/</span> LDN
          </h1>
        </div>
      </section>

      <Section className="rule">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Barbican Estate",
              img: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed8?q=80&w=1200&auto=format&fit=crop",
              href: "/buildings/barbican-estate",
            },
            {
              title: "National Theatre",
              img: "https://images.unsplash.com/photo-1460388052839-a52677720738?q=80&w=1200&auto=format&fit=crop",
              href: "/buildings/national-theatre",
            },
            {
              title: "Alexandra Road Estate",
              img: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f8?q=80&w=1200&auto=format&fit=crop",
              href: "/buildings/alexandra-road-estate",
            },
          ].map((f) => (
            <Link key={f.href} href={f.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={f.img} alt={f.title} fill className="object-cover grayscale" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="font-semibold">{f.title}</div>
                <div className="text-[var(--muted)] group-hover:text-[var(--accent)]">Explore →</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section kicker="What is Brutalism?" title="Raw concrete. Honest structure." lede="A movement of the mid-20th century defined by exposed materials, strong geometries, and social ambition. In London, it shaped entire districts—from housing to culture.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <p className="text-[var(--paper)]/90">
              Brutalism, from the French ‘béton brut’ (raw concrete), celebrates surface and structure. In the UK it became a language for civic ambition and mass housing. Its legacy is contested, but enduring.
            </p>
            <p className="mt-4 text-[var(--muted)] text-sm">See also: <a href="https://en.wikipedia.org/wiki/Brutalist_architecture" className="underline decoration-[var(--accent)]">Wikipedia</a>, <a href="https://brutalism.online" className="underline decoration-[var(--accent)]">Brutalism Online</a></p>
          </div>
          <div className="md:col-span-1">
            <Image src="https://images.unsplash.com/photo-1503595855962-7605028b30dc?q=80&w=800&auto=format&fit=crop" alt="Concrete detail" width={800} height={800} className="w-full h-auto grayscale" />
          </div>
        </div>
      </Section>

      <Section kicker="Latest Buildings" title="Recently added">
        <MotionReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((b) => (
            <BuildingCard
              key={b._id}
              href={`/buildings/${b.slug}`}
              title={b.title}
              borough={b.borough}
              year={b.year}
              architect={b.architect}
              type={b.buildingType}
              coverImage={b.coverImage}
            />
          ))}
        </MotionReveal>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/buildings" className="underline decoration-[var(--accent)] text-lg">Explore the Index</Link>
          <Link href="/submit" className="underline decoration-[var(--accent)] text-lg">Submit a Building</Link>
        </div>
      </Section>
    </>
  );
}