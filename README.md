# Data Centers, Explained

An independent, fully-sourced educational website about data centers, built
for the Pikeville, Kentucky community as it evaluates a proposed data center
development at the Kentucky Enterprise Industrial Park.

**Every factual claim on the site carries a numbered citation** linking to a
source registry (`lib/sources.ts`) of government reports, peer-reviewed
studies, utility filings, and journalism. Source links were verified in
June 2026.

## Pages

- `/` — Home and how the site handles facts
- `/pros-cons` — The quick version: the case for and the concerns, topic by topic
- `/basics` — Data center types and sizes; where 25–30 MW fits
- `/map` — The site with distance rings to the nearest homes
- `/noise` — Measured decibel levels, case studies, standards, mitigation
- `/water` — Cooling system types, real water numbers, and what's in the discharge
- `/power` — Power usage and the electric-rate question (incl. Kentucky Power / Eastern KY context)
- `/health` — Health concerns labeled by evidence strength
- `/communities` — Public opinion and outcomes in other towns
- `/pikeville` — The local proposal, from the city's own documents
- `/sources` — The full numbered source list

## SEO & AI discoverability

- Canonical domain: `https://pikevilledatacenter.com` (set in `lib/site.ts`)
- `app/sitemap.ts` / `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`
  (all crawlers welcome, AI crawlers explicitly allowed)
- `public/llms.txt` gives LLM search tools a structured site overview
- JSON-LD `WebSite` schema in `app/layout.tsx`; per-page canonicals and
  Open Graph image in `app/opengraph-image.tsx`

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # static production build
```

Built with Next.js (App Router) + Tailwind CSS. Fully static — no database.

## Corrections

This site aims to be accurate above all. If you find an error, a dead link,
or a superseded figure, please open an issue or PR.
