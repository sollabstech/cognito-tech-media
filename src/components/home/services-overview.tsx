import Link from "next/link";
import { serviceCards } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export function ServicesOverview() {
  return (
    <section id="services" className="section relative border-y border-white/5 bg-ink-soft/40">
      <div className="shell">
        <SectionHeading
          eyebrow="What we do"
          title="Everything to launch and scale a brand online"
          description="Pick one discipline or run all three together. Either way it's the same team and one point of contact."
        />

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {serviceCards.map((s) => (
            <StaggerItem key={s.href} className="h-full">
              <Link
                href={s.href}
                className="card-surface group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-glow"
              >
                <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">{s.copy}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                  Explore
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                  >
                    <path
                      d="M4 10h11M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
