import { allBuildings, type Building } from "@/.contentlayer/generated";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://brutalistldn.vercel.app";
  const routes: MetadataRoute.Sitemap = [
    "",
    "/buildings",
    "/about",
    "/submit",
  ].map((path) => ({ url: `${base}${path}`, changeFrequency: "weekly" as const, priority: 0.7 }));

  const buildingRoutes: MetadataRoute.Sitemap = allBuildings.map((b: Building) => ({
    url: `${base}/buildings/${b.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...buildingRoutes];
}