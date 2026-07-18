"use client";

import { motion } from "framer-motion";

// Signature element: an animated dispatch route — nods to the recovery
// industry's dispatch maps / case routing without literal truck clipart.
export function RouteLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M0 60 C 200 10, 300 110, 500 60 S 800 10, 1000 60 S 1150 90, 1200 60"
        stroke="url(#routeGrad)"
        strokeWidth="2"
        strokeDasharray="8 10"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgb(var(--primary))" stopOpacity="0" />
          <stop offset="15%" stopColor="rgb(var(--primary))" />
          <stop offset="50%" stopColor="rgb(var(--accent))" />
          <stop offset="85%" stopColor="rgb(var(--primary))" />
          <stop offset="100%" stopColor="rgb(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
