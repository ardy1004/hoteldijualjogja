import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import type { InsertInquiry } from "@shared/schema";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { motion } from "framer-motion";
import { trackLeadSubmission } from "@/lib/metaPixel";

// WhatsApp number for receiving leads
const WHATSAPP_NUMBER = "6281391278889";

export function LeadForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      region: "",
      whatsapp: "",
      paymentPlan: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    // Track lead submission to Meta Pixel BEFORE opening WhatsApp
    // This ensures the event fires even if WhatsApp is blocked
    trackLeadSubmission({
      name: data.name,
      region: data.region,
      whatsapp: data.whatsapp,
      paymentPlan: data.paymentPlan,
    });
    
    // Format message for WhatsApp
    const message = `*New Lead Inquiry*%0A%0A` +
      `*Nama Lengkap:* ${encodeURIComponent(data.name)}%0A` +
      `*Asal Daerah:* ${encodeURIComponent(data.region)}%0A` +
      `*Nomor WhatsApp:* ${encodeURIComponent(data.whatsapp)}%0A` +
      `*Rencana Pembayaran:* ${encodeURIComponent(data.paymentPlan)}%0A%0A` +
      `_Lead dari Luxury Hotel Finder Website_`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const inputClass = "w-full px-4 py-4 rounded-xl bg-white border-2 border-border text-[#1C1C1C] placeholder:text-muted focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 text-lg";
  const labelClass = "block text-sm font-semibold text-[#1C1C1C] mb-2";

  return (
    <section className="py-24 bg-accent" id="lead-form">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 luxury-shadow border border-primary/20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Jadwalkan Survey & Diskusi
            </h2>
            <p className="text-muted text-lg">
              Isi form di bawah ini untuk terhubung langsung dengan representatif kami.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className={labelClass}>Nama Lengkap</label>
              <input
                id="name"
                type="text"
                {...register("name")}
                placeholder="Masukkan nama lengkap Anda"
                className={inputClass}
              />
              {errors.name && <p className="text-red-500 text-sm mt-2 font-medium">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="region" className={labelClass}>Asal Daerah</label>
              <input
                id="region"
                type="text"
                {...register("region")}
                placeholder="Contoh: Jakarta Selatan"
                className={inputClass}
              />
              {errors.region && <p className="text-red-500 text-sm mt-2 font-medium">{errors.region.message}</p>}
            </div>

            <div>
              <label htmlFor="whatsapp" className={labelClass}>Nomor WhatsApp Aktif</label>
              <input
                id="whatsapp"
                type="tel"
                {...register("whatsapp")}
                placeholder="Contoh: 081234567890"
                className={inputClass}
              />
              {errors.whatsapp && <p className="text-red-500 text-sm mt-2 font-medium">{errors.whatsapp.message}</p>}
            </div>

            <div>
              <label htmlFor="paymentPlan" className={labelClass}>Rencana Pembayaran</label>
              <div className="relative">
                <select
                  id="paymentPlan"
                  {...register("paymentPlan")}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="" disabled hidden>Pilih skema pembayaran</option>
                  <option value="Cash Keras">Cash Keras</option>
                  <option value="Cash Bertahap">Cash Bertahap</option>
                  <option value="KPR">KPR Bank</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
                  <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              {errors.paymentPlan && <p className="text-red-500 text-sm mt-2 font-medium">{errors.paymentPlan.message}</p>}
            </div>

            <div className="pt-4">
              <LuxuryButton 
                type="submit" 
                size="lg" 
                className="w-full"
              >
                Kirim ke WhatsApp
              </LuxuryButton>
              <p className="text-center text-sm text-muted mt-4">
                Data Anda aman dan rahasia. Anda akan diarahkan ke WhatsApp setelah form disubmit.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
