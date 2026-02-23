import { motion } from "framer-motion";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAnalysis = () => {
    document.getElementById("analysis")?.scrollIntoView({ behavior: "smooth" });
  };

  const highlights = [
    "Income 200–400 Juta per Bulan",
    "Replacement Cost ±32,44 Miliar",
    "Harga Akuisisi 25 Miliar (Nego)",
    "SHM & Izin Lengkap"
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:pt-0 lg:pb-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875314/IMAGE_1_aydkw0.webp"
          alt="Hotel 41 Kamar Jogja Exterior"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Ivory Gradient Overlay - Max 35% opacity on the dark side, fading to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF3E6]/95 via-[#FAF3E6]/80 to-transparent w-full md:w-[85%] lg:w-[70%]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-primary/30 rounded-full bg-white/50 backdrop-blur-sm">
              <span className="text-sm font-semibold tracking-widest text-primary uppercase">Investasi Premium</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Premium Rare Asset<br />
              Hotel 41 Kamar<br />
              <span className="text-primary italic">Ring 2 Jogja Kota</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#4B5563] mb-8 leading-relaxed">
              Aktif Produktif | Di Bawah Replacement Cost | Opportunity Capital Gain Signifikan
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-4 py-3 rounded-lg border border-white/40 shadow-sm w-fit"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium text-[#1C1C1C]">{text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <LuxuryButton size="lg" onClick={scrollToForm}>
                Hubungi Kami Sekarang
              </LuxuryButton>
              <LuxuryButton variant="outline" size="lg" onClick={scrollToAnalysis} className="bg-white/50 backdrop-blur-sm">
                Lihat Analisa Investasi
              </LuxuryButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
