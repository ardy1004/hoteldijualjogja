import { motion } from "framer-motion";
import { FileText, CheckCircle } from "lucide-react";

export function LegalDocs() {
  const docs = [
    "SHM Bersih",
    "IMB Lengkap",
    "Izin Pemondokan Aktif",
    "Status On Bank (Outstanding ±14M)",
    "Skema Tebus Bank → AJB Notaris Umum",
    "Pajak Penjual & Pembeli ditanggung masing-masing pihak",
    "Biaya Notaris dibagi dua (50:50)"
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 luxury-shadow border border-border/50"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Legalitas & Administrasi
              </h2>
              <p className="text-muted text-sm">
                Status legalitas clear and clean, siap untuk proses transaksi yang aman dan transparan.
              </p>
            </div>
            
            <div className="md:w-2/3 w-full">
              <ul className="space-y-4">
                {docs.map((doc, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 bg-secondary/50 p-4 rounded-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-[#1C1C1C] font-medium leading-relaxed">{doc}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
