"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/ui/logo";

/**
 * Entrance for the copy is pure CSS (`animate-fade-up`) so it paints without
 * waiting for JS/hydration — no blank hero. Framer Motion only drives the
 * decorative ambient motion, which is fine to be JS-gated.
 */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-24 top-[-10%] h-[420px] w-[420px] rounded-full bg-brand-600/30 blur-[120px]"
          animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-10%] top-[18%] h-[360px] w-[360px] rounded-full bg-accent-500/20 blur-[120px]"
          animate={reduce ? undefined : { x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="shell grid items-center gap-12 pb-16 pt-12 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-24">
        {/* ---- Copy — mobile order: eyebrow, h1, paragraph, primary, secondary, then visual ---- */}
        <div className="flex flex-col items-start">
          <p className="eyebrow animate-fade-up [animation-delay:0ms]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Build. Grow. Create.
          </p>

          <h1 className="mt-5 text-display-1 font-bold text-white animate-fade-up [animation-delay:80ms]">
            Websites, marketing &amp; video that{" "}
            <span className="text-gradient">move the numbers</span>.
          </h1>

          <p className="mt-5 max-w-xl text-body-lg text-white/60 animate-fade-up [animation-delay:160ms]">
            Cognito Tech Media is your one team for high-performance websites, digital
            marketing that compounds, and video production that earns attention.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 animate-fade-up [animation-delay:240ms] sm:w-auto sm:flex-row sm:items-center">
            <Button href="/contact" size="lg" className="w-full sm:w-auto" withArrow>
              Start Your Project
            </Button>
            <Button
              href="/services"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Explore Our Services
            </Button>
          </div>

          <dl className="mt-10 grid w-full max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6 animate-fade-up [animation-delay:320ms]">
            {[
              ["3", "Core disciplines"],
              ["1", "Accountable team"],
              ["∞", "Iterations to get it right"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-bold text-white">{n}</dt>
                <dd className="mt-1 text-xs leading-snug text-white/45">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---- Visual ---- */}
        <div className="relative mx-auto aspect-square w-full max-w-[380px] animate-fade-up [animation-delay:200ms] sm:max-w-[420px]">
          <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm" />
          <motion.div
            aria-hidden
            className="absolute inset-6 rounded-full border border-dashed border-brand-400/40"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-14 rounded-full border border-white/10"
            animate={reduce ? undefined : { rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent-500 shadow-glow-accent" />
          </motion.div>

          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <LogoMark className="h-32 w-32 drop-shadow-[0_20px_55px_rgba(79,91,255,0.7)]" />
            </motion.div>
          </div>

          {["Build", "Grow", "Create"].map((label, i) => (
            <motion.span
              key={label}
              className="absolute rounded-full border border-white/10 bg-ink-raised/95 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur"
              style={{ top: `${[10, 70, 42][i]}%`, left: `${[64, 66, 2][i]}%` }}
              animate={reduce ? undefined : { y: [0, i % 2 ? 8 : -8, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              {label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
