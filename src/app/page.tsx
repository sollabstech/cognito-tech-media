import { Hero } from "@/components/home/hero";
import { BrandPillars } from "@/components/home/brand-pillars";
import { ServicesOverview } from "@/components/home/services-overview";
import { FeaturedReel } from "@/components/home/featured-reel";
import { Process } from "@/components/home/process";
import { Industries } from "@/components/home/industries";
import { PackagePreview } from "@/components/home/package-preview";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { Testimonials } from "@/components/home/testimonials";
import { ReviewsSection } from "@/components/home/reviews-section";
import { HomeFaq } from "@/components/home/home-faq";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedReel />
      <BrandPillars />
      <ServicesOverview />
      <Process />
      <Industries />
      <PackagePreview />
      <PortfolioPreview />
      <Testimonials />
      <ReviewsSection />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
