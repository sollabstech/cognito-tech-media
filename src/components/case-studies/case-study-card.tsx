import type { CaseStudy } from "@/lib/case-studies";
import { compactNum, fmtDate, monthsBetween } from "@/lib/format";
import { BrandMark } from "@/components/portfolio/brand-mark";

function Verified({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Verified">
      <path fill="#3897f0" d="m23 12-2.4-2.8.3-3.7-3.6-.8L15.4 1 12 2.5 8.6 1 6.7 4.7l-3.6.8.3 3.7L1 12l2.4 2.8-.3 3.7 3.6.8L8.6 23 12 21.5 15.4 23l1.9-3.7 3.6-.8-.3-3.7z" />
      <path fill="#fff" d="m10.6 15.6-2.9-2.9 1.3-1.3 1.6 1.6 4-4L16 10.3z" />
    </svg>
  );
}

export function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const ongoing = cs.status === "ongoing";
  const months = monthsBetween(cs.startedAt, ongoing ? new Date().toISOString() : cs.completedAt);
  const ratio = cs.before > 0 ? cs.after / cs.before : cs.after;
  const gained = cs.after - cs.before;

  const timeline: { label: string; date: string }[] = [
    { label: "Client joined", date: cs.joinedAt },
    { label: "Project started", date: cs.startedAt },
    { label: ongoing ? "Ongoing" : "Completed", date: cs.completedAt },
  ];

  return (
    <article className="card-surface flex flex-col rounded-3xl p-6 sm:p-8">
      {/* header */}
      <div className="flex items-start gap-3.5">
        <BrandMark
          client={{ name: cs.client, logo: cs.logo, brandColor: cs.brandColor }}
          className="h-12 w-12"
        />
        <div className="min-w-0 flex-1">
          <h3 className="flex flex-wrap items-center gap-1.5 font-display text-lg font-bold text-white">
            {cs.client}
            {cs.verified && <Verified className="h-3.5 w-3.5" />}
          </h3>
          <p className="text-xs text-white/45">
            {cs.handle ? `@${cs.handle} · ` : ""}
            {cs.industry}
          </p>
        </div>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            ongoing ? "bg-brand-500/15 text-brand-200" : "bg-white/8 text-white/60"
          }`}
        >
          {ongoing && (
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
            </span>
          )}
          {ongoing ? "Ongoing" : "Completed"}
        </span>
      </div>

      {/* growth headline */}
      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-wider text-white/40">Before</span>
            <div className="font-display text-lg font-bold text-white/50 tabular-nums">
              {compactNum(cs.before)}
            </div>
          </div>
          <svg
            viewBox="0 0 24 24"
            className="mb-1.5 h-4 w-9 shrink-0 text-white/25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="text-right">
            <span className="text-[11px] font-medium uppercase tracking-wider text-brand-300">After</span>
            <div className="bg-gradient-to-r from-white to-brand-200 bg-clip-text font-display text-[2rem] font-black leading-none tabular-nums text-transparent sm:text-[2.5rem]">
              {compactNum(cs.after)}
            </div>
          </div>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
        </div>
        <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-brand-500/15 px-2 py-0.5 font-bold text-brand-200">
            {cs.before > 0 && ratio >= 20 ? `×${compactNum(Math.round(ratio))}` : `+${compactNum(gained)}`}
          </span>
          <span className="text-white/45">
            {cs.metricLabel} · {months} month{months === 1 ? "" : "s"}
          </span>
        </div>
      </div>

      {/* timeline */}
      <div className="mt-5">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-white/40">Timeline</p>
        <div className="relative">
          <div className="absolute left-[16.66%] right-[16.66%] top-1 h-px bg-white/12" />
          <div className="relative grid grid-cols-3 gap-2 text-center">
            {timeline.map((t) => (
              <div key={t.label}>
                <span className="mx-auto block h-2 w-2 rounded-full bg-brand-400 ring-4 ring-brand-400/15" />
                <p className="mt-2 text-[11px] font-semibold text-white/70">{t.label}</p>
                <p className="text-[11px] text-white/40">{t.date ? fmtDate(t.date) : "—"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* what we did */}
      <p className="mt-5 text-sm leading-relaxed text-white/60">{cs.summary}</p>

      {/* work handled */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {cs.workHandled.map((w) => (
          <div key={w.area}>
            <p className="text-[11px] font-medium uppercase tracking-wider text-white/40">{w.area}</p>
            <ul className="mt-2 space-y-1.5">
              {w.items.map((it) => (
                <li key={it} className="flex gap-2 text-sm leading-snug text-white/70">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* services */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {cs.services.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/60"
          >
            {s}
          </span>
        ))}
      </div>

      {/* results */}
      <div className="mt-5 rounded-2xl border border-brand-500/20 bg-brand-500/[0.06] p-4">
        <p className="text-[11px] font-medium uppercase tracking-wider text-brand-300">Results</p>
        <ul className="mt-2 space-y-1.5">
          {cs.results.map((r) => (
            <li key={r} className="flex gap-2 text-sm leading-snug text-white/80">
              <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" fill="none">
                <path
                  d="m4 10.5 4 4 8-9"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {r}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
