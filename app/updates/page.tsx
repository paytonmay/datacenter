import type { Metadata } from "next";
import Link from "next/link";
import { Container, NextPage, PageHeader } from "@/components/ui";
import { SITE_LAST_VERIFIED, updates } from "@/lib/updates";

export const metadata: Metadata = {
  title: "Updates: What Changed and When",
  description:
    "A public log of every substantive change to this site (what was added, when, and on which pages), so readers can judge how current the information is.",
  alternates: { canonical: "/updates" },
};

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        kicker="Changelog"
        title="What changed, and when."
        lede={`A sourced site is only as good as its freshness. This log records every substantive change so you can judge how current the information is. Content last verified ${SITE_LAST_VERIFIED}; source links are re-checked when pages are updated.`}
      />
      <Container>
        <ol className="!list-none space-y-8 !pl-0">
          {updates.map((u, i) => (
            <li key={i} className="border-l-4 border-amber-300 pl-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-400">
                {formatDate(u.date)}
              </p>
              <p className="mt-1 text-lg font-bold text-slate-900">{u.title}</p>
              <p className="mt-1 leading-relaxed text-slate-700">{u.details}</p>
              <p className="mt-2 text-sm font-semibold">
                {u.pages.map((p, j) => (
                  <span key={p.href}>
                    {j > 0 && " · "}
                    <Link
                      href={p.href}
                      className="text-amber-700 underline decoration-amber-300 underline-offset-2 hover:text-amber-900"
                    >
                      {p.label}
                    </Link>
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm text-slate-500">
          Spotted something outdated? Corrections are welcome; this site aims
          to be accurate above all.
        </p>
        <NextPage href="/status" label="Where the process stands now" />
      </Container>
    </>
  );
}
