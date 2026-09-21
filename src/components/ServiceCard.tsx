import { Calendar, ArrowUpRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';
import { createWhatsAppBookingUrl } from '../config/businessConfig';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (service: ServiceItem) => void;
}

export function ServiceCard({ service, onSelectService }: ServiceCardProps) {
  const priceText = `₹${service.price.toLocaleString('en-IN')}${service.starred ? '*' : ''}`;

  const handleDirectWhatsAppBook = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = createWhatsAppBookingUrl(service.name, priceText);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={() => onSelectService(service)}
      id={`service-card-${service.id}`}
      className="glass-card-3d rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 flex flex-col justify-between group cursor-pointer text-left transition-all duration-300 hover:-translate-y-1.5 will-change-transform"
    >
      <div>
        {/* ================= SERVICE PREVIEW IMAGE ABOVE EACH SERVICE CARD ================= */}
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner bg-stone-100">
          <img
            src={service.image}
            alt={`${service.name} at Cut Master Salon Unisex`}
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108"
            loading="lazy"
            decoding="async"
          />

          {/* Subdued Glass Gradient Reflection */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/15 pointer-events-none"
          />

          {/* Category / Subcategory Chip */}
          <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/90 shadow-sm text-[10px] font-bold tracking-wider uppercase text-neutral-800">
            {service.subcategory || service.category}
          </div>

          {/* Starred Note Indicator if applicable */}
          {service.starred && (
            <div
              className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-amber-500/90 text-white backdrop-blur-md text-[9px] font-bold tracking-wide flex items-center gap-1 shadow-sm"
              title="Variable depending on length/style"
            >
              <Sparkles className="h-2.5 w-2.5" />
              <span>Starting</span>
            </div>
          )}
        </div>

        {/* ================= CARD CONTENT ================= */}
        <div className="pt-4 pb-2 px-1">
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <h3 className="font-display text-lg font-bold text-neutral-900 group-hover:text-amber-800 transition-colors leading-snug">
              {service.name}
            </h3>
            <span className="font-sans text-base font-bold text-neutral-900 shrink-0">
              {priceText}
            </span>
          </div>

          <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed font-normal">
            {service.description}
          </p>
        </div>
      </div>

      {/* ================= CARD FOOTER & ACTION ================= */}
      <div className="pt-3 border-t border-neutral-200/60 mt-2 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={handleDirectWhatsAppBook}
          id={`book-now-${service.id}`}
          className="glass-button-primary flex-1 min-h-[44px] py-2.5 px-3 rounded-2xl text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-transform touch-manipulation"
        >
          <Calendar className="h-3.5 w-3.5 text-amber-300 shrink-0" />
          <span>BOOK NOW</span>
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelectService(service);
          }}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-2xl bg-white/80 hover:bg-white text-neutral-700 hover:text-neutral-950 border border-neutral-200 shadow-sm transition-all active:scale-95 touch-manipulation"
          title="View Service Details"
          aria-label={`View details for ${service.name}`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
