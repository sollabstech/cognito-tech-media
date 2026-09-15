import { portfolioClients } from "@/lib/portfolio";
import { compactNum } from "@/lib/format";
import { clients } from "@/lib/company";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/reveal";
import { BrandMark } from "@/components/portfolio/brand-mark";

const highlights = portfolioClients
  .filter((c) => c.followersAfter > 0)
  .sort((a, b) => b.followersAfter - a.followersAfter)
  .slice(0, 3);

export function PortfolioPreview() {
  return (
    <section className="section section-muted">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Results, not just deliverables"
            description="Follower growth for our Instagram clients — with the reels behind it. Website and app work too."
            align="left"
          />
          <div className="hidden lg:block">
            <Button href="/portfolio" variant="secondary" withArrow>
              View client results
            </Button>
          </div>
        </div>

        {/* growth highlights */}
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-6">
          {highlights.map((c) => (
            <StaggerItem key={c.id} className="h-full">
              <div className="card-surface flex h-full flex-col rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <BrandMark client={c} className="h-9 w-9" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">{c.name}</p>
                    <p className="truncate text-xs text-white/40">@{c.handle}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-end gap-2">
                  <span className="font-display text-lg font-bold text-white/45 tabular-nums">
                    {compactNum(c.followersBefore)}
                  </span>
                  <svg viewBox="0 0 24 24" className="mb-1 h-4 w-6 text-white/25" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="bg-gradient-to-r from-white to-brand-200 bg-clip-text font-display text-2xl font-black tabular-nums text-transparent">
                    {compactNum(c.followersAfter)}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-white/40">followers {c.timeframe}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* client wall */}
        <Stagger
          className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3"
          gap={0.04}
        >
          {clients.map((name) => (
            <StaggerItem key={name}>
              <div className="flex h-20 items-center justify-center bg-ink px-4 text-center text-sm font-semibold text-white/60">
                {name}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8 lg:hidden">
          <Button href="/portfolio" variant="secondary" className="w-full" withArrow>
            View client results
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
