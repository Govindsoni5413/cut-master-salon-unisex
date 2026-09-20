import { useState } from 'react';
import { Sparkles, Calendar, Check, ShieldCheck } from 'lucide-react';
import { dTenDataMale, dTenDataFemale } from '../config/services';
import { createWhatsAppBookingUrl } from '../config/businessConfig';

export function DTenComparison() {
  const [selectedGender, setSelectedGender] = useState<'FEMALE' | 'MALE'>('FEMALE');

  const activeData = selectedGender === 'FEMALE' ? dTenDataFemale : dTenDataMale;

  const handleBookDTen = (area: string, type: 'Regular' | 'Premium', price: number) => {
    const serviceTitle = `D-TEN (${type}) — ${area} [${selectedGender === 'FEMALE' ? 'Female' : 'Male'}]`;
    const priceDisplay = `₹${price}`;
    window.open(createWhatsAppBookingUrl(serviceTitle, priceDisplay), '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="d-ten-comparison-section"
      className="mt-14 glass-card-3d rounded-3xl p-6 sm:p-8 relative overflow-hidden"
    >
      {/* Header & Gender Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200/70">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200 text-amber-900 text-[11px] font-bold tracking-wider uppercase mb-2">
            <Sparkles className="h-3 w-3 text-amber-700" />
            <span>Specialized De-Tan Treatment</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900">
            D-TEN Clarifying Rituals
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-xl">
            Target stubborn sun-tanning, uneven tone, and pollution dullness with our gentle, dermatologically curated Regular and Premium formulations.
          </p>
        </div>

        {/* Gender Toggle 3D Pill */}
        <div className="p-1 rounded-full bg-neutral-100/90 border border-neutral-200 flex items-center shadow-inner self-stretch sm:self-auto min-h-[48px]">
          <button
            type="button"
            onClick={() => setSelectedGender('FEMALE')}
            className={`flex-1 sm:flex-initial min-h-[42px] px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center touch-manipulation ${
              selectedGender === 'FEMALE'
                ? 'bg-neutral-900 text-amber-200 shadow-md'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            FEMALE
          </button>
          <button
            type="button"
            onClick={() => setSelectedGender('MALE')}
            className={`flex-1 sm:flex-initial min-h-[42px] px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center touch-manipulation ${
              selectedGender === 'MALE'
                ? 'bg-neutral-900 text-amber-200 shadow-md'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            MALE
          </button>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Regular D-TEN Card */}
        <div className="rounded-2xl p-4 sm:p-5 bg-white/70 border border-neutral-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200/60 mb-4">
              <div>
                <h4 className="font-display font-bold text-lg text-neutral-900">Regular D-TEN</h4>
                <p className="text-xs text-neutral-500">Fast skin tan recovery &amp; botanical cooling</p>
              </div>
              <span className="text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-lg shrink-0">
                Standard Care
              </span>
            </div>

            <div className="space-y-2.5">
              {activeData.map((item) => (
                <div
                  key={`reg-${item.area}`}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-50/80 transition-colors border border-transparent hover:border-neutral-200 gap-2"
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-neutral-800 truncate" title={item.area}>{item.area}</span>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="text-xs sm:text-sm font-bold text-neutral-900">₹{item.regularPrice}</span>
                    <button
                      type="button"
                      onClick={() => handleBookDTen(item.area, 'Regular', item.regularPrice)}
                      className="min-h-[38px] px-3 py-1.5 rounded-xl text-[11px] font-bold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors flex items-center gap-1 cursor-pointer active:scale-95 shadow-xs"
                    >
                      <Calendar className="h-3 w-3 text-amber-300" />
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200/60 text-[11px] text-neutral-500 flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
            <span>Gentle natural lactic acid &amp; aloe vera brightening pack</span>
          </div>
        </div>

        {/* Premium D-TEN Card */}
        <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-amber-50/40 via-white/80 to-white/90 border border-amber-200/80 shadow-md relative flex flex-col justify-between">
          <div className="absolute top-4 right-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2.5 py-1 rounded-full border border-amber-300">
              Enhanced Radiance
            </span>
          </div>

          <div>
            <div className="pb-3 border-b border-amber-200/60 mb-4">
              <h4 className="font-display font-bold text-lg text-neutral-900">Premium D-TEN</h4>
              <p className="text-xs text-neutral-500">Advanced medical-grade active peeling &amp; whitening mask</p>
            </div>

            <div className="space-y-2.5">
              {activeData.map((item) => (
                <div
                  key={`prem-${item.area}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors border border-amber-100 shadow-xs gap-2"
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <Sparkles className="h-4 w-4 text-amber-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900 truncate" title={item.area}>{item.area}</span>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="text-xs sm:text-sm font-bold text-amber-900">₹{item.premiumPrice}</span>
                    <button
                      type="button"
                      onClick={() => handleBookDTen(item.area, 'Premium', item.premiumPrice)}
                      className="min-h-[38px] px-3 py-1.5 rounded-xl text-[11px] font-bold bg-amber-600 hover:bg-amber-700 text-white transition-colors flex items-center gap-1 cursor-pointer shadow-xs active:scale-95"
                    >
                      <Calendar className="h-3 w-3 text-amber-200" />
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-amber-200/60 text-[11px] text-amber-800 font-medium flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Includes brightening serum infusion, anti-oxidant mask &amp; UV barrier</span>
          </div>
        </div>
      </div>
    </div>
  );
}
