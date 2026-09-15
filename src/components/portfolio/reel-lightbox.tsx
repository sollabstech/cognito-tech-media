"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { compactNum } from "@/lib/format";
import type { PortfolioClient } from "@/lib/portfolio";
import { BrandMark } from "@/components/portfolio/brand-mark";

export function ReelLightbox({
  client,
  index,
  onClose,
  onIndex,
}: {
  client: PortfolioClient | null;
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const open = !!client && client.reels.length > 0;
  const count = client?.reels.length ?? 0;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index < count - 1) onIndex(index + 1);
      if (e.key === "ArrowLeft" && index > 0) onIndex(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, count, onClose, onIndex]);

  if (!open || !client) return null;
  const reel = client.reels[index];
  if (!reel) return null;

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-[380px]"
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="mb-3 flex items-center gap-3 text-white">
          <BrandMark client={client} className="h-9 w-9" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{client.name}</p>
            {client.handle && <p className="text-xs text-white/50">@{client.handle}</p>}
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* video */}
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black">
          <video
            key={reel.videoSrc + index}
            className="aspect-[9/16] w-full object-cover"
            src={reel.videoSrc}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
          {count > 1 && (
            <>
              <NavBtn side="left" disabled={index === 0} onClick={() => onIndex(index - 1)} />
              <NavBtn side="right" disabled={index === count - 1} onClick={() => onIndex(index + 1)} />
            </>
          )}
        </div>

        {/* meta */}
        <div className="mt-3 flex items-center gap-4 text-sm text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
              <path d="M6 4l10 6-10 6z" />
            </svg>
            {compactNum(reel.views)} views
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12 21s-7-4.5-9.5-9C1 8.5 2.5 5 6 5c2 0 3.2 1.1 4 2.2C10.8 6.1 12 5 14 5c3.5 0 5 3.5 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
            </svg>
            {compactNum(reel.likes)}
          </span>
          <a
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1 font-semibold text-brand-300 hover:text-brand-200"
          >
            Open on Instagram
            <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13L13 7M8 7h5v5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <p className="mt-1.5 text-sm text-white/60">{reel.caption}</p>
      </motion.div>
    </div>
  );
}

function NavBtn({
  side,
  disabled,
  onClick,
}: {
  side: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={side === "left" ? "Previous reel" : "Next reel"}
      className={`absolute top-1/2 ${side === "left" ? "left-2" : "right-2"} grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white transition-opacity hover:bg-black/70 disabled:opacity-0`}
    >
      <svg
        viewBox="0 0 20 20"
        className={`h-5 w-5 ${side === "left" ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M7 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
