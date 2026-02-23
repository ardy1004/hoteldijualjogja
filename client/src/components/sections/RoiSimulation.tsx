import { motion } from "framer-motion";
import { TrendingUp, PieChart, Activity } from "lucide-react";

export function RoiSimulation() {
  const scenarios = [
    {
      title: "Skenario Konservatif",
      icon: <PieChart className="w-8 h-8 text-primary" />,
      monthly: "250 Juta",
      yearly: "3 Miliar",
      yield: "±12%",
      description: "Asumsi okupansi rata-rata normal tanpa optimalisasi agresif."
    },
    {
      title: "Skenario Optimisasi",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      monthly: "350 Juta",
      yearly: "4,2 Miliar",
      yield: "±16.8%",
      description: "Dengan perbaikan manajemen dan digital marketing terarah."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-5 pointer-events-none">
        <div className="absolute right-0 top-20 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
        <div className="absolute left-0 bottom-20 w-64 h-64 bg-primary rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Simulasi ROI & Proyeksi
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl font-medium text-[#1C1C1C]">
            Rentang Pendapatan Aktual: <span className="text-primary font-bold">200 – 400 Juta / bulan</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {scenarios.map((scenario, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-secondary rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-colors luxury-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  {scenario.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1C1C1C]" style={{ fontFamily: 'var(--font-display)' }}>
                  {scenario.title}
                </h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center border-b border-border/50 pb-4">
                  <span className="text-muted">Pendapatan Bulanan</span>
                  <span className="font-bold text-lg text-[#1C1C1C]">{scenario.monthly}</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-4">
                  <span className="text-muted">Pendapatan Tahunan</span>
                  <span className="font-bold text-lg text-[#1C1C1C]">{scenario.yearly}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Gross Yield (dari harga 25M)</span>
                  <span className="font-bold text-xl text-primary">{scenario.yield}</span>
                </div>
              </div>
              
              <p className="text-sm text-muted bg-white/50 p-4 rounded-lg">
                {scenario.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-accent rounded-2xl p-8 text-center border border-primary/20"
        >
          <Activity className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">Potensi Exit Strategy</h3>
          <p className="text-lg text-muted">
            Estimasi valuasi mencapai <span className="font-bold text-primary">35–40 Miliar</span> dalam 2–4 tahun mendatang dengan manajemen yang tepat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
