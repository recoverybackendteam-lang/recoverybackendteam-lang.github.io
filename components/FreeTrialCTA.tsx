"use client";

import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RouteLine } from "@/components/ui/RouteLine";

const included = [
  "Full Monday–Friday coverage",
  "Real cases, real turnaround",
  "No cost, no obligation",
];

export function FreeTrialCTA() {
  return (
    <section id="trial" className="relative py-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-primary/20 via-surface to-surface2/60 px-6 py-14 sm:px-14"
        >
          <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-accent">
                <CalendarDays size={14} />
                One Week. Zero Cost. Full Trial.
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                See our backend team in action — free for a full week.
              </h2>
              <p className="mt-4 max-w-lg text-muted">
                Monday through Friday, we run your real cases through our
                process so you can judge the accuracy and turnaround for
                yourself, before you commit to anything.
              </p>

              <ul className="mt-6 space-y-2.5">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink/90">
                    <CheckCircle2 size={16} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#contact" variant="primary">
                  Claim Your Free Trial
                </Button>
                <Button href="#contact" variant="secondary" icon={false}>
                  Talk to Our Team
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <RouteLine className="h-24 w-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
