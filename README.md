# Clipzo Showcase Studio

Rebuild the single-page portfolio website for CLIPZO STUDIO, Video Editor / Educator / Creative Partner. Dark cinematic theme (black, champagne gold, white) with a working light/dark toggle. Every section, animation and interaction below must be built exactly as described.

GLOBAL
- Fonts: Inter Tight (weights 400 to 800) for text, JetBrains Mono (400, 500) for labels. Display headings: weight 700, uppercase, letter-spacing -0.045em, line-height 0.88.
- Dark theme colors: background #080808, ink #111111, paper #F5F5F5, card #151515, primary champagne gold #D4AF37, accent #F1D27A, muted text #A6A6A6, border #302817. Text selection is gold with black text. Focus ring is a 2px gold outline with 3px offset.
- Light theme: warm off-white background, charcoal text, cobalt-blue accents, subtle yellow highlights. Layout, content and videos are identical in both themes.
- Theme toggle: a sun/moon icon in the header (44px tap target). First visit follows the device preference. The visitor's choice is saved in localStorage. Colors transition over about 400ms. Apply the saved theme before first paint so there is no flash.
- One easing curve for all motion: cubic-bezier(0.77, 0, 0.175, 1). Accent motion may use longer durations.
- No horizontal page scroll at 320, 360, 375, 390, 430px or desktop widths. Reel rows scroll only inside themselves.
- With prefers-reduced-motion: disable all animations and transitions, show content immediately, and make carousel arrows jump instead of smooth-scrolling.
- SEO: title "CLIPZO STUDIO — Video Editor". Description: "Video editing that tells stories, builds brands and gets results. Portfolio of CLIPZO STUDIO — Video Editor, Educator, Creative Partner." Include Open Graph and Twitter card tags, an og:image, a canonical URL, a favicon, and lang="en". Include one charset and one viewport tag only.

FIRST-LOAD LOADER (full-screen overlay, z above everything)
- Background ink. Bottom-left label "CLIPZO STUDIO / Reel". Bottom-right timecode counts from 00:00:00:00 to 00:00:01:00 during the load.
- A 2px gold progress bar fills left to right over 0.6s.
- Then the overlay lifts like a curtain: scaleY 1 to 0 over 0.9s, origin top, starting after a 0.6s delay.
- Remove the overlay from the DOM when the animation ends.

HEADER (fixed top, 56px tall, background at 90% opacity with backdrop blur, bottom border)
- Left: "CLIPZO STUDIO" bold, followed by "/ VIDEO EDITOR" in muted text. Clicking it goes to #home.
- Desktop (768px and up): links Home, Portfolio, About, Contact in mono uppercase, separated by "/". Hover turns gold.
- Right: the theme toggle, then on screens below 768px a hamburger with two 2px bars. On open, the bars rotate to an X over 500ms.
- A 2px gold progress bar sits at the header's bottom edge and tracks page scroll (scaleX 0 to 1). Update it with a ref and requestAnimationFrame, not React state on every scroll event.
- Mobile menu: a full-screen ink panel. It opens with a clip-path reveal from the top over 700ms. Each link is a 48px uppercase display word that slides up from below, staggered 150ms plus 60ms per item. Each row has a thin divider and a right-aligned index 00 to 03. The footer line reads "CLIPZO STUDIO / Video Editor". Body scroll is locked while open. Tapping a link closes the menu. Escape closes it and returns focus to the hamburger.

HERO (#home)
- Label row with a small gold square and the text "Video Editor / Educator / Creative Partner".
- H1 on four lines, "IDEAS", "EDITED", "FOR REAL", "IMPACT.", at clamp(3.5rem, 15vw, 15rem). The last line is gold. Each line reveals upward from behind its own mask (overflow hidden) over 1s with the ease curve. Line delays start at 1.1s and step by 0.12s.
- Tagline in 20px (mobile) to 24px text: "Video editing that tells stories, builds brands and gets results." It fades up on scroll.
- Button "View Portfolio →": gold background, black text, 48px tall, full width on mobile. The arrow slides 6px right on hover, and the background shifts to #F1D27A. It links to #portfolio.
- Hero image (hero.jpg) inside a figure. The figure reveals with a clip-path wipe from left to right over 1.2s when it enters the viewport. The image starts at scale 1.12. On desktop only (1024px and up, reduced motion off), it parallaxes with translateY(scrollY × 0.08px). Use a single transform value that combines scale and parallax so they don't override each other.
- Image aspect ratio is 4:3 on mobile and 21:9 on desktop. Alt text: "Editing workstation with an ultrawide monitor showing a video timeline".
- Caption overlay at the bottom: "Frame 001 / Timeline" on the left. "Cut · Reveal · Frame · Zoom · Fade" on the right, hidden below 640px.

01 / SELECTED WORK (#portfolio)
- Section header: small label "01 / Selected Work", then the display title "SELECTED WORK" at clamp(2.75rem, 8vw, 8rem). The header has a top border and fades in.
- Ten carousels stacked vertically, with 48px gaps on mobile and 64px on desktop. Each carousel has a top border.
- Carousel header: the category name in mono on the left. On the right, two 44px square outline arrow buttons (left and right, using arrow icons). A disabled arrow is dimmed. Hover turns the button gold with black icon.
- Order: 01 Home operating, 02 Corporate sessions, 03 Delivery shoots, 04 Wedding Content, 05 Podcast, 06 Couple, 07 Program, 08 Educational, 09 Faceless Edit, 10 Events.
- Each row has five reels: a horizontal flex list with scroll-snap-x mandatory and 16px gaps. Scrollbars are hidden. The list is keyboard focusable (tabIndex 0) and labeled. The arrows scroll exactly one card width, smooth by default.
- Reel card width: 72% of the row (max 300px) on mobile, 240px at sm, 260px at lg, 280px at xl. Each card is 9:16 with the video or embed filling the frame. Below it is a bottom-bordered row with "Reel 01" to "Reel 05" in mono on the left and "9:16" in muted mono on the right.
- Thumbnails: remove the category photos from the reel cards entirely. No poster images, no stock images, no play buttons. An empty slot shows a plain dark 9:16 card with the reel label, clearly marked as empty.
- Playback: a reel loads and plays only when at least 50% of its card is visible (IntersectionObserver). Direct video files are muted, autoplay, loop, playsInline, and preload none. They pause when they leave view or the tab is hidden. The video fades in over 300ms once it is playing.
- Embedded reels load an iframe only when visible. Use the YouTube Shorts embed with autoplay, mute, loop and rel=0. Use the Videas and Instagram embeds with autoplay enabled.
- Reel sources are stored in one config file, one field per reel. Current content:
  - Home operating reel 1: Videas embed https://app.videas.fr/embed/media/78a9f0c1-964b-4054-8bb9-eff2f4abf3e7/?title=false&logo=false&thumbnail_duration=false&autoplay=true
  - Corporate sessions reel 1: YouTube Shorts 4pe5dm5R4wU
  - Delivery shoots reels 1 to 5: MP4 files at https://files.catbox.moe/ya464e.mp4, vad98e.mp4, lwggeb.mp4, c2l7k8.mp4, gkg80c.mp4
  - All other reels are empty placeholders.
- Vertical page scrolling must never be captured by a reel row.

02 / ABOUT (#about)
- Header "02 / About" with the display title "CLIPZO STUDIO".
- Two-column grid on desktop. Left column (5 of 12 columns, starting at column 4): about.jpg in a 4:5 frame that reveals with a clip-path wipe. Alt text: "Editing control surface beside a timeline". Lazy loaded.
- Right column: a gold dot with "Identity" in mono, then the display line "Video Editor / Educator / Creative Partner" at 36px (mobile) to 48px (desktop). It fades up.

03 / SERVICES (#services)
- Header "03 / Services" with the display title "SERVICES".
- Tools marquee: a strip with a top and bottom border. Six tools: Pr Premiere Pro, Ae After Effects, Dv DaVinci Resolve, Ps Photoshop, Au Audition, Cc CapCut. Each has a 40px (44px on desktop) square abbreviation badge and a bold name. It scrolls right to left in an endless 30s linear loop, using the list twice, with the duplicate set hidden from screen readers. It pauses on hover. Clip it inside its own overflow boundary so it never widens the page.
- Service grid: one column on mobile, two at sm, three at lg, with hairline borders. Six cards in order:
  - 01 Video Editing: gold line icon of a screen on a timeline.
  - 02 Short Form: tall phone frame.
  - 03 Long Form: widescreen frame with chapter bars.
  - 04 Motion Graphics: curved motion path with nodes.
  - 05 YouTube Editing: play plate.
  - 06 Creative Content: the existing gold line icon.
- Each card shows its number top-left, a hover arrow top-right, the icon (44px), and the title at 24px (mobile) to 30px (desktop).
- Hover (and keyboard focus-visible): a 2px gold line grows from 0 to 100% width over 700ms along the top edge. The arrow slides in from the left and fades in over 500ms. The icon lifts 4px over 500ms.
- Cards reveal with a stagger of 70ms per card.

04 / CONTACT (#contact)
- Background uses the secondary ink tone. Padding is 96px on mobile and 144px on desktop.
- Label "04 / Contact". Display title in gold on two lines, "LET'S CREATE" and "SOMETHING GREAT", at clamp(3rem, 11vw, 12rem). Fades in.
- Supporting text: "For freelance work, collaborations, or any queries."
- Main CTA "Get in Touch →": gold, 64px tall, text 18px semibold. It links to tel:+916267305466. Hover switches to the accent gold with black text, and the arrow slides 6px.
- Three channel cards in a bordered grid (two columns at sm, three at lg). Each card has a number, a gold line icon, the channel name at 24 to 30px, and the value in mono below. Hover shows the gold top line and turns the value gold.
  - WhatsApp, value +91 6267305466. Opens https://wa.me/916267305466 with the prefilled text "Hi Raj, I found your portfolio and would like to discuss a project." in a new tab with rel="noopener noreferrer".
  - Instagram, value @starkeyy08. Opens https://www.instagram.com/starkeyy08/ in a new tab.
  - Gmail, value zoneg1477@gmail.com. Opens mailto:zoneg1477@gmail.com?subject=Project%20enquiry.
- Hide any channel with an empty value. Keep all contact details in one config file.

FOOTER
- Left: "CLIPZO STUDIO" bold with "Video Editor" in muted mono beneath it.
- Right: Home / Portfolio / About / Contact links in mono, separated by "/".
- Bottom line: "© 2026 CLIPZO STUDIO. All rights reserved." in muted mono.

BUGS TO FIX (all must be resolved)
1. The light/dark toggle described above was never built. Build it fully, including persistence and smooth transitions.
2. The hero label reads "Video Editor / Creative Editor", but the About section and meta description say "Educator / Creative Partner". Use "Video Editor / Educator / Creative Partner" everywhere.
3. Remove the category photos used as reel thumbnails. Every reel currently uses the same stock image for all five slots.
4. Empty reel slots look like working reels. Mark them clearly as empty placeholders, or hide them until a source is added.
5. The loader overlay stays in the DOM after its animation ends. Unmount it.
6. The loader timecode is static text. Animate it or remove it.
7. The scroll-reveal hook runs on every render with no dependency list, so it recreates its observer repeatedly. Set it up once on mount and disconnect it on unmount.
8. The clip-reveal hook observes the parent element instead of the element itself. Observe the element.
9. The header progress bar updates React state on every scroll event. Use a ref and requestAnimationFrame.
10. The hero parallax inline transform overrides the scale class. Combine them into one transform.
11. Remove unused CSS: the lightbox animation class and its keyframes.
12. Meta tags are duplicated between the root layout and the index route. Keep one source of truth, and add og:image and canonical.
13. Hover-only effects in Services and Contact must also work on keyboard focus and must not break on touch screens.
14. The mobile menu must support Escape to close, return focus to the hamburger, and keep focus inside while open.
15. The Delivery shoots videos are hosted on files.catbox.moe, a third-party host that can go offline. Move them to storage you control, or at least make sure the site shows the empty placeholder when a file fails to load.
16. Update the existing reel tests to match the new thumbnail-free design. Keep the tests for lazy loading, visibility-based playback, the iframe embed, and the YouTube embed URL.

FINAL CHECK
Test at 320, 360, 375, 390, 430px and at 1280px. Check both themes, the loader, the menu, every reel row's arrows and swipe, the marquee, the hover states, and reduced-motion mode. Confirm there is zero horizontal page overflow and no console errors.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://clipzo-showcase-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/efdd82f0-4a3b-4cba-bf8c-cff45d8beda6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
