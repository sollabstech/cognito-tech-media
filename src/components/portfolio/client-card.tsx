"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { compactNum } from "@/lib/format";
import type { PortfolioClient, Reel } from "@/lib/portfolio";
import { GrowthMeter } from "@/components/portfolio/growth-meter";
import { BrandMark } from "@/components/portfolio/brand-mark";

/** Muted, looping autoplay preview of a reel. Click opens the lightbox. */
function ReelThumb({ reel, onOpen }: { reel: Reel; onOpen: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const play = () => {
      v.muted = true;
      v.play().catch(() => {});
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) play();
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    play();
    return () => io.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open reel: ${reel.caption}`}
      className="group/reel relative aspect-[9/16] overflow-hidden rounded-xl border border-white/10"
    >
      <video
        ref={ref}
        src={reel.videoSrc}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/reel:scale-105"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
      <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover/reel:opacity-100">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-black/55 text-white ring-1 ring-white/40">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 4H5v4M15 4h4v4M9 20H5v-4M15 20h4v-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
      <span className="absolute bottom-1.5 left-1.5 inline-flex items-center gap-1 rounded-full bg-black/55 px-1.5 py-0.5 text-[9px] font-bold text-white tabular-nums">
        <svg viewBox="0 0 20 20" className="h-2 w-2" fill="currentColor">
          <path d="M6 4l10 6-10 6z" />
        </svg>
        {compactNum(reel.views)}
      </span>
    </button>
  );
}

function Verified({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Verified">
      <path fill="#3897f0" d="m23 12-2.4-2.8.3-3.7-3.6-.8L15.4 1 12 2.5 8.6 1 6.7 4.7l-3.6.8.3 3.7L1 12l2.4 2.8-.3 3.7 3.6.8L8.6 23 12 21.5 15.4 23l1.9-3.7 3.6-.8-.3-3.7z" />
      <path fill="#fff" d="m10.6 15.6-2.9-2.9 1.3-1.3 1.6 1.6 4-4L16 10.3z" />
    </svg>
  );
}

export function ClientCard({
  client,
  onOpenReel,
}: {
  client: PortfolioClient;
  onOpenReel: (index: number) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const isIg = client.followersAfter > 0;
  const target = client.link || client.profileUrl || "#";

  return (
    <article ref={ref} className="card-surface glass-hover rounded-3xl p-5 sm:p-7">
      {/* header */}
      <div className="flex items-start gap-3.5">
        <BrandMark client={client} className="h-12 w-12" />
        <div className="min-w-0 flex-1">
          <h3 className="flex flex-wrap items-center gap-1.5 font-display text-lg font-bold text-white">
            {client.name}
            {client.verified && <Verified className="h-3.5 w-3.5" />}
          </h3>
          <p className="text-xs text-white/45">
            {client.handle ? `@${client.handle}` : client.industry}
            {client.handle && <span className="text-white/25"> · {client.industry}</span>}
          </p>
        </div>
        {target !== "#" && (
          <a
            href={target}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/12 text-white/60 transition-colors hover:border-white/30 hover:text-white"
            aria-label={`Visit ${client.name}`}
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13L13 7M8 7h5v5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>

      <p className="mt-3.5 text-sm leading-relaxed text-white/60">{client.summary}</p>

      {/* services */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {client.services.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/60"
          >
            {s}
          </span>
        ))}
      </div>

      {/* the result */}
      {isIg ? (
        <div className="mt-5">
          <GrowthMeter
            before={client.followersBefore}
            after={client.followersAfter}
            timeframe={client.timeframe}
            active={inView}
          />
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-white/40">Delivered</p>
          <p className="mt-1 font-display text-base font-semibold text-white">{client.deliverable}</p>
          {client.resultNote && (
            <p className="mt-2 inline-flex rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-bold text-brand-200">
              {client.resultNote}
            </p>
          )}
        </div>
      )}

      {/* extra deliverable line for clients who got both */}
      {isIg && client.deliverable && (
        <p className="mt-3 text-xs text-white/45">
          <span className="text-white/70">We also built:</span> {client.deliverable}
          {client.resultNote && <span className="text-white/40"> — {client.resultNote}</span>}
        </p>
      )}

      {/* reels */}
      {client.reels.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-white/40">
            Reels we produced
          </p>
          <div className="grid grid-cols-3 gap-2">
            {client.reels.map((reel, i) => (
              <ReelThumb key={i} reel={reel} onOpen={() => onOpenReel(i)} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
