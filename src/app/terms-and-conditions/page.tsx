import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/page-hero";
import { ComingSoon } from "@/components/site/coming-soon";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: `The terms that govern use of the ${site.name} website and services.`,
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        lead="The terms that govern use of this website and our services."
      />
      <ComingSoon
        message="Our full terms & conditions are being finalised. Contact us if you need them for a contract or procurement process."
        primary={{ label: "Contact Us", href: "/contact" }}
        note={
          <>
            Need these now?{" "}
            <a href={site.emailHref} className="text-brand-300 hover:text-brand-200">
              {site.emailDisplay}
            </a>
          </>
        }
      />
    </>
  );
}
