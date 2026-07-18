"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="relative border-y border-line bg-surface/60">
      <div className="container-x grid grid-cols-2 gap-8 py-14 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
