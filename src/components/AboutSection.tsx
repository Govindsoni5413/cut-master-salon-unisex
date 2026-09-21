import { motion } from 'motion/react';
import { MapPin, Sparkles, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

interface AboutSectionProps {
  onVisitClick: () => void;
}

export function AboutSection({ onVisitClick }: AboutSectionProps) {
  return (
    <section
      id="about"
      aria-label="About Cut Master Salon"
      className="py-12 sm:py-20 lg:py-28 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Visual Image with 3D Glass Framing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl p-3 sm:p-3.5 bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_25px_50px_-12px_rgba(28,25,23,0.1),0_0_0_1px_rgba(229,231,235,0.7),inset_0_1px_2px_rgba(255,255,255,1)]">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-inner group">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
                  alt="Interior ambiance and styling mirrors at Cut Master Salon Unisex"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"
                />

                {/* Corner Glass Tag */}
                <div className="absolute top-3.5 left-3.5 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/90 shadow-sm text-xs font-semibold text-neutral-900 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                  <span>Vadodara Flagship</span>
                </div>
              </div>

              {/* Floating Address Snippet */}
              <div className="mt-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/60 border border-neutral-200/70 flex items-start gap-3">
                <MapPin className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Ground Floor SWC Hub, Opp. Rajpath Complex, Vasna - Bhayli Road, Bhayli, Vadodara
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-tag text-xs font-bold tracking-wider uppercase text-neutral-800 mb-4">
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 font-display">
              YOUR STYLE, OUR CRAFT
            </h2>

            <p className="mt-5 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Cut Master Salon Unisex is a salon in Vadodara offering professional grooming, hairstyling and beauty services for both men and women.
            </p>

            <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
              From signature precision haircuts and restorative keratin smoothing to clinical-grade facials, bridal makeup, and relaxing body massages, our experienced stylists focus on individual comfort, personalized consultations, and high hygiene standards.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-2xl bg-white/70 border border-neutral-200/70 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 mb-1">
                  <Clock className="h-4 w-4 text-amber-700" />
                  <span>Salon Hours</span>
                </div>
                <div className="text-xs text-neutral-600">{businessConfig.timings}</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-neutral-200/70 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 mb-1">
                  <ShieldCheck className="h-4 w-4 text-amber-700" />
                  <span>Sanitized Equipment</span>
                </div>
                <div className="text-xs text-neutral-600">Disinfected tools and disposable capes</div>
              </div>
            </div>

            <div className="mt-8">
              <button
                id="about-visit-cut-master-btn"
                onClick={onVisitClick}
                className="glass-button-primary px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wider flex items-center gap-2.5 cursor-pointer shadow-md"
              >
                <Navigation className="h-4 w-4 text-amber-300" />
                <span>VISIT CUT MASTER</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
