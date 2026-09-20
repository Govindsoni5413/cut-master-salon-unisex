import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, Maximize2, Sparkles } from 'lucide-react';
import { galleryItems, galleryCategories } from '../config/gallery';
import { GalleryItem } from '../types';

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<
    'ALL' | 'HAIR' | 'STYLING' | 'COLOUR' | 'SALON' | 'GROOMING'
  >('ALL');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'ALL'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      aria-label="Salon Gallery"
      className="py-24 sm:py-32 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-tag text-xs font-bold tracking-wider uppercase text-neutral-800 mb-4">
            <Camera className="h-3.5 w-3.5 text-amber-600" />
            <span>Visual Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 font-display">
            OUR WORK &amp; AMBIANCE
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            A glimpse into our haircuts, styling transformations, and welcoming salon spaces in Vadodara.
          </p>
        </div>

        {/* Gallery Categories */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-amber-200 shadow-md scale-105'
                  : 'bg-white/80 text-neutral-600 hover:text-neutral-900 border border-neutral-200/80 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Glass Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="glass-card-3d rounded-3xl p-3 sm:p-3.5 group cursor-pointer text-left relative overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-inner bg-neutral-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10 opacity-60 group-hover:opacity-80 transition-opacity"
                />

                {/* Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/90 text-[10px] font-bold tracking-wider text-neutral-900 uppercase shadow-xs">
                  {item.category}
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Maximize2 className="h-4 w-4" />
                </div>

                {/* Bottom caption overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="font-display text-sm sm:text-base font-bold drop-shadow-sm">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-neutral-200 line-clamp-1 mt-0.5">
                    {item.caption}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeLightboxItem.title}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightboxItem(null)}
              className="fixed inset-0 bg-neutral-950/80 backdrop-blur-lg"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden glass-card-3d bg-white/90 p-3 sm:p-4 z-10"
            >
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner bg-black">
                <img
                  src={activeLightboxItem.imageUrl}
                  alt={activeLightboxItem.title}
                  className="h-full w-full object-contain object-center"
                />
              </div>

              <div className="p-4 text-left">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-neutral-900">
                    {activeLightboxItem.title}
                  </h3>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    {activeLightboxItem.category}
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-neutral-600">
                  {activeLightboxItem.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
