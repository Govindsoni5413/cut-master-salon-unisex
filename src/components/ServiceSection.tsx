import { useState, useMemo } from 'react';
import { Search, Sparkles, SlidersHorizontal, X, RotateCcw } from 'lucide-react';
import { ServiceCategoryKey, ServiceItem } from '../types';
import { services, serviceCategories } from '../config/services';
import { CategoryNavigation } from './CategoryNavigation';
import { ServiceCard } from './ServiceCard';
import { ServiceDetailModal } from './ServiceDetailModal';
import { DTenComparison } from './DTenComparison';

export function ServiceSection() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategoryKey>('HAIR');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Derive subcategories for active category
  const availableSubcategories = useMemo(() => {
    const subs = new Set<string>();
    services
      .filter((s) => s.category === selectedCategory && s.subcategory)
      .forEach((s) => subs.add(s.subcategory!));
    return ['ALL', ...Array.from(subs)];
  }, [selectedCategory]);

  // Reset subcategory when main category changes
  const handleSelectCategory = (cat: ServiceCategoryKey) => {
    setSelectedCategory(cat);
    setSelectedSubcategory('ALL');
    setSearchQuery('');
  };

  const handleResetFilters = () => {
    setSelectedSubcategory('ALL');
    setSearchQuery('');
  };

  // Filtered services
  const filteredServices = useMemo(() => {
    return services.filter((s) => {
      const matchesCategory = s.category === selectedCategory;
      const matchesSubcategory =
        selectedSubcategory === 'ALL' || s.subcategory === selectedSubcategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.subcategory && s.subcategory.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSubcategory && matchesSearch;
    });
  }, [selectedCategory, selectedSubcategory, searchQuery]);

  const activeCategoryMeta = serviceCategories.find((c) => c.key === selectedCategory);

  return (
    <section
      id="services"
      aria-label="Salon Services and Pricing"
      className="py-24 sm:py-32 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 px-3 sm:px-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-tag text-xs font-bold tracking-wider uppercase text-neutral-800 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Curated Service Menu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 font-display">
            EXCEPTIONAL HAIR &amp; BEAUTY
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            Transparent pricing, authentic salon craft, and personalized care. Every service can be booked instantly on WhatsApp.
          </p>
        </div>

        {/* 3D Category Navigation */}
        <div className="mb-8">
          <CategoryNavigation
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />
        </div>

        {/* Search & Subcategory Controls — Premium High-End Glass Bar */}
        <div className="mb-8 sm:mb-10 rounded-2xl sm:rounded-3xl bg-white/85 backdrop-blur-xl border border-white/95 shadow-[0_12px_36px_-12px_rgba(20,20,30,0.08),0_0_0_1px_rgba(226,232,240,0.8),inset_0_1px_2px_rgba(255,255,255,1)] p-2 sm:p-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5 sm:gap-4">
            {/* Subcategories Filter Rail */}
            <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold tracking-wider shrink-0 border border-neutral-200/70">
                <SlidersHorizontal className="h-3.5 w-3.5 text-amber-700" />
                <span className="hidden sm:inline">SUB-SERVICES:</span>
                <span className="sm:hidden">FILTER:</span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 overscroll-x-contain flex-1">
                {availableSubcategories.map((sub) => {
                  const isSelected = selectedSubcategory === sub;
                  return (
                    <button
                      key={sub}
                      onClick={() => setSelectedSubcategory(sub)}
                      className={`min-h-[38px] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center gap-1.5 shrink-0 touch-manipulation ${
                        isSelected
                          ? 'bg-neutral-900 text-amber-200 shadow-md ring-1 ring-neutral-900/10'
                          : 'bg-white/95 hover:bg-white text-neutral-700 hover:text-neutral-950 border border-neutral-200/90 hover:border-neutral-300 shadow-xs'
                      }`}
                    >
                      {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />}
                      <span>{sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search Input with Clean Rounded Design */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
              <input
                type="text"
                placeholder={`Search in ${activeCategoryMeta?.label || 'services'}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2 text-xs rounded-full bg-neutral-50/90 hover:bg-white focus:bg-white border border-neutral-200/90 focus:border-amber-500/60 focus:ring-4 focus:ring-amber-500/15 text-neutral-900 placeholder:text-neutral-400 transition-all shadow-inner min-h-[40px] focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer touch-manipulation"
                  title="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Active Filter Info line if user searched or filtered */}
          {(selectedSubcategory !== 'ALL' || searchQuery.trim() !== '') && (
            <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600 px-1">
              <div className="flex items-center gap-1.5">
                <span>Showing <strong className="text-neutral-900">{filteredServices.length}</strong> {filteredServices.length === 1 ? 'service' : 'services'}</span>
                {selectedSubcategory !== 'ALL' && (
                  <span className="text-neutral-500">• in <strong className="text-neutral-800">{selectedSubcategory}</strong></span>
                )}
                {searchQuery.trim() !== '' && (
                  <span className="text-neutral-500">• matching "<strong className="text-neutral-800">{searchQuery}</strong>"</span>
                )}
              </div>

              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 font-semibold text-amber-800 hover:text-amber-950 underline underline-offset-2 cursor-pointer transition-colors"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset filters</span>
              </button>
            </div>
          )}
        </div>

        {/* Services Grid with Preview Image ABOVE Each Service Card */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-7">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={(s) => setActiveModalService(s)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl glass-card-3d">
            <p className="text-neutral-600 text-sm font-medium">
              No services found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubcategory('ALL');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-neutral-900 underline underline-offset-4 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Special D-TEN Comparison Component shown when on SKIN or WAXING */}
        {(selectedCategory === 'SKIN' || selectedCategory === 'BEAUTY') && (
          <div className="mt-12">
            <DTenComparison />
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
      />
    </section>
  );
}
