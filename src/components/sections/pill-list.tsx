import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/reveal";

/** A wrapping row of pills — platforms, tools, single-word highlights. */
export function PillList({
  eyebrow,
  heading,
  items,
  muted = false,
}: {
  eyebrow?: string;
  heading?: string;
  items: readonly string[];
  muted?: boolean;
}) {
  return (
    <section className={cn("section", muted && "section-muted")}>
      <div className="shell">
        {(eyebrow || heading) && (
          <Reveal className="mb-8 flex flex-col gap-3">
            {eyebrow && (
              <span className="eyebrow">
                <span className="h-1 w-1 rounded-full bg-accent-500" />
                {eyebrow}
              </span>
            )}
            {heading && <h2 className="text-heading-1 sm:text-display-2">{heading}</h2>}
          </Reveal>
        )}
        <Reveal className="flex flex-wrap gap-2.5">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-white/75"
            >
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
