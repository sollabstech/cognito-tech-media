import { capabilities } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export function Capabilities() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Why Cognito"
          title="A studio built to be easy to work with"
          align="left"
        />

        <Stagger className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <div className="flex h-full flex-col gap-2 bg-ink p-6 sm:p-7">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{c.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{c.copy}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
