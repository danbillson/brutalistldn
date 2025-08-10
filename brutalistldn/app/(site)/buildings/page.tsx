"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { allBuildings, type Building } from "@/.contentlayer/generated";
import { Section } from "@/components/Section";
import { BuildingCard } from "@/components/BuildingCard";
import { InlineRule } from "@/components/InlineRule";

const typeOptions = ["Residential","Civic","Culture","Education","Infrastructure"] as const;

export default function BuildingsIndexPage() {
  const [query, setQuery] = useState("");
  const [borough, setBorough] = useState("All");
  const [type, setType] = useState<string>("All");
  const [decade, setDecade] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [view, setView] = useState<"list" | "grid">("list");

  const boroughs = useMemo(() => Array.from(new Set(allBuildings.map((b: Building) => b.borough))).sort(), []);
  const decades = useMemo(() => Array.from(new Set(allBuildings.map((b: Building) => (b.year ? `${Math.floor(b.year / 10) * 10}s` : "Unknown")))).sort(), []);

  const filtered = useMemo(() => {
    let list = [...allBuildings] as Building[];
    if (query) list = list.filter((b) => b.title.toLowerCase().includes(query.toLowerCase()));
    if (borough !== "All") list = list.filter((b) => b.borough === borough);
    if (type !== "All") list = list.filter((b) => b.buildingType === type);
    if (decade !== "All") list = list.filter((b) => (b.year ? `${Math.floor(b.year / 10) * 10}s` : "Unknown") === decade);

    switch (sort) {
      case "A–Z":
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Borough":
        list.sort((a, b) => a.borough.localeCompare(b.borough));
        break;
      case "Decade":
        list.sort((a, b) => (a.year ?? 0) - (b.year ?? 0));
        break;
      default:
        list.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
    }
    return list;
  }, [query, borough, type, decade, sort]);

  return (
    <>
      <Section kicker="Index" title="Buildings">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <input placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} className="bg-transparent border border-[var(--hairline)] rounded px-2 py-1" />
          <select value={borough} onChange={(e) => setBorough(e.target.value)} className="bg-transparent border border-[var(--hairline)] rounded px-2 py-1">
            <option>All</option>
            {boroughs.map((b) => <option key={b}>{b}</option>)}
          </select>
          <select value={type} onChange={(e) => setType(e.target.value)} className="bg-transparent border border-[var(--hairline)] rounded px-2 py-1">
            <option>All</option>
            {typeOptions.map((t) => <option key={t}>{t}</option>)}
          </select>
          <select value={decade} onChange={(e) => setDecade(e.target.value)} className="bg-transparent border border-[var(--hairline)] rounded px-2 py-1">
            <option>All</option>
            {decades.map((d) => <option key={d}>{d}</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-transparent border border-[var(--hairline)] rounded px-2 py-1">
            {['Newest','A–Z','Borough','Decade'].map((s) => <option key={s}>{s}</option>)}
          </select>
          <div className="ml-auto flex items-center gap-2">
            <button onClick={() => setView('list')} className={`px-2 py-1 text-xs border ${view==='list' ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-[var(--hairline)]'}`}>List</button>
            <button onClick={() => setView('grid')} className={`px-2 py-1 text-xs border ${view==='grid' ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-[var(--hairline)]'}`}>Grid</button>
          </div>
        </div>
      </Section>

      {view === 'list' ? (
        <Section>
          <div className="divide-y divide-[var(--hairline)]">
            {filtered.map((b) => (
              <Link key={b._id} href={`/buildings/${b.slug}`} className="group block py-3">
                <div className="flex items-center gap-4">
                  <div className="w-1/2 md:w-1/3 font-medium">{b.title}</div>
                  <div className="hidden md:block w-1/6 text-[var(--muted)]">{b.borough}</div>
                  <div className="hidden md:block w-1/6 text-[var(--muted)]">{b.architect ?? '—'}</div>
                  <div className="w-1/6 md:w-[10%] mono text-[var(--muted)]">{b.year ?? '—'}</div>
                </div>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <InlineRule />
                </div>
              </Link>
            ))}
          </div>
        </Section>
      ) : (
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((b) => (
              <BuildingCard key={b._id} href={`/buildings/${b.slug}`} title={b.title} borough={b.borough} year={b.year} architect={b.architect} type={b.buildingType} coverImage={b.coverImage} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}