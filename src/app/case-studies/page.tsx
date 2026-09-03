import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/page-hero";
import { ComingSoon } from "@/components/site/coming-soon";

// -> "Case Studies | Cognito Tech Media" via the title template
export const metadata = pageMetadata({
  title: "Case Studies",
  description: "Selected project case studies from Cognito Tech Media will be published here.",
  path: "/case-studies",
});

/**
 * Intentionally minimal. Real project case studies are planned and will be added
 * later — no fabricated clients, stats, results or testimonials.
 */
export default function CaseStudiesPage() {
  return (
    <>
      <PageHero eyebrow="Case Studies" title="Case Studies" />
      <ComingSoon
        message="Selected project case studies will be added here soon."
        primary={{ label: "View Portfolio", href: "/portfolio" }}
      />
    </>
  );
}
