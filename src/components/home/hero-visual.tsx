"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LogoMark } from "@/components/ui/logo";

/**
 * Hero centrepiece: a frosted-glass frame with the brand orbit, ringed by three
 * floating glass "widget" cards. Kept to two lightweight infinite animations
 * (one ring, the logo bob) — everything else is static so it costs nothing once
 * scrolled past.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[440px]">
      <div className="absolute inset-8 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="glass absolute inset-0 rounded-[2.25rem]">
        <div className="absolute inset-0 rounded-[2.25rem] bg-grid-faint [background-size:26px_26px] opacity-40 [mask-image:radial-gradient(circle_at_50%_50%,#000,transparent_75%)]" />

        <motion.div
          aria-hidden
          className="absolute inset-7 rounded-full border border-dashed border-brand-400/40"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        />
        <div aria-hidden className="absolute inset-16 rounded-full border border-white/10">
          <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent-500 shadow-glow-accent" />
        </div>

        <div className="absolute inset-0 grid place-items-center">
          <motion.div
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <LogoMark className="h-28 w-28 drop-shadow-[0_20px_55px_rgba(79,91,255,0.75)] sm:h-32 sm:w-32" />
          </motion.div>
        </div>
      </div>

      {/* floating widgets — static */}
      <div className="glass absolute -left-6 top-10 w-40 rounded-2xl p-3 sm:-left-10">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
          Organic traffic
        </p>
        <p className="mt-1 font-display text-lg font-bold text-white">
          +182<span className="text-accent-400">%</span>
        </p>
        <svg viewBox="0 0 120 32" className="mt-1 h-6 w-full" fill="none" aria-hidden>
          <path
            d="M2 28 L20 22 L38 24 L56 14 L74 16 L92 6 L118 3"
            stroke="url(#hv-spark)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="hv-spark" x1="0" y1="0" x2="120" y2="0">
              <stop stopColor="#4f5bff" />
              <stop offset="1" stopColor="#ff8a3d" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="glass absolute -right-4 top-1/2 w-44 -translate-y-1/2 rounded-2xl p-3 sm:-right-10">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent-500/20 text-accent-400">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
              <path d="M6 4l10 6-10 6z" />
            </svg>
          </span>
          <p className="text-[11px] font-semibold text-white/80">Rendering film</p>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
        </div>
        <p className="mt-1.5 text-[10px] text-white/40">4K · 00:32</p>
      </div>

      <div className="glass absolute -bottom-4 left-1/2 flex w-40 -translate-x-1/2 items-center gap-3 rounded-2xl p-3">
        <div className="relative h-11 w-11 shrink-0">
          <svg viewBox="0 0 44 44" className="h-full w-full -rotate-90">
            <circle cx="22" cy="22" r="18" stroke="rgba(255,255,255,0.12)" strokeWidth="5" fill="none" />
            <circle
              cx="22"
              cy="22"
              r="18"
              stroke="#4f5bff"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="113"
              strokeDashoffset="17"
            />
          </svg>
          <span className="absolute inset-0 grid place-items-center text-[11px] font-bold text-white">
            92
          </span>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">SEO score</p>
          <p className="text-xs font-semibold text-brand-300">Excellent</p>
        </div>
      </div>
    </div>
  );
}
