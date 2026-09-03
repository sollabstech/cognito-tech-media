"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { mainNav, servicesNav, site } from "@/lib/site";
import { Button } from "@/components/ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();

  // Lock body scroll + close on Escape while the panel is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-nav"
          initial={reduce ? { opacity: 0 } : { opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, x: "100%" }}
          transition={{ duration: 0.36, ease: EASE }}
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto overscroll-contain bg-ink lg:hidden"
        >
          <motion.nav
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.045, delayChildren: 0.08 } },
            }}
            className="shell flex min-h-full flex-col gap-1 py-6"
          >
            {mainNav.map((item) =>
              item.groups ? (
                <ServicesAccordion key={item.href} onNavigate={onClose} />
              ) : (
                <Row key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-display font-semibold text-white transition-colors hover:bg-white/5"
                  >
                    {item.label}
                    <Chevron className="-rotate-90 text-white/30" />
                  </Link>
                </Row>
              ),
            )}

            <Row className="mt-4">
              <Button href="/contact" size="lg" className="w-full" withArrow onClick={onClose}>
                Get a Quote
              </Button>
            </Row>

            <Row className="mt-4">
              <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm">
                <a href={site.phoneHref} className="py-1.5 text-white/70 hover:text-white">
                  {site.phoneDisplay}
                </a>
                <a href={site.emailHref} className="py-1.5 text-white/70 hover:text-white">
                  {site.emailDisplay}
                </a>
              </div>
            </Row>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Row({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={cn("h-3.5 w-3.5 transition-transform", className)} fill="none">
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Two-level accordion: Services -> service group -> pages. */
function ServicesAccordion({ onNavigate }: { onNavigate: () => void }) {
  const [openTop, setOpenTop] = useState(false);
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());

  const toggleGroup = (href: string) =>
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(href)) next.delete(href);
      else next.add(href);
      return next;
    });

  return (
    <Row>
      <div className="rounded-2xl">
        <button
          type="button"
          onClick={() => setOpenTop((v) => !v)}
          aria-expanded={openTop}
          className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-lg font-display font-semibold text-white transition-colors hover:bg-white/5"
        >
          Services
          <Chevron className={cn("text-white/40", openTop && "rotate-180")} />
        </button>

        <AnimatePresence initial={false}>
          {openTop && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="space-y-1 pb-2 pl-2 pr-1 pt-1">
                <Link
                  href="/services"
                  onClick={onNavigate}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-brand-300 hover:bg-white/5"
                >
                  All services overview
                </Link>

                {servicesNav.map((group) => {
                  const isOpen = openGroups.has(group.href);
                  return (
                    <div key={group.href} className="rounded-xl bg-white/[0.02]">
                      <button
                        type="button"
                        onClick={() => toggleGroup(group.href)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[15px] font-semibold text-white/90 hover:bg-white/5"
                      >
                        {group.label}
                        <Chevron className={cn("text-white/40", isOpen && "rotate-180")} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.26, ease: EASE }}
                            className="overflow-hidden pb-2"
                          >
                            {group.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={onNavigate}
                                  className="block rounded-lg px-6 py-3 text-sm text-white/60 hover:bg-white/5 hover:text-white"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Row>
  );
}
