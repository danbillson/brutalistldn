import Image from "next/image";
import Link from "next/link";
import { Tag } from "./Tag";

export type BuildingCardProps = {
  href: string;
  title: string;
  borough?: string;
  year?: number;
  architect?: string;
  type?: string;
  coverImage: string;
};

export function BuildingCard({ href, title, borough, year, architect, type, coverImage }: BuildingCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--ink)]">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover grayscale contrast-125 group-hover:scale-[1.02] transition-transform duration-300 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          <div className="flex items-center justify-between text-sm text-white/90">
            <span className="font-semibold">{title}</span>
            <span className="mono">{borough} {year ? `• ${year}` : ""}</span>
          </div>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-3 text-xs text-[var(--muted)]">
        {architect && <span className="mono">{architect}</span>}
        {type && <Tag>{type}</Tag>}
      </div>
    </Link>
  );
}