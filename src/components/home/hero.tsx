"use client";

import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/home/hero-visual";

/**
 * Entrance for the copy is pure CSS (`animate-fade-up`) so it paints without
 * waiting for JS/hydration — no blank hero. The mesh backdrop lives in the
 * fixed page background; the glass visual is its own component.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="shell grid items-center gap-14 pb-16 pt-12 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-24">
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
            <Button href="/services" size="lg" variant="secondary" className="w-full sm:w-auto">
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
        <div className="animate-fade-up [animation-delay:200ms]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
