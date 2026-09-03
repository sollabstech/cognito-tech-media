import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Build per-page metadata with sane defaults + Open Graph. */
export function pageMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const desc = description ?? site.description;
  const url = new URL(path, site.url).toString();

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description: desc,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
  };
}

/** LocalBusiness schema — legitimate business identity data only. No Review / AggregateRating. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.emailDisplay,
    telephone: site.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    sameAs: [site.googleProfileUrl, ...site.socials.map((s) => s.href)],
    areaServed: "IN",
    slogan: "Build. Grow. Create.",
  };
}
