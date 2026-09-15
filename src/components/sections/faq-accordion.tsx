"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/reveal";

type Faq = { q: string; a: string };

export function FaqAccordion({
  eyebrow = "FAQ",
  heading = "Frequently asked questions",
  items,
  muted = false,
}: {
  eyebrow?: string;
  heading?: string;
  items: readonly Faq[];
  muted?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={cn("section", muted && "section-muted")}>
      <div className="shell">
        <Reveal className="mb-8 flex flex-col gap-3">
          <span className="eyebrow">
            <span className="h-1 w-1 rounded-full bg-accent-500" />
            {eyebrow}
          </span>
          <h2 className="text-heading-1 sm:text-display-2">{heading}</h2>
        </Reveal>

        <div className="mx-auto max-w-3xl divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="font-display text-[15px] font-semibold text-white sm:text-base">
                    {item.q}
                  </span>
                  <svg
                    viewBox="0 0 12 12"
                    className={cn(
                      "h-3.5 w-3.5 shrink-0 text-white/40 transition-transform",
                      isOpen && "rotate-180",
                    )}
                    fill="none"
                  >
                    <path
                      d="M2.5 4.5 6 8l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-white/60 sm:px-6">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
