"use client";

import { motion, useReducedMotion } from "framer-motion";
import { compactNum } from "@/lib/format";
import { useLiveNumber } from "@/hooks/use-live-number";

/** Before → after follower growth, shown as the hero stat of a client card. */
export function GrowthMeter({
  before,
  after,
  timeframe,
  active,
}: {
  before: number;
  after: number;
  timeframe: string;
  active: boolean;
}) {
  const reduce = useReducedMotion();
  const shown = useLiveNumber(after, active, { countMs: 1400 });
  const ratio = before > 0 ? after / before : after;
  const gained = after - before;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
      <div className="flex items-end justify-between gap-3">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-white/40">Before</span>
          <div className="font-display text-lg font-bold text-white/50 tabular-nums">
            {compactNum(before)}
          </div>
        </div>
        <svg viewBox="0 0 24 24" className="mb-1.5 h-4 w-8 shrink-0 text-white/25" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="text-right">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-300">Now</span>
          <div className="bg-gradient-to-r from-white to-brand-200 bg-clip-text font-display text-[1.9rem] font-black leading-none tabular-nums text-transparent sm:text-[2.25rem]">
            {compactNum(shown)}
          </div>
        </div>
      </div>

      {/* leap bar */}
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
          initial={reduce ? { width: "100%" } : { width: "6%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        />
      </div>

      <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-brand-500/15 px-2 py-0.5 font-bold text-brand-200">
          {before > 0 && ratio >= 20 ? `×${compactNum(Math.round(ratio))}` : `+${compactNum(gained)}`}
        </span>
        <span className="text-white/45">
          +{compactNum(gained)} followers {timeframe}
        </span>
      </div>
    </div>
  );
}
