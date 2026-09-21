import { motion } from 'motion/react';
import { Scissors, Sparkles, MapPin, MessageSquare } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export function TrustStrip() {
  const trustPoints = [
    {
      icon: Scissors,
      title: 'UNISEX SALON',
      subtitle: 'Men & Women Sections',
    },
    {
      icon: Sparkles,
      title: 'Hair & Beauty Services',
      subtitle: 'Complete Head-to-Toe Care',
    },
    {
      icon: MapPin,
      title: 'Vadodara, Gujarat',
      subtitle: 'SWC Hub, Vasna-Bhayli Rd',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Booking',
      subtitle: 'Instant Chat Scheduling',
    },
  ];

  return (
    <section
      id="trust-strip"
      aria-label="Salon Information Overview"
      className="relative z-10 -mt-4 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card-3d rounded-2xl sm:rounded-3xl p-4 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200/70"
      >
        {trustPoints.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              key={idx}
              className={`flex items-center gap-3 sm:gap-3.5 ${
                idx > 0 && idx % 2 === 0 ? 'pt-3 lg:pt-0' : ''
              } ${idx > 1 ? 'pt-3 lg:pt-0' : ''} ${idx > 0 ? 'lg:pl-6' : ''}`}
            >
              <div className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 rounded-2xl bg-neutral-900/5 border border-neutral-200/80 flex items-center justify-center text-neutral-900 shadow-inner transition-transform group-hover:scale-105">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-800" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-xs sm:text-sm tracking-wider text-neutral-900">
                  {item.title}
                </span>
                <span className="text-[10px] sm:text-xs text-neutral-500 font-medium mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
