import type { Plan } from "@/lib/pricing";
import { cn } from "@/lib/cn";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

/** Stacked pricing cards — 1 per row on mobile, up to 4 on desktop. No wide table. */
export function PricingGrid({
  eyebrow,
  heading,
  description,
  plans,
  muted = false,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  plans: readonly Plan[];
  muted?: boolean;
}) {
  return (
    <section className={cn("section", muted && "section-muted")}>
      <div className="shell">
        <Reveal className="mb-10 flex flex-col gap-3">
          {eyebrow && (
            <span className="eyebrow">
              <span className="h-1 w-1 rounded-full bg-accent-500" />
              {eyebrow}
            </span>
          )}
          <h2 className="text-heading-1 sm:text-display-2">{heading}</h2>
          {description && <p className="max-w-2xl text-body-lg text-white/60">{description}</p>}
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4" gap={0.05}>
          {plans.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              <div
                className={cn(
                  "card-surface flex h-full flex-col rounded-3xl p-6",
                  plan.popular && "border-brand-500/50 shadow-glow",
                )}
              >
                {plan.popular && (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-brand-600/20 px-3 py-1 text-[11px] font-semibold text-brand-200">
                    Popular
                  </span>
                )}
                <h3 className="font-display text-lg font-bold text-white">{plan.name}</h3>

                <div className="mt-3 flex items-end gap-2">
                  <span className="font-display text-2xl font-bold text-white">{plan.price}</span>
                  {plan.was && (
                    <span className="pb-1 text-sm text-white/35 line-through">{plan.was}</span>
                  )}
                </div>

                <ul className="mt-4 flex-1 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand-300">
                        <svg viewBox="0 0 20 20" className="h-2.5 w-2.5" fill="none">
                          <path
                            d="m4 10.5 4 4 8-9"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {plan.note && <p className="mt-3 text-xs text-white/40">{plan.note}</p>}

                <Button
                  href="/contact"
                  variant={plan.popular ? "primary" : "secondary"}
                  className="mt-5 w-full"
                  withArrow
                >
                  {plan.ctaLabel ?? "Get Started"}
                </Button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
