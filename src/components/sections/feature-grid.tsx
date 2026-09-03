import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

type Item = { title: string; copy?: string };

export function FeatureGrid({
  eyebrow,
  heading,
  items,
  columns = 3,
}: {
  eyebrow?: string;
  heading?: string;
  items: readonly Item[];
  columns?: 2 | 3;
}) {
  return (
    <section className="section">
      <div className="shell">
        {(eyebrow || heading) && (
          <Reveal className="mb-10 flex flex-col gap-3">
            {eyebrow && (
              <span className="eyebrow">
                <span className="h-1 w-1 rounded-full bg-accent-500" />
                {eyebrow}
              </span>
            )}
            {heading && <h2 className="text-heading-1 sm:text-display-2">{heading}</h2>}
          </Reveal>
        )}

        <Stagger
          className={
            columns === 2
              ? "grid gap-4 sm:gap-6 md:grid-cols-2"
              : "grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {items.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="card-surface h-full rounded-3xl p-6 transition-colors hover:border-white/20">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                {item.copy && (
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.copy}</p>
                )}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
