import { Rocket, Zap, Wifi } from "lucide-react";
import { Button } from "./ui/button";
import myRepublicLogo from "@/assets/myrepublic-logo.png";

const HeroSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-myrepublic-purple-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-myrepublic-orange/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-16 lg:mb-24">
          <div className="flex items-center">
            <img src={myRepublicLogo} alt="MyRepublic" className="h-10 md:h-12" />
          </div>
          <Button variant="hero" size="lg" onClick={scrollToPricing}>
            Lihat Paket
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Promo Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 mb-8 animate-pulse-glow">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-white font-semibold text-sm md:text-base">
              PROMO HARI INI: GRATIS INSTALASI (Hemat Rp500.000)
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Internet Unlimited
            <br />
            <span className="text-gradient-orange bg-gradient-to-r from-accent to-orange-300 bg-clip-text text-transparent">
              Bikin Kantong Makin Irit!
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Drakoran Sepuasnya, Gak Takut Kehabisan Kuota.
            <br className="hidden md:block" />
            <span className="text-accent font-semibold">Ping Rendah untuk Gaming Lebih Hebat!</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="xl" onClick={scrollToPricing}>
              <Rocket className="w-5 h-5" />
              Pilih Paket Sekarang
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">100% Fiber Optic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Up to 500 Mbps</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(270 50% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
