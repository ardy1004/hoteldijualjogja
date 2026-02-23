import { motion } from "framer-motion";
import { TrendingDown, ArrowRight, Building2, MapPin } from "lucide-react";

export function Analysis() {
  return (
    <section className="py-24 bg-secondary" id="analysis">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Analisa Investasi
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Perbandingan nilai riil aset dengan penawaran akuisisi saat ini.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 lg:p-10 luxury-shadow border border-border/50"
          >
            <h3 className="text-2xl font-bold mb-8 text-[#1C1C1C] border-b border-border/50 pb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Replacement Cost
            </h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C1C1C]">Nilai Tanah</p>
                    <p className="text-sm text-muted">2.084 m² × Rp 10.000.000</p>
                  </div>
                </div>
                <p className="font-bold text-lg text-[#1C1C1C]">Rp 20.84 M</p>
              </div>

              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Building2 className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C1C1C]">Nilai Bangunan</p>
                    <p className="text-sm text-muted">2.900 m² × Rp 4.000.000</p>
                  </div>
                </div>
                <p className="font-bold text-lg text-[#1C1C1C]">Rp 11.60 M</p>
              </div>

              <div className="pt-6 border-t border-border/50">
                <div className="flex justify-between items-center bg-secondary p-4 rounded-xl">
                  <p className="font-bold text-[#1C1C1C]">Total Replacement Cost</p>
                  <p className="font-bold text-xl text-primary">Rp 32.440.000.000</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-accent rounded-2xl p-8 border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-4 -mt-4"></div>
              
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="text-primary w-6 h-6" />
                <h3 className="text-xl font-bold text-[#1C1C1C]" style={{ fontFamily: 'var(--font-display)' }}>
                  Penawaran Akuisisi
                </h3>
              </div>
              
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
                Rp 25 Miliar
              </p>
              <p className="text-muted font-medium">(Negotiable)</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-border/50 luxury-shadow">
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Margin Potensial
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-muted">Selisih nilai aset vs harga</p>
                <div className="flex items-center gap-2 text-green-600 font-bold text-2xl">
                  <ArrowRight className="w-5 h-5" />
                  ±Rp 7.44 Miliar
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
