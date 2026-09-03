import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicePages, servicePageMap } from "@/lib/service-pages";
import { servicesNav } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CheckList } from "@/components/sections/check-list";
import { PillList } from "@/components/sections/pill-list";
import { StepRow } from "@/components/sections/step-row";
import { TechStack } from "@/components/sections/tech-stack";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBand } from "@/components/sections/cta-band";

type Params = { slug: string[] };

export function generateStaticParams(): Params[] {
  return servicePages.map((p) => ({ slug: p.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePageMap.get(slug.join("/"));
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.lead, path: `/services/${page.slug}` });
}

/** Short items render as pills, longer sentences render as a checklist. */
function isShortList(items: readonly string[]) {
  return items.every((i) => i.length <= 26 && !i.includes("—"));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const key = slug.join("/");
  const page = servicePageMap.get(key);
  if (!page) notFound();

  const group = servicesNav.find(
    (g) => g.href === `/services/${key}` || g.children.some((c) => c.href === `/services/${key}`),
  );

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead}>
        <Button href="/contact" withArrow>
          Get a Quote
        </Button>
        <Button href="/packages" variant="secondary">
          View Packages
        </Button>
      </PageHero>

      {group && (
        <section className="border-b border-white/5">
          <div className="shell flex flex-wrap gap-2 py-6">
            {group.children.map((c) => (
              <Button
                key={c.href}
                href={c.href}
                variant={c.href === `/services/${key}` ? "primary" : "ghost"}
                size="md"
                className={c.href === `/services/${key}` ? "" : "border border-white/10"}
              >
                {c.label}
              </Button>
            ))}
          </div>
        </section>
      )}

      {page.intro && (
        <section className="section">
          <div className="shell">
            <Reveal>
              <p className="max-w-3xl text-body-lg text-white/70">{page.intro}</p>
            </Reveal>
          </div>
        </section>
      )}

      {page.offerings?.length > 0 && (
        <FeatureGrid
          eyebrow="Scope"
          heading={page.offeringsTitle ?? "What's included"}
          items={page.offerings}
          columns={page.offerings.length <= 4 ? 2 : 3}
        />
      )}

      {page.tech && <TechStack groups={page.tech} />}

      {page.highlights?.length ? (
        isShortList(page.highlights) ? (
          <PillList eyebrow="At a glance" heading={page.highlightsTitle} items={page.highlights} muted />
        ) : (
          <CheckList eyebrow="At a glance" heading={page.highlightsTitle} items={page.highlights} muted />
        )
      ) : null}

      {page.audience?.length ? (
        <CheckList
          eyebrow="Who it's for"
          heading={page.audienceTitle ?? "Ideal for"}
          items={page.audience}
          tone="accent"
        />
      ) : null}

      {page.process?.length ? (
        <StepRow
          eyebrow="Process"
          heading={page.processTitle ?? "How we work"}
          steps={page.process}
          numbered={page.process.length > 1}
          muted={!page.highlights || isShortList(page.highlights)}
        />
      ) : null}

      {page.faqs?.length ? <FaqAccordion items={page.faqs} muted /> : null}

      <CtaBand
        title={`Ready to start with ${page.title}?`}
        copy="Tell us about your project and we'll come back with a plan, a timeline and a clear next step."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
