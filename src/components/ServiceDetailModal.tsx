import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MessageSquare, Clock, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';
import { businessConfig, WHATSAPP_NUMBER } from '../config/businessConfig';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');

  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [service, onClose]);

  if (!service) return null;

  const priceText = `₹${service.price.toLocaleString('en-IN')}${service.starred ? '*' : ''}`;

  const handleBookOnWhatsApp = () => {
    let message = `Hello Cut Master Salon Unisex,\nI would like to book:\nService: ${service.name}\nPrice: ${priceText}\nPreferred Date: ${preferredDate || 'Flexible / Next Available'}\nPreferred Time: ${preferredTime || 'Flexible'}\nThank you.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div
        id="service-detail-modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        {/* Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/40 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window with 3D Depth & Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl max-h-[90dvh] overflow-y-auto rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/95 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3),0_0_0_1px_rgba(229,231,235,0.8),inset_0_1px_2px_rgba(255,255,255,1)] p-4 sm:p-7 z-10 my-auto overscroll-contain"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close service modal"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-neutral-700 hover:text-neutral-950 border border-neutral-200/80 shadow-md transition-all cursor-pointer active:scale-95 touch-manipulation"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Content */}
          <div className="flex flex-col gap-5 sm:gap-6 pt-2 sm:pt-0">
            {/* Large Preview Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-inner bg-stone-100">
              <img
                src={service.image}
                alt={service.name}
                className="h-full w-full object-cover object-center"
                decoding="async"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10 pointer-events-none"
              />

              <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/90 shadow-sm text-xs font-bold tracking-wider text-neutral-900">
                {service.subcategory || service.category}
              </div>

              {service.starred && (
                <div className="absolute bottom-3.5 left-3.5 px-3 py-1 rounded-full bg-amber-500/90 text-white backdrop-blur-md text-xs font-semibold flex items-center gap-1 shadow-sm">
                  <Sparkles className="h-3 w-3" />
                  <span>*Price may vary based on hair length/texture</span>
                </div>
              )}
            </div>

            {/* Service Details */}
            <div className="text-left">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3
                  id="service-modal-title"
                  className="font-display text-2xl sm:text-3xl font-bold text-neutral-900"
                >
                  {service.name}
                </h3>
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                  {priceText}
                </div>
              </div>

              <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Appointment Preferences (Optional helper) */}
            <div className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/80">
              <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-amber-700" />
                <span>Preferred Booking Slot (Optional)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-neutral-800"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                    Time (10:00 AM - 09:00 PM)
                  </label>
                  <input
                    type="time"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-neutral-800"
                  />
                </div>
              </div>
            </div>

            {/* Booking Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                id="modal-book-now-whatsapp"
                onClick={handleBookOnWhatsApp}
                className="glass-button-primary flex-1 min-h-[48px] py-3.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>BOOK ON WHATSAPP</span>
              </button>

              <a
                href={`tel:${businessConfig.phonePrimary.replace(/\s+/g, '')}`}
                className="glass-button-secondary min-h-[48px] px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 active:scale-95"
              >
                <Phone className="h-4 w-4 text-neutral-700" />
                <span>Call Salon</span>
              </a>
            </div>

            {/* Quick Policy Note */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>Instant confirmation via WhatsApp with Cut Master Salon team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
