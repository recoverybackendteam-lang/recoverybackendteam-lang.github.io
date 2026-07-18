"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  href = "#",
  variant = "primary",
  icon = true,
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent";

  const styles = {
    primary:
      "bg-primary text-white shadow-glow hover:bg-primary-light hover:shadow-[0_0_70px_-10px_rgb(var(--primary)/0.7)]",
    secondary:
      "glass text-ink hover:border-accent/50",
    ghost: "text-ink hover:text-accent",
  };

  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
      {icon && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </motion.a>
  );
}
