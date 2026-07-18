import { Truck, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Why Choose Us", href: "#why-us" },
      { label: "How We Work", href: "#how-we-work" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "RDN Case Management", href: "#services" },
      { label: "Recovery Connect (RC)", href: "#services" },
      { label: "ClearData & ClearPlan", href: "#services" },
      { label: "Invoice Processing", href: "#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Free Trial", href: "#trial" },
      { label: "Industries We Serve", href: "#industries" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line pt-16">
      <div className="container-x pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Truck size={18} />
              </span>
              <span className="font-display text-[15px] font-semibold text-ink">
                Recovery Backend Services
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Backend operations support for repossession companies, lenders,
              and banks across the United States.
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-ink">
                <Mail size={14} /> {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phoneUSRaw}`} className="flex items-center gap-2 hover:text-ink">
                <Phone size={14} /> {siteConfig.phoneUS} (US)
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold text-ink">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-accent"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line py-6">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Backend support built for the US recovery industry.</p>
        </div>
      </div>
    </footer>
  );
}
