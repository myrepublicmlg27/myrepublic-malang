import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import EntertainmentSection from "@/components/EntertainmentSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MyRepublic - Internet Unlimited Fiber Optik Tercepat | Gratis Instalasi</title>
        <meta
          name="description"
          content="Dapatkan internet fiber optik tercepat mulai 30 Mbps - 500 Mbps. Gratis instalasi senilai Rp500.000. Ping rendah untuk gaming, streaming tanpa buffer. Hubungi sekarang!"
        />
        <meta
          name="keywords"
          content="MyRepublic, internet fiber, internet unlimited, WiFi rumah, internet cepat, fiber optik, gaming internet, streaming"
        />
        <link rel="canonical" href="https://myrepublic.co.id" />
      </Helmet>

      <main className="min-h-screen">
        <HeroSection />
        <PricingSection />
        <FeaturesSection />
        <EntertainmentSection />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default Index;
