import { Play, Tv, Film, Music2, Trophy, Star } from "lucide-react";
import { Button } from "./ui/button";

const channels = [
  { name: "Trans TV", icon: <Tv className="w-5 h-5" /> },
  { name: "Trans 7", icon: <Tv className="w-5 h-5" /> },
  { name: "SCTV", icon: <Film className="w-5 h-5" /> },
  { name: "Indosiar", icon: <Music2 className="w-5 h-5" /> },
  { name: "RCTI", icon: <Tv className="w-5 h-5" /> },
  { name: "GTV", icon: <Trophy className="w-5 h-5" /> },
];

const EntertainmentSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
              <Tv className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Combo TV</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Hiburan Terlengkap ada di{" "}
              <span className="text-gradient-orange bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                Combo TV!
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nikmati paket internet super cepat ditambah dengan layanan TV berkualitas tinggi. Dapatkan akses ke lebih
              dari 70 channel favorit keluarga!
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">GRATIS Vidio Platinum</h4>
                  <p className="text-sm text-muted-foreground">Nonton film, series, dan olahraga premium</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center flex-shrink-0">
                  <Tv className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">70+ Channel TV</h4>
                  <p className="text-sm text-muted-foreground">Berita, hiburan, olahraga, dan anak-anak</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button variant="cta" size="xl" asChild>
              <a href="https://wa.me/6281234567890?text=Halo, saya tertarik dengan paket Combo TV. Mohon informasi lebih lanjut." target="_blank" rel="noopener noreferrer">
                <Tv className="w-5 h-5" />
                Tambah Combo TV
              </a>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative rounded-3xl gradient-hero p-8 shadow-glow-purple overflow-hidden">
              {/* Glow Effects */}
              <div className="absolute top-10 right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

              <div className="relative text-center text-white">
                <div className="w-20 h-20 rounded-2xl gradient-orange mx-auto mb-6 flex items-center justify-center shadow-glow-orange animate-pulse-glow">
                  <Play className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold mb-2">Vidio Platinum</h3>
                <p className="text-white/80 mb-6">Streaming Unlimited</p>

                {/* Star Rating */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                {/* Channel Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {channels.map((channel, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col items-center gap-1"
                    >
                      {channel.icon}
                      <span className="text-xs font-medium">{channel.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-sm text-white/60">+ 64 channel lainnya</div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 lg:right-10 animate-bounce-slow">
              <div className="px-4 py-2 rounded-full gradient-orange text-white font-bold shadow-glow-orange text-sm">
                GRATIS!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentSection;
