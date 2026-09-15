import { pageMetadata } from "@/lib/seo";
import { portfolioClients } from "@/lib/portfolio";
import { compactNum } from "@/lib/format";
import { clients } from "@/lib/company";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { PortfolioExplorer } from "@/components/portfolio/portfolio-explorer";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "The results we get for our clients — Instagram follower growth, the reels behind it, plus website and app projects. Filter by service.",
  path: "/portfolio",
});

const totalGained = portfolioClients.reduce(
  (sum, c) => sum + Math.max(0, c.followersAfter - c.followersBefore),
  0,
);
const igCount = portfolioClients.filter((c) => c.followersAfter > 0).length;

export default function PortfolioPage() {
  return (
    <>
      {/* headline result */}
      <section className="section pb-0">
        <div className="shell">
          <Reveal className="mb-8 flex flex-col gap-3">
            <span className="eyebrow">
              <span className="h-1 w-1 rounded-full bg-accent-500" />
              Portfolio
            </span>
            <h1 className="text-heading-1 sm:text-display-2">Client results</h1>
          </Reveal>

          <Reveal className="card-surface flex flex-col gap-4 rounded-3xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <div className="bg-gradient-to-r from-white to-brand-200 bg-clip-text font-display text-3xl font-black tabular-nums text-transparent sm:text-4xl">
                +{compactNum(totalGained)} followers
              </div>
              <p className="mt-1 text-sm text-white/50">
                grown for {igCount} Instagram clients — from where they started to today.
              </p>
            </div>
            <p className="max-w-xs text-xs text-white/40">
              Clients below are placeholders while real case data is added — the handles, numbers
              and reels will be the real thing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* the explorer: sidebar filter + client results */}
      <section className="section">
        <PortfolioExplorer />
      </section>

      {/* brands */}
      <section className="section section-muted">
        <div className="shell">
          <Reveal className="mb-8 flex flex-col gap-3">
            <span className="eyebrow">
              <span className="h-1 w-1 rounded-full bg-accent-500" />
              Brands that trust us
            </span>
            <h2 className="text-heading-2 sm:text-heading-1">In good company</h2>
          </Reveal>
          <Stagger
            className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3"
            gap={0.04}
          >
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

      <CtaBand
        title="Want results like these?"
        copy="Tell us about your brand and the platform you want to grow. We'll come back with a plan."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
