"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

/**
 * Lightweight sticky action bar — mobile only. Call · WhatsApp · Get a Quote.
 * This is the ONLY floating CTA on the site (no separate WhatsApp bubble).
 */
export function MobileActionBar() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="glass-strong pb-safe fixed inset-x-0 bottom-0 z-30 border-t border-white/10 lg:hidden"
    >
      <div className="grid grid-cols-3">
        <a
          href={site.phoneHref}
          className="flex flex-col items-center gap-1 py-3 text-[11px] font-medium text-white/70 active:bg-white/5"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5 text-brand-300" fill="none">
            <path
              d="M4.5 3h2l1.2 3-1.6 1.2a10 10 0 0 0 4.7 4.7L12 13.3l3 1.2v2a1.5 1.5 0 0 1-1.6 1.5A13.5 13.5 0 0 1 3 6.6 1.5 1.5 0 0 1 4.5 3Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
          Call
        </a>

        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 border-x border-white/10 py-3 text-[11px] font-medium text-white/70 active:bg-white/5"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#25D366]" fill="currentColor">
            <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.84 14.06c-.25.7-1.46 1.36-2 1.4-.54.05-1.05.24-3.53-.74-2.98-1.17-4.87-4.24-5.02-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.6.84 2.06.91 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.7.8 1.99.95.29.15.48.22.55.35.07.12.07.72-.18 1.42Z" />
          </svg>
          WhatsApp
        </a>

        <a
          href="/contact"
          className="flex flex-col items-center gap-1 bg-gradient-to-br from-brand-500 to-brand-700 py-3 text-[11px] font-semibold text-white active:brightness-95"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
            <path
              d="M4 10h11M11 5l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Get a Quote
        </a>
      </div>
    </motion.div>
  );
}
