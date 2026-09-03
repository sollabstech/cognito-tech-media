import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

/** Standard inner-page hero: eyebrow, H1, lead paragraph, optional actions. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-brand-radial opacity-60"
      />
      <div className="shell py-14 sm:py-20 lg:py-24">
        <Reveal className="flex flex-col gap-5">
          {eyebrow && (
            <span className="eyebrow">
              <span className="h-1 w-1 rounded-full bg-accent-500" />
              {eyebrow}
            </span>
          )}
          <h1 className="max-w-3xl text-display-2 font-bold text-white">{title}</h1>
          {lead && <p className="max-w-2xl text-body-lg text-white/60">{lead}</p>}
          {children && <div className="mt-2 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
