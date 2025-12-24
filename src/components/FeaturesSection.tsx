import { CloudOff, Download, Gauge, Infinity, Upload, Wifi, Zap } from "lucide-react";

const features = [
  {
    icon: <Infinity className="w-8 h-8" />,
    title: "Internet Bebas Kuota",
    description: "Streaming, download, dan browsing sepuasnya tanpa khawatir FUP atau pembatasan kuota.",
    color: "from-purple-500 to-primary",
  },
  {
    icon: <Upload className="w-8 h-8" />,
    title: "Upload & Download Simetris 1:1",
    description: "Kecepatan upload sama dengan download. Ideal untuk video call, streaming, dan cloud backup.",
    color: "from-accent to-orange-400",
  },
  {
    icon: <CloudOff className="w-8 h-8" />,
    title: "Koneksi Bebas Gangguan Cuaca",
    description: "Teknologi fiber optik 100% tahan hujan dan petir. Internet tetap stabil dalam kondisi apapun.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Koneksi Stabil Latensi Rendah",
    description: "Ping rendah di bawah 10ms. Sempurna untuk gaming online, trading, dan video conference.",
    color: "from-green-500 to-emerald-400",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Keunggulan Kami</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Mengapa Memilih <span className="text-gradient-purple">MyRepublic?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rasakan pengalaman internet terbaik dengan teknologi fiber optik dan layanan premium 24/7.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-card border border-border p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 text-white shadow-lg`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 relative">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative">{feature.description}</p>

              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Speed Comparison */}
        <div className="mt-16 rounded-3xl gradient-hero p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Kecepatan Internet <span className="text-accent">5x Lebih Cepat</span>
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Dibandingkan dengan provider internet kabel biasa, MyRepublic Fiber memberikan kecepatan hingga 5 kali
                lebih cepat dengan latensi yang jauh lebih rendah. Download film 4K hanya dalam hitungan menit!
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Download 500 Mbps</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                  <Upload className="w-4 h-4" />
                  <span className="text-sm font-medium">Upload 500 Mbps</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                  <Wifi className="w-4 h-4" />
                  <span className="text-sm font-medium">Ping &lt; 10ms</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block">
                <div className="text-6xl lg:text-8xl font-extrabold text-accent">5x</div>
                <div className="text-xl font-semibold text-white/80">Lebih Cepat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
