"use client";

import { useState, useEffect } from "react";
import { Wrench, Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Wrench className="w-6 h-6 text-amber" />
          <span className="font-display text-xl font-bold text-white tracking-wide uppercase">
            Ram&apos;s Garage
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-amber transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:7325550187"
            className="flex items-center gap-1.5 text-sm font-semibold text-white hover:text-amber transition-colors"
          >
            <Phone className="w-4 h-4" />
            (732) 555-0187
          </a>
          <a
            href="#contact"
            className="bg-amber hover:bg-amber-dark text-charcoal font-display font-bold text-sm uppercase tracking-wider px-5 py-2.5 rounded transition-colors"
          >
            Schedule Service
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-60"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-charcoal z-50 flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-5 right-4 text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-2xl font-bold uppercase text-white hover:text-amber transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:7325550187"
            className="flex items-center gap-2 text-amber font-bold text-lg mt-4"
          >
            <Phone className="w-5 h-5" />
            (732) 555-0187
          </a>
          <a
            href="#contact"
            className="bg-amber text-charcoal font-display font-bold uppercase px-8 py-3 rounded text-lg"
            onClick={() => setMobileOpen(false)}
          >
            Schedule Service
          </a>
        </div>
      )}
    </nav>
  );
}
