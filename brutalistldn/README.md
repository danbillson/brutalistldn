# brutalistldn

Production-ready Next.js 15 (App Router) + TypeScript + Tailwind + shadcn/ui + Framer Motion + Contentlayer site indexing Brutalist architecture across London.

## Tech stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Contentlayer (MDX) for content
- next-seo for SEO, dynamic OG images via /api/og
- ESLint + Prettier, strict TS

## Scripts
- dev: contentlayer dev + next dev
- build: contentlayer build + next build
- start: next start
- lint: next lint
- format: prettier --write .
- typecheck: tsc --noEmit

## Content model
- Building
  - slug, title, borough, address, coordinates {lat,lng}, architect, year, type, status, materials[], description, coverImage, gallery[], references[]
- PageDoc
  - slug, title, description, body

Content files live in `content/buildings/*.mdx` and `content/pages/*.mdx`.

## Adding a building
1. Create a new MDX file in `content/buildings/your-slug.mdx` with frontmatter according to the schema above.
2. Add a monochrome cover image (remote URL via Unsplash is fine) and optional gallery/references.
3. Run `pnpm dev` and the index will update automatically.

## Development
1. pnpm install
2. pnpm dev
3. Open http://localhost:3000

## Deploy to Vercel
- Push to a Git repo and import in Vercel
- Environment: none required
- Vercel will auto-detect Next.js 15; no special settings needed

## Brand tokens
- Colors:
  - --bg: #0E0E0E
  - --paper: #E8E6E3
  - --ink: #1A1A1A
  - --muted: #A4A19B
  - --concrete: #C9C6C0
  - --accent: #E31B23
- Fonts:
  - Headings: Space Grotesk
  - Body/UI: Inter
- Motion:
  - Ease: mostly ease-out / ease-in-out
  - Durations: 120–220ms UI; 300–600ms sections
  - Index list: parent stagger 0.05s; item fade + y
  - Page transition: fade + y:12px in 180ms
  - Prefers-reduced-motion respected via MotionConfig

## Sitemap/robots/RSS
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
- RSS: TODO (can be added via simple feed generator over `allBuildings`)

## Notes
- Styling lives in `styles/globals.css` with brand CSS variables and utilities.
- Images use next/image with remote patterns for Unsplash.
