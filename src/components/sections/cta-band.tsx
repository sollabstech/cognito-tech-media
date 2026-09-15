import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Let's grow together",
  copy = "Get in touch today and take your business to new heights.",
  primaryLabel = "Get a Quote",
  primaryHref = "/contact",
}: {
  title?: string;
  copy?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl glass border border-white/10 bg-gradient-to-br from-brand-700/35 via-brand-950/20 to-transparent px-6 py-12 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:40px_40px] [mask-image:radial-gradient(circle_at_50%_50%,#000,transparent_75%)]"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-heading-1 sm:text-display-2">{title}</h2>
              <p className="mx-auto mt-3 max-w-lg text-body-lg text-white/60">{copy}</p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={primaryHref} size="lg" className="w-full sm:w-auto" withArrow>
                  {primaryLabel}
                </Button>
                <Button
                  href={site.phoneHref}
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Call {site.phoneDisplay}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
