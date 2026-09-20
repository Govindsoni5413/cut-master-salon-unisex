import { GalleryItem } from '../types';

export const galleryCategories: ('ALL' | 'HAIR' | 'STYLING' | 'COLOUR' | 'SALON' | 'GROOMING')[] = [
  'ALL',
  'HAIR',
  'STYLING',
  'COLOUR',
  'SALON',
  'GROOMING',
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision Fade & Beard Taper',
    category: 'GROOMING',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop',
    caption: 'Modern razor fade with sculpted beard line and matte finish.',
  },
  {
    id: 'gal-2',
    title: 'Sun-Kissed Balayage Melt',
    category: 'COLOUR',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    caption: 'Dimensional hand-painted caramel balayage with high-gloss glaze.',
  },
  {
    id: 'gal-3',
    title: 'Luxury Salon Ambience & Styling Stations',
    category: 'SALON',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
    caption: 'Modern aesthetic stations at Cut Master Salon Unisex, Vadodara.',
  },
  {
    id: 'gal-4',
    title: 'Volumetric Layered Haircut',
    category: 'HAIR',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop',
    caption: 'Custom face-framing butterfly layers with soft bouncy blowout.',
  },
  {
    id: 'gal-5',
    title: 'Editorial Bridal Hair Artistry',
    category: 'STYLING',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
    caption: 'Intricate floral braid bun and jewel placement for wedding ceremonies.',
  },
  {
    id: 'gal-6',
    title: 'Signature Global Blonde Highlights',
    category: 'COLOUR',
    imageUrl: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1200&auto=format&fit=crop',
    caption: 'Multitonal cool beige highlight foils with root shadow blending.',
  },
  {
    id: 'gal-7',
    title: 'Gentlemen Grooming & Hot Towel Shave',
    category: 'GROOMING',
    imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop',
    caption: 'Traditional straight-edge razor grooming with steam hydration.',
  },
  {
    id: 'gal-8',
    title: 'Sleek Glass Keratin Transformation',
    category: 'HAIR',
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop',
    caption: 'Ultra-glossy silky hair after deep keratin protein infusion.',
  },
  {
    id: 'gal-9',
    title: 'VIP Consultation & Reception Lounge',
    category: 'SALON',
    imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop',
    caption: 'Comfortable waiting lounge and beverage bar for our guests.',
  },
];
