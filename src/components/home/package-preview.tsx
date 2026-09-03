import { digitalMarketingPlans } from "@/lib/pricing";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const featured = digitalMarketingPlans.filter((p) =>
  ["Starter Pack", "Growth Pack", "Business Pack"].includes(p.name),
);

export function PackagePreview() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Packages"
          title="Digital marketing packages"
          description="Promotional videos, poster creatives and social media marketing in one monthly scope. Built to be read on a phone — no spreadsheet-sized pricing table."
        />

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-6">
          {featured.map((plan) => (
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
                <div className="mt-2 flex items-end gap-2">
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
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="/packages" size="lg" className="w-full sm:w-auto" withArrow>
            See all packages & website pricing
          </Button>
          <Button href="/contact" size="lg" variant="secondary" className="w-full sm:w-auto">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
