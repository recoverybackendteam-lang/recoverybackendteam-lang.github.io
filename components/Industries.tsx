"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Building2,
  Landmark,
  Banknote,
  Car,
  PackageSearch,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data";

const icons = [Truck, Building2, Landmark, Banknote, Car, PackageSearch];

export function Industries() {
  return (
    <section id="industries" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Purpose-built for the recovery and lending ecosystem."
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((ind, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center rounded-2xl border border-line px-4 py-8 text-center transition-colors hover:border-primary/40 hover:bg-surface/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-display text-sm font-semibold text-ink">
                  {ind.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {ind.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
