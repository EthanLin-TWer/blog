# Plan: Migrate Blog to Astro

## Context

Current stack: React 18 + Redux + Redux-Saga + Webpack + react-markdown + mermaid + rehype-katex + react-syntax-highlighter.

Posts are Markdown files in `_posts/`. `api/posts.json` is a manually-built index (title, summary, date, path). Frontend fetches individual `.md` files at runtime.

Problems:
- React boots on every page load even though content is 95% static
- Mermaid (~1MB+), KaTeX (~300KB), react-syntax-highlighter are all loaded at runtime
- First-screen performance suffers from JS-heavy rendering pipeline

---

## Decision: Migrate to Astro

Astro was built specifically for content-driven, Markdown-based static sites — exactly this use case. It ships zero JS by default and renders everything at build time.

### What we gain

- Markdown rendered to HTML at build time — remark/rehype/mermaid/KaTeX never run in browser
- Near-zero JS on static pages
- `api/posts.json` index replaced by Astro's native content collections
- Pagefind for client-side search (loads index shards on demand, not all at once)
- Giscus for comments (GitHub Discussions, free, drop-in island)

### What we keep

- Same `_posts/` Markdown files, no content changes needed
- React components can be reused as Astro islands (`client:load` etc.)
- Tailwind works via `npx astro add tailwind`
- GitHub Pages deployment unchanged

---

## Key Concepts

**Build-time vs runtime boundary**: Astro components run at build time. Only explicit islands (`client:*`) ship JS.

**Islands**: opt-in interactivity. Only interactive parts (search box, comments, theme toggle) need JS.

```astro
<!-- Static HTML, zero JS -->
<PostCard title={post.title} />

<!-- Island — ships JS to browser -->
<SearchBox client:load />
<GiscusComments client:only="react" />
```

---

## Markdown Features

| Feature | How | Runtime cost |
|---|---|---|
| Syntax highlighting | Shiki (built-in to Astro) | Zero — rendered at build time |
| Math (KaTeX) | remark-math + rehype-katex in astro.config | Zero — rendered at build time |
| Mermaid diagrams | rehype-mermaid | Zero — SVG rendered at build time |
| GFM | remark-gfm | Zero — build time |

---

## Search (no backend)

Use **Pagefind**:
- Runs after `astro build`, indexes generated HTML
- Splits index into shards — browser only fetches shards matching the query
- No backend, no external service
- Integrates natively with Astro

---

## Comments

Use **Giscus**:
- Backed by GitHub Discussions — free, no database
- Users authenticate with GitHub
- Drop in as `client:only="react"` island
- No backend needed

---

## Migration Path (incremental)

1. Scaffold new Astro project alongside current repo
2. Set up content collections pointing at existing `_posts/`
3. Configure markdown plugins (math, mermaid, GFM, syntax highlighting)
4. Port layouts and post list as `.astro` components
5. Add Pagefind for search
6. Port any interactive React components as islands
7. Add Giscus for comments
8. Set up Tailwind
9. Configure GitHub Pages deployment
10. Retire Webpack, Redux, Redux-Saga, react-markdown and all runtime rendering deps

---

## Reference: Famous Docs Stacks

| Product | Tech |
|---|---|
| React | Next.js (App Router) |
| Jest | Docusaurus |
| Redux | Docusaurus |
| Claude / Anthropic | Mintlify |
| Cursor | Mintlify |
| Astro | Astro + Starlight |
