"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { posts, blogCategories } from "@/lib/blog";

export function BlogList() {
  const reduce = useReducedMotion();
  const [cat, setCat] = useState("All");
  const list = posts.filter((p) => cat === "All" || p.category === cat);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {blogCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              cat === c
                ? "border-brand-500 bg-brand-500/15 text-white"
                : "border-white/12 text-white/60 hover:border-white/30 hover:text-white",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout={!reduce} className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              key={p.slug}
              layout={!reduce}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <Link
                href={`/blog/${p.slug}`}
                className="card-surface group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-brand-500/40"
              >
                <div className="flex items-center gap-2 text-xs text-white/45">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-semibold text-white/70">
                    {p.category}
                  </span>
                  <time dateTime={p.date}>{p.dateLabel}</time>
                </div>
                <h2 className="mt-4 font-display text-lg font-semibold leading-snug text-white">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                  Read article
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                  >
                    <path
                      d="M4 10h11M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
