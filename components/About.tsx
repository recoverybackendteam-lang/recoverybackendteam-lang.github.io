"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Users, Lock, Gauge } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "A consistent backend team assigned to your accounts — not a rotating help desk.",
  },
  {
    icon: Gauge,
    title: "Built for Volume",
    desc: "Processes designed to handle high case volume without accuracy dropping off.",
  },
  {
    icon: Lock,
    title: "Confidential by Default",
    desc: "Strict data handling practices across every client and vendor interaction.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="About Recovery Backend Services"
          title="The backend office recovery agencies wish they had in-house."
          description="For 4+ years, we've handled the operational backbone of recovery businesses — case management, documentation, and reporting — so agencies can put their full attention on the field."
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass rounded-2xl p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <pillar.icon size={18} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
