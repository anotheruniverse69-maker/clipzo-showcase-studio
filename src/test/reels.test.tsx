import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ReelCard } from '@/components/studio/reels';
import { embedUrl } from '@/config/studio';
let callbacks: IntersectionObserverCallback[] = [];
class Observer {
  constructor(callback: IntersectionObserverCallback) { callbacks.push(callback); }
  observe = vi.fn(); unobserve = vi.fn(); disconnect = vi.fn();
}
function visibility(ratio: number) { act(() => { callbacks.forEach(callback => callback([{ isIntersecting: ratio > 0, intersectionRatio: ratio } as IntersectionObserverEntry], {} as IntersectionObserver)); }); }
beforeEach(() => { callbacks = []; vi.stubGlobal('IntersectionObserver', Observer); vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(); vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {}); });
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });
describe('Thumbnail-free reels', () => {
  it('marks empty slots clearly without images or play buttons', () => { const { container } = render(<ReelCard source={null} index={0} category="Events" />); expect(screen.getByText('EMPTY REEL')).toBeInTheDocument(); expect(container.querySelector('img, video, iframe, button')).toBeNull(); });
  it('loads only at 50% visibility, plays muted, and pauses outside view', () => {
    const { container } = render(<ReelCard source={{ type: 'video', url: '/test.mp4' }} index={0} category="Delivery shoots" />);
    const video = container.querySelector('video'); expect(video).not.toHaveAttribute('src'); expect(video).not.toHaveAttribute('poster'); expect(video).toHaveAttribute('preload', 'none');
    visibility(.49); expect(video).not.toHaveAttribute('src'); visibility(.5); expect(video).toHaveAttribute('src', '/test.mp4'); expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
    fireEvent.playing(video as HTMLVideoElement); expect(video).toHaveClass('is-playing'); visibility(0); expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled(); expect(video).not.toHaveClass('is-playing');
  });
  it('pauses when the browser tab becomes hidden', () => { render(<ReelCard source={{ type: 'video', url: '/test.mp4' }} index={0} category="Delivery" />); visibility(1); const pause = vi.mocked(HTMLMediaElement.prototype.pause); pause.mockClear(); vi.spyOn(document, 'hidden', 'get').mockReturnValue(true); fireEvent(document, new Event('visibilitychange')); expect(pause).toHaveBeenCalled(); });
  it('shows an unavailable placeholder after a video error', () => { const { container } = render(<ReelCard source={{ type: 'video', url: '/missing.mp4' }} index={0} category="Delivery" />); visibility(1); fireEvent.error(container.querySelector('video') as HTMLVideoElement); expect(screen.getByText('REEL UNAVAILABLE')).toBeInTheDocument(); expect(container.querySelector('video')).toBeNull(); });
  it('lazy mounts and unmounts the Videas iframe', () => { const { container } = render(<ReelCard source={{ type: 'videas', url: 'https://app.videas.fr/embed/media/test/?autoplay=true' }} index={0} category="Home" />); expect(container.querySelector('iframe')).toBeNull(); visibility(.5); expect(screen.getByTitle('Home Reel 01')).toHaveAttribute('src', expect.stringContaining('autoplay=true')); visibility(0); expect(container.querySelector('iframe')).toBeNull(); });
  it('uses the correct autoplay, muted looping YouTube Shorts URL', () => { expect(embedUrl({ type: 'youtube', url: '4pe5dm5R4wU' })).toBe('https://www.youtube.com/embed/4pe5dm5R4wU?autoplay=1&mute=1&loop=1&playlist=4pe5dm5R4wU&rel=0&playsinline=1'); });
});
