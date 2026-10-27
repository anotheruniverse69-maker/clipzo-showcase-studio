
export type ReelSource = {
  type: 'video' | 'videos' | 'youtube' | 'instagram';
  url: string;
  thumbnail?: string;
} | null;
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
        url: 'https://yourimageshare.com/ib/rOajhiDjMK.mp4',
        thumbnail: '/corporate-2.png'
      },
       {
        type: 'video',
        url: 'https://yourimageshare.com/ib/TQPFBXbiYL.mp4',
         thumbnail: '/corporate-3.png'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/iFlkE7EAoE.mp4',
        thumbnail: '/corporate-1.png'
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
        url: 'https://yourimageshare.com/ib/y666X365oo.mp4'
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
        url: 'https://yourimageshare.com/ib/NhVpmjkLHp.mp4'
      },
       {
        type: 'video',
        url: 'https://yourimageshare.com/ib/WyLItwICmA.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/kk5EVxUozU.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/ryTGZrxcyw.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/0000.mp4'
      }],
  },
  {
    name: 'Podcast',
    reels: [{
        type: 'video',
        url: 'https://yourimageshare.com/ib/niB4Ul1AMv.mp4'
      },
       {
        type: 'video',
        url: 'https://yourimageshare.com/ib/9LAbwthPpJ.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/NvTuyt0RpZ.mp4'
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
    name: 'Couple',
    reels: [{
        type: 'video',
        url: 'https://yourimageshare.com/ib/1k901itzf5.mp4'
      },
       {
        type: 'video',
        url: 'https://yourimageshare.com/ib/V2ClZQQgsg.mp4'
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
    name: 'Program',
    reels: [{
        type: 'video',
        url: 'https://yourimageshare.com/ib/Njl2cqncZZ.mp4'
      },
       {
        type: 'video',
        url: 'https://yourimageshare.com/ib/coqjwvKgaL.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/bKqollJ3ur.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/xF0lI9v9qz.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/SJNeznVCY1.mp4'
      }],
  },
  {
    name: 'Educational',
    reels: [{
        type: 'video',
        url: 'https://yourimageshare.com/ib/vNRn2y5Nu5.mp4'
      },
       {
        type: 'video',
        url: 'https://yourimageshare.com/ib/rNdU2jV2Dl.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/qOVZHgOZGD.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/KvDqQerEii.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/V8nvPs7YIb.mp4'
      }],
  },
  {
    name: 'Faceless Edit',
    reels: [{
        type: 'video',
        url: 'https://yourimageshare.com/ib/5xQiQDkksm.mp4'
      },
       {
        type: 'video',
        url: 'https://yourimageshare.com/ib/anNC8FOkqQ.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/kKNTFHc4hg.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/VztmQp9hDc.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/0000.mp4'
      }],
  },
  {
    name: 'Events',
    reels: [{
        type: 'video',
        url: 'https://yourimageshare.com/ib/LAdHgx8Y7F.mp4'
      },
       {
        type: 'video',
        url: 'https://yourimageshare.com/ib/QEbma49Dgb.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/Ehkbmp7DaB.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/QucIKudjvV.mp4'
      },
      {
        type: 'video',
        url: 'https://yourimageshare.com/ib/LpywVfrByA.mp4'
      }],
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
