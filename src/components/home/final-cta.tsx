import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl glass border border-white/10 bg-gradient-to-br from-brand-700/35 via-brand-950/20 to-transparent px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:40px_40px] [mask-image:radial-gradient(circle_at_50%_50%,#000,transparent_75%)]"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-heading-1 sm:text-display-2">
                Let&apos;s build something worth talking about.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-body-lg text-white/60">
                Tell us what you&apos;re working on. We&apos;ll come back with a plan, a
                timeline and a clear next step.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact" size="lg" className="w-full sm:w-auto" withArrow>
                  Start Your Project
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
