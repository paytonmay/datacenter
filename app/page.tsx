import type { Metadata } from "next";
import Link from "next/link";
import { Cite } from "@/components/Cite";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const topics = [
  {
    href: "/pros-cons",
    title: "Pros & Cons — the quick version",
    desc: "The case for and the concerns, topic by topic, on a single page — jobs, bills, water, noise, health, and trust — with links to dig deeper when you want the full evidence.",
  },
  {
    href: "/status",
    title: "What's next & how to speak up",
    desc: "Where the process stands right now — what's done, what's promised — plus when the commission meets, how to comment, and how to request public records yourself.",
  },
  {
    href: "/questions",
    title: "Questions to ask (printable)",
    desc: "A checklist of the specific, sourced questions other towns wish they'd asked before signing — formatted to print and bring to a meeting.",
  },
  {
    href: "/ideas",
    title: "Ideas: leveraging the deal",
    desc: "If the city proceeds, how could it get lasting value? Waste-heat reuse, permanent investment funds that cut taxes, and deal structures that survive ownership changes — each grounded in what another community actually did.",
  },
  {
    href: "/basics",
    title: "The Basics",
    desc: "What a data center actually is, the different types — from small crypto mines to giant AI campuses — and where a 25–30 MW facility fits on that spectrum.",
  },
  {
    href: "/noise",
    title: "Noise",
    desc: "Real decibel numbers for cooling fans, generators, and transformers; how sound carries; where data centers have caused noise problems — and where they haven't.",
  },
  {
    href: "/water",
    title: "Water",
    desc: "The different cooling system types and the honest numbers: some designs use millions of gallons a day, others use about as much as an office building.",
  },
  {
    href: "/power",
    title: "Power & Electric Rates",
    desc: "How much electricity data centers use, and the question that matters most here: do they push rates up or help hold them down? The evidence runs both ways — and the contract terms decide which.",
  },
  {
    href: "/health",
    title: "Health Concerns",
    desc: "What's documented, what's alleged but unresolved, and what has no supporting evidence — clearly labeled, with sources.",
  },
  {
    href: "/communities",
    title: "What Happened in Other Towns",
    desc: "Public opinion polling, towns that said no, towns that said yes, and what each got — from Loudoun County's tax revenue to Granbury's lawsuit.",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-amber-50 via-slate-50 to-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            An independent, fully-sourced guide
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Data centers, explained — for Pikeville and Eastern Kentucky.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-slate-600">
            Pikeville is weighing a proposed data center at the Kentucky
            Enterprise Industrial Park.
            <Cite id="pikeville-press-release" /> Some neighbors see jobs and
            investment; others worry about noise, water, and electric bills.
            Both deserve real answers, not talking points. This site lays out
            the facts — every claim numbered and linked to its source — so you
            can make up your own mind.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/pikeville"
              className="rounded-lg bg-amber-600 px-5 py-3 font-bold text-white shadow-sm hover:bg-amber-700"
            >
              Start with the Pikeville proposal →
            </Link>
            <Link
              href="/basics"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 hover:bg-slate-50"
            >
              Or learn the basics first
            </Link>
            <Link
              href="/pros-cons"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 hover:bg-slate-50"
            >
              Short on time? Pros &amp; cons →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          What&rsquo;s covered
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-300 hover:shadow"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-800">
                {t.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {t.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            How this site handles facts
          </h2>
          <ul className="mt-4 space-y-3 text-[1.05rem] leading-relaxed text-slate-700">
            <li>
              <strong>Every claim is cited.</strong> The little numbers like
              this<Cite id="pikeville-review-details" /> link to a full source
              list — government reports, peer-reviewed studies, utility
              filings, and on-the-record journalism.
            </li>
            <li>
              <strong>Both sides of contested questions are presented.</strong>{" "}
              Where the evidence genuinely cuts both ways (like electric
              rates), you&rsquo;ll see the strongest documented case for each.
            </li>
            <li>
              <strong>Claims are labeled by evidence strength.</strong> On the
              health page, every concern is tagged as documented, alleged but
              unresolved, or lacking evidence.
            </li>
            <li>
              <strong>No affiliation.</strong> This site isn&rsquo;t funded by
              or coordinated with the city, the developer, the utility, or any
              campaign for or against the project.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
