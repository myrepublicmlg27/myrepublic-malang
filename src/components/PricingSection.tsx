import { Check, Gamepad2, Monitor, Play, Rocket, Star, Tv, Users } from "lucide-react";
import { Button } from "./ui/button";

interface PricingPlan {
  name: string;
  speed: string;
  devices: number;
  price: string;
  features: string[];
  bonus?: string[];
  popular?: boolean;
  icon: React.ReactNode;
}

const plans: PricingPlan[] = [
  {
    name: "Value",
    speed: "30 Mbps",
    devices: 3,
    price: "279.000",
    features: ["Internet Unlimited", "Upload & Download 1:1", "Free Router WiFi"],
    icon: <Users className="w-6 h-6" />,
  },
  {
    name: "Fast",
    speed: "50 Mbps",
    devices: 5,
    price: "349.000",
    features: ["Internet Unlimited", "Upload & Download 1:1", "Free Router WiFi"],
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    name: "Nova",
    speed: "100 Mbps",
    devices: 7,
    price: "449.000",
    features: ["Internet Unlimited", "Upload & Download 1:1", "Free Router WiFi"],
    bonus: ["Gratis Vidio Lite"],
    popular: true,
    icon: <Star className="w-6 h-6" />,
  },
  {
    name: "MyGamers",
    speed: "250 Mbps",
    devices: 10,
    price: "699.000",
    features: ["Internet Unlimited", "Upload & Download 1:1", "Free Router WiFi"],
    bonus: ["Gratis Vidio Lite", "IP Public Static"],
    icon: <Gamepad2 className="w-6 h-6" />,
  },
  {
    name: "Prime",
    speed: "500 Mbps",
    devices: 15,
    price: "999.000",
    features: ["Internet Unlimited", "Upload & Download 1:1", "Free Router WiFi"],
    bonus: ["Gratis Vidio Lite", "Kualitas 8K"],
    icon: <Monitor className="w-6 h-6" />,
  },
];

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const whatsappMessage = `Halo, saya tertarik dengan paket ${plan.name} ${plan.speed}. Mohon informasi lebih lanjut.`;
  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className={`relative rounded-3xl p-6 transition-all duration-300 hover-lift ${
        plan.popular
          ? "bg-gradient-to-b from-primary to-myrepublic-purple-dark text-white scale-105 shadow-glow-purple"
          : "bg-card border border-border shadow-card hover:shadow-card-hover"
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="px-5 py-1.5 rounded-full gradient-orange text-white text-xs font-bold shadow-glow-orange whitespace-nowrap">
            PALING POPULER
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
            plan.popular ? "bg-white/20" : "bg-secondary"
          }`}
        >
          <div className={plan.popular ? "text-white" : "text-primary"}>{plan.icon}</div>
        </div>
        <h3 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-foreground"}`}>
          {plan.name}
        </h3>
        <div
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
            plan.popular ? "bg-white/20 text-white" : "bg-accent/10 text-accent"
          }`}
        >
          {plan.speed}
        </div>
      </div>

      {/* Devices */}
      <div className="text-center mb-6">
        <p className={`text-sm ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
          Ideal hingga <span className="font-bold">{plan.devices} Device</span>
        </p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <div className={`text-sm ${plan.popular ? "text-white/60" : "text-muted-foreground"}`}>
          Mulai dari
        </div>
        <div className="flex items-baseline justify-center gap-1">
          <span className={`text-lg font-medium ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
            Rp
          </span>
          <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-primary"}`}>
            {plan.price}
          </span>
        </div>
        <div className={`text-sm ${plan.popular ? "text-white/60" : "text-muted-foreground"}`}>
          /bulan
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                plan.popular ? "bg-white/20" : "bg-primary/10"
              }`}
            >
              <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-primary"}`} />
            </div>
            <span className={`text-sm ${plan.popular ? "text-white/90" : "text-muted-foreground"}`}>
              {feature}
            </span>
          </div>
        ))}
        {plan.bonus?.map((bonus, index) => (
          <div key={`bonus-${index}`} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                plan.popular ? "bg-accent" : "bg-accent/20"
              }`}
            >
              <Star className={`w-3 h-3 ${plan.popular ? "text-white" : "text-accent"}`} />
            </div>
            <span className={`text-sm font-semibold ${plan.popular ? "text-accent" : "text-accent"}`}>
              {bonus}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button
        variant={plan.popular ? "cta" : "package"}
        className="w-full"
        size="lg"
        asChild
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Pilih Paket
        </a>
      </Button>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Pilih Paket <span className="text-gradient-purple">Terbaik</span> Untukmu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nikmati internet super cepat dengan harga terjangkau. Semua paket sudah termasuk instalasi gratis!
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-4">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground mb-4">
            * Harga belum termasuk PPN 11%. Syarat & ketentuan berlaku.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10">
            <Tv className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Tambah Combo TV untuk hiburan lengkap!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
