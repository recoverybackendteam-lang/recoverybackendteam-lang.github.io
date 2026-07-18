"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howWeWork } from "@/lib/data";

export function HowWeWork() {
  return (
    <section id="how-we-work" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="How We Work"
          title="A straightforward path from first call to full coverage."
          description="Five steps, most agencies are fully onboarded within their trial week."
        />

        <div className="relative mt-16">
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line sm:block" />
          <div className="space-y-8">
            {howWeWork.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6"
              >
                <span className="glass relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-display text-lg font-semibold text-accent">
                  {step.step}
                </span>
                <div className="glass flex-1 rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
