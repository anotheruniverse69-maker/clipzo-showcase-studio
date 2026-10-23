
export type ReelSource = { type: 'video' | 'videas' | 'youtube' | 'instagram'; url: string } | null;
export type ReelCategory = { name: string; reels: [ReelSource, ReelSource, ReelSource, ReelSource, ReelSource] };


export const categories: ReelCategory[] = [
  {
    name: 'Home operating',
    reels: [ 
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/oOwd4bUNzR.mp4'
      },
       {
        type: 'video',
        url: 'https://yourimageshare.com/ib/b3FCXkTlS7.mp4'
      }, null, null, null]
  },
  {
    name: 'Corporate sessions',
    reels: [     
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/rOajhiDjMK.mp4'
      },
       {
        type: 'video',
        url: 'https://yourimageshare.com/ib/TQPFBXbiYL.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/iFlkE7EAoE.mp4'
      },
      {
        type: 'video',
        url: 'https://anonmp4.art/v/xcJQsTqgcFSqnjj,mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/00000.mp4'
      }
]
  },

  {
    name: 'Delivery shoots',
    reels: [
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/orC5QJnqTf.mp4'
      },
       {
        type: 'video',
        url: 'https://yourimageshare.com/ib/iDwKKTURrl.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/pioRzeXdVa.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/0A7Ed50RH3.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/LireRTsgqg.mp4'
      }
    ]
  },
  
  {
    name: 'Wedding Content',
    reels: [{
        type: 'video',
        url: 'https://yourimageshare.com/ib/0000.mp4'
      },
       {
        type: 'video',
        url: 'https://yourimageshare.com/ib/0000.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/0000.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/0000.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/0000.mp4'
      }],
  },
  {
    name: 'Podcast',
    reels: [null, null, null, null, null],
  },
  {
    name: 'Couple',
    reels: [null, null, null, null, null],
  },
  {
    name: 'Program',
    reels: [null, null, null, null, null],
  },
  {
    name: 'Educational',
    reels: [null, null, null, null, null],
  },
  {
    name: 'Faceless Edit',
    reels: [null, null, null, null, null],
  },
  {
    name: 'Events',
    reels: [null, null, null, null, null],
  },

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
