import { PageHero } from "@/components/site/page-hero";
import { ComingSoon } from "@/components/site/coming-soon";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This page moved or never existed"
        lead="The link may be out of date. Try the homepage or head straight to what you need."
      />
      <ComingSoon
        message="Let's get you back on track."
        primary={{ label: "Go Home", href: "/" }}
        secondary={{ label: "Browse Services", href: "/services" }}
      />
    </>
  );
}
