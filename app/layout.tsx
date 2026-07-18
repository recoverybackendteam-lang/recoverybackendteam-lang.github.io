import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { siteConfig } from "@/lib/data";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.recoverybackendservices.com"),
  title: {
    default: `${siteConfig.name} | Recovery Industry Backend Support`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "recovery backend services",
    "repossession backend support",
    "RDN case management",
    "Recovery Connect support",
    "ClearPlan backend team",
    "repossession company outsourcing",
    "auto recovery data entry",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://www.recoverybackendservices.com",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneUSRaw,
    areaServed: "United States",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-bg text-ink antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
