import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { Analysis } from "@/components/sections/Analysis";
import { RoiSimulation } from "@/components/sections/RoiSimulation";
import { LegalDocs } from "@/components/sections/LegalDocs";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { LeadForm } from "@/components/sections/LeadForm";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      {/* Navigation Header - Minimalist */}
      <header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="font-bold text-xl tracking-wider text-[#1C1C1C]" style={{ fontFamily: 'var(--font-display)' }}>
            HOTEL 41 <span className="text-primary italic">JOGJA</span>
          </div>
          <button 
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm font-semibold tracking-wide text-primary hover:text-primary/80 transition-colors hidden sm:block uppercase"
          >
            HUBUNGI KAMI
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <Disclaimer />
        <Analysis />
        <Gallery />
        <RoiSimulation />
        <LegalDocs />
        <LeadForm />
      </main>

      <footer className="bg-[#1C1C1C] text-white py-12 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Hotel 41 Jogja
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Premium investment opportunity in the heart of Yogyakarta. Exclusive listing for direct buyers.
          </p>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Exclusive Property Listing. All rights reserved.
          </p>
        </div>
      </footer>

      <StickyWhatsApp />
    </div>
  );
}
