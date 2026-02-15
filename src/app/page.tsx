import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/Hero";
import { AtmosphericTrust } from "@/components/core/AtmosphericTrust";
import { HardwareSpotlight } from "@/components/core/HardwareSpotlight";
import { BrandGrid } from "@/components/core/BrandGrid";

import { ProcessSection } from "@/components/core/ProcessSection";
import { SovereigntyAudit } from "@/components/core/SovereigntyAudit";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-black">
      <Header />

      {/* 1. HERO: Full Bleed Sanctuary */}
      <Hero />

      {/* 2. WHY WE RE DIFFERENT: The Surveillance Era (White) */}
      <AtmosphericTrust />

      {/* 3. HOW IT WORKS: The Node (Dark) */}
      <HardwareSpotlight />

      {/* 3.5 BRAND GRID: Local Compatibility */}
      <BrandGrid />



      {/* 3.7 THE PROCESS: Sovereignty Protocol */}
      <ProcessSection />

      {/* 4. HOME ASSESSMENT: Audit CTA (Light) */}
      <SovereigntyAudit />

      {/* Footer / GET IN TOUCH */}
      <Footer />
    </div>
  );
}
