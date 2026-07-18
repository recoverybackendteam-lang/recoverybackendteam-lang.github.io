"use client";

import { motion } from "framer-motion";
import {
  FolderKanban,
  Network,
  ClipboardList,
  Database,
  CalendarClock,
  Globe,
  CheckCircle2,
  Receipt,
  BadgeDollarSign,
  UploadCloud,
  FileSearch,
  Warehouse,
  CalendarCheck,
  MonitorCheck,
  MessagesSquare,
  BarChart3,
  Headset,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/Button";

const icons = [
  FolderKanban,
  Network,
  ClipboardList,
  Database,
  CalendarClock,
  Globe,
  CheckCircle2,
  Receipt,
  BadgeDollarSign,
  UploadCloud,
  FileSearch,
  Warehouse,
  CalendarCheck,
  MonitorCheck,
  MessagesSquare,
  BarChart3,
  Headset,
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Handle"
            title="Every backend task your recovery operation runs on."
            description="From case creation to closure, we cover the full operational workflow across every major recovery portal."
          />
          <Button href="#trial" variant="secondary" icon={false} className="shrink-0">
            Start Free Trial
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.07 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 transition-colors duration-300 hover:border-primary/40"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/25" />
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon size={19} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
