import { pageMetadata } from "@/lib/seo";
import { digitalMarketingPlans, websitePlans } from "@/lib/pricing";
import { PageHero } from "@/components/site/page-hero";
import { PricingGrid } from "@/components/sections/pricing-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";

export const metadata = pageMetadata({
  title: "Packages & Pricing",
  description:
    "Transparent digital marketing and website development packages from Cognito Tech Media. Video + posters + social media management, and websites from landing pages to e-commerce.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages & Pricing"
        title="Clear packages, no surprises"
        lead="Pick a plan that fits where you are now — every package can be tailored, and larger scopes get a custom quote."
      >
        <Button href="/contact" withArrow>
          Get a Quote
        </Button>
      </PageHero>

      <PricingGrid
        eyebrow="Digital Marketing"
        heading="Video, creatives & social media"
        description="Monthly packages combining promotional videos, poster creatives and social media marketing service."
        plans={digitalMarketingPlans}
      />

      <PricingGrid
        eyebrow="Website Development"
        heading="Websites from launch to store"
        description="From a single landing page to a full e-commerce build. Domain and hosting are included free."
        plans={websitePlans}
        muted
      />

      <CtaBand
        title="Need something in between?"
        copy="Tell us your goals and budget — we'll put together a custom package and a start date."
        primaryLabel="Request a Custom Quote"
      />
    </>
  );
}
