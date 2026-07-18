"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What recovery teams say after working with us."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass flex flex-col rounded-2xl p-7"
            >
              <Quote size={22} className="text-accent" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-line pt-4">
                <p className="font-display text-sm font-semibold text-ink">
                  {t.name}
                </p>
                <p className="text-xs text-muted">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
