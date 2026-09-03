"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { GoogleReview } from "@/lib/reviews";
import { GoogleGlyph } from "@/components/home/google-glyph";

const EXCERPT_LIMIT = 240;

export function ReviewsCarousel({ reviews }: { reviews: GoogleReview[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* lg+: static 3-up grid · below lg: swipeable scroll-snap track */}
      <div
        ref={trackRef}
        className={cn(
          "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 mask-fade-x",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "lg:grid lg:snap-none lg:grid-cols-3 lg:overflow-visible lg:pb-0 lg:[mask-image:none]",
        )}
      >
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>

      {reviews.length > 1 && (
        <div className="mt-4 flex justify-center gap-2 lg:hidden">
          <CarouselButton label="Previous review" onClick={() => scrollByCard(-1)} dir="left" />
          <CarouselButton label="Next review" onClick={() => scrollByCard(1)} dir="right" />
        </div>
      )}
    </div>
  );
}

function CarouselButton({
  label,
  onClick,
  dir,
}: {
  label: string;
  onClick: () => void;
  dir: "left" | "right";
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition-colors hover:border-white/30 hover:text-white"
    >
      <svg
        viewBox="0 0 20 20"
        className={cn("h-4 w-4", dir === "left" && "rotate-180")}
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
    </button>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > EXCERPT_LIMIT;
  const shown =
    !isLong || expanded ? review.text : `${review.text.slice(0, EXCERPT_LIMIT).trimEnd()}…`;

  return (
    <article
      data-review-card
      className="card-surface flex w-[85vw] shrink-0 snap-start flex-col rounded-3xl p-6 xs:w-[78vw] sm:w-[46vw] lg:w-auto"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white"
        >
          {review.author.trim().charAt(0).toUpperCase() || "G"}
        </span>
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-semibold text-white">
            {review.author}
          </p>
          {review.relativeTime && (
            <p className="text-xs text-white/45">{review.relativeTime}</p>
          )}
        </div>
        <GoogleGlyph className="ml-auto h-4 w-4 shrink-0" />
      </div>

      <Stars rating={review.rating} />

      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
        {shown}
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="ml-1 font-semibold text-brand-300 hover:text-brand-200"
          >
            {expanded ? "Show less" : "Read More"}
          </button>
        )}
      </p>

      <a
        href={review.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white/70"
      >
        Posted on Google
      </a>
    </article>
  );
}

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <div className="mt-3 flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={cn("h-4 w-4", i < rounded ? "text-amber-400" : "text-white/15")}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="m10 1.8 2.47 5 5.53.8-4 3.9.94 5.5L10 20.4l-4.94 2.6.94-5.5-4-3.9 5.53-.8Z" />
        </svg>
      ))}
    </div>
  );
}
