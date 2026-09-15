"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  portfolioClients,
  portfolioCategories,
  categoryCount,
  type PortfolioCategoryKey,
} from "@/lib/portfolio";
import { ClientCard } from "@/components/portfolio/client-card";
import { ReelLightbox } from "@/components/portfolio/reel-lightbox";

type Filter = "all" | PortfolioCategoryKey;

export function PortfolioExplorer() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<{ id: string; index: number } | null>(null);

  const clients = useMemo(
    () =>
      filter === "all"
        ? portfolioClients
        : portfolioClients.filter((c) => c.categories.includes(filter)),
    [filter],
  );

  const activeClient = lightbox ? portfolioClients.find((c) => c.id === lightbox.id) ?? null : null;

  const options: { key: Filter; label: string }[] = [
    { key: "all", label: "All work" },
    ...portfolioCategories.map((c) => ({ key: c.key as Filter, label: c.label })),
  ];

  return (
    <div className="shell grid gap-8 lg:grid-cols-[228px_1fr] lg:gap-12">
      {/* ── filter ── */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <p className="mb-3 hidden text-xs font-semibold uppercase tracking-[0.2em] text-white/40 lg:block">
          Filter by service
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {options.map((o) => {
            const on = filter === o.key;
            return (
              <button
                key={o.key}
                onClick={() => setFilter(o.key)}
                className={cn(
                  "flex shrink-0 items-center justify-between gap-3 whitespace-nowrap rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-colors lg:w-full",
                  on
                    ? "border-brand-500 bg-brand-500/15 text-white"
                    : "border-white/10 text-white/60 hover:border-white/25 hover:text-white",
                )}
              >
                {o.label}
                <span className={cn("text-xs", on ? "text-brand-200" : "text-white/30")}>
                  {categoryCount(o.key)}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* ── results ── */}
      <div>
        <p className="mb-5 text-sm text-white/45">
          {clients.length} client{clients.length === 1 ? "" : "s"}
          {filter !== "all" && ` · ${options.find((o) => o.key === filter)?.label}`}
        </p>

        <motion.div layout={!reduce} className="grid gap-5 sm:gap-6 xl:grid-cols-2">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ClientCard
                client={client}
                onOpenReel={(index) => setLightbox({ id: client.id, index })}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ReelLightbox
        client={activeClient}
        index={lightbox?.index ?? 0}
        onClose={() => setLightbox(null)}
        onIndex={(index) => setLightbox((l) => (l ? { ...l, index } : l))}
      />
    </div>
  );
}
