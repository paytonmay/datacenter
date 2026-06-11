import Link from "next/link";
import { SITE_LAST_VERIFIED } from "@/lib/updates";

const exploreLinks = [
  { href: "/pros-cons", label: "Pros & Cons" },
  { href: "/ideas", label: "Ideas" },
  { href: "/status", label: "What's Next" },
  { href: "/questions", label: "Questions to Ask" },
  { href: "/faq", label: "FAQ" },
  { href: "/basics", label: "Basics" },
  { href: "/map", label: "Map" },
  { href: "/noise", label: "Noise" },
  { href: "/water", label: "Water" },
  { href: "/power", label: "Power" },
  { href: "/health", label: "Health" },
  { href: "/communities", label: "Other Towns" },
  { href: "/pikeville", label: "Pikeville" },
  { href: "/glossary", label: "Glossary" },
  { href: "/sources", label: "Sources" },
  { href: "/updates", label: "Updates" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 print:hidden">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm leading-relaxed text-slate-600">
        <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-1.5 border-b border-slate-200 pb-6">
          {exploreLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-semibold text-slate-600 hover:text-amber-800"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 font-bold text-slate-800">About this site</p>
        <p className="mt-2 max-w-2xl">
          This is an independent, citizen-built educational resource about data
          centers, created for the Pikeville, Kentucky community as it
          evaluates a proposed data center development. It is not affiliated
          with the City of Pikeville, MD Squared Power LLC, Kentucky Power, or
          any advocacy group. Every factual claim links to a numbered source;
          see the <Link href="/sources" className="font-semibold text-amber-700 underline">Sources page</Link>.
        </p>
        <p className="mt-3 max-w-2xl">
          Spotted an error or an outdated figure? Corrections are welcome;
          this site aims to be accurate above all.
        </p>
        <p className="mt-4 text-xs text-slate-400">
          Content last verified {SITE_LAST_VERIFIED}; see{" "}
          <Link href="/updates" className="underline hover:text-slate-600">
            what&rsquo;s changed
          </Link>
          . The situation (and the research) keeps evolving. Always check
          primary sources for the latest.
        </p>
      </div>
    </footer>
  );
}
