import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { servicesNav } from "@/lib/site";
import { serviceCards } from "@/lib/content";
import { PageHero } from "@/components/site/page-hero";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Website development, digital marketing and video production — run by one accountable team at Cognito Tech Media.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Three disciplines, one team"
        lead="Website development, digital marketing and video production. Engage one or all three — it's the same people and one point of contact."
      >
        <Button href="/contact" withArrow>
          Get a Quote
        </Button>
      </PageHero>

      <section className="section">
        <div className="shell">
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {serviceCards.map((card, i) => {
              const group = servicesNav[i];
              return (
                <StaggerItem key={card.href} className="h-full">
                  <div className="card-surface flex h-full flex-col rounded-3xl p-7">
                    <h2 className="font-display text-xl font-bold text-white">{card.title}</h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/55">{card.copy}</p>

                    <ul className="mt-5 space-y-1.5">
                      {group.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="group flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-white/75 transition-colors hover:border-brand-500/40 hover:text-white"
                          >
                            {child.label}
                            <svg
                              viewBox="0 0 20 20"
                              className="h-4 w-4 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-brand-300"
                              fill="none"
                            >
                              <path
                                d="M4 10h11M11 5l5 5-5 5"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Button
                      href={card.href}
                      variant="secondary"
                      className="mt-6 w-full"
                      withArrow
                    >
                      Overview
                    </Button>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
    </>
  );
}
