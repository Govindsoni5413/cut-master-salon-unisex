import { motion } from 'motion/react';
import { MessageSquare, Calendar, Phone, Sparkles, Scissors } from 'lucide-react';
import { businessConfig, createWhatsAppBookingUrl } from '../config/businessConfig';

export function BookingCTA() {
  const handleWhatsAppBooking = () => {
    window.open(createWhatsAppBookingUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="booking-cta"
      aria-label="Direct Booking Callout"
      className="py-16 sm:py-24 relative z-10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="relative rounded-none sm:rounded-3xl p-5 sm:p-14 glass-card-3d border border-white/95 text-center overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08),0_0_0_1px_rgba(229,231,235,0.9),inset_0_1px_2px_rgba(255,255,255,1)]">
          {/* Floating Glass Decorative Geometry */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-white/40 border border-white/80 backdrop-blur-md hidden sm:flex items-center justify-center shadow-sm"
          >
            <Scissors className="h-8 w-8 text-neutral-400" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-amber-100/30 border border-white/80 backdrop-blur-md hidden sm:flex items-center justify-center shadow-sm"
          >
            <Sparkles className="h-8 w-8 text-amber-500/60" />
          </motion.div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-tag text-xs font-bold tracking-wider uppercase text-neutral-800 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>Instant Appointment Scheduling</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 font-display">
              READY FOR A FRESH LOOK?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
              Choose your service and book your appointment directly with our team.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                id="cta-book-whatsapp-btn"
                onClick={handleWhatsAppBooking}
                className="glass-button-primary w-full sm:w-auto px-8 py-4 rounded-2xl text-xs sm:text-sm font-bold tracking-wider flex items-center justify-center gap-2.5 cursor-pointer shadow-xl"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>BOOK ON WHATSAPP</span>
              </button>

              <a
                href={`tel:${businessConfig.phonePrimary.replace(/\s+/g, '')}`}
                className="glass-button-secondary w-full sm:w-auto px-7 py-4 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 text-neutral-700" />
                <span>Call {businessConfig.phonePrimary}</span>
              </a>
            </div>

            <p className="mt-6 text-xs text-neutral-500">
              Vadodara: 34,35, Ground Floor SWC Hub, Opp. Rajpath Complex, Vasna - Bhayli Road
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
