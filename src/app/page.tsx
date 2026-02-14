import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/Hero";
import { AtmosphericTrust } from "@/components/core/AtmosphericTrust";
import { HardwareSpotlight } from "@/components/core/HardwareSpotlight";
import { BrandGrid } from "@/components/core/BrandGrid";
import { SovereigntyAudit } from "@/components/core/SovereigntyAudit";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-black">
      <Header />

      {/* 1. HERO: Full Bleed Sanctuary */}
      <Hero />

      {/* 2. THE PROBLEM: The Surveillance Era (White) */}
      <AtmosphericTrust />

      {/* 3. THE SOLUTION: The Node (Dark) */}
      <HardwareSpotlight />

      {/* 3.5 BRAND GRID: Local Compatibility */}
      <BrandGrid />

      {/* 4. THE ACTION: Audit CTA (Light) */}
      <SovereigntyAudit />

      {/* Footer */}
      <Footer />
    </div>
  );
}
