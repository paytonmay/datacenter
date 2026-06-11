import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/ui";
import { sources } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "Every source cited on this site, numbered and linked — government reports, peer-reviewed studies, utility filings, and journalism.",
  alternates: { canonical: "/sources" },
};

const kindLabels: Record<string, string> = {
  government: "Government / official",
  "peer-reviewed": "Academic / peer-reviewed",
  "utility-filing": "Utility / regulatory filing",
  industry: "Industry / nonprofit",
  news: "Journalism",
  local: "Pikeville documents",
};

const kindStyles: Record<string, string> = {
  government: "bg-emerald-100 text-emerald-900",
  "peer-reviewed": "bg-violet-100 text-violet-900",
  "utility-filing": "bg-sky-100 text-sky-900",
  industry: "bg-slate-200 text-slate-700",
  news: "bg-amber-100 text-amber-900",
  local: "bg-rose-100 text-rose-900",
};

export default function SourcesPage() {
  return (
    <>
      <PageHeader
        kicker="Show your work"
        title="Every source on this site"
        lede="Each numbered citation across the site links to an entry below. Where a source is an advocacy organization or industry-funded, the entry says so. Source links were verified live in June 2026; if you find a dead link or a figure that's been superseded, that's a correction worth making."
      />
      <Container>
        <ol className="mt-8 space-y-4">
          {sources.map((s, i) => (
            <li
              key={s.id}
              id={`src-${s.id}`}
              className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold leading-snug text-slate-900">
                    {s.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {s.publisher}
                    {s.year ? ` · ${s.year}` : ""}
                    <span
                      className={`ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-bold ${kindStyles[s.kind]}`}
                    >
                      {kindLabels[s.kind]}
                    </span>
                  </p>
                  {s.note ? (
                    <p className="mt-1 text-sm italic text-slate-500">
                      {s.note}
                    </p>
                  ) : null}
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block truncate text-sm font-medium text-amber-700 underline hover:text-amber-900"
                  >
                    {s.url}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
