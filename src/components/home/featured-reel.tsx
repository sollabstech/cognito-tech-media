"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { featuredReel } from "@/lib/content";
import { compactNum } from "@/lib/format";
import { useLiveNumber } from "@/hooks/use-live-number";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;
const { account, reels } = featuredReel;

function IgGlyph({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 12 18.6 6.6 6.6 0 0 0 12 5.4Zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6Zm6.8-11.2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
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

export function FeaturedReel() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { margin: "-12% 0px -12% 0px" });

  // arm the live numbers on view, with a timeout fallback
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    if (inView) return setArmed(true);
    const t = setTimeout(() => setArmed(true), 900);
    return () => clearTimeout(t);
  }, [inView]);

  const [activityIdx, setActivityIdx] = useState(0);
  useEffect(() => {
    if (reduce || !armed) return;
    const id = setInterval(
      () => setActivityIdx((i) => (i + 1) % featuredReel.activity.length),
      2800,
    );
    return () => clearInterval(id);
  }, [armed, reduce]);

  const posts = useLiveNumber(account.posts, armed);
  const followers = useLiveNumber(account.followers, armed, { tickMs: 6000, tickMax: 3 });
  const following = useLiveNumber(account.following, armed);

  return (
    <section ref={sectionRef} className="section relative overflow-hidden">
      <div className="shell">
        {/* header row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Live on Instagram
            </span>
            <h2 className="max-w-xl text-heading-1 sm:text-display-2">See the work in motion</h2>
            <p className="max-w-md text-body-lg text-white/60">{featuredReel.caption}</p>
          </Reveal>

          {/* live profile card — mirrors instagram.com/cognito_tech_media */}
          <Reveal className="w-full max-w-sm lg:w-auto">
            <a
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface glass-hover block rounded-2xl p-5"
            >
              <div className="flex items-center gap-3.5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-600 font-display text-[11px] font-bold lowercase text-white ring-2 ring-white/15">
                  cognito
                </span>
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
                    <span className="truncate">{account.name}</span>
                    {account.verified && <Verified className="h-3.5 w-3.5 shrink-0" />}
                  </p>
                  <p className="text-xs text-white/45">@{account.handle}</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 divide-x divide-white/10 text-center">
                {[
                  { n: posts, l: "posts" },
                  { n: followers, l: "followers" },
                  { n: following, l: "following" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-lg font-bold text-white tabular-nums">
                      {compactNum(s.n)}
                    </div>
                    <div className="text-[11px] text-white/45">{s.l}</div>
                  </div>
                ))}
              </div>
            </a>
          </Reveal>
        </div>

        {/* three accounts — a vertical stack on mobile (so all three reliably
            autoplay as you scroll), a 3-up grid on desktop */}
        <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6" gap={0.1}>
          {reels.map((reel, i) => (
            <StaggerItem key={i} y={26} className="mx-auto w-full max-w-[340px] sm:max-w-none">
              <ReelCard reel={reel} armed={armed} reduce={!!reduce} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* follow + ambient activity */}
        <Reveal className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={account.url} target="_blank" rel="noopener noreferrer" withArrow>
            <IgGlyph className="h-4 w-4" />
            Follow @{account.handle}
          </Button>
          <span className="inline-flex items-center gap-2 text-sm text-white/45">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <AnimatePresence mode="wait">
              <motion.span
                key={activityIdx}
                initial={reduce ? {} : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? {} : { opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {featuredReel.activity[activityIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </Reveal>
      </div>
    </section>
  );
}

function ReelCard({
  reel,
  armed,
  reduce,
}: {
  reel: (typeof reels)[number];
  armed: boolean;
  reduce: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const views = useLiveNumber(reel.views, armed, { tickMs: 1600, tickMax: 320 });
  const followers = useLiveNumber(reel.followers, armed, { tickMs: 5000, tickMax: 4 });

  // Autoplay all cards on every device — incl. mobile, where browsers only
  // start muted-inline video once it's on screen and often need one user
  // gesture. So: play on mount, on `canplay`, when it scrolls into view, and
  // after the first touch/pointer anywhere on the page.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;

    const play = () => {
      v.muted = true;
      v.play().then(() => setPlaying(true)).catch(() => {});
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) play();
      },
      { threshold: 0.35 },
    );
    io.observe(v);

    const onGesture = () => play();
    window.addEventListener("touchstart", onGesture, { once: true, passive: true });
    window.addEventListener("pointerdown", onGesture, { once: true });
    v.addEventListener("canplay", play, { once: true });
    play();

    return () => {
      io.disconnect();
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("pointerdown", onGesture);
      v.removeEventListener("canplay", play);
    };
  }, [reduce]);

  return (
    <a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`@${reel.handle} on Instagram — ${compactNum(followers)} followers, top reel ${compactNum(views)} views`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-3xl border border-white/12 bg-black transition-[transform,box-shadow,border-color] duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-brand-400/40 hover:shadow-[0_40px_90px_-40px_rgba(79,91,255,0.6)] sm:aspect-[9/16]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
        src={reel.videoSrc}
        poster={reel.poster || undefined}
        autoPlay={!reduce}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
      />

      {/* scrims */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/55 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/55 to-transparent" />

      {/* top: the Instagram account */}
      <div className="absolute inset-x-4 top-4 flex items-start gap-2.5 text-white">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-xs font-bold ring-2 ring-white/40">
          {reel.name.charAt(0)}
        </span>
        <div className="min-w-0 leading-tight">
          <span className="flex items-center gap-1 text-[13px] font-semibold drop-shadow">
            <span className="truncate">@{reel.handle}</span>
            {reel.verified && <Verified className="h-3 w-3 shrink-0" />}
          </span>
          <span className="text-[11px] font-medium text-white/70 tabular-nums drop-shadow">
            {compactNum(followers)} followers
          </span>
        </div>
        <span className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
          <svg viewBox="0 0 20 20" className="h-2.5 w-2.5" fill="currentColor">
            <path d="M6 4l10 6-10 6z" />
          </svg>
          Reel
        </span>
      </div>

      {/* the star: view count */}
      <div className="absolute inset-x-4 bottom-4">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
        >
          <div className="bg-gradient-to-b from-white to-white/70 bg-clip-text font-display text-[2.6rem] font-black leading-none tracking-tight tabular-nums text-transparent drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-[3rem]">
            {compactNum(views)}
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/55">
            views
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-white/55">{reel.label}</p>
        </motion.div>
      </div>

      {/* play affordance if autoplay was blocked */}
      {!playing && (
        <span className="pointer-events-none absolute inset-0 grid place-items-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/40">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M8 5l12 7-12 7z" />
            </svg>
          </span>
        </span>
      )}
    </a>
  );
}
