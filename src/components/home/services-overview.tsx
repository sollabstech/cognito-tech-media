import Link from "next/link";
import { serviceCards } from "@/lib/content";
import { serviceIcons } from "@/components/icons/service-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export function ServicesOverview() {
  return (
    <section id="services" className="section relative border-y border-white/5">
      <div className="shell">
        <SectionHeading
          eyebrow="What we do"
          title="Everything to launch and scale a brand online"
          description="Pick one discipline or run all three together. Either way it's the same team and one point of contact."
        />

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {serviceCards.map((s, i) => {
            const Icon = serviceIcons[i] ?? serviceIcons[0];
            return (
              <StaggerItem key={s.href} className="h-full">
                <Link
                  href={s.href}
                  className="card-surface glass-hover group relative flex h-full flex-col overflow-hidden p-6"
                >
                  {/* corner glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-500/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0" />

                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/[0.06] text-brand-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]">
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="relative mt-5 font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-white/55">{s.copy}</p>

                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
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
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
