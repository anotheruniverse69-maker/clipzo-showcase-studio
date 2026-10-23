import { categories, contacts, type ReelSource } from '@/config/studio';

// Presentation only: keep the original categories, slots, and sources untouched.
const categoryDisplayOrder = [
  ['Wedding Content', 'WEDDING CONTENT'],
  ['Corporate sessions', 'CORPORATE SESSIONS'],
  ['Delivery shoots', 'DELIVERY SHOOTS'],
  ['Events', 'EVENT'],
  ['Program', 'PROGRAM'],
  ['Educational', 'EDUCATIONAL'],
  ['Home operating', 'HOME OPENING'],
  ['Couple', 'COUPLE'],
  ['Podcast', 'PODCAST'],
] as const;

export const portfolioCategories = categoryDisplayOrder.flatMap(([name, displayName]) => {
  const category = categories.find(item => item.name === name);
  return category ? [{ category, displayName }] : [];
});

export function hasConfiguredSource(source: ReelSource): boolean {
  return Boolean(source && source.url.trim() && ['video', 'videas', 'youtube', 'instagram'].includes(source.type));
}

export const displayedContacts = contacts.map(contact => contact.name === 'WhatsApp'
  ? { ...contact, value: '+91 91743 95148', href: 'https://wa.me/919174395148' }
  : contact);