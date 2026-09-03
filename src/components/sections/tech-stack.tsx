import type { TechGroup } from "@/lib/service-pages";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export function TechStack({ groups }: { groups: readonly TechGroup[] }) {
  return (
    <section className="section border-y border-white/5 bg-ink-soft/40">
      <div className="shell">
        <Reveal className="mb-8 flex flex-col gap-3">
          <span className="eyebrow">
            <span className="h-1 w-1 rounded-full bg-accent-500" />
            Technology
          </span>
          <h2 className="text-heading-1 sm:text-display-2">The stack we build on</h2>
        </Reveal>

        <Stagger className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <StaggerItem key={g.group} className="h-full">
              <div className="card-surface h-full rounded-3xl p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-brand-300">
                  {g.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/65"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
