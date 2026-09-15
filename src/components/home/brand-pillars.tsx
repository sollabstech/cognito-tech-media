import { brandPillars } from "@/lib/content";
import { serviceIcons } from "@/components/icons/service-icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

const numerals = ["Ⅰ", "Ⅱ", "Ⅲ"];

export function BrandPillars() {
  return (
    <section className="section relative">
      <div className="shell">
        <Reveal className="mb-10 flex flex-col gap-3 sm:mb-14">
          <span className="eyebrow">
            <span className="h-1 w-1 rounded-full bg-accent-500" />
            The operating idea
          </span>
          <h2 className="text-heading-1 sm:text-display-2">Three moves, run by one team.</h2>
        </Reveal>

        <Stagger className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {brandPillars.map((p, i) => {
            const Icon = serviceIcons[i] ?? serviceIcons[0];
            return (
              <StaggerItem key={p.key}>
                <article className="card-surface glass-hover group h-full p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/[0.06] text-brand-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-3xl font-bold text-brand-400/70">
                      {numerals[i]}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-white">
                    {p.title}
                    <span className="text-accent-500">.</span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{p.copy}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
