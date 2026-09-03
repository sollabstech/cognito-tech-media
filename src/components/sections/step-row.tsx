import { cn } from "@/lib/cn";
import type { ServiceSection } from "@/lib/service-pages";
import { Reveal } from "@/components/motion/reveal";

/** Numbered steps / a simple labelled row — used for process and tool lists. */
export function StepRow({
  eyebrow,
  heading,
  steps,
  numbered = true,
  muted = false,
}: {
  eyebrow?: string;
  heading?: string;
  steps: readonly ServiceSection[];
  numbered?: boolean;
  muted?: boolean;
}) {
  return (
    <section className={cn("section", muted && "border-y border-white/5 bg-ink-soft/40")}>
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

        <ol className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.07}>
              <li className="card-surface h-full rounded-3xl p-6">
                {numbered && (
                  <span className="font-display text-sm font-bold tracking-widest text-brand-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <h3 className="mt-3 font-display text-base font-semibold text-white">
                  {step.title}
                </h3>
                {step.copy && (
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{step.copy}</p>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
