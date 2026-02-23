import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export function Disclaimer() {
  return (
    <section className="py-12 bg-white px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-red-50 border-2 border-[#B91C1C] rounded-xl p-6 md:p-8 flex gap-6 items-start shadow-sm"
      >
        <div className="bg-[#B91C1C] p-3 rounded-full shrink-0">
          <AlertTriangle className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#B91C1C] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            Perhatian Khusus
          </h3>
          <p className="text-red-950/80 font-medium leading-relaxed text-sm md:text-base">
            Properti ini dipasarkan khusus untuk <strong>CALON PEMBELI LANGSUNG (END BUYER)</strong>. 
            Tidak menerima kerja sama dengan broker, agen, perantara, mediator, atau pihak yang mengatasnamakan pembeli. 
            Jika Anda bukan pembeli langsung dengan kesiapan pembiayaan, mohon tidak menghubungi dan tidak mengisi form. 
            Hanya investor serius yang akan ditanggapi.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
