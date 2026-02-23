import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function StickyWhatsApp() {
  const handleClick = () => {
    window.open("https://wa.me/6281391278889", "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip that shows on hover for desktop */}
      <span className="absolute right-full mr-4 bg-white text-[#1C1C1C] px-4 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block">
        Tanya Info Detail
      </span>
      
      {/* Ripple animation effect behind */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20"></span>
    </motion.button>
  );
}
