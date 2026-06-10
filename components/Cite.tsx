import Link from "next/link";
import { getSource, sourceNumber } from "@/lib/sources";

/**
 * Inline citation marker. Renders a superscript number that links to the
 * matching entry on the Sources page. Every factual claim on the site
 * should carry one of these.
 */
export function Cite({ id }: { id: string }) {
  const source = getSource(id);
  const n = sourceNumber(id);
  if (!source) {
    // Fail loudly in dev so a bad citation id never ships silently.
    if (process.env.NODE_ENV !== "production") {
      throw new Error(`Unknown source id: ${id}`);
    }
    return null;
  }
  return (
    <sup className="ml-0.5">
      <Link
        href={`/sources#src-${id}`}
        title={`${source.title} — ${source.publisher}`}
        className="inline-flex min-h-[24px] min-w-[24px] items-center justify-center rounded bg-slate-200 px-1.5 py-1 text-[0.7rem] font-semibold text-slate-700 no-underline hover:bg-amber-200 hover:text-slate-900"
      >
        {n}
      </Link>
    </sup>
  );
}
