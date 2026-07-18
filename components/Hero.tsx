"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import { ShieldCheck, Clock, Truck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RouteLine } from "@/components/ui/RouteLine";
import { siteConfig } from "@/lib/data";

export function Hero() {
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mvY, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(springY, [-40, 40], [6, -6]);
  const rotateY = useTransform(springX, [-40, 40], [-6, 6]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mvX.set(e.clientX - rect.left - rect.width / 2);
    mvY.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-24 pt-40 sm:pt-48"
      onMouseMove={handleMouseMove}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute right-[5%] top-[30%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="noise absolute inset-0" />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Trusted by recovery agencies across the United States
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
            >
              Your Trusted{" "}
              <span className="text-gradient">Recovery Backend</span>{" "}
              Operations Partner
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button href="#trial" variant="primary">
                Start Free Trial
              </Button>
              <Button href="#contact" variant="secondary" icon={false}>
                Schedule a Call
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
            >
              {[
                { icon: ShieldCheck, label: "Secure & Confidential" },
                { icon: Clock, label: "Fast Turnaround" },
                { icon: Truck, label: "4+ Years in Recovery Ops" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-muted">
                  <item.icon size={16} className="text-accent" />
                  {item.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual: dispatch dashboard card with mouse parallax */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md perspective-[1000px]"
          >
            <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-card">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  Live Dispatch Board
                </span>
                <span className="flex h-2 w-2 animate-pulse rounded-full bg-accent" />
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { id: "CASE-4471", status: "Recovered", tone: "accent" },
                  { id: "CASE-4472", status: "In Transit", tone: "primary" },
                  { id: "CASE-4473", status: "Closed", tone: "muted" },
                ].map((row, i) => (
                  <motion.div
                    key={row.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    className="flex items-center justify-between rounded-xl bg-surface2/60 px-4 py-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <MapPin size={14} className="text-primary" />
                      <span className="font-mono text-xs text-ink">{row.id}</span>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                        row.tone === "accent"
                          ? "bg-accent/15 text-accent"
                          : row.tone === "primary"
                          ? "bg-primary/15 text-primary-light"
                          : "bg-white/5 text-muted"
                      }`}
                    >
                      {row.status}
                    </span>
                  </motion.div>
                ))}
              </div>

              <RouteLine className="mt-6 h-10 w-full opacity-80" />

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-surface2/60 p-3">
                  <p className="font-display text-xl font-semibold text-ink">98%</p>
                  <p className="text-[11px] text-muted">On-time turnaround</p>
                </div>
                <div className="rounded-xl bg-surface2/60 p-3">
                  <p className="font-display text-xl font-semibold text-ink">24hr</p>
                  <p className="text-[11px] text-muted">Avg. case update</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -left-8 top-10 hidden rounded-2xl px-4 py-3 shadow-card sm:block"
            >
              <p className="font-display text-lg font-semibold text-ink">4+ yrs</p>
              <p className="text-[11px] text-muted">Recovery expertise</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass absolute -right-6 bottom-4 hidden rounded-2xl px-4 py-3 shadow-card sm:block"
            >
              <p className="font-display text-lg font-semibold text-ink">Mon–Fri</p>
              <p className="text-[11px] text-muted">Full trial coverage</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
