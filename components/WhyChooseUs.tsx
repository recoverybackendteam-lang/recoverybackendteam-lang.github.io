"use client";

import { motion } from "framer-motion";
import {
  Award,
  Zap,
  Target,
  Users2,
  ShieldCheck,
  PiggyBank,
  GraduationCap,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/lib/data";

const icons = [
  Award,
  Zap,
  Target,
  Users2,
  ShieldCheck,
  PiggyBank,
  GraduationCap,
  TrendingUp,
  BadgeCheck,
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-surface/40 to-transparent" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Agencies Choose Us"
          title="Built to be your most reliable backend hire — without the hire."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-line p-5 transition-colors hover:border-accent/40 hover:bg-surface/60"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon size={16} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
