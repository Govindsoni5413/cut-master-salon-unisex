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
      className="relative z-10 -mt-6 sm:-mt-8 px-0 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="glass-card-3d rounded-none sm:rounded-3xl p-3 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200/70">
        {trustPoints.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`flex items-center gap-3.5 ${
                idx > 0 && idx % 2 === 0 ? 'pt-4 lg:pt-0' : ''
              } ${idx > 1 ? 'pt-4 lg:pt-0' : ''} ${idx > 0 ? 'lg:pl-6' : ''}`}
            >
              <div className="h-11 w-11 shrink-0 rounded-2xl bg-neutral-900/5 border border-neutral-200/80 flex items-center justify-center text-neutral-900 shadow-inner">
                <Icon className="h-5 w-5 text-neutral-800" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-xs sm:text-sm tracking-wider text-neutral-900">
                  {item.title}
                </span>
                <span className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
