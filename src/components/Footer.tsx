import { Clock } from "lucide-react";
import myRepublicLogo from "@/assets/myrepublic-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-myrepublic-purple-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6">
            <img src={myRepublicLogo} alt="MyRepublic" className="h-10" />
          </div>
          {/* Description */}
          <p className="text-white/70 max-w-md leading-relaxed">
            Penyedia layanan internet fiber optik tercepat di Indonesia. Memberikan pengalaman internet terbaik untuk
            keluarga Indonesia.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2024 MyRepublic Indonesia. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock className="w-4 h-4" />
              <span>Layanan tersedia 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
