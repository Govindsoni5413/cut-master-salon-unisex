import { BusinessConfig } from '../types';

export const WHATSAPP_NUMBER = '918160770905';
export const PHONE_PRIMARY = '+91 81607 70905';

export const businessConfig: BusinessConfig = {
  name: 'CUT MASTER SALON UNISEX',
  tagline: 'Premium Hair & Beauty Experience in Vadodara',
  city: 'Vadodara',
  state: 'Gujarat',
  pincode: '391410',
  addressLine1: '34,35, Ground Floor SWC Hub, Opp. Rajpath Complex',
  addressFull:
    '34,35, Ground Floor SWC Hub, Opp. Rajpath Complex, Vasna - Bhayli Road, Bhayli, Vadodara - 391410',
  phonePrimary: PHONE_PRIMARY,
  whatsappNumber: WHATSAPP_NUMBER,
  instagramHandle: '@cutmastersalon',
  instagramUrl: 'https://www.instagram.com/cutmastersalon/',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Cut+Master+Salon+Unisex+SWC+Hub+Bhayli+Vadodara+391410',
  timings: '10:00 AM – 09:00 PM (Monday – Sunday)',
};

/**
 * Creates dynamic WhatsApp link with pre-filled service booking text
 */
export function createWhatsAppBookingUrl(
  serviceName?: string,
  priceDisplay?: string
): string {
  let message = `Hello Cut Master Salon Unisex,\nI would like to enquire about booking an appointment.\n\nPreferred Date:\nPreferred Time:\nThank you.`;

  if (serviceName && priceDisplay) {
    message = `Hello Cut Master Salon Unisex,\nI would like to book:\nService: ${serviceName}\nPrice: ${priceDisplay}\nPreferred Date:\nPreferred Time:\nThank you.`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
