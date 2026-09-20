import { ServiceCategoryKey } from '../types';
import { serviceCategories } from '../config/services';

interface CategoryNavigationProps {
  selectedCategory: ServiceCategoryKey;
  onSelectCategory: (category: ServiceCategoryKey) => void;
}

export function CategoryNavigation({
  selectedCategory,
  onSelectCategory,
}: CategoryNavigationProps) {
  return (
    <div
      id="category-navigation-wrapper"
      className="w-full relative z-20 group"
      aria-label="Service Category Filter"
    >
      {/* Mobile subtle gradient edge hint on right */}
      <div
        aria-hidden="true"
        className="sm:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FBFBFD] to-transparent z-10"
      />

      {/* Container with horizontal scrolling on mobile, centered flex on desktop */}
      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 pt-2 px-4 sm:px-0 no-scrollbar sm:flex-wrap sm:justify-center scroll-smooth overscroll-x-contain snap-x snap-mandatory">
        {serviceCategories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              id={`cat-nav-${cat.key.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => onSelectCategory(cat.key)}
              className={`shrink-0 min-h-[44px] px-4.5 sm:px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer select-none active:scale-95 flex items-center snap-start touch-manipulation ${
                isActive
                  ? 'bg-neutral-900 text-amber-200 shadow-[0_10px_22px_-6px_rgba(0,0,0,0.28),0_0_0_1px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.4)] sm:-translate-y-0.5'
                  : 'bg-white/90 text-neutral-700 hover:text-neutral-950 border border-white/95 hover:border-neutral-300 shadow-[0_4px_12px_-2px_rgba(15,23,42,0.06),0_0_0_1px_rgba(226,232,240,0.7),inset_0_1px_1px_rgba(255,255,255,0.9)]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{cat.label}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
