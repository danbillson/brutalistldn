export type BuildingMetaInfo = {
  architect?: string;
  year?: number;
  borough?: string;
  status?: string;
  listing?: string;
  materials?: string[];
};

export function BuildingMeta({ meta }: { meta: BuildingMetaInfo }) {
  const rows = [
    ["Architect", meta.architect ?? "—"],
    ["Year", meta.year ? String(meta.year) : "—"],
    ["Borough", meta.borough ?? "—"],
    ["Status", meta.status ?? "—"],
    ["Materials", meta.materials?.join(", ") ?? "—"],
  ] as const;

  return (
    <dl className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm">
      {rows.map(([label, value]) => (
        <div key={label} className="flex flex-col">
          <dt className="kicker mb-1">{label}</dt>
          <dd className="mono text-[var(--paper)]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}