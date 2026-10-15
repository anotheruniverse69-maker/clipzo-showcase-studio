<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio as one index route with explicit in-page section anchors, because the requested experience is a single scrolling page.
- Keep reel sources and contact channels in one browser-safe configuration module, so content updates cannot drift across sections.
- Put portfolio motion and theme styling in the global design system; use ref-driven scroll effects to avoid per-frame React renders.
- Initialize the persisted theme in the root document head before painting; keep page-specific SEO metadata only in the index route.
