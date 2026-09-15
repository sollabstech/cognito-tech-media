/**
 * Single source of truth for business info + navigation.
 * Every phone/email/link on the site pulls from here.
 */

const rawPhone = "+91 636 991 7896";

/**
 * Always resolves to a valid absolute origin. `new URL()` throws on "" or a
 * bare domain, which breaks `metadataBase` / sitemap / robots on hosts where
 * NEXT_PUBLIC_SITE_URL is unset or set to an empty string — so guard it here.
 */
function resolveSiteUrl(): string {
  const fallback = "https://www.cognitotechmedia.com";
  const raw = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim();
  if (!raw) return fallback;
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(withProtocol).origin;
  } catch {
    return fallback;
  }
}

export const site = {
  name: "Cognito Tech Media",
  shortName: "Cognito",
  tagline: "Build. Grow. Create.",
  description:
    "Cognito Tech Media builds fast websites, grows brands with digital marketing, and creates video that converts.",
  url: resolveSiteUrl(),

  phoneDisplay: rawPhone,
  phoneHref: `tel:${rawPhone.replace(/[^\d+]/g, "")}`, // tel:+916369917896
  whatsappHref: `https://wa.me/${rawPhone.replace(/[^\d]/g, "")}`, // wa.me/916369917896

  emailDisplay: "business@cognitotechmedia.com",
  emailHref: "mailto:business@cognitotechmedia.com",

  address: {
    line1: "4-3-21, Railar Nagar, 3rd Street",
    city: "Madurai",
    region: "Tamil Nadu",
    postalCode: "625018",
    country: "IN",
    full: "4-3-21, Railar Nagar, 3rd Street, Madurai, Tamil Nadu, 625018",
  },
  mapsUrl: "https://maps.google.com/?cid=14660570438966993066",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.6115390994841!2d78.10040017607503!3d9.951869537014385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf4d7f2f2911%3A0xcb75023c549222aa!2sCognito%20Tech%20Media!5e0!3m2!1sen!2sin!4v1788766019906!5m2!1sen!2sin",
  hours: "Mon–Sat, 10:00 AM – 7:00 PM IST",

  // Google Business Profile / Maps share link (used for review CTAs)
  googleProfileUrl: "https://share.google/cd5eFzjp4B6BiZsQ6",

  socials: [
    { label: "Instagram", href: "https://www.instagram.com/cognito_tech_media" },
    { label: "Facebook", href: "https://www.facebook.com/cognitotechmedia" },
    { label: "YouTube", href: "https://www.youtube.com/@Cognito-Tech-Media" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/cognitotechmedia" },
  ],
} as const;

export type NavChild = { label: string; href: string };
export type NavGroup = { label: string; href: string; children: NavChild[] };
export type NavItem = { label: string; href: string; groups?: NavGroup[] };

/** Services taxonomy — mirrored in the header mega-menu, the mobile accordion and the footer. */
export const servicesNav: NavGroup[] = [
  {
    label: "Website Development",
    href: "/services/website-development",
    children: [
      { label: "Static Website", href: "/services/website-development/static-website" },
      { label: "Dynamic Website", href: "/services/website-development/dynamic-website" },
      { label: "E-commerce Website", href: "/services/website-development/ecommerce-website" },
    ],
  },
  {
    label: "Digital Marketing Services",
    href: "/services/digital-marketing",
    children: [
      { label: "SEO, AEO & GEO", href: "/services/digital-marketing/seo-aeo-geo" },
      { label: "Social Media Marketing", href: "/services/digital-marketing/social-media-marketing" },
      { label: "Paid Advertising", href: "/services/digital-marketing/paid-advertising" },
    ],
  },
  {
    label: "Video Production",
    href: "/services/video-production",
    children: [
      { label: "Video Script Writing", href: "/services/video-production/video-script-writing" },
      { label: "Video Shooting", href: "/services/video-production/video-shooting" },
      { label: "Video Editing", href: "/services/video-production/video-editing" },
    ],
  },
];

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", groups: servicesNav },
  { label: "Packages", href: "/packages" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/packages" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
} as const;
