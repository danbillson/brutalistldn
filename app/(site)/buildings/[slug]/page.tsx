import Image from "next/image";
import { notFound } from "next/navigation";
import { allBuildings } from "@/.contentlayer/generated";
import { BuildingMeta } from "@/components/BuildingMeta";

export function generateStaticParams() {
  return allBuildings.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: any) {
  const building = allBuildings.find((b) => b.slug === params.slug);
  if (!building) return {} as any;
  return {
    title: building.title,
    description: building.description,
    openGraph: {
      images: [
        { url: `/api/og?title=${encodeURIComponent(building.title)}&subtitle=${encodeURIComponent(building.borough)}` },
      ],
    },
  };
}

export default function BuildingPage({ params }: any) {
  const building = allBuildings.find((b) => b.slug === params.slug);
  if (!building) return notFound();
  const index = allBuildings.findIndex((b) => b.slug === building.slug);
  const prev = allBuildings[index - 1];
  const next = allBuildings[index + 1];

  return (
    <article>
      <div className="relative aspect-[16/9]">
        <Image src={building.coverImage} alt={building.title} fill className="object-cover grayscale" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <header className="mb-6">
          <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl font-bold tracking-tight">{building.title}</h1>
          <p className="text-[var(--muted)]">{building.borough}</p>
        </header>

        <BuildingMeta meta={{ architect: building.architect, year: building.year, borough: building.borough, status: building.status, materials: building.materials }} />

        <p className="mt-6 max-w-2xl text-[var(--paper)]/90">{building.description}</p>

        {building.gallery && building.gallery.length > 0 && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {building.gallery.map((src: string, i: number) => (
              <div key={i} className="relative aspect-[4/3]">
                <Image src={src} alt={`${building.title} ${i + 1}`} fill className="object-cover grayscale" />
              </div>
            ))}
          </div>
        )}

        {building.references && building.references.length > 0 && (
          <div className="mt-10">
            <h3 className="kicker mb-2">References</h3>
            <ul className="list-disc list-inside text-[var(--muted)]">
              {building.references.map((r: string, i: number) => (
                <li key={i}><a href={r} className="underline decoration-[var(--accent)]">{r}</a></li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Prev/Next sticky removed for SSG stability; can be re-enabled later */}
    </article>
  );
}