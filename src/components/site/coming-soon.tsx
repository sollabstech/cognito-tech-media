import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/ui/logo";
import { site } from "@/lib/site";

/** Branded placeholder for pages whose full content is planned but not yet written. */
export function ComingSoon({
  message,
  primary,
  secondary,
  note,
}: {
  message: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  note?: ReactNode;
}) {
  return (
    <section className="section">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl">
          <div className="card-surface relative overflow-hidden rounded-4xl p-8 text-center sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:36px_36px] [mask-image:radial-gradient(circle_at_50%_40%,#000,transparent_70%)]"
            />
            <div className="relative">
              <LogoMark className="mx-auto h-12 w-12 drop-shadow-[0_16px_40px_rgba(79,91,255,0.5)]" />
              <p className="mx-auto mt-6 max-w-md text-body-lg text-white/70">{message}</p>

              {(primary || secondary) && (
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  {primary && (
                    <Button href={primary.href} className="w-full sm:w-auto" withArrow>
                      {primary.label}
                    </Button>
                  )}
                  {secondary && (
                    <Button
                      href={secondary.href}
                      variant="secondary"
                      className="w-full sm:w-auto"
                    >
                      {secondary.label}
                    </Button>
                  )}
                </div>
              )}

              <p className="mt-8 text-sm text-white/45">
                {note ?? (
                  <>
                    Need this sooner? Email{" "}
                    <a
                      href={site.emailHref}
                      className="text-brand-300 hover:text-brand-200"
                    >
                      {site.emailDisplay}
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
