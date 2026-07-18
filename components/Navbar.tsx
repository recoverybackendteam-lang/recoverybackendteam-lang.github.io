"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/lib/theme-provider";
import { Button } from "@/components/ui/Button";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-card" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5">
            <Image
  src="/logo.png"
  alt="Recovery Backend Services"
  width={42}
  height={42}
  className="rounded-xl object-contain"
  priority
/>
            <span className="font-display text-[15px] font-semibold leading-tight text-ink">
              Recovery Backend
              <span className="block text-[11px] font-medium tracking-[0.2em] text-muted">
                SERVICES
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-accent"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <Button href="#trial" variant="primary" className="!px-5 !py-2.5 text-[13px]">
              Start Free Trial
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="container-x overflow-hidden lg:hidden"
          >
            <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-primary/10 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-3 px-3">
                <button
                  onClick={toggleTheme}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted"
                >
                  {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
                </button>
                <Button href="#trial" className="flex-1 !py-2.5 text-[13px]">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
