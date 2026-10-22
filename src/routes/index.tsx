import { createFileRoute } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, MonitorPlay, Smartphone, PanelsTopLeft, Waypoints, Youtube, Sparkles, Phone, MessageCircle, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header, Loader, usePageMotion } from '@/components/studio/chrome';
import { ReelRow } from '@/components/studio/reels';
import { aboutBio, aboutFacts, categories, contacts, identity, navigation, stats } from '@/config/studio';
import hero from '@/assets/hero.jpg.asset.json';
import about from '@/assets/about.jpg';

const title = 'CLIPZO STUDIO — Content Creator';
const description = 'Video editing that tells stories, builds brands and gets results. Portfolio of CLIPZO STUDIO — Content Creator, Creative Partner.';
export const Route = createFileRoute('/')({
  component: Index,
  head: () => ({ meta: [
    { title }, { name: 'description', content: description },
    { property: 'og:title', content: title }, { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' }, { property: 'og:url', content: '/' },
    { property: 'og:image', content: `https://clipzo-studio.lovable.app${hero.url}` },
    { name: 'twitter:card', content: 'summary_large_image' }, { name: 'twitter:title', content: title }, { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: `https://clipzo-studio.lovable.app${hero.url}` },
  ], links: [{ rel: 'canonical', href: '/' }] }),
});
function SectionHeading({ label, title: heading }: { label: string; title: string }) {
  return <div className="section-heading" data-reveal="fade"><p className="section-label">{label}</p><h2 className="display section-title">{heading}</h2></div>;
}
const services = [
  { name: 'Video Editing', icon: MonitorPlay }, { name: 'Short Form', icon: Smartphone },
  { name: 'Long Form', icon: PanelsTopLeft }, { name: 'Motion Graphics', icon: Waypoints },
  { name: 'YouTube Editing', icon: Youtube }, { name: 'Creative Content', icon: Sparkles },
];
const tools = [['Pr', 'Premiere Pro'], ['Ae', 'After Effects'], ['Dv', 'DaVinci Resolve'], ['Ps', 'Photoshop'], ['Au', 'Audition'], ['Cc', 'CapCut']];
const channelIcons = [Phone, MessageCircle, Instagram, Mail];
function Index() {
  usePageMotion();
  return <div className="studio-page"><Loader /><Header /><main>
    <section id="home" className="hero container">
      <p className="eyebrow"><span className="gold-square" />{identity}</p>
      <h1 className="display hero-title" aria-label="Ideas edited for real impact.">{['IDEAS', 'EDITED', 'FOR REAL', 'IMPACT.'].map(line => <span className="line-mask" key={line}><span>{line}</span></span>)}</h1>
      <div className="hero-bottom"><p className="hero-tagline" data-reveal="fade">Video editing that tells stories, builds brands and gets results.</p><Button variant="studio" asChild className="hero-cta"><a href="#portfolio">View Portfolio <ArrowRight /></a></Button></div>
      <figure className="hero-figure" data-reveal="clip"><img className="hero-image" src={hero.url} width={1200} height={640} fetchPriority="high" alt="Editing workstation with an ultrawide monitor showing a video timeline" /><figcaption className="figure-caption"><span>Frame 001 / Timeline</span><span>Cut · Reveal · Frame · Zoom · Fade</span></figcaption></figure>
      <ul className="stats-strip" aria-label="Studio statistics">{stats.map(stat => <li className="stat" data-reveal="fade" key={stat.label}><p className="stat-value">{stat.value}</p><p className="stat-label">{stat.label}</p></li>)}</ul>
    </section>
    <section id="portfolio" className="section container"><SectionHeading label="01 / Selected Work" title="Selected Work" />{categories.map((category, index) => <ReelRow key={category.name} category={category} index={index} />)}</section>
    <section id="about" className="section container"><SectionHeading label="02 / About" title="CLIPZO STUDIO" /><div className="about-grid"><figure className="about-figure" data-reveal="clip"><img src={about} width={1024} height={1280} loading="lazy" alt="Editing control surface beside a timeline" /><figcaption className="figure-caption"><span>Suite 002 / Edit Bay</span><span>Cut · Grade · Mix · Deliver</span></figcaption></figure><div className="about-identity" data-reveal="fade"><p className="identity-label mono"><span className="gold-dot" />Identity</p><h3 className="identity-title">{identity}</h3><p className="identity-bio">{aboutBio}</p><dl className="identity-facts">{aboutFacts.map(([term, value]) => <div className="identity-fact" key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl></div></div></section>
    <section id="services" className="section container"><SectionHeading label="03 / Services" title="Services" /><div className="tools-marquee"><div className="tools-track">{[0, 1].map(copy => <div className="tools-set" key={copy} aria-hidden={copy === 1}>{tools.map(([abbr, name]) => <div className="tool" key={abbr}><span className="tool-badge">{abbr}</span><span>{name}</span></div>)}</div>)}</div></div><div className="service-grid">{services.map(({ name, icon: Icon }, index) => <article className="service-card" tabIndex={0} role="link" aria-label={`${name} — view reels`} key={name} data-reveal="fade" onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.currentTarget.click(); } }}><div className="card-top"><span className="card-number">{String(index + 1).padStart(2, '0')}</span><ArrowUpRight className="hover-arrow" /></div><Icon className="service-icon" /><h3 className="card-title">{name}</h3></article>)}</div></section>
    <section id="contact" className="contact"><div className="container"><p className="section-label">04 / Contact</p><h2 className="contact-title display" data-reveal="fade"><span>LET'S CREATE</span><span>SOMETHING GREAT</span></h2><p className="contact-support" data-reveal="fade">For freelance work, collaborations, or any queries.</p><Button variant="studio" className="contact-cta" asChild><a href="tel:+919174395148">Get in Touch <ArrowRight /></a></Button><div className="channel-grid">{contacts.filter(contact => contact.value).map((contact, index) => { const Icon = channelIcons[index] ?? Mail; return <a className="channel-card" key={contact.name} href={contact.href} target={contact.external ? '_blank' : undefined} rel={contact.external ? 'noopener noreferrer' : undefined}><div className="card-top"><span className="card-number">{String(index + 1).padStart(2, '0')}</span><ArrowUpRight className="hover-arrow" /></div><Icon className="channel-icon" /><h3 className="card-title">{contact.name}</h3><span className="contact-value">{contact.value}</span></a>; })}</div></div></section>
  </main><footer className="site-footer container"><div className="footer-main"><a href="#home" className="footer-brand">CLIPZO STUDIO<small>Content Creator</small></a><nav className="footer-nav" aria-label="Footer navigation">{navigation.map(name => <a key={name} href={`#${name.toLowerCase()}`}>{name}</a>)}</nav></div><p className="footer-bottom">© 2025 CLIPZO STUDIO. All rights reserved.</p></footer></div>;
}
