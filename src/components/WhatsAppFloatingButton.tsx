import { MessageSquare, Phone, Navigation, Sparkles } from 'lucide-react';
import { businessConfig, createWhatsAppBookingUrl } from '../config/businessConfig';

interface WhatsAppFloatingButtonProps {
  onOpenBooking?: () => void;
}

export function WhatsAppFloatingButton({ onOpenBooking }: WhatsAppFloatingButtonProps) {
  const handleOpenWhatsApp = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.open(createWhatsAppBookingUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button (bottom-right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          type="button"
          onClick={handleOpenWhatsApp}
          id="desktop-floating-whatsapp-btn"
          aria-label="Chat with Cut Master Salon on WhatsApp"
          className="group flex items-center gap-3 px-4 py-3 rounded-full bg-neutral-900 text-white shadow-2xl border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <div className="h-8 w-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">
            <MessageSquare className="h-4 w-4" />
          </div>
          <div className="text-left pr-1">
            <div className="text-[10px] uppercase font-bold text-amber-300 tracking-wider flex items-center gap-1">
              <span>Instant Chat</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-xs font-bold tracking-wide">
              Book on WhatsApp
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <div
        id="mobile-sticky-bar"
        className="fixed bottom-0 inset-x-0 z-40 sm:hidden px-1.5 pt-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom,0px))] bg-white/95 backdrop-blur-2xl border-t border-neutral-200/90 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
      >
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {/* Quick Call */}
          <a
            href={`tel:${businessConfig.phonePrimary.replace(/\s+/g, '')}`}
            className="h-12 w-12 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 flex flex-col items-center justify-center shrink-0 transition-colors shadow-xs active:scale-95"
            aria-label="Call salon directly"
          >
            <Phone className="h-4 w-4 text-neutral-800" />
            <span className="text-[9px] font-bold text-neutral-600 mt-0.5">CALL</span>
          </a>

          {/* Quick Map Directions */}
          <a
            href={businessConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-12 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 flex flex-col items-center justify-center shrink-0 transition-colors shadow-xs active:scale-95"
            aria-label="Get Google Maps navigation directions"
          >
            <Navigation className="h-4 w-4 text-amber-700" />
            <span className="text-[9px] font-bold text-neutral-600 mt-0.5">MAP</span>
          </a>

          {/* Primary WhatsApp Booking Action */}
          <button
            type="button"
            id="mobile-sticky-book-btn"
            onClick={handleOpenWhatsApp}
            className="flex-1 h-12 px-4 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800 text-white flex items-center justify-between shadow-lg border border-neutral-800 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <MessageSquare className="h-3.5 w-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[9px] font-bold uppercase tracking-wider text-amber-300 leading-none">
                  Open Today
                </div>
                <div className="text-xs font-extrabold tracking-wide text-white leading-tight">
                  Book on WhatsApp
                </div>
              </div>
            </div>

            <Sparkles className="h-3.5 w-3.5 text-amber-300 shrink-0" />
          </button>
        </div>
      </div>
    </>
  );
}
