import { cn } from "@/lib/cn";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export function CheckList({
  eyebrow,
  heading,
  items,
  tone = "brand",
  columns = 2,
  muted = false,
}: {
  eyebrow?: string;
  heading?: string;
  items: readonly string[];
  tone?: "brand" | "accent";
  columns?: 1 | 2;
  muted?: boolean;
}) {
  return (
    <section className={cn("section", muted && "border-y border-white/5 bg-ink-soft/40")}>
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

        <Stagger
          className={cn("grid gap-3", columns === 2 ? "sm:grid-cols-2" : "max-w-2xl")}
          gap={0.04}
        >
          {items.map((item) => (
            <StaggerItem key={item}>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
                <span
                  className={cn(
                    "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                    tone === "brand"
                      ? "bg-brand-500/15 text-brand-300"
                      : "bg-accent-500/15 text-accent-400",
                  )}
                >
                  <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
                    <path
                      d="m4 10.5 4 4 8-9"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-white/80">{item}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
