"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LinkItem = { label: string; href: string };

/** Footer link group: a plain column on desktop, a tap-to-expand accordion on mobile. */
export function FooterColumn({ title, links }: { title: string; links: readonly LinkItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-4 lg:border-0 lg:py-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left lg:pointer-events-none"
      >
        <span className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
          {title}
        </span>
        <svg
          viewBox="0 0 12 12"
          className={cn("h-3.5 w-3.5 text-white/40 transition-transform lg:hidden", open && "rotate-180")}
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

      <ul className={cn("mt-3 space-y-2.5 lg:!block", open ? "block" : "hidden")}>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-white/55 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
