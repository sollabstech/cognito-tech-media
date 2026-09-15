"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { mainNav, servicesNav } from "@/lib/site";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/site/mobile-nav";

export function SiteHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // desktop "Services" mega menu

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "glass-strong border-b border-white/10"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Logo />

        {/* ---------- Desktop nav ---------- */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.groups ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <Link
                  href={item.href}
                  onFocus={() => setMenuOpen(true)}
                  aria-expanded={menuOpen}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/70 hover:text-white",
                  )}
                >
                  {item.label}
                  <svg
                    viewBox="0 0 12 12"
                    className={cn(
                      "h-3 w-3 transition-transform duration-300",
                      menuOpen && "rotate-180",
                    )}
                    fill="none"
                  >
                    <path
                      d="M2.5 4.5 6 8l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <AnimatePresence>
                  {menuOpen && (
                    <motion.div
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 pt-3"
                    >
                      <div className="glass grid grid-cols-3 gap-2 rounded-3xl p-3 shadow-glow">
                        {servicesNav.map((group) => (
                          <div key={group.href} className="rounded-2xl p-3">
                            <Link
                              href={group.href}
                              className="block text-sm font-semibold text-white hover:text-brand-300"
                            >
                              {group.label}
                            </Link>
                            <ul className="mt-2 space-y-0.5">
                              {group.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="block rounded-lg px-2 py-1.5 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-white"
                    : "text-white/70 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="md" withArrow>
            Get a Quote
          </Button>
        </div>

        {/* ---------- Mobile toggle ---------- */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-4 w-6">
            <motion.span
              className="absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-current"
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="absolute left-0 top-[7px] block h-0.5 w-6 rounded-full bg-current"
              animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute left-0 top-[14px] block h-0.5 w-6 rounded-full bg-current"
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
        </button>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
