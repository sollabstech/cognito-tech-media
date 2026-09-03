import { industries } from "@/lib/company";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Industries() {
  // duplicate the list so the marquee loops seamlessly
  const row = [...industries, ...industries];

  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Industries we serve"
          title="Experience across sectors"
          description="From e-commerce and real estate to healthcare, education and technology."
        />
      </div>

      <Reveal className="mt-10">
        <div className="mask-fade-x flex gap-3 overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-3">
            {row.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap rounded-full border border-white/12 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
