import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export function InstagramSection() {
  const previewShots = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop',
  ];

  return (
    <section
      id="instagram"
      aria-label="Instagram Community"
      className="py-20 sm:py-28 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card-3d rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-tag text-xs font-bold tracking-wider uppercase text-neutral-800 mb-4">
            <Instagram className="h-3.5 w-3.5 text-pink-600" />
            <span>Social Channel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 font-display">
            FOLLOW OUR WORK
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto">
            See our latest styles, transformations and salon updates.
          </p>

          <div className="mt-4 inline-block text-sm font-bold text-neutral-900 bg-neutral-100/80 px-4 py-1.5 rounded-full border border-neutral-200">
            {businessConfig.instagramHandle}
          </div>

          {/* Curated visual grid leading to Instagram */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {previewShots.map((img, i) => (
              <a
                key={i}
                href={businessConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-xs border border-white/80"
              >
                <img
                  src={img}
                  alt={`Cut Master Salon styling transformation ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Instagram className="h-6 w-6" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <a
              id="instagram-follow-cta-btn"
              href={businessConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button-primary inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wider cursor-pointer shadow-md"
            >
              <Instagram className="h-4 w-4 text-pink-300" />
              <span>FOLLOW ON INSTAGRAM</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
