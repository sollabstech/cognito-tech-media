import { testimonials } from "@/lib/company";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export function Testimonials() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          description="A few words from the people we've worked with."
        />

        <Stagger className="mt-12 grid gap-4 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <figure className="card-surface flex h-full flex-col rounded-3xl p-6 sm:p-7">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-brand-500/60"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M9.5 6C6.5 7.5 5 10 5 13v5h6v-6H8c0-2 .8-3.4 2.5-4.3L9.5 6Zm9 0c-3 1.5-4.5 4-4.5 7v5h6v-6h-3c0-2 .8-3.4 2.5-4.3L18.5 6Z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-white/10 pt-4">
                  <div className="font-display text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/45">{t.role}</div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
