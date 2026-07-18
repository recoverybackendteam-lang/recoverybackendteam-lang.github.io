"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Send,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mbdvvlba", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("sent");
      form.reset();
    } else {
      alert("Failed to send your message. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
}

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Ready to reduce backend workload this week?"
          description="Tell us about your agency and we&apos;ll set up your free trial within 24 hours."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact info */}
          <div className="space-y-4">
            <motion.a
              href={`mailto:${siteConfig.email}`}
              whileHover={{ x: 4 }}
              className="glass flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-muted">Email us</p>
                <p className="font-display text-sm font-semibold text-ink">
                  {siteConfig.email}
                </p>
              </div>
            </motion.a>

            <motion.a
              href={`tel:${siteConfig.phoneUSRaw}`}
              whileHover={{ x: 4 }}
              className="glass flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-muted">Call us (US)</p>
                <p className="font-display text-sm font-semibold text-ink">
                  {siteConfig.phoneUS}
                </p>
              </div>
            </motion.a>

            <motion.a
              href={`tel:${siteConfig.phoneINRaw}`}
              whileHover={{ x: 4 }}
              className="glass flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-muted">Call us (India)</p>
                <p className="font-display text-sm font-semibold text-ink">
                  {siteConfig.phoneIN}
                </p>
              </div>
            </motion.a>

            <motion.a
              href={`https://wa.me/${siteConfig.phoneUSRaw.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="glass flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <MessageCircle size={18} />
              </span>
              <div>
                <p className="text-xs text-muted">Chat on WhatsApp</p>
                <p className="font-display text-sm font-semibold text-ink">
                  Message us directly
                </p>
              </div>
            </motion.a>

            {/* Map placeholder */}
            <div className="glass flex h-40 items-center justify-center rounded-2xl">
              <div className="flex flex-col items-center gap-2 text-muted">
                <MapPin size={22} className="text-accent" />
                <p className="text-xs">Serving recovery agencies nationwide, US</p>
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
                  aria-label="Social media link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-7 sm:p-9"
          >
            {status === "sent" ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={40} className="text-accent" />
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  Request received
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted">
                  We'll reach out within 24 hours to set up your free trial week.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-xs font-medium text-muted">
                    Full name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full rounded-xl border border-line bg-surface2/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-xs font-medium text-muted">
                    Company
                  </label>
                  <input
                    required
                    type="text"
                    name="company"
                    className="w-full rounded-xl border border-line bg-surface2/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                    placeholder="Your agency name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-xs font-medium text-muted">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-xl border border-line bg-surface2/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-xs font-medium text-muted">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-xl border border-line bg-surface2/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-medium text-muted">
                    What do you need help with?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-line bg-surface2/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                    placeholder="Tell us about your case volume and which portals you use..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    Send & Start Free Trial <Send size={15} />
                  </motion.button>
                  <p className="mt-3 text-center text-xs text-muted">
                    We&apos;ll follow up by email/phone within 24 hours.
                  </p>
                </div>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
