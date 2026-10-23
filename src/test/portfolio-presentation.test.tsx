import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { categories, contacts, type ReelCategory } from '@/config/studio';
import { displayedContacts, hasConfiguredSource, portfolioCategories } from '@/components/studio/presentation';
import { ReelRow } from '@/components/studio/reels';

beforeEach(() => {
  vi.stubGlobal('IntersectionObserver', class { observe() {} disconnect() {} });
  vi.stubGlobal('ResizeObserver', class { observe() {} disconnect() {} });
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });

describe('Protected portfolio presentation', () => {
  it('orders nine original category objects without copying or changing their reels', () => {
    const names = ['Wedding Content', 'Corporate sessions', 'Delivery shoots', 'Events', 'Program', 'Educational', 'Home operating', 'Couple', 'Podcast'];
    expect(portfolioCategories.map(item => item.category.name)).toEqual(names);
    for (const { category } of portfolioCategories) {
      expect(category).toBe(categories.find(item => item.name === category.name));
    }
    expect(categories.find(item => item.name === 'Faceless Edit')?.reels.filter(hasConfiguredSource).length).toBe(5);
  });

  it('omits null and blank sources while preserving configured slot indices and order', () => {
    const category: ReelCategory = { name: 'Example', reels: [null, { type: 'video', url: '/first.mp4' }, { type: 'video', url: '  ' }, null, { type: 'video', url: '/last.mp4' }] };
    const original = JSON.stringify(category);
    const { container } = render(<ReelRow category={category} />);
    expect(container.querySelectorAll('.reel-card')).toHaveLength(2);
    expect(Array.from(container.querySelectorAll('video')).map(video => video.getAttribute('aria-label'))).toEqual(['Example Reel 02 video', 'Example Reel 05 video']);
    expect(JSON.stringify(category)).toBe(original);
  });

  it('keeps categories with zero sources without empty boxes', () => {
    const { container } = render(<ReelRow category={{ name: 'Empty', reels: [null, null, null, null, null] }} />);
    expect(container.querySelectorAll('.reel-category')).toHaveLength(1);
    expect(container.querySelectorAll('.reel-card')).toHaveLength(0);
  });

  it('keeps configured cards when loading and after playback failure', () => {
    const { container } = render(<ReelRow category={{ name: 'Example', reels: [{ type: 'video', url: '/configured.mp4' }, null, null, null, null] }} />);
    expect(container.querySelectorAll('.reel-card')).toHaveLength(1);
    const video = container.querySelector('video');
    if (!video) throw new Error('Configured reel player missing');
    fireEvent.error(video);
    expect(container.querySelectorAll('.reel-card')).toHaveLength(1);
  });

  it('overrides only WhatsApp with the requested phone number and exact destination', () => {
    expect(displayedContacts.find(contact => contact.name === 'WhatsApp')).toMatchObject({ value: '+91 91743 95148', href: 'https://wa.me/919174395148' });
    for (const contact of contacts.filter(item => item.name !== 'WhatsApp')) {
      expect(displayedContacts.find(item => item.name === contact.name)).toBe(contact);
    }
  });

  it('hides only the requested slots and keeps original numbering', () => {
    const expected: Record<string, string[]> = {
      'Wedding Content': ['01', '02', '03', '04'],
      'Corporate sessions': ['01', '02', '03'],
      'Couple': ['01', '02'],
      'Podcast': ['01', '02', '03'],
      'Delivery shoots': ['01', '02', '03', '04', '05'],
    };
    for (const [name, numbers] of Object.entries(expected)) {
      const category = categories.find(item => item.name === name)!;
      const { container, unmount } = render(<ReelRow category={category} />);
      expect(Array.from(container.querySelectorAll('.reel-caption span:first-child')).map(el => el.textContent)).toEqual(numbers.map(n => `Reel ${n}`));
      unmount();
    }
  });
});