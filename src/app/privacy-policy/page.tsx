import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/page-hero";
import { ComingSoon } from "@/components/site/coming-soon";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How we collect, use and protect the information you share with us."
      />
      <ComingSoon
        message="Our full privacy policy is being finalised. Until it's published here, contact us for any questions about how your data is handled."
        primary={{ label: "Contact Us", href: "/contact" }}
        note={
          <>
            Data questions?{" "}
            <a href={site.emailHref} className="text-brand-300 hover:text-brand-200">
              {site.emailDisplay}
            </a>
          </>
        }
      />
    </>
  );
}
