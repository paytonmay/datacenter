import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm leading-relaxed text-slate-600">
        <p className="font-bold text-slate-800">About this site</p>
        <p className="mt-2 max-w-2xl">
          This is an independent, citizen-built educational resource about data
          centers, created for the Pikeville, Kentucky community as it
          evaluates a proposed data center development. It is not affiliated
          with the City of Pikeville, MD Squared Power LLC, Kentucky Power, or
          any advocacy group. Every factual claim links to a numbered source —
          see the <Link href="/sources" className="font-semibold text-amber-700 underline">Sources page</Link>.
        </p>
        <p className="mt-3 max-w-2xl">
          Spotted an error or an outdated figure? Corrections are welcome —
          this site aims to be accurate above all.
        </p>
        <p className="mt-4 text-xs text-slate-400">
          Figures were gathered and source links verified in June 2026. The
          situation (and the research) keeps evolving — always check primary
          sources for the latest.
        </p>
      </div>
    </footer>
  );
}
