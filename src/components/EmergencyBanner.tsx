import { Zap, Phone } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <div className="bg-amber text-charcoal py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-3 text-center">
        <Zap className="w-5 h-5 flex-shrink-0" />
        <span className="font-display font-bold text-sm sm:text-base uppercase tracking-wider">
          Same-Day Service Available — Call Now:
        </span>
        <a
          href="tel:7325550187"
          className="inline-flex items-center gap-1.5 font-display font-bold text-sm sm:text-base underline underline-offset-2 hover:no-underline"
        >
          <Phone className="w-4 h-4" />
          (732) 555-0187
        </a>
      </div>
    </div>
  );
}
