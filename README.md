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
- `/basics` — Data center types and sizes; where 25–30 MW fits
- `/noise` — Measured decibel levels, case studies, standards, mitigation
- `/water` — Cooling system types and real water numbers
- `/power` — Power usage and the electric-rate question (incl. Kentucky Power / Eastern KY context)
- `/health` — Health concerns labeled by evidence strength
- `/communities` — Public opinion and outcomes in other towns
- `/pikeville` — The local proposal, from the city's own documents
- `/sources` — The full numbered source list

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
