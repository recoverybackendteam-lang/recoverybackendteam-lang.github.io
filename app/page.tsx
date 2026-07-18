import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { PortalLogos } from "@/components/PortalLogos";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowWeWork } from "@/components/HowWeWork";
import { Industries } from "@/components/Industries";
import { Testimonials } from "@/components/Testimonials";
import { FreeTrialCTA } from "@/components/FreeTrialCTA";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <PortalLogos />
      <WhyChooseUs />
      <HowWeWork />
      <Industries />
      <Testimonials />
      <FreeTrialCTA />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
