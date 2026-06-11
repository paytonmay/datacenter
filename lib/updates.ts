/** Shown in the footer and on /updates. Update when content materially changes. */
export const SITE_LAST_VERIFIED = "June 11, 2026";

export interface UpdateEntry {
  date: string; // ISO date
  title: string;
  details: string;
  pages: { href: string; label: string }[];
}

/** Newest first. */
export const updates: UpdateEntry[] = [
  {
    date: "2026-06-11",
    title: "Real tax rates and the electric franchise fee",
    details:
      "Added the actual 2025 Kentucky property tax rates (computing equipment is taxed at roughly $1.80 per $100 across state, county, city, and school districts, with the school district collecting the largest share) and the city's 3% electric franchise fee from the publicly filed Kentucky Power agreement, with arithmetic against the city's FY2026-27 budget. The budget, presented June 9, 2026, is hosted here as a public record.",
    pages: [
      { href: "/ideas", label: "Ideas" },
      { href: "/power", label: "Power" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    date: "2026-06-11",
    title: "Civic toolkit: questions checklist, status tracker, FAQ, glossary",
    details:
      "Added a printable list of questions worth asking before the Development Agreement is signed (with a document shelf for officials), a where-things-stand timeline with how to participate and how Kentucky open records requests work, a plain-language FAQ, a glossary, and this updates log.",
    pages: [
      { href: "/questions", label: "Questions" },
      { href: "/status", label: "What's Next" },
      { href: "/faq", label: "FAQ" },
      { href: "/glossary", label: "Glossary" },
    ],
  },
  {
    date: "2026-06-11",
    title: "Ideas page: how the city could leverage the deal",
    details:
      "Three precedent-grounded ideas: waste-heat reuse for park neighbors, a permanent investment fund (Alaska, New Mexico, North Dakota, and West Virginia's data-center-specific model) with scenarios computed against Pikeville's audited budget, and deal structures that survive ownership changes. 11 new verified sources.",
    pages: [{ href: "/ideas", label: "Ideas" }],
  },
  {
    date: "2026-06-11",
    title: "Pros & Cons quick-version page; search and AI discoverability",
    details:
      "Added the one-page both-sides summary with links to every deep dive. Site-wide: sitemap, canonical URLs, structured data, and an overview file so search engines and AI assistants can find and cite the site accurately.",
    pages: [{ href: "/pros-cons", label: "Pros & Cons" }],
  },
  {
    date: "2026-06-11",
    title: "Water page: contaminants and discharge section",
    details:
      "What's actually in cooling-tower blowdown (concentrated minerals and treatment chemicals), how discharge is regulated, the documented cases (Quincy WA, The Dalles OR, the contested Georgia wells), the diesel-storage pathway, and what to ask for in Pikeville. 9 new verified sources.",
    pages: [{ href: "/water", label: "Water" }],
  },
  {
    date: "2026-06-10",
    title: "Site map, waste-heat reuse, Eastern Kentucky track record",
    details:
      "Added the interactive site map with distance rings to the nearest homes, the waste-heat reuse section, and the region's documented experience with crypto-era facilities.",
    pages: [
      { href: "/map", label: "Map" },
      { href: "/water", label: "Water" },
    ],
  },
  {
    date: "2026-06-10",
    title: "Site launched",
    details:
      "Initial publication: basics, noise, water, power & rates, health, other towns, the Pikeville proposal, and a fully numbered source registry. Every factual claim cited; all source links verified.",
    pages: [{ href: "/", label: "Home" }],
  },
];
