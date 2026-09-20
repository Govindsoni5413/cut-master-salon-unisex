export type ServiceCategoryKey =
  | 'HAIR'
  | 'BEAUTY'
  | 'SKIN'
  | 'BODY'
  | 'WAXING'
  | 'MANICURE & PEDICURE'
  | 'MAKEUP';

export interface ServiceItem {
  id: string;
  category: ServiceCategoryKey;
  subcategory?: string;
  name: string;
  price: number;
  priceDisplay?: string;
  starred: boolean;
  image: string;
  description: string;
  durationEstimate?: string;
  badge?: string;
}

export interface DTenItem {
  area: string;
  gender: 'MALE' | 'FEMALE';
  regularPrice: number;
  premiumPrice: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'HAIR' | 'STYLING' | 'COLOUR' | 'SALON' | 'GROOMING';
  imageUrl: string;
  caption: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  city: string;
  state: string;
  pincode: string;
  addressLine1: string;
  addressFull: string;
  phonePrimary: string;
  phoneSecondary?: string;
  whatsappNumber: string;
  instagramHandle: string;
  instagramUrl: string;
  googleMapsUrl: string;
  timings: string;
}
