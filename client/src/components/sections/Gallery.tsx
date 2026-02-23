import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const images = [
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875316/IMAGE_4_hlotkt.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875324/IMAGE_15_kecszl.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875229/WhatsApp_Image_2022-03-08_at_10.10.52_a6rxob.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875229/unnamed_3_c6nvnv.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875228/unnamed_1_ld5yyn.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875228/WhatsApp_Image_2022-03-03_at_20.31.46_w86x3p.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875228/2023-03-23_tc2nkw.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875229/WhatsApp_Image_2022-03-07_at_14.00.08_cfun0y.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875229/IMG_0234_d33qvp.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875229/IMG_0228_vghvy4.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875230/WhatsApp_Image_2022-07-22_at_11.17.22_uaiugj.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875305/IMAGE_20_djpue9.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875315/IMAGE_2_i2reij.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771875321/IMAGE_12_bcgh86.webp"
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Fasilitas & Eksterior
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative group overflow-hidden rounded-xl cursor-pointer bg-secondary break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedIndex(i)}
            >
              <img 
                src={src} 
                alt={`Hotel 41 Gallery ${i+1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#1C1C1C]/0 group-hover:bg-[#1C1C1C]/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 w-10 h-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1C1C1C]/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-6 text-white/70 hover:text-white transition-colors p-4"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={images[selectedIndex]}
              alt={`Gallery view ${selectedIndex + 1}`}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              className="absolute right-6 text-white/70 hover:text-white transition-colors p-4"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            
            <div className="absolute bottom-6 text-white/50 text-sm tracking-widest">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
