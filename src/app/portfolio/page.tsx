import { pageMetadata } from "@/lib/seo";
import { projects, portfolioPdfUrl } from "@/lib/content";
import { clients, industries, stats } from "@/lib/company";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { PillList } from "@/components/sections/pill-list";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Brands that trust Cognito Tech Media, recent creative projects, and the industries we serve. Download the full portfolio PDF.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our recent launched projects"
        lead="A snapshot of the brands we work with and the work we ship. For the full set of projects, download our portfolio."
      >
        <Button href={portfolioPdfUrl} withArrow target="_blank" rel="noopener noreferrer">
          Download Portfolio
        </Button>
        <Button href="/contact" variant="secondary">
          Start a Project
        </Button>
      </PageHero>

      {/* stats */}
      <section className="section">
        <div className="shell">
          <Stagger className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="card-surface rounded-3xl p-6 text-center">
                  <div className="font-display text-3xl font-bold text-white sm:text-4xl">{s.value}</div>
                  <div className="mt-1.5 text-xs leading-snug text-white/50">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* projects */}
      <section className="section border-y border-white/5 bg-ink-soft/40">
        <div className="shell">
          <Reveal className="mb-10 flex flex-col gap-3">
            <span className="eyebrow">
              <span className="h-1 w-1 rounded-full bg-accent-500" />
              Recent work
            </span>
            <h2 className="text-heading-1 sm:text-display-2">Selected projects</h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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
        </div>
      </section>

      {/* client wall */}
      <section className="section">
        <div className="shell">
          <Reveal className="mb-10 flex flex-col gap-3">
            <span className="eyebrow">
              <span className="h-1 w-1 rounded-full bg-accent-500" />
              Brands that trust us
            </span>
            <h2 className="text-heading-1 sm:text-display-2">In good company</h2>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3" gap={0.04}>
            {clients.map((name) => (
              <StaggerItem key={name}>
                <div className="flex h-24 items-center justify-center bg-ink px-4 text-center text-sm font-semibold text-white/65">
                  {name}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <PillList eyebrow="Industries we serve" heading="Sectors we work across" items={industries} muted />

      <CtaBand
        title="Want to see more?"
        copy="Download the full portfolio, or tell us about your project and we'll share relevant work."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
