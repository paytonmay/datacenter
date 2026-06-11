import type { Metadata } from "next";
import { ReactNode } from "react";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { Callout, Container, NextPage, PageHeader, Section } from "@/components/ui";
import { SITE_LAST_VERIFIED } from "@/lib/updates";

export const metadata: Metadata = {
  title: "What's Next: Where Things Stand & How to Participate",
  description:
    "A timeline of the Pikeville data center process (what's done, what's in progress, what the city has promised), plus how to attend meetings, submit comments, and request public records under Kentucky law.",
  alternates: { canonical: "/status" },
};

type StepState = "done" | "active" | "upcoming" | "promised";

const stepStyles: Record<StepState, { dot: string; label: string; badge: string }> = {
  done: { dot: "bg-emerald-500", label: "Done", badge: "bg-emerald-100 text-emerald-900" },
  active: { dot: "bg-amber-500 animate-pulse", label: "In progress", badge: "bg-amber-100 text-amber-900" },
  upcoming: { dot: "bg-slate-300", label: "Upcoming", badge: "bg-slate-100 text-slate-700" },
  promised: { dot: "bg-sky-400", label: "Promised by the city", badge: "bg-sky-100 text-sky-900" },
};

function Step({
  state,
  date,
  title,
  children,
}: {
  state: StepState;
  date: string;
  title: string;
  children: ReactNode;
}) {
  const s = stepStyles[state];
  return (
    <li className="relative flex gap-4 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <span className={`mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full ${s.dot}`} />
        <span className="mt-1 w-px flex-1 bg-slate-200" aria-hidden />
      </div>
      <div>
        <p className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold uppercase tracking-wide text-slate-400">
            {date}
          </span>
          <span
            className={`inline-block rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-wide ${s.badge}`}
          >
            {s.label}
          </span>
        </p>
        <p className="mt-1 font-bold text-slate-900">{title}</p>
        <div className="mt-1 text-[0.97rem] leading-relaxed text-slate-700">
          {children}
        </div>
      </div>
    </li>
  );
}

export default function StatusPage() {
  return (
    <>
      <PageHeader
        kicker="The process"
        title="Where things stand, and how to have a say."
        lede={`Nothing has been decided. The city and the developer are inside a negotiation window, the city has promised public review of any final agreement before a vote, and the public-input channels are open right now. Status as of ${SITE_LAST_VERIFIED}.`}
      />
      <Container>
        <Section title="The timeline so far, and what's ahead">
          <ul className="!list-none !pl-0">
            <Step state="done" date="April 20, 2026" title="MOU signed">
              The City and MD Squared Power LLC signed a Memorandum of
              Understanding: 120 days of exclusive negotiation. It transfers no
              land and agrees to no terms; either side can walk away with no
              penalty.
              <Cite id="pikeville-mou" />
              <Cite id="pikeville-review-details" />
            </Step>
            <Step state="done" date="June 5, 2026" title="City announces formal review">
              The city published its press release, the executed MOU, and a
              detailed statement of what it is examining and why.
              <Cite id="pikeville-press-release" />
              <Cite id="pikeville-review-details" />
            </Step>
            <Step state="active" date="Now" title="Independent review being assembled">
              The City Commission is working toward authorizing independent
              legal counsel and an independent economic and site analysis. The
              developer&rsquo;s water-usage projections are being independently
              verified. The developer has not yet signed an end user for the
              facility.
              <Cite id="pikeville-review-details" />
            </Step>
            <Step state="upcoming" date="~August 18, 2026" title="Exclusive negotiation window ends">
              120 days from the MOU signing. Both parties can extend it by
              mutual agreement, or either can walk away.
              <Cite id="pikeville-review-details" />
            </Step>
            <Step state="promised" date="Before any vote" title="Complete terms published for public review">
              The city has committed: &ldquo;No vote will be taken before the
              community has had the opportunity to see exactly what is being
              considered and why.&rdquo;
              <Cite id="pikeville-review-details" />
            </Step>
            <Step state="promised" date="After public review" title="City Commission votes">
              A Development Agreement only exists if the Commission approves
              it, after the published-terms review period.
              <Cite id="pikeville-review-details" />
            </Step>
          </ul>
        </Section>

        <Callout tone="warning" title="Still unknown, as of this writing">
          <p>
            The end user (the company that would actually operate the data
            center), the cooling design, the financial terms, whether the land
            would be leased or sold, and every enforceable commitment: all of
            it remains to be negotiated and published. That&rsquo;s not a
            criticism; it&rsquo;s the stage the process is in. It&rsquo;s also
            why questions asked <em>now</em>{" "}carry the most weight.
            <Cite id="pikeville-review-details" />
          </p>
        </Callout>

        <Section title="How to participate">
          <ul>
            <li>
              <strong>Go to a meeting.</strong>{" "}The City Commission typically
              meets the second and fourth Monday of each month, open to the
              public, with agendas and minutes posted on the city&rsquo;s
              website.
              <Cite id="pikeville-commission" />
            </li>
            <li>
              <strong>Send questions or comments</strong>{" "}to the city&rsquo;s
              dedicated address for this project:{" "}
              <strong>datacenter@pikevilleky.gov</strong>.
              <Cite id="pikeville-review-details" />
            </li>
            <li>
              <strong>Show up prepared.</strong>{" "}The{" "}
              <Link href="/questions" className="font-semibold text-amber-700 underline">
                Questions to Ask
              </Link>{" "}
              page is a printable checklist of the specific, sourced questions
              other towns wish they had asked earlier.
            </li>
          </ul>
        </Section>

        <Section title="How to see the records yourself: Kentucky's Open Records Act">
          <p>
            You don&rsquo;t have to take anyone&rsquo;s word, including this
            site&rsquo;s, for what&rsquo;s in a public document. Kentucky law
            gives every resident of the Commonwealth the right to inspect
            public records:
          </p>
          <ul>
            <li>
              <strong>Who can ask:</strong>{" "}any Kentucky resident. The agency
              may ask for a signed, written application describing the records,
              but may not demand proof of residency.
              <Cite id="krs-61-872" />
            </li>
            <li>
              <strong>How fast they must answer:</strong>{" "}within five business
              days, the agency must either provide the records or deny the
              request in writing, and any denial must cite the specific legal
              exemption it relies on.
              <Cite id="krs-61-880" />
            </li>
            <li>
              <strong>If you&rsquo;re denied:</strong>{" "}you can appeal to the
              Kentucky Attorney General, who issues a binding decision, no
              lawyer required.
              <Cite id="krs-61-880" />
            </li>
            <li>
              <strong>What to expect:</strong>{" "}some records are legitimately
              exempt while negotiations are live (the law has exceptions, which
              the agency must name in writing). Final agreements, meeting
              minutes, and most correspondence are public. In The Dalles,
              Oregon, it was a newspaper&rsquo;s public records fight that
              ultimately revealed the water numbers.
              <Cite id="krs-61-880" />
              <Cite id="register-dalles" />
            </li>
          </ul>
          <p>
            A request can be one paragraph: who you are, that you are a
            Kentucky resident, what records you want (be specific: dates,
            topics, parties), and how you&rsquo;d like to receive them. Send it
            to the agency&rsquo;s records custodian: for city records, City
            Hall at 243 Main Street.
            <Cite id="pikeville-review-details" />
          </p>
        </Section>

        <NextPage href="/questions" label="The printable questions checklist" />
      </Container>
    </>
  );
}
