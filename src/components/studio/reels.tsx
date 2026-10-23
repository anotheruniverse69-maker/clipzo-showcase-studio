
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { embedUrl, type ReelCategory, type ReelSource } from '@/config/studio';
import { hasConfiguredSource, isHiddenSlot } from '@/components/studio/presentation';

export function ReelCard({ source, index, category }: { source: ReelSource; index: number; category: string }) {
  const card = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const element = card.current;
    if (!element || !source) return;
    let intersecting = false;
    const update = () => setVisible(intersecting && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      intersecting = Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.5);
      update();
    }, { threshold: [0, 0.5, 1] });
    observer.observe(element);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
  }, [source]);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    element.muted = muted;
    if (visible) void element.play().catch(() => setPlaying(false));
    else {
      element.pause();
      setPlaying(false);
    }
  }, [visible, muted]);

  const number = String(index + 1).padStart(2, '0');

  return <article className="reel-card" ref={card} aria-label={`${category} Reel ${number}`}>
    <div className="reel-frame">
      {(!source || failed) ? (
        <div className="reel-empty">
          <span className="empty-mark">—</span>
          <span>{failed ? 'REEL UNAVAILABLE' : 'EMPTY REEL'}</span>
          <span className="empty-number">{number} / 05</span>
        </div>
      ) : source.type === 'video' ? <>
        <span className="reel-loading">REEL {number}</span>
        <video
          ref={video}
          src={visible ? source.url : undefined}
          muted={muted}
          autoPlay
          loop
          playsInline
          preload="none"
          className={playing ? 'is-playing' : ''}
          onPlaying={() => {   if (video.current) video.current.muted = muted;   setPlaying(true); }}
          onPause={() => setPlaying(false)}
          onError={() => setFailed(true)}
          aria-label={`${category} Reel ${number} video`}
        />
        <button
          type="button"
          className="reel-mute-button"
          onClick={() => setMuted(current => !current)}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          aria-pressed={!muted}
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </> : visible ? (
        <iframe
          title={`${category} Reel ${number}`}
          src={embedUrl(source)}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          onError={() => setFailed(true)}
        />
      ) : <span className="reel-loading">REEL {number}</span>}
    </div>
    <div className="reel-caption"><span>Reel {number}</span><span>9:16</span></div>
  </article>;
}

export function ReelRow({ category, displayName = category.name }: { category: ReelCategory; displayName?: string }) {
  const row = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const element = row.current;
    if (!element) return;
    const update = () => setEdges({
      start: element.scrollLeft <= 2,
      end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2
    });
    update();
    element.addEventListener('scroll', update, { passive: true });
    const resize = new ResizeObserver(update);
    resize.observe(element);
    return () => {
      element.removeEventListener('scroll', update);
      resize.disconnect();
    };
  }, []);

  const scroll = (direction: number) => {
    const element = row.current;
    const first = element?.firstElementChild;
    if (!element || !first) return;
    element.scrollBy({
      left: direction * (first.getBoundingClientRect().width + 16),
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  };

  return <div className="reel-category">
    <div className="reel-row-heading">
      <h3>{displayName}</h3>
      <div className="reel-arrows">
        <Button variant="studioIcon" size="icon" aria-label={`Previous ${displayName} reel`} disabled={edges.start} onClick={() => scroll(-1)}><ArrowLeft /></Button>
        <Button variant="studioIcon" size="icon" aria-label={`Next ${displayName} reel`} disabled={edges.end} onClick={() => scroll(1)}><ArrowRight /></Button>
      </div>
    </div>
    <div ref={row} className="reel-list" tabIndex={0} role="region" aria-label={`${displayName} reels`} onKeyDown={event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        scroll(event.key === 'ArrowRight' ? 1 : -1);
      }
    }}>
      {category.reels.map((source, i) => hasConfiguredSource(source) && !isHiddenSlot(category.name, i) ? <ReelCard key={i} source={source} index={i} category={displayName} /> : null)}
    </div>
  </div>;
}
