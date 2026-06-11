import type { Metadata } from "next";
import Link from "next/link";
import { Container, NextPage, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Glossary: The Jargon, Translated",
  description:
    "Plain-language definitions of the terms in the data center debate: megawatts, PUE, WUE, blowdown, tariffs, capacity markets, MOUs, and more.",
  alternates: { canonical: "/glossary" },
};

interface Term {
  term: string;
  def: string;
  link?: { href: string; label: string };
}

const terms: Term[] = [
  {
    term: "Blowdown",
    def: "Water periodically flushed out of an evaporative cooling system to remove minerals that concentrate as water evaporates. It usually goes to the sewer and carries dissolved solids plus treatment chemicals.",
    link: { href: "/water", label: "Water" },
  },
  {
    term: "Capacity market / capacity auction",
    def: "A system where power generators are paid in advance just to be available during peak demand. When demand forecasts spike (as with data centers), capacity prices can jump, and those costs flow into everyone's bills.",
    link: { href: "/power", label: "Power & Rates" },
  },
  {
    term: "Closed-loop (direct-to-chip) cooling",
    def: "The new AI-era standard: a sealed water loop filled once at construction and recirculated indefinitely past the chips. Nearly eliminates ongoing water use, and produces hot water that could be reused for heating.",
    link: { href: "/water", label: "Water" },
  },
  {
    term: "Colocation ('colo')",
    def: "A data center whose space is rented out to many different companies, as opposed to one built and used by a single company (hyperscale).",
    link: { href: "/basics", label: "The Basics" },
  },
  {
    term: "dBA / dBC",
    def: "Two ways of measuring sound. dBA approximates ordinary human hearing; dBC gives more weight to low-frequency sound, the deep hum that travels farthest and bothers neighbors most. A noise rule that only sets a dBA limit can miss the hum entirely.",
    link: { href: "/noise", label: "Noise" },
  },
  {
    term: "Decommissioning",
    def: "What happens when a facility permanently shuts down: removing equipment and restoring the site. A decommissioning obligation (often backed by a bond) ensures the cost falls on the owner, not the town.",
    link: { href: "/questions", label: "Questions to Ask" },
  },
  {
    term: "Development Agreement",
    def: "The binding contract between a city and a developer setting the actual terms: land, commitments, payments, enforcement. In Pikeville, this is the document that doesn't exist yet; the MOU only opened negotiations toward one.",
    link: { href: "/status", label: "What's Next" },
  },
  {
    term: "Demand response",
    def: "An arrangement where a big electricity user agrees to reduce or pause consumption during grid peaks, usually in exchange for better rates. Some AI data centers now do this.",
    link: { href: "/power", label: "Power & Rates" },
  },
  {
    term: "Evaporative cooling (open cooling tower)",
    def: "Cooling by evaporating water: energy-efficient but water-hungry. The thirstiest data center design, using millions of gallons per megawatt per year.",
    link: { href: "/water", label: "Water" },
  },
  {
    term: "Hyperscale",
    def: "The largest class of data center, built and operated by a single giant company (Google, Meta, Microsoft, Amazon). Typically 100+ MW. The Pikeville proposal's initial phase (25-30 MW) is mid-sized by comparison.",
    link: { href: "/basics", label: "The Basics" },
  },
  {
    term: "kWh (kilowatt-hour)",
    def: "The unit on your electric bill: one kilowatt of power used for one hour. An average U.S. home uses about 10,800 kWh per year.",
  },
  {
    term: "Large-load tariff",
    def: "A special electricity rate class for very big customers, designed to make them pay the full cost of serving them. Kentucky's new versions require customers over 100 MW to pay for at least 80% of forecast usage for 15 years, even if they leave early.",
    link: { href: "/power", label: "Power & Rates" },
  },
  {
    term: "MW (megawatt)",
    def: "One million watts of electrical power. A 30 MW data center draws roughly as much electricity as 25,000 average homes, around the clock. Data centers are sized by their power draw, not square footage.",
    link: { href: "/basics", label: "The Basics" },
  },
  {
    term: "MOU (Memorandum of Understanding)",
    def: "A preliminary, mostly non-binding agreement to negotiate. Pikeville's MOU grants the developer 120 days of exclusive negotiation; it transfers no land and sets no terms.",
    link: { href: "/status", label: "What's Next" },
  },
  {
    term: "NPDES permit",
    def: "A federal Clean Water Act permit required to discharge anything from a pipe into a river or stream, with numeric pollution limits, monitoring, and public reporting. Discharges into a city sewer are regulated separately, under the pretreatment program.",
    link: { href: "/water", label: "Water" },
  },
  {
    term: "Occupational license fee",
    def: "Pikeville's main revenue source: a 2% tax on wages earned and business net profits inside the city. It generated about $12.2 million of the city's $21.4 million general fund in FY2024.",
    link: { href: "/ideas", label: "Ideas" },
  },
  {
    term: "Permanent fund / endowment",
    def: "A pool of money where the principal is invested and only a fixed percentage (typically 4-5% a year) is spent, producing income forever. Alaska, New Mexico, North Dakota, and (for data centers specifically) West Virginia all run versions.",
    link: { href: "/ideas", label: "Ideas" },
  },
  {
    term: "PILOT (payment in lieu of taxes)",
    def: "A negotiated annual payment a company makes instead of normal property taxes: sometimes more predictable, sometimes a discount. Pikeville has said it will not reduce local taxes as an incentive.",
    link: { href: "/pikeville", label: "Pikeville" },
  },
  {
    term: "PUE (power usage effectiveness)",
    def: "How much total power a data center uses per unit of computing power. A PUE of 1.5 means 50% overhead (mostly cooling). The industry average is about 1.56; the best new builds approach 1.1.",
    link: { href: "/power", label: "Power & Rates" },
  },
  {
    term: "Tangible personal property tax",
    def: "Kentucky's tax on business equipment, including servers. Because computing equipment is most of a data center's value (and gets replaced every few years), this is often the biggest local tax stream. The state's data center incentive exempts sales tax, not this.",
    link: { href: "/ideas", label: "Ideas" },
  },
  {
    term: "Tier (I-IV)",
    def: "An industry reliability rating for data centers. Higher tiers mean more redundancy (more backup generators, more cooling capacity), not bigger size.",
    link: { href: "/basics", label: "The Basics" },
  },
  {
    term: "Waste heat reuse",
    def: "Capturing the heat a data center exhausts (essentially all the electricity it consumes) and using it to warm buildings, greenhouses, or pools. Common in Nordic countries; rare in the U.S. because it must be designed in from the start.",
    link: { href: "/ideas", label: "Ideas" },
  },
  {
    term: "WUE (water usage effectiveness)",
    def: "Liters of water consumed per kilowatt-hour of computing. The industry average is about 1.8 L/kWh; Meta's direct-evaporative fleet runs about 0.20; sealed-loop designs approach zero.",
    link: { href: "/water", label: "Water" },
  },
];

export default function GlossaryPage() {
  return (
    <>
      <PageHeader
        kicker="Translation layer"
        title="The jargon, in plain language."
        lede="Every debate about data centers is conducted in acronyms. Here's what they actually mean; each entry links to the page where the term does real work."
      />
      <Container>
        <dl className="divide-y divide-slate-200">
          {terms.map((t) => (
            <div
              key={t.term}
              id={t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="scroll-mt-20 py-5"
            >
              <dt className="font-bold text-slate-900">{t.term}</dt>
              <dd className="mt-1 leading-relaxed text-slate-700">
                {t.def}{" "}
                {t.link ? (
                  <Link
                    href={t.link.href}
                    className="whitespace-nowrap text-sm font-semibold text-amber-700 underline decoration-amber-300 underline-offset-2 hover:text-amber-900"
                  >
                    {t.link.label} →
                  </Link>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
        <NextPage href="/basics" label="The Basics: types & sizes" />
      </Container>
    </>
  );
}
