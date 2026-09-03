import { Inter, Space_Grotesk } from "next/font/google";

/** Body copy. */
export const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

/** Headings + the wordmark. Geometric, techy, matches the logo. */
export const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-display",
});
