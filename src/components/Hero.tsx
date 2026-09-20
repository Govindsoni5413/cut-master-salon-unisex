import { motion } from 'motion/react';
import { MapPin, Sparkles, ArrowRight, Calendar, Scissors, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { businessConfig, createWhatsAppBookingUrl } from '../config/businessConfig';

interface HeroProps {
  onExploreServices: () => void;
  onOpenBookingModal: () => void;
}

export function Hero({ onExploreServices, onOpenBookingModal }: HeroProps) {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-[92vh] pt-28 sm:pt-32 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ================= LEFT HERO COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Location Pill / 3D Label */}
            <div
              id="hero-location-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-tag text-xs font-semibold tracking-wide text-neutral-800 mb-6"
            >
              <MapPin className="h-3.5 w-3.5 text-amber-600" />
              <span>{businessConfig.city}, {businessConfig.state}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-medium text-neutral-500">Unisex Salon</span>
            </div>

            {/* Main Brand Headings */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.08]">
              <span className="font-display block">CUT MASTER</span>
              <span className="font-display font-medium text-neutral-800 text-3xl sm:text-4xl lg:text-5xl block mt-1">
                SALON UNISEX
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 text-lg sm:text-xl font-medium text-neutral-800 tracking-tight">
              Premium Hair &amp; Beauty Experience in Vadodara
            </p>

            {/* Supporting Copy */}
            <p className="mt-3 text-base text-neutral-600 max-w-xl leading-relaxed">
              Professional hair styling, grooming and beauty services designed around your personal style.
            </p>

            {/* Quality Indicators without fabricated statistics */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-neutral-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-amber-600" />
                <span>Dedicated Men &amp; Women Suites</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-amber-600" />
                <span>Transparent Menu &amp; Pricing</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                id="hero-book-appointment-btn"
                onClick={onOpenBookingModal}
                className="glass-button-primary w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wider flex items-center justify-center gap-2.5 cursor-pointer shadow-lg active:scale-98"
              >
                <Calendar className="h-4 w-4 text-amber-300" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <button
                id="hero-explore-services-btn"
                onClick={onExploreServices}
                className="glass-button-secondary w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="h-4 w-4 text-neutral-500" />
              </button>
            </div>

            {/* Contact Quick Link */}
            <div className="mt-6 text-xs text-neutral-500 flex flex-wrap items-center gap-2">
              <span>Direct WhatsApp:</span>
              <a
                href={createWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-neutral-900 underline decoration-amber-400 underline-offset-4 hover:text-amber-800 transition-colors"
              >
                {businessConfig.phonePrimary}
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT HERO COLUMN (3D GLASS FRAME) ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0"
          >
            {/* Ambient Back Glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 bg-gradient-to-tr from-amber-100/50 via-white/40 to-stone-200/50 rounded-3xl blur-2xl -z-10"
            />

            {/* Main 3D Framed Container */}
            <div className="relative w-full max-w-[440px] rounded-3xl p-2.5 sm:p-3 bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_25px_50px_-12px_rgba(28,25,23,0.12),0_0_0_1px_rgba(229,231,235,0.8),inset_0_1px_2px_rgba(255,255,255,1)]">
              {/* Image Frame with Subtle Depth & Inner Shadow */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-inner group">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop"
                  alt="Cut Master Salon Unisex Luxury Hair and Grooming Experience"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Glass Reflection Gradient Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/15 pointer-events-none"
                />

                {/* Bottom Card Caption inside frame */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 sm:p-3 rounded-xl bg-white/85 backdrop-blur-md border border-white/90 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-neutral-900 font-display">CUT MASTER</div>
                    <div className="text-[10px] text-neutral-500 font-medium">Bhayli, Vadodara</div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-neutral-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
                    <Sparkles className="h-3 w-3 text-amber-600" />
                    <span>Open Today</span>
                  </div>
                </div>
              </div>

              {/* Floating 3D Badge 1: HAIR */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 left-1 sm:-top-4 sm:-left-6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl glass-card-3d flex items-center gap-2 shadow-lg z-20"
              >
                <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-xl bg-neutral-900 text-amber-300 flex items-center justify-center">
                  <Scissors className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-neutral-900">HAIR</div>
                  <div className="text-[8px] sm:text-[9px] text-neutral-500 font-medium hidden xs:block">Styling &amp; Rebonding</div>
                </div>
              </motion.div>

              {/* Floating 3D Badge 2: BEAUTY */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/4 right-1 sm:top-1/3 sm:-right-8 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl glass-card-3d flex items-center gap-2 shadow-lg z-20"
              >
                <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-neutral-900">BEAUTY</div>
                  <div className="text-[8px] sm:text-[9px] text-neutral-500 font-medium hidden xs:block">Facials &amp; Glow</div>
                </div>
              </motion.div>

              {/* Floating 3D Badge 3: GROOMING */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 left-2 sm:-bottom-4 sm:-left-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl glass-card-3d flex items-center gap-2 shadow-lg z-20"
              >
                <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center border border-stone-200">
                  <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-neutral-800" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-neutral-900">GROOMING</div>
                  <div className="text-[8px] sm:text-[9px] text-neutral-500 font-medium hidden xs:block">Unisex Care</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
