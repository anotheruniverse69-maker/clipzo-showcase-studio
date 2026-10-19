import { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigation } from '@/config/studio';

export function Loader() {
  const [active, setActive] = useState(true);
  const code = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setActive(false); return; }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const count = Math.min(30, Math.floor((now - start) / 600 * 30));
      if (code.current) code.current.textContent = count === 30 ? '00:00:01:00' : `00:00:00:${String(count).padStart(2, '0')}`;
      if (count < 30) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const timer = setTimeout(() => setActive(false), 1550);
    return () => { cancelAnimationFrame(frame); clearTimeout(timer); };
  }, []);
  return active ? <div className="intro-loader" aria-hidden="true" onAnimationEnd={event => { if (event.animationName === 'curtain') setActive(false); }}><div className="loader-progress" /><div className="loader-labels"><span>CLIPZO STUDIO / Reel</span><span ref={code}>00:00:00:00</span></div></div> : null;
}
export function Header() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setLight(document.documentElement.dataset['theme'] === 'light');
    const media = matchMedia('(prefers-color-scheme: dark)');
    const changed = () => { try { if (localStorage.getItem('clipzo-theme')) return; } catch { /* storage unavailable */ } const theme = media.matches ? 'dark' : 'light'; document.documentElement.dataset['theme'] = theme; setLight(theme === 'light'); };
    media.addEventListener('change', changed);
    let frame = 0;
    const paint = () => { frame = 0; const max = document.documentElement.scrollHeight - innerHeight; if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`; };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(paint); };
    paint(); window.addEventListener('scroll', scroll, { passive: true }); window.addEventListener('resize', scroll);
    return () => { media.removeEventListener('change', changed); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); cancelAnimationFrame(frame); };
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow; document.body.style.overflow = 'hidden';
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const close = () => { setOpen(false); toggle.current?.focus(); };
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); close(); }
      if (event.key === 'Tab') {
        const items = [toggle.current, ...Array.from(menu.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter((item): item is HTMLButtonElement | HTMLAnchorElement => item !== null);
        const first = items[0], last = items.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const resize = () => { if (innerWidth >= 768) close(); };
    document.addEventListener('keydown', keyboard); window.addEventListener('resize', resize);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', keyboard); window.removeEventListener('resize', resize); };
  }, [open]);
  const switchTheme = () => { const theme = light ? 'dark' : 'light'; document.documentElement.dataset['theme'] = theme; setLight(!light); try { localStorage.setItem('clipzo-theme', theme); } catch { /* private browsing */ } };
  return <>
    <header className="site-header"><a className="brand" href="#home">CLIPZO STUDIO <span>/ CONTENT CREATOR</span></a><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(name => <a key={name} href={`#${name.toLowerCase()}`}>{name}</a>)}</nav><div className="header-controls"><Button variant="studioGhost" size="icon" aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'} title={light ? 'Dark theme' : 'Light theme'} onClick={switchTheme}>{light ? <Moon /> : <Sun />}</Button><Button ref={toggle} variant="studioGhost" size="icon" className={`menu-toggle ${open ? 'is-open' : ''}`} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span /><span /></Button></div><div className="reading-progress" ref={progress} /></header>
    <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} ref={menu} role={open ? 'dialog' : undefined} aria-modal={open ? true : undefined} aria-label="Navigation" inert={!open} aria-hidden={!open}>
      <nav>{navigation.map((name, i) => <a key={name} href={`#${name.toLowerCase()}`} onClick={() => { setOpen(false); toggle.current?.focus(); }}><span>{name}</span><small>{String(i).padStart(2, '0')}</small></a>)}</nav><div className="mobile-menu-footer">CLIPZO STUDIO / Content Creator</div>
    </div>
  </>;
}
export function usePageMotion() {
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (reduced.matches) { elements.forEach(el => el.classList.add('revealed')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }), { threshold: 0 });
    elements.forEach(el => observer.observe(el));
    const image = document.querySelector<HTMLElement>('.hero-image');
    let frame = 0;
    const paint = () => { frame = 0; if (image) image.style.transform = `translateY(${innerWidth >= 1024 && !reduced.matches ? scrollY * 0.08 : 0}px) scale(1.12)`; };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(paint); };
    paint(); window.addEventListener('scroll', scroll, { passive: true }); window.addEventListener('resize', scroll);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); };
  }, []);
}
