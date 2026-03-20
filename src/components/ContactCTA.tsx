"use client";

import { useEffect, useRef } from "react";
import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".fade-up").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="bg-charcoal py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — CTA + Info */}
          <div>
            <h2 className="fade-up font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-4">
              Ready to Get Your Car Fixed?
            </h2>
            <p className="fade-up fade-up-delay-1 text-text-muted text-lg mb-6">
              Car trouble? Don&apos;t wait. Call now or fill out the form and we&apos;ll get you
              back on the road fast.
            </p>

            {/* Giant phone number */}
            <a
              href="tel:7325550187"
              className="fade-up fade-up-delay-2 inline-flex items-center gap-3 mb-10"
            >
              <div className="w-14 h-14 rounded-full bg-amber flex items-center justify-center">
                <Phone className="w-6 h-6 text-charcoal" />
              </div>
              <span className="font-display text-3xl sm:text-4xl font-bold text-amber">
                (732) 555-0187
              </span>
            </a>

            {/* Info */}
            <div className="fade-up fade-up-delay-3 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">123 Main St, Edison, NJ 08817</p>
                  <p className="text-text-muted text-sm">
                    Serving Edison, Metuchen, Woodbridge & Piscataway
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Mon–Fri: 7:30 AM – 6:00 PM</p>
                  <p className="text-text-muted text-sm">Sat: 8:00 AM – 3:00 PM · Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="fade-up fade-up-delay-2">
            <form
              className="bg-charcoal-light rounded-xl p-6 sm:p-8 border border-gray-medium/30 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                Schedule Service
              </h3>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="w-full bg-charcoal border border-gray-medium/50 rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-amber transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(732) 000-0000"
                  className="w-full bg-charcoal border border-gray-medium/50 rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-amber transition-colors"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-1.5">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-charcoal border border-gray-medium/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Oil Change</option>
                  <option>Brake Repair</option>
                  <option>Engine Diagnostics</option>
                  <option>NJ State Inspection</option>
                  <option>Transmission Service</option>
                  <option>A/C &amp; Heating</option>
                  <option>Tire Services</option>
                  <option>General Repair</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Describe the issue..."
                  className="w-full bg-charcoal border border-gray-medium/50 rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-amber transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber hover:bg-amber-dark text-charcoal font-display font-bold text-base uppercase tracking-wider py-3.5 rounded-lg transition-colors"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>

        {/* Map Embed */}
        <div className="fade-up mt-12 rounded-xl overflow-hidden h-64 sm:h-80 border border-gray-medium/30">
          <iframe
            title="Ram's Garage Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48556.89867655!2d-74.4121!3d40.5187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b60e3bf4c7e5%3A0x3e1b4f8a14edcaab!2sEdison%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
