import type { Metadata } from "next";
import { ReactNode } from "react";
import { Cite } from "@/components/Cite";
import { PrintButton } from "@/components/PrintButton";
import { Callout, Container, NextPage, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Questions to Ask Before the Deal Is Signed",
  description:
    "A printable checklist of the specific, sourced questions worth asking about the proposed Pikeville data center — water, noise, electric rates, jobs, land terms, and accountability — plus the precedent documents officials can hand to counsel.",
  alternates: { canonical: "/questions" },
};

function Q({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden
        className="mt-1.5 inline-block h-4 w-4 shrink-0 rounded border-2 border-slate-400 print:border-black"
      />
      <span>{children}</span>
    </li>
  );
}

function QList({ children }: { children: ReactNode }) {
  return <ul className="!list-none space-y-3 !pl-0">{children}</ul>;
}

export default function QuestionsPage() {
  return (
    <>
      <PageHeader
        kicker="The checklist"
        title="Questions worth asking before anything is signed."
        lede="Every question below comes from something that actually happened somewhere else — each carries a citation to the case it's drawn from. The city has committed to publishing the complete Development Agreement for public review before any vote, so there is a real window for these to be asked: at commission meetings, in public comments, or by officials at the negotiating table."
      />
      <Container>
        <div className="flex items-center justify-between gap-4 print:hidden">
          <p className="text-sm text-slate-500">
            Bring it to a meeting — this page is formatted to print cleanly.
          </p>
          <PrintButton />
        </div>

        <Section title="Water & discharge">
          <QList>
            <Q>
              Which <strong>cooling design</strong> will the facility use, committed in
              writing? The difference between open evaporative towers and a sealed
              closed loop is roughly fifty-fold in water use.
              <Cite id="uptime-water" />
              <Cite id="microsoft-zero-water" />
            </Q>
            <Q>
              What is the projected <strong>peak summer-day</strong> water demand — not
              just the annual average? Peak-day demand is what stresses small municipal
              systems.
              <Cite id="arxiv-municipal" />
            </Q>
            <Q>
              If there is cooling-tower blowdown, <strong>where does it go</strong>, in
              what volume, and can the city&rsquo;s wastewater plant handle the
              dissolved-solids load? Quincy, Washington&rsquo;s plant couldn&rsquo;t —
              Microsoft ultimately paid $31 million to fix it.
              <Cite id="epa-quincy-reuse" />
            </Q>
            <Q>
              Will the operator <strong>disclose the water-treatment chemical list</strong>{" "}
              up front? In The Dalles, non-disclosure — not chemistry — is what bred
              distrust.
              <Cite id="sierra-dalles-critfc" />
            </Q>
            <Q>
              Will there be <strong>baseline water testing</strong> of nearby wells and
              the Levisa Fork before construction? Georgia&rsquo;s well dispute is
              unresolvable largely because nobody has &ldquo;before&rdquo; data.
              <Cite id="sfx-newton-wells" />
            </Q>
          </QList>
        </Section>

        <Section title="Noise">
          <QList>
            <Q>
              Will the agreement set <strong>numeric noise limits at the property
              line</strong> — including a low-frequency (dBC) limit, not just dBA?
              Chandler, Arizona wrote enforceable limits into law; some Virginia
              counties now use 65 dBC.
              <Cite id="chandler-ordinance" />
              <Cite id="williamsburg-dbc" />
            </Q>
            <Q>
              Who <strong>measures and enforces</strong> — and what happens when a limit
              is exceeded? Wolfe County neighbors were promised a sound wall and got
              &ldquo;sound blankets.&rdquo;
              <Cite id="lex18-wolfe" />
            </Q>
            <Q>
              When are <strong>generator tests</strong> run, how often, and are they
              restricted to weekday daytime hours?
              <Cite id="va-deq-generators" />
            </Q>
          </QList>
        </Section>

        <Section title="Power & your electric bill">
          <QList>
            <Q>
              Which <strong>tariff</strong> will the facility take service under, and
              does it guarantee the customer pays the full cost of serving it — like
              Kentucky&rsquo;s new large-load tariffs requiring at least 80% of
              forecast for 15 years?
              <Cite id="lge-ku-ehlf" />
              <Cite id="kp-igs-tariff" />
            </Q>
            <Q>
              Who pays for <strong>grid upgrades</strong> — substations, lines — if the
              project grows to 75–100 MW, and what happens to those costs if the
              project leaves early?
              <Cite id="pikeville-review-details" />
            </Q>
            <Q>
              What <strong>collateral or exit protections</strong> exist if the
              operator scales back — the &ldquo;phantom data center&rdquo; problem
              utilities are now planning around?
              <Cite id="utility-dive-phantom" />
            </Q>
          </QList>
        </Section>

        <Section title="Jobs & the local economy">
          <QList>
            <Q>
              How are the <strong>40 projected permanent jobs defined</strong> — direct
              employees on site, at what wages — and how is compliance measured and
              reported? The city itself says projections are not enforceable
              obligations.
              <Cite id="pikeville-review-details" />
            </Q>
            <Q>
              What are the <strong>consequences for missing</strong> the jobs numbers —
              clawbacks, payments, termination rights? Kentucky&rsquo;s crypto-era
              promises were &ldquo;not always fulfilled.&rdquo;
              <Cite id="kentuckynewera-crypto" />
            </Q>
            <Q>
              Is there a <strong>local-hire or local-contractor</strong> commitment for
              the 190-job construction phase?
              <Cite id="pikeville-review-details" />
            </Q>
          </QList>
        </Section>

        <Section title="The land & the deal structure">
          <QList>
            <Q>
              Is the land <strong>leased or sold</strong>? A ground lease keeps
              recurring revenue and returns the land if the project dies; a sale
              doesn&rsquo;t.
              <Cite id="pikeville-mou" />
            </Q>
            <Q>
              Do all commitments <strong>run with the land</strong>, binding any future
              owner after a sale or restructuring?
              <Cite id="pikeville-review-details" />
            </Q>
            <Q>
              Is there a <strong>decommissioning obligation</strong> — who removes
              equipment and restores the site if it shuts down, and is it bonded?
            </Q>
            <Q>
              Does the agreement require <strong>heat-recovery plumbing</strong> at
              construction, so neighboring park tenants can use the waste heat? Cheap
              now, prohibitive later.
              <Cite id="eesi-thermal" />
              <Cite id="reimagine-appalachia" />
            </Q>
          </QList>
        </Section>

        <Section title="Environment & safety">
          <QList>
            <Q>
              How much <strong>diesel is stored on site</strong>, in what kind of tanks,
              with what spill prevention (SPCC) plan and secondary containment? EPA
              calls leaking storage tanks a common source of groundwater contamination.
              <Cite id="epa-ust" />
              <Cite id="epa-spcc" />
            </Q>
            <Q>
              Are the generators <strong>Tier 4</strong> (the cleanest standard), and
              what are the permitted annual runtime hours?
              <Cite id="trinity-va-deq" />
            </Q>
            <Q>
              What does the <strong>stormwater management</strong> plan require during
              construction — the phase that produced Georgia&rsquo;s sediment
              complaints?
              <Cite id="sfx-newton-wells" />
            </Q>
          </QList>
        </Section>

        <Section title="Transparency & accountability">
          <QList>
            <Q>
              Will the city disclose the <strong>end user</strong> when one signs — and
              will usage reporting (water, power) be public on an ongoing basis? The
              Dalles took a 13-month records fight to learn its own numbers.
              <Cite id="register-dalles" />
            </Q>
            <Q>
              Will the <strong>complete agreement</strong> be published with enough time
              for meaningful public review before the vote — as the city has promised?
              <Cite id="pikeville-review-details" />
            </Q>
            <Q>
              If revenue materializes, is any portion <strong>set aside</strong> —
              banked or invested — rather than absorbed into the annual budget? Other
              places made that choice deliberately, before the money arrived.
              <Cite id="wv-hb2014" />
              <Cite id="loudoun-faq-residents" />
            </Q>
          </QList>
        </Section>

        <Section title="For officials: the document shelf">
          <p className="print:hidden">
            The fastest way to negotiate well is to start from what other
            governments already wrote. These are the primary documents — each is
            in the source registry with a working link — worth handing to
            counsel:
          </p>
          <ul>
            <li>
              <strong>Chandler, AZ data center noise ordinance</strong> — enforceable
              decibel limits written into law before approval.
              <Cite id="chandler-ordinance" />
            </li>
            <li>
              <strong>West Virginia HB 2014 (2025), enrolled text</strong> — the
              data-center property-tax distribution formula, including the
              income-tax-reduction fund.
              <Cite id="wv-hb2014" />
            </li>
            <li>
              <strong>Kentucky Power Tariff I.G.S. filing (PSC Case 2024-00305)</strong>{" "}
              — large-load terms already filed in this utility territory: 20-year
              terms, collateral requirements.
              <Cite id="kp-igs-tariff" />
            </li>
            <li>
              <strong>AEP Ohio data center tariff settlement</strong> — the 85%
              minimum-payment structure regulators approved next door.
              <Cite id="aep-ohio-tariff" />
            </li>
            <li>
              <strong>Virginia JLARC data center study (2024)</strong> — the most
              comprehensive independent state analysis of impacts, positive and
              negative.
              <Cite id="jlarc-2024" />
            </li>
            <li>
              <strong>EPA water reuse case study: Quincy, WA</strong> — what
              discharge did to a small city&rsquo;s plant and the company-funded fix.
              <Cite id="epa-quincy-reuse" />
            </li>
            <li>
              <strong>Loudoun County&rsquo;s own explanation</strong> of how data
              center revenue funds rate cuts and services.
              <Cite id="loudoun-faq-residents" />
            </li>
            <li>
              <strong>Pikeville&rsquo;s own documents</strong> — the executed MOU and
              the city&rsquo;s statement of what it is examining.
              <Cite id="pikeville-mou" />
              <Cite id="pikeville-review-details" />
            </li>
          </ul>
        </Section>

        <Callout tone="info" title="How to use this">
          <p>
            Commission meetings are typically the second and fourth Monday of
            each month and are open to the public,
            <Cite id="pikeville-commission" /> and the city accepts questions
            and comments at datacenter@pikevilleky.gov.
            <Cite id="pikeville-review-details" /> The{" "}
            <strong>What&rsquo;s Next</strong> page tracks where the process
            stands and explains how to request public records yourself.
          </p>
        </Callout>

        <NextPage href="/status" label="Where things stand & how to participate" />
      </Container>
    </>
  );
}
