/** Pricing carried over verbatim from cognitotechmedia.com (prices in INR). */

export type Plan = {
  name: string;
  price: string; // display string, e.g. "₹12,999"
  was?: string;
  note?: string;
  popular?: boolean;
  features: string[];
  ctaLabel?: string;
};

export const digitalMarketingPlans: Plan[] = [
  { name: "Single Video", price: "₹2,499", was: "₹2,999", features: ["1 promotional video"] },
  {
    name: "Starter Pack",
    price: "₹12,999",
    was: "₹14,999",
    features: ["4 videos", "10 posters", "Social media marketing service"],
  },
  {
    name: "Growth Pack",
    price: "₹24,999",
    was: "₹29,999",
    popular: true,
    features: ["8 videos", "10 posters", "Social media marketing service"],
  },
  {
    name: "Business Pack",
    price: "₹29,999",
    was: "₹36,999",
    features: ["10 videos", "10 posters", "Social media marketing service"],
  },
  {
    name: "Premium Pack",
    price: "₹42,999",
    was: "₹52,999",
    features: ["16 videos", "10 posters", "Social media marketing service"],
  },
  {
    name: "Elite Pack",
    price: "₹49,999",
    was: "₹62,999",
    features: ["20 videos", "10 posters", "Social media marketing service"],
  },
  {
    name: "Ultimate Pack",
    price: "Custom",
    note: "Customized digital marketing packages — contact for details.",
    features: ["Scoped to your goals, market and budget"],
    ctaLabel: "Contact for Details",
  },
];

export const websitePlans: Plan[] = [
  {
    name: "Landing Page",
    price: "₹6,999",
    features: ["1 page design", "Conversion-focused layout", "Mobile responsive", "Contact form / CTA", "Basic SEO"],
  },
  {
    name: "Starter",
    price: "₹9,999",
    features: ["Up to 5 pages", "Mobile responsive", "Basic contact form", "WhatsApp integration", "Free SSL"],
  },
  {
    name: "Business",
    price: "₹14,999",
    popular: true,
    features: ["Up to 8 pages", "WordPress CMS", "Mobile responsive", "Basic SEO setup", "Gallery & testimonials"],
  },
  {
    name: "Professional",
    price: "₹19,999",
    features: ["Up to 12 pages", "Custom UI/UX design", "Dynamic WordPress", "Blog setup", "Speed optimization"],
  },
  {
    name: "Corporate Website",
    price: "₹22,999",
    features: ["Up to 15 pages", "Corporate branding layout", "CMS & blog integration", "Custom animation", "SEO optimization"],
  },
  {
    name: "Portfolio Website",
    price: "₹12,999",
    features: ["Modern portfolio layout", "Gallery showcase", "About & services page", "Contact & inquiry form", "SEO friendly"],
  },
  {
    name: "E-Commerce",
    price: "₹24,999",
    features: ["WooCommerce / Shopify setup", "Up to 50 products", "Payment gateway", "Shipping integration", "SEO optimization"],
  },
  {
    name: "Customized Package",
    price: "Custom",
    note: "Tailored to your business needs.",
    features: ["Unlimited pages & features"],
    ctaLabel: "Contact for Quote",
  },
];
