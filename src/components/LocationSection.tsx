import { MapPin, Phone, MessageSquare, Navigation, Instagram, Clock, ExternalLink } from 'lucide-react';
import { businessConfig, createWhatsAppBookingUrl } from '../config/businessConfig';

export function LocationSection() {
  return (
    <section
      id="contact"
      aria-label="Location and Contact"
      className="py-24 sm:py-32 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 px-3 sm:px-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-tag text-xs font-bold tracking-wider uppercase text-neutral-800 mb-4">
            <MapPin className="h-3.5 w-3.5 text-amber-600" />
            <span>Visit Our Salon</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 font-display">
            LOCATION &amp; CONTACT
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Conveniently located on Vasna - Bhayli Road, Vadodara.
          </p>
        </div>

        {/* 3D Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-8 items-stretch">
          {/* Details Column */}
          <div className="lg:col-span-6 glass-card-3d rounded-2xl sm:rounded-3xl p-4 sm:p-9 text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase">
                  Open Today
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight">
                CUT MASTER SALON UNISEX
              </h3>
              <p className="text-xs sm:text-sm font-medium text-amber-800 mt-1">
                {businessConfig.tagline}
              </p>

              {/* Address Box */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white/70 border border-neutral-200/80 shadow-xs flex items-start gap-3.5">
                <MapPin className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wide mb-1">
                    Salon Address
                  </div>
                  <address className="not-italic text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    34,35, Ground Floor SWC Hub,<br />
                    Opp. Rajpath Complex,<br />
                    Vasna - Bhayli Road, Bhayli,<br />
                    Vadodara - 391410, Gujarat
                  </address>
                </div>
              </div>

              {/* Hours Box */}
              <div className="mt-4 p-4 rounded-2xl bg-white/70 border border-neutral-200/80 shadow-xs flex items-center gap-3.5">
                <Clock className="h-5 w-5 text-amber-700 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Working Hours
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    {businessConfig.timings}
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="mt-4 p-4 rounded-2xl bg-white/70 border border-neutral-200/80 shadow-xs">
                <div className="text-xs font-bold text-neutral-900 uppercase tracking-wide mb-2 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-700" />
                  <span>Phone Inquiries</span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-neutral-800">
                  <a
                    href={`tel:${businessConfig.phonePrimary.replace(/\s+/g, '')}`}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {businessConfig.phonePrimary}
                  </a>
                  {businessConfig.phoneSecondary && (
                    <a
                      href={`tel:${businessConfig.phoneSecondary.replace(/\s+/g, '')}`}
                      className="hover:text-amber-800 transition-colors"
                    >
                      {businessConfig.phoneSecondary}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons: CALL NOW, WHATSAPP, GET DIRECTIONS, FOLLOW ON INSTAGRAM */}
            <div className="mt-8 grid grid-cols-2 gap-3 pt-4 border-t border-neutral-200/70">
              <a
                id="location-get-directions-btn"
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button-primary py-3 px-4 rounded-2xl text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 cursor-pointer text-center"
              >
                <Navigation className="h-3.5 w-3.5 text-amber-300" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                id="location-whatsapp-btn"
                href={createWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button-secondary py-3 px-4 rounded-2xl text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 text-emerald-800 border-emerald-200/70 cursor-pointer text-center"
              >
                <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                <span>WHATSAPP</span>
              </a>

              <a
                id="location-call-now-btn"
                href={`tel:${businessConfig.phonePrimary.replace(/\s+/g, '')}`}
                className="glass-button-secondary py-3 px-4 rounded-2xl text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 cursor-pointer text-center"
              >
                <Phone className="h-3.5 w-3.5 text-neutral-700" />
                <span>CALL NOW</span>
              </a>

              <a
                id="location-instagram-btn"
                href={businessConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button-secondary py-3 px-4 rounded-2xl text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 cursor-pointer text-center"
              >
                <Instagram className="h-3.5 w-3.5 text-pink-600" />
                <span>INSTAGRAM</span>
              </a>
            </div>
          </div>

          {/* Map Preview / Location Card */}
          <div className="lg:col-span-6 glass-card-3d rounded-2xl sm:rounded-3xl p-2 sm:p-4 flex flex-col justify-between overflow-hidden">
            <div className="relative w-full h-[360px] sm:h-full min-h-[340px] rounded-2xl overflow-hidden shadow-inner bg-stone-100 flex items-center justify-center group">
              {/* Stylized Map View Visual */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop)',
                }}
              />
              <div className="absolute inset-0 bg-stone-900/30 backdrop-blur-[1px]" />

              {/* Center Pin Indicator */}
              <div className="relative z-10 p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-white shadow-2xl text-center max-w-sm mx-4">
                <div className="h-12 w-12 rounded-full bg-neutral-900 text-amber-300 mx-auto flex items-center justify-center shadow-lg mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-neutral-900">
                  CUT MASTER SALON UNISEX
                </h4>
                <p className="text-xs text-neutral-600 mt-1">
                  SWC Hub, Vasna - Bhayli Road, Vadodara
                </p>

                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
