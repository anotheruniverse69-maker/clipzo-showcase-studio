import reel1 from '@/assets/ya464e.webm.asset.json';
import reel2 from '@/assets/vad98e.webm.asset.json';
import reel3 from '@/assets/lwggeb.webm.asset.json';
import reel4 from '@/assets/c2l7k8.webm.asset.json';
import reel5 from '@/assets/gkg80c.webm.asset.json';

export type ReelSource = { type: 'video' | 'videas' | 'youtube' | 'instagram'; url: string } | null;
export type ReelCategory = { name: string; reels: [ReelSource, ReelSource, ReelSource, ReelSource, ReelSource] };
export const categories: ReelCategory[] = [
  { name: 'Home operating', reels: [{ type: 'videas', url: 'https://app.videas.fr/embed/media/78a9f0c1-964b-4054-8bb9-eff2f4abf3e7/?title=false&logo=false&thumbnail_duration=false&autoplay=true' }, null, null, null, null] },
  { name: 'Corporate sessions', reels: [{ type: 'youtube', url: '4pe5dm5R4wU' }, null, null, null, null] },
  { name: 'Delivery shoots', reels: [reel1, reel2, reel3, reel4, reel5].map(asset => ({ type: 'video' as const, url: asset.url })) as ReelCategory['reels'] },
  ...['Wedding Content', 'Podcast', 'Couple', 'Program', 'Educational', 'Faceless Edit', 'Events'].map(name => ({ name, reels: [null, null, null, null, null] as ReelCategory['reels'] })),
];
export const identity = 'Content Creator / Creative Partner';
export const navigation = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
export const contacts = [
  { name: 'Call', value: '+91 91743 95148', href: 'tel:+919174395148', external: false },
  { name: 'WhatsApp', value: '+91 92437 27694', href: `https://wa.me/919243727694?text=${encodeURIComponent('Hi, I found your portfolio and would like to discuss a project.')}`, external: true },
  { name: 'Instagram', value: '@clipzo.studio__', href: 'https://www.instagram.com/clipzo.studio__/', external: true },
  { name: 'Gmail', value: 'harsh.91743@gmail.com', href: 'mailto:harsh.91743@gmail.com?subject=Project%20enquiry', external: false },
];
export const aboutBio = 'I turn raw footage into stories people actually finish watching. From short-form reels to full-length films, every cut, grade and mix is built to hold attention and move your brand forward.';
export const aboutFacts: [string, string][] = [
  ['Based in', 'India'],
  ['Focus', 'Short & Long Form'],
  ['Available for', 'Freelance & Collabs'],
];
export const stats = [
  { value: '100+', label: 'Happy Clients' },
  { value: '1k+', label: 'Projects Completed' },
  { value: '3+', label: 'Years Experience' },
];
export function embedUrl(source: NonNullable<ReelSource>) {
  if (source.type === 'youtube') return `https://www.youtube.com/embed/${source.url}?autoplay=1&mute=1&loop=1&playlist=${source.url}&rel=0&playsinline=1`;
  if (source.type === 'instagram') return `${source.url.replace(/\/$/, '')}/embed/?autoplay=1`;
  return source.url;
}
