export function formatYear(year?: number) {
  if (!year) return "—";
  return String(year);
}

export function formatBorough(borough?: string) {
  return borough || "—";
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}