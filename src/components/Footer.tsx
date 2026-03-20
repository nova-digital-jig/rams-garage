import { Wrench, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gray-medium/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="w-5 h-5 text-amber" />
              <span className="font-display text-lg font-bold text-white uppercase">
                Ram&apos;s Garage
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Edison&apos;s trusted auto repair shop since 1987. ASE Certified, A+ BBB
              Rated. Honest work at fair prices.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li><a href="#services" className="hover:text-amber transition-colors">Oil Changes</a></li>
              <li><a href="#services" className="hover:text-amber transition-colors">Brake Repair</a></li>
              <li><a href="#services" className="hover:text-amber transition-colors">Engine Diagnostics</a></li>
              <li><a href="#services" className="hover:text-amber transition-colors">NJ State Inspection</a></li>
              <li><a href="#services" className="hover:text-amber transition-colors">Transmission Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-text-muted text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber" />
                <a href="tel:7325550187" className="hover:text-amber transition-colors">
                  (732) 555-0187
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber" />
                <a href="mailto:info@ramsgarage.com" className="hover:text-amber transition-colors">
                  info@ramsgarage.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber mt-0.5" />
                <span>123 Main St, Edison, NJ 08817</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Hours
            </h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-white">7:30 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">8:00 AM – 3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-medium/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-text-muted text-xs">
          <p>
            Serving Edison, Metuchen, Woodbridge & Piscataway
          </p>
          <p>
            &copy; 2026 Ram&apos;s Garage. Website by{" "}
            <a
              href="https://nova-digital-nextjs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:underline"
            >
              Nova Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
