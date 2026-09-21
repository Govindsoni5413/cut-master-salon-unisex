import { motion } from 'motion/react';
import { MessageSquare, MessageCircle, ShieldCheck } from 'lucide-react';
import { businessConfig, createWhatsAppBookingUrl } from '../config/businessConfig';

export function ReviewsSection() {
  const reviewPlaceholders = [
    { id: 1, serviceTag: 'Hair & Styling' },
    { id: 2, serviceTag: 'Skin & Facial' },
    { id: 3, serviceTag: 'Bridal & Grooming' },
  ];

  return (
    <section
      id="reviews"
      aria-label="Client Feedback"
      className="py-12 sm:py-20 lg:py-28 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-tag text-xs font-bold tracking-wider uppercase text-neutral-800 mb-4">
            <MessageSquare className="h-3.5 w-3.5 text-amber-600" />
            <span>Community Feedback</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 font-display">
            WHAT OUR CLIENTS SAY
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Real experiences from visitors at our Vadodara salon.
          </p>
        </motion.div>

        {/* Placeholders clearly marked without fabricated ratings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {reviewPlaceholders.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              key={item.id}
              className="glass-card-3d rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-neutral-200/70">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                    {item.serviceTag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-neutral-400">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Verified Visit</span>
                  </div>
                </div>

                <div className="py-6 text-center rounded-2xl bg-neutral-50/70 border border-dashed border-neutral-200">
                  <p className="text-xs sm:text-sm font-medium text-neutral-500 italic">
                    "Verified customer review will appear here."
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-400">
                <span>Cut Master Salon Unisex</span>
                <span>Vadodara</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client feedback prompt */}
        <div className="mt-10 text-center">
          <p className="text-xs text-neutral-500 mb-3">
            Have you visited our salon recently? Share your experience with us.
          </p>
          <a
            href={createWhatsAppBookingUrl('Feedback & Review')}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold"
          >
            <MessageCircle className="h-4 w-4 text-emerald-600" />
            <span>Submit Feedback via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
