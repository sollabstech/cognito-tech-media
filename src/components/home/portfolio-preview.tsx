import { projects, portfolioPdfUrl } from "@/lib/content";
import { clients } from "@/lib/company";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/reveal";

export function PortfolioPreview() {
  return (
    <section className="section border-y border-white/5 bg-ink-soft/40">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Brands that trust us"
            description="A selection of businesses we work with, and recent creative projects."
            align="left"
          />
          <div className="hidden lg:block">
            <Button href="/portfolio" variant="secondary" withArrow>
              View portfolio
            </Button>
          </div>
        </div>

        {/* client wall */}
        <Stagger className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3" gap={0.04}>
          {clients.map((name) => (
            <StaggerItem key={name}>
              <div className="flex h-20 items-center justify-center bg-ink px-4 text-center text-sm font-semibold text-white/60">
                {name}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* recent projects */}
        <Stagger className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-ink">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-700/40 via-ink to-accent-600/20 transition-transform duration-500 ease-out-expo group-hover:scale-105" />
                  <div className="absolute inset-0 bg-grid-faint [background-size:26px_26px] opacity-40" />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80 backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-white">{p.title}</h3>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row lg:hidden">
          <Button href="/portfolio" variant="secondary" className="w-full" withArrow>
            View portfolio
          </Button>
          <Button
            href={portfolioPdfUrl}
            variant="ghost"
            className="w-full border border-white/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download portfolio (PDF)
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
