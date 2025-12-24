import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/6281234567890?text=Halo, saya tertarik dengan layanan MyRepublic. Mohon informasi lebih lanjut.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat via WhatsApp"
    >
      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      
      {/* Main Button */}
      <div className="relative flex items-center gap-3 pl-5 pr-6 py-3 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </div>
        <div className="hidden sm:block">
          <div className="text-xs font-medium opacity-90">Chat Sekarang</div>
          <div className="text-sm font-bold">Konsultasi Gratis</div>
        </div>
      </div>

      {/* Tooltip for mobile */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap sm:hidden">
        Konsultasi Gratis Sekarang
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
