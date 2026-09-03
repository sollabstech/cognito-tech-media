"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { servicesNav } from "@/lib/site";
import { Button } from "@/components/ui/button";

const serviceOptions = [
  "Not sure yet",
  ...servicesNav.flatMap((g) => [g.label, ...g.children.map((c) => `— ${c.label}`)]),
];

const budgetOptions = [
  "Not sure yet",
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000+",
];

const fieldClass =
  "w-full rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3.5 text-[15px] text-white placeholder:text-white/35 transition-colors focus:border-brand-400 focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire to an email service / CRM endpoint (e.g. a route handler at /api/contact).
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="card-surface rounded-4xl p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-10 text-center"
          >
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-500/15 text-brand-300">
              <svg viewBox="0 0 20 20" className="h-6 w-6" fill="none">
                <path
                  d="m4 10.5 4 4 8-9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2 className="mt-4 font-display text-xl font-bold text-white">Thanks — got it</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-white/55">
              We&apos;ll reply within one business day. For anything urgent, call or WhatsApp us.
            </p>
            <Button
              variant="secondary"
              className="mt-6"
              onClick={() => setStatus("idle")}
            >
              Send another
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={onSubmit}
            className="grid grid-cols-1 gap-4"
          >
            <Field label="Name" htmlFor="name">
              <input id="name" name="name" required autoComplete="name" className={fieldClass} />
            </Field>
            <Field label="Business Name" htmlFor="business">
              <input id="business" name="business" autoComplete="organization" className={fieldClass} />
            </Field>
            <Field label="Phone" htmlFor="phone">
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                className={fieldClass}
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                className={fieldClass}
              />
            </Field>
            <Field label="Service" htmlFor="service">
              <select id="service" name="service" className={cn(fieldClass, "appearance-none")}>
                {serviceOptions.map((o) => (
                  <option key={o} value={o} className="bg-ink-raised">
                    {o}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Budget" htmlFor="budget">
              <select id="budget" name="budget" className={cn(fieldClass, "appearance-none")}>
                {budgetOptions.map((o) => (
                  <option key={o} value={o} className="bg-ink-raised">
                    {o}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Project Details" htmlFor="details">
              <textarea
                id="details"
                name="details"
                rows={5}
                required
                className={cn(fieldClass, "resize-y")}
                placeholder="What are you trying to build or grow?"
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              className="mt-2 w-full"
              withArrow
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </Button>
            <p className="text-center text-xs text-white/35">
              By sending this you agree to be contacted about your enquiry.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-white/70">{label}</span>
      {children}
    </label>
  );
}
