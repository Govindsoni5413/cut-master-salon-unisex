import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MessageSquare, Phone, Scissors, CheckCircle2 } from 'lucide-react';
import { services } from '../config/services';
import { businessConfig, WHATSAPP_NUMBER } from '../config/businessConfig';

interface GeneralBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GeneralBookingModal({ isOpen, onClose }: GeneralBookingModalProps) {
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBook = () => {
    const chosenService = services.find((s) => s.id === selectedServiceId);
    let serviceDetail = chosenService
      ? `${chosenService.name} (₹${chosenService.price}${chosenService.starred ? '*' : ''})`
      : 'General Consultation / Custom Service';

    let message = `Hello Cut Master Salon Unisex,\nI would like to book an appointment:\n\nService: ${serviceDetail}\nPreferred Date: ${preferredDate || 'Flexible'}\nPreferred Time: ${preferredTime || 'Flexible'}${notes ? `\nNotes: ${notes}` : ''}\n\nThank you.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="general-booking-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-6 overflow-y-auto overscroll-contain"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/45 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg max-h-[90dvh] overflow-y-auto overscroll-contain rounded-3xl bg-white/95 backdrop-blur-2xl border border-white p-5 sm:p-8 shadow-2xl z-10 text-left my-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer active:scale-95 touch-manipulation"
            aria-label="Close booking modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
            <Scissors className="h-4 w-4 text-amber-700" />
            <span>Appointment Request</span>
          </div>

          <h3
            id="general-booking-modal-title"
            className="font-display text-xl sm:text-2xl font-bold text-neutral-900"
          >
            BOOK YOUR SESSION
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Cut Master Salon Unisex • Vadodara, Gujarat
          </p>

          <div className="mt-5 space-y-3.5 sm:space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Select Service (Optional)
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2.5 text-xs sm:text-xs rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              >
                <option value="">-- Choose a service or general visit --</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.subcategory || s.category}) — ₹{s.price}{s.starred ? '*' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 text-xs sm:text-xs rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Preferred Time
                </label>
                <input
                  type="time"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 text-xs sm:text-xs rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Special Requests or Notes
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. bridal trial, specific hair stylist request, or multiple persons"
                className="w-full px-3.5 py-2.5 text-xs sm:text-xs rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40 placeholder:text-neutral-400"
              />
            </div>
          </div>

          <div className="mt-5 sm:mt-6 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={handleBook}
              className="glass-button-primary w-full min-h-[48px] py-3.5 rounded-2xl text-xs font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>SEND WHATSAPP BOOKING REQUEST</span>
            </button>

            <a
              href={`tel:${businessConfig.phonePrimary.replace(/\s+/g, '')}`}
              className="w-full min-h-[44px] py-2.5 rounded-2xl text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 flex items-center justify-center gap-2 transition-colors active:scale-95"
            >
              <Phone className="h-3.5 w-3.5 text-neutral-600" />
              <span>Call Salon: {businessConfig.phonePrimary}</span>
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-neutral-500">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            <span>Salon opens daily 10:00 AM – 09:00 PM</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
