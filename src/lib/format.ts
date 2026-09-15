/** 1_240_000 -> "1.2M" · 128_003 -> "128K" · 84_240 -> "84.2K" · 1_204 -> "1,204" */
export function compactNum(n: number): string {
  if (!Number.isFinite(n)) return "0";
  const trim = (s: string) => (s.endsWith(".0") ? s.slice(0, -2) : s);
  if (Math.abs(n) >= 1_000_000) return trim((n / 1_000_000).toFixed(1)) + "M";
  if (Math.abs(n) >= 10_000) return trim((n / 1_000).toFixed(1)) + "K";
  return Math.round(n).toLocaleString("en-IN");
}

/** "2024-01-08" -> "08 Jan 2024" */
export function fmtDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

/** Whole months between two ISO dates (min 1). */
export function monthsBetween(a: string, b: string): number {
  if (!a || !b) return 0;
  const d1 = new Date(a).getTime();
  const d2 = new Date(b).getTime();
  if (Number.isNaN(d1) || Number.isNaN(d2)) return 0;
  return Math.max(1, Math.round((d2 - d1) / (1000 * 60 * 60 * 24 * 30.44)));
}
