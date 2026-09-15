"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Counts up from 0 to `target` once `active` flips true (or ~1.2s after mount as
 * a fallback, so it always animates even where an IntersectionObserver is slow
 * or a tab is backgrounded), then nudges the value up by small random amounts
 * every `tickMs` so a stat feels live. The count-up uses a time-based interval,
 * not rAF, so it also completes in a background tab. Reduced-motion users jump
 * straight to `target` with no drift.
 */
export function useLiveNumber(
  target: number,
  active: boolean,
  { countMs = 1100, tickMs = 2200, tickMax = 0 }: { countMs?: number; tickMs?: number; tickMax?: number } = {},
) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);
  const [fallback, setFallback] = useState(false);
  const ranRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => setFallback(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const go = active || fallback;

  // count-up — runs once, the first time `go` is true
  useEffect(() => {
    if (!go || ranRef.current) return;
    ranRef.current = true;

    if (reduce) {
      setValue(target);
      return;
    }
    const start = Date.now();
    const id = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / countMs);
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t >= 1) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
    // Only `go` — a `reduce`/`target` change post-hydration must not restart it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [go]);

  // live drift — first tick (tickMs >= 1800) always lands after the count-up
  useEffect(() => {
    if (reduce || !go || tickMax <= 0) return;
    const id = setInterval(
      () => setValue((v) => v + Math.floor(Math.random() * tickMax) + 1),
      tickMs,
    );
    return () => clearInterval(id);
  }, [go, reduce, tickMs, tickMax]);

  return value;
}
