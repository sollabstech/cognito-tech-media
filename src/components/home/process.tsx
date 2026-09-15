import { workflow } from "@/lib/company";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Process() {
  return (
    <section className="section relative section-muted">
      <div className="shell">
        <SectionHeading
          eyebrow="Workflow"
          title="Cognito Tech Media marketing workflow"
          description="A repeatable loop from first conversation to measurable growth."
        />

        <ol className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workflow.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <li className="card-surface relative h-full rounded-3xl p-6">
                <span className="font-display text-sm font-bold tracking-widest text-brand-400">
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.copy}</p>
                {i < workflow.length - 1 && (
                  <span aria-hidden className="absolute right-5 top-6 hidden text-white/20 lg:block">
                    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
                      <path
                        d="M4 10h11M11 5l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
