import { Scissors, MapPin, Phone, Instagram, MessageSquare, ArrowUp } from 'lucide-react';
import { businessConfig, createWhatsAppBookingUrl } from '../config/businessConfig';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="main-footer"
      className="relative z-10 pt-16 pb-24 sm:pb-16 border-t border-neutral-200/80 bg-white/70 backdrop-blur-xl text-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-200/70">
          {/* Brand Info */}
          <div className="lg:col-span-5 text-left">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-neutral-900 text-amber-200 flex items-center justify-center shadow-md">
                <Scissors className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl tracking-wider text-neutral-900">
                  CUT MASTER SALON UNISEX
                </h3>
                <p className="text-xs tracking-widest text-neutral-500 font-semibold uppercase mt-0.5">
                  Hair • Beauty • Grooming
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed">
              Professional hair styling, grooming, skin rituals, and luxury bridal artistry for men and women in Bhayli, Vadodara.
            </p>

            <div className="mt-5 flex items-center gap-4 text-xs text-neutral-600">
              <a
                href={`tel:${businessConfig.phonePrimary.replace(/\s+/g, '')}`}
                className="hover:text-neutral-950 font-semibold flex items-center gap-1.5"
              >
                <Phone className="h-3.5 w-3.5 text-amber-700" />
                <span>{businessConfig.phonePrimary}</span>
              </a>
              <span>•</span>
              <span className="font-medium">{businessConfig.timings}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-display font-bold text-sm tracking-wider text-neutral-900 uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-neutral-600">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-neutral-950 transition-colors inline-block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Social */}
          <div className="lg:col-span-4 text-left">
            <h4 className="font-display font-bold text-sm tracking-wider text-neutral-900 uppercase mb-4">
              Address
            </h4>
            <address className="not-italic text-xs sm:text-sm text-neutral-600 leading-relaxed">
              34,35, Ground Floor SWC Hub,<br />
              Opp. Rajpath Complex,<br />
              Vasna - Bhayli Road,<br />
              Bhayli,<br />
              Vadodara - 391410
            </address>

            <div className="mt-5">
              <h5 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                Social
              </h5>
              <div className="flex items-center gap-3">
                <a
                  href={businessConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-neutral-200"
                >
                  <Instagram className="h-3.5 w-3.5 text-pink-600" />
                  <span>Instagram</span>
                </a>
                <a
                  href={createWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-emerald-200"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Cut Master Salon Unisex. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-700 hover:text-neutral-950 transition-colors p-1 rounded-lg cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
