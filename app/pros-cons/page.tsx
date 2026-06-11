import type { Metadata } from "next";
import { ReactNode } from "react";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { Callout, Container, NextPage, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pros & Cons: The Quick Version",
  description:
    "The case for and the concerns about the proposed Pikeville data center, topic by topic (jobs, electric bills, water, noise, health, and trust), in plain language, with links to the full evidence.",
  alternates: { canonical: "/pros-cons" },
};

function ProCon({ pro, con }: { pro: ReactNode; con: ReactNode }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">
          The case for
        </p>
        <div className="mt-2 space-y-2 text-[0.97rem] leading-relaxed text-slate-700">
          {pro}
        </div>
      </div>
      <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-5">
        <p className="text-sm font-bold uppercase tracking-wide text-rose-800">
          The concern
        </p>
        <div className="mt-2 space-y-2 text-[0.97rem] leading-relaxed text-slate-700">
          {con}
        </div>
      </div>
    </div>
  );
}

function DigDeeper({ links }: { links: { href: string; label: string }[] }) {
  return (
    <p className="text-sm font-semibold text-slate-500">
      Dig deeper:{" "}
      {links.map((l, i) => (
        <span key={l.href}>
          {i > 0 && " · "}
          <Link
            href={l.href}
            className="text-amber-700 underline decoration-amber-300 underline-offset-2 hover:text-amber-900"
          >
            {l.label}
          </Link>
        </span>
      ))}
    </p>
  );
}

export default function ProsConsPage() {
  return (
    <>
      <PageHeader
        kicker="The quick version"
        title="Pros and cons, on one page."
        lede="If you only read one page on this site, make it this one. Each topic below gives the strongest documented case on both sides, in plain language, and every row links to a deep-dive page where each claim is sourced. None of this is hypothetical: it all comes from what actually happened in other towns."
      />
      <Container>
        <Section title="Jobs, taxes & investment">
          <ProCon
            pro={
              <p>
                Building a data center employs a lot of people: a large Meta
                project in Texas reported 4,000+ construction workers at peak,
                with 300+ permanent jobs.
                <Cite id="meta-elpaso" />{" "}And where data centers are taxed,
                the revenue is real: they fund nearly $900 million a year of
                one Virginia county&rsquo;s budget.
                <Cite id="loudoun-revenue" />
              </p>
            }
            con={
              <p>
                Once built, data centers employ few people for their size,
                and research finds most lasting jobs land in energy, not at
                the servers.
                <Cite id="brookings-employment" />
                <Cite id="latitude-jobs" />{" "}Eastern Kentucky has seen this
                before: Pike County&rsquo;s own crypto facility promised 5–10
                jobs,
                <Cite id="blockware-jobs" />{" "}and some Kentucky crypto promises
                were never fulfilled at all.
                <Cite id="kentuckynewera-crypto" />{" "}State tax incentives also
                shrink what local government collects.
                <Cite id="stites-hb775" />
              </p>
            }
          />
          <DigDeeper
            links={[
              { href: "/basics", label: "The Basics" },
              { href: "/communities", label: "Other Towns" },
            ]}
          />
        </Section>

        <Section title="Your electric bill">
          <ProCon
            pro={
              <p>
                Kentucky Power has lost so many customers that fixed costs
                are spread over fewer and fewer bills; that&rsquo;s part of
                why rates here climbed.
                <Cite id="icn-death-spiral" />{" "}A big, steady industrial
                customer pushes the other way; the utility calls large loads
                &ldquo;the best vehicle for eventually balancing or lowering
                electric rates.&rdquo;
                <Cite id="hazard-herald-pipeline" />{" "}New Kentucky tariff
                rules require very large customers to pay for at least 80% of
                what they sign up for, for 15 years, even if they leave.
                <Cite id="lge-ku-ehlf" />
              </p>
            }
            con={
              <p>
                Where data centers clustered, wholesale electricity prices
                rose as much as 267% in five years,
                <Cite id="bloomberg-nodes" />{" "}and data center demand drove
                about 40% ($6.5 billion) of the latest capacity auction
                cost in the nation&rsquo;s largest grid region.
                <Cite id="monitoring-analytics-pjm" />{" "}A majority of
                Americans now blame data centers for rising bills.
                <Cite id="heatmap-bills-blame" />
              </p>
            }
          />
          <p className="text-sm text-slate-500">
            Which way it goes here is not luck; it&rsquo;s decided by the
            contract and tariff terms signed before approval.
          </p>
          <DigDeeper links={[{ href: "/power", label: "Power & Rates" }]} />
        </Section>

        <Section title="Water">
          <ProCon
            pro={
              <p>
                Modern sealed-loop cooling is filled once and recirculated:
                Microsoft&rsquo;s newest design uses roughly office-park
                amounts of water,
                <Cite id="microsoft-zero-water" />{" "}and its Wisconsin campus
                actually draws less than some ordinary industrial customers.
                <Cite id="wpr-mount-pleasant" />{" "}Pikeville&rsquo;s city
                utility says its system can comfortably meet the usage the
                developer has described.
                <Cite id="pikeville-review-details" />
              </p>
            }
            con={
              <p>
                Old-style evaporative cooling at this scale can drink half a
                million gallons a day,
                <Cite id="uptime-water" />{" "}and what it sends back can carry
                concentrated minerals and treatment chemicals.
                <Cite id="clee-berkeley-water" />{" "}In The Dalles, Oregon,
                residents learned data centers used 29% of the city&rsquo;s
                water only after a year-long public-records fight.
                <Cite id="register-dalles" />{" "}The cooling design here
                isn&rsquo;t committed in writing yet.
              </p>
            }
          />
          <DigDeeper links={[{ href: "/water", label: "Water & Cooling" }]} />
        </Section>

        <Section title="Noise">
          <ProCon
            pro={
              <p>
                Noise is an engineering problem with known fixes: Amazon
                retrofitted a Virginia data center after complaints and the
                noise dropped,
                <Cite id="pwt-amazon-retrofit" />{" "}and cities like Chandler,
                Arizona wrote enforceable decibel limits into law before
                approval.
                <Cite id="chandler-ordinance" />{" "}Distance and design decide
                the outcome.
              </p>
            }
            con={
              <p>
                Where it went wrong, it went badly wrong: 24/7 fan hum led
                Granbury, Texas residents to sue,
                <Cite id="earthjustice-granbury" />{" "}with documented health
                complaints,
                <Cite id="time-granbury" />{" "}and in Wolfe County, Kentucky a
                crypto mine&rsquo;s promised sound wall became &ldquo;sound
                blankets.&rdquo;
                <Cite id="lex18-wolfe" />{" "}Constant low hum, not loudness, is
                what wears people down.
              </p>
            }
          />
          <DigDeeper
            links={[
              { href: "/noise", label: "Noise" },
              { href: "/map", label: "Map & distances" },
            ]}
          />
        </Section>

        <Section title="Health">
          <ProCon
            pro={
              <p>
                Air testing around one of the country&rsquo;s most
                controversial data centers (Memphis) found no dangerous
                levels,
                <Cite id="memphis-air-tests" />{" "}a satellite analysis found
                minimal change after it opened,
                <Cite id="conversation-memphis-satellite" />{" "}and decades of
                research find no established health effects from power-line
                electromagnetic fields at everyday levels.
                <Cite id="who-emf" />
              </p>
            }
            con={
              <p>
                Backup diesel generators emit exhaust classified as
                carcinogenic to humans; the question is how many hours they
                run,
                <Cite id="iarc-diesel" />{" "}and Memphis is the cautionary tale
                of unpermitted turbines running for months.
                <Cite id="selc-xai" />{" "}Chronic environmental noise is itself
                a documented health stressor.
                <Cite id="eea-noise-deaths" />
              </p>
            }
          />
          <DigDeeper links={[{ href: "/health", label: "Health Concerns" }]} />
        </Section>

        <Section title="Trust & track record">
          <ProCon
            pro={
              <p>
                Where companies committed in writing, communities got real
                fixes: Microsoft paid the entire $31 million for the water
                treatment plant its discharge made necessary in Quincy,
                Washington,
                <Cite id="epa-quincy-reuse" />{" "}and Google funded $28.5
                million of water infrastructure in The Dalles.
                <Cite id="opb-dalles-deal" />{" "}Homes near Northern Virginia
                data centers even sold for more, not less.
                <Cite id="gmu-property" />
              </p>
            }
            con={
              <p>
                The recurring failure isn&rsquo;t engineering; it&rsquo;s
                secrecy. NDAs and undisclosed details have fueled enough
                backlash that at least 16 projects worth ~$64 billion have
                been blocked or delayed by local opposition,
                <Cite id="datacenterwatch" />{" "}and several Kentucky
                communities are pausing data centers until rules are written.
                <Cite id="ky-lantern-pause" />{" "}Nationally, opinion has turned
                sharply negative on environmental impact.
                <Cite id="pew-2026" />
              </p>
            }
          />
          <DigDeeper
            links={[
              { href: "/communities", label: "Other Towns" },
              { href: "/pikeville", label: "The Pikeville Proposal" },
            ]}
          />
        </Section>

        <Callout tone="info" title="The pattern across every topic">
          <p>
            Good and bad outcomes in other towns rarely came down to the
            technology; they came down to <strong>what was committed in
            writing before approval</strong>: the cooling design, enforceable
            noise limits, tariff terms that protect ratepayers, spill plans,
            and disclosure. The Pikeville page lists the specific questions
            worth asking while the Development Agreement is still being
            negotiated.
          </p>
        </Callout>

        <NextPage href="/pikeville" label="What the Pikeville proposal actually says" />
      </Container>
    </>
  );
}
