import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { site } from "@/lib/site";
import { organizationJsonLd } from "@/lib/seo";
import { cn } from "@/lib/cn";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { MobileActionBar } from "@/components/site/mobile-action-bar";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Build. Grow. Create.`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "website development",
    "digital marketing",
    "video production",
    "SEO",
    "social media marketing",
    "paid advertising",
    "Cognito Tech Media",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Build. Grow. Create.`,
    description: site.description,
    url: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070E",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(fontSans.variable, fontDisplay.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-dvh overflow-x-hidden bg-ink">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />

        {/* Fixed decorative backdrop — sits behind everything, never scrolls */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-brand-radial opacity-70" />
          <div className="absolute inset-0 bg-grid-faint [background-size:64px_64px] [mask-image:radial-gradient(circle_at_50%_0%,#000,transparent_70%)]" />
        </div>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>

        <SiteHeader />
        <main id="main" className="pb-20 lg:pb-0">
          {children}
        </main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
