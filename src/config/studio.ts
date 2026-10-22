
export type ReelSource = { type: 'video' | 'videas' | 'youtube' | 'instagram'; url: string } | null;
export type ReelCategory = { name: string; reels: [ReelSource, ReelSource, ReelSource, ReelSource, ReelSource] };


export const categories: ReelCategory[] = [
  {
    name: 'Home operating',
    reels: [null, null, null, null, null]
  },
  {
    name: 'Corporate sessions',
    reels: [null, null, null, null, null]
  },
  {
    name: 'Delivery shoots',
    reels: [

export const categories: ReelCategory[] = [
  {
    name: 'Home operating',
    reels: [null, null, null, null, null]
  },
  {
    name: 'Corporate sessions',
    reels: [null, null, null, null, null]
  },
  {
    name: 'Delivery shoots',
    reels: [
      {
        type: 'videas',
        url: 'https://go.screenpal.com/player/cO631inytTy?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1'
      },
      null,
      null,
      null,
      null
    ]
  },
  ...['Wedding Content', 'Podcast', 'Couple', 'Program', 'Educational', 'Faceless Edit', 'Events'].map(
    name => ({ name, reels: [null, null, null, null, null] as ReelCategory['reels'] })
  ),
];

    ]
  },
  ...['Wedding Content', 'Podcast', 'Couple', 'Program', 'Educational', 'Faceless Edit', 'Events'].map(
    name => ({ name, reels: [null, null, null, null, null] as ReelCategory['reels'] })
  ),
];


export const identity = 'Content Creator / Creative Partner';
export const navigation = ['Home', 'Portfolio', 'About', 'Services', 'Contact'];
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
