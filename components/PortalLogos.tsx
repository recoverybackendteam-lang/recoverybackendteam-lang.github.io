"use client";

import { motion } from "framer-motion";
import { portals } from "@/lib/data";

export function PortalLogos() {
  const doubled = [...portals, ...portals];

  return (
    <section className="relative overflow-hidden py-16">
      <div className="container-x mb-8 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          Working every day inside
        </span>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

        <div className="flex w-max animate-marquee gap-6">
          {doubled.map((portal, i) => (
            <motion.div
              key={`${portal}-${i}`}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 5) * 0.3,
              }}
              className="glass flex h-20 w-48 shrink-0 items-center justify-center rounded-2xl px-6 transition-colors hover:border-accent/50"
            >
              <span className="font-display text-lg font-semibold text-ink/90">
                {portal}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
