import type { Metadata } from "next";
import { ReactNode } from "react";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { Container, NextPage, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "FAQ: Direct Answers to Common Questions",
  description:
    "Plain answers to the questions Pikeville residents actually ask about the proposed data center: bills, noise, water, health, jobs, and how to have a say, each linked to the full evidence.",
  alternates: { canonical: "/faq" },
};

/**
 * The plain-text answers double as the FAQPage structured data, so what
 * search engines and AI assistants quote always matches the visible page.
 */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly is being proposed in Pikeville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A data center at the Kentucky Enterprise Industrial Park with an initial phase of about 25-30 megawatts of computing capacity and over $250 million of capital investment, with developer interest in growing to 75-100 MW if more power becomes available. The developer is MD Squared Power LLC, a Lexington-based data center developer that has not yet signed an end user to operate the facility.",
      },
    },
    {
      "@type": "Question",
      name: "Has anything been decided yet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The signed Memorandum of Understanding (April 20, 2026) only commits the city and developer to 120 days of exclusive negotiation. No land has been transferred and no terms have been agreed. The city has promised to publish the complete Development Agreement for public review before any vote.",
      },
    },
    {
      "@type": "Question",
      name: "Will my electric bill go up because of the data center?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The honest answer is that it depends on contract and tariff terms, not on the data center's existence. Near major data center clusters, wholesale power prices have risen sharply; but Kentucky now has large-load tariffs requiring big customers to pay at least 80% of forecast costs for 15 years, and Kentucky Power has argued large customers can spread fixed costs and eventually lower rates. Rates are set by the Kentucky Public Service Commission, not the city.",
      },
    },
    {
      "@type": "Question",
      name: "How loud will it be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the cooling design, the distance to homes, and whether enforceable noise limits are written into the agreement. Data center noise problems elsewhere (Granbury TX, Chandler AZ) came from continuous cooling-fan hum, and the documented fixes are engineering retrofits and numeric decibel limits at the property line. The proposed site is inside an industrial park; the map page shows distance rings to the nearest homes.",
      },
    },
    {
      "@type": "Question",
      name: "How much water would it use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cooling design decides it, by a factor of roughly fifty. Open evaporative cooling at this scale could use hundreds of thousands of gallons a day, while modern sealed-loop designs use about as much as an office park. The City of Pikeville says its water system can comfortably meet the usage the developer has described and is independently verifying those projections. The design choice is not yet committed in writing.",
      },
    },
    {
      "@type": "Question",
      name: "Is a data center a health risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no documented case of a normally operating data center causing community health harms; air testing near the most controversial U.S. data center (Memphis) found no dangerous levels. The evidence-based concerns are diesel exhaust from backup generators (a known carcinogen - the question is how many hours they run) and chronic noise, both of which are controllable through permits and agreement terms.",
      },
    },
    {
      "@type": "Question",
      name: "How many jobs would it create?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The developer projects over 190 construction jobs during the build and 40 permanent full-time positions at the initial phase, with wages described as significantly above the Pike County median. The city itself notes projections are not enforceable obligations and says job commitments in any final agreement will need real enforcement mechanisms. Research elsewhere finds data centers create few permanent on-site jobs relative to their investment size.",
      },
    },
    {
      "@type": "Question",
      name: "What does the city get out of it financially?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Several streams. Property taxes on the computing equipment (taxed at roughly $1.80 per $100 of value across state, county, city, and school rates, and the school district collects the largest share). A 3% franchise fee Kentucky Power pays the city on all electric sales inside city limits, which a data center's power purchases would add several hundred thousand dollars a year to. Plus occupational taxes, utility revenue, and whatever lease or host payments are negotiated. For scale, the city's whole general fund collected about $21.4 million in FY2024. The Ideas page works through the arithmetic.",
      },
    },
    {
      "@type": "Question",
      name: "Who decides whether this happens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Pikeville City Commission, which has promised that the complete terms of any Development Agreement will be published for public review before any vote. The commission typically meets the second and fourth Monday of each month, open to the public, and the city accepts comments at datacenter@pikevilleky.gov.",
      },
    },
    {
      "@type": "Question",
      name: "How can I verify any of this myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every claim on this site links to a numbered source. Beyond that, Kentucky's Open Records Act gives any Kentucky resident the right to inspect public records: agencies must respond within five business days and must cite a specific legal exemption to withhold anything, and denials can be appealed to the Attorney General at no cost.",
      },
    },
  ],
};

function FAQ({ q, children }: { q: string; children: ReactNode }) {
  return (
    <section className="border-b border-slate-200 py-6 last:border-0">
      <h2 className="text-xl font-bold tracking-tight text-slate-900">{q}</h2>
      <div className="mt-2 space-y-2 text-[1.02rem] leading-relaxed text-slate-700">
        {children}
      </div>
    </section>
  );
}

function More({ href, label }: { href: string; label: string }) {
  return (
    <p className="text-sm font-semibold">
      <Link
        href={href}
        className="text-amber-700 underline decoration-amber-300 underline-offset-2 hover:text-amber-900"
      >
        Full evidence: {label} →
      </Link>
    </p>
  );
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHeader
        kicker="Straight answers"
        title="The questions people actually ask."
        lede="Two-minute answers, each linked to the page with the full evidence and sources. If your question isn't here, the city accepts questions directly at datacenter@pikevilleky.gov."
      />
      <Container>
        <FAQ q="What exactly is being proposed in Pikeville?">
          <p>
            A data center at the Kentucky Enterprise Industrial Park: an
            initial phase of roughly 25–30 MW of computing capacity and over
            $250 million in capital investment, with developer interest in
            growing to 75–100 MW if more power becomes available. The
            developer, MD Squared Power LLC of Lexington, has not yet signed
            the end user who would actually operate it.
            <Cite id="pikeville-review-details" />
          </p>
          <More href="/pikeville" label="The Pikeville Proposal" />
        </FAQ>

        <FAQ q="Has anything been decided yet?">
          <p>
            No. The MOU signed April 20, 2026 commits both sides only to 120
            days of exclusive negotiation: no land transferred, no terms
            agreed, and either side can walk away. The city has promised the
            complete agreement will be published for public review before any
            vote.
            <Cite id="pikeville-mou" />
            <Cite id="pikeville-review-details" />
          </p>
          <More href="/status" label="Where things stand" />
        </FAQ>

        <FAQ q="Will my electric bill go up?">
          <p>
            It depends on contract and tariff terms, not on whether the data
            center exists. Near big clusters, wholesale prices rose as much as
            267%,
            <Cite id="bloomberg-nodes" />{" "}but Kentucky&rsquo;s new large-load
            tariffs make very large customers pay at least 80% of forecast
            costs for 15 years,
            <Cite id="lge-ku-ehlf" />{" "}and Kentucky Power argues large loads
            can spread fixed costs and eventually lower rates.
            <Cite id="hazard-herald-pipeline" />{" "}Rates are set by the state
            Public Service Commission, not the city.
            <Cite id="pikeville-review-details" />
          </p>
          <More href="/power" label="Power & Rates" />
        </FAQ>

        <FAQ q="How loud will it be?">
          <p>
            It depends on cooling design, distance, and whether numeric noise
            limits get written into the agreement. The bad cases elsewhere
            (Granbury, Texas; Chandler, Arizona) were continuous cooling-fan
            hum, and the documented fixes were engineering retrofits and
            enforceable decibel limits at the property line.
            <Cite id="time-granbury" />
            <Cite id="chandler-ordinance" />{" "}The proposed site sits inside an
            industrial park; the map shows exactly how far the nearest homes
            are.
          </p>
          <More href="/noise" label="Noise" />
        </FAQ>

        <FAQ q="How much water would it use?">
          <p>
            The cooling design decides, by a factor of about fifty. Open
            evaporative cooling at this scale could draw hundreds of thousands
            of gallons a day; sealed-loop designs use about as much as an
            office park.
            <Cite id="uptime-water" />
            <Cite id="microsoft-zero-water" />{" "}The city says its system can
            comfortably meet the described usage and is independently
            verifying the projections, but the design isn&rsquo;t committed
            in writing yet.
            <Cite id="pikeville-review-details" />
          </p>
          <More href="/water" label="Water & Cooling" />
        </FAQ>

        <FAQ q="Is a data center a health risk?">
          <p>
            There&rsquo;s no documented case of a normally operating data
            center harming community health; air testing around the most
            controversial U.S. facility found no dangerous levels.
            <Cite id="memphis-air-tests" />{" "}The evidence-based watch items are
            diesel exhaust from backup generators (a known carcinogen, so
            permitted runtime hours matter
            <Cite id="iarc-diesel" />){" "}and chronic noise, which is itself a
            documented health stressor.
            <Cite id="eea-noise-deaths" />
          </p>
          <More href="/health" label="Health Concerns" />
        </FAQ>

        <FAQ q="How many jobs would it create?">
          <p>
            The developer projects 190+ construction jobs and 40 permanent
            positions at the initial phase, at wages described as well above
            the Pike County median, and the city itself says projections are
            not enforceable obligations and will need real enforcement
            mechanisms in any agreement.
            <Cite id="pikeville-review-details" />{" "}Research elsewhere finds
            data centers create few permanent on-site jobs relative to their
            size.
            <Cite id="brookings-employment" />
          </p>
          <More href="/pros-cons" label="Pros & Cons" />
        </FAQ>

        <FAQ q="What does the city get out of it financially?">
          <p>
            Several streams. Property taxes on the computing equipment,
            which the city says it will not waive
            <Cite id="pikeville-review-details" />: roughly $1.80 per $100
            of value across state, county, city, and school rates, and{" "}
            <strong>the school district collects the largest share</strong>.
            <Cite id="ky-dor-rates-2025" />{" "}A 3% franchise fee Kentucky
            Power pays the city on all electric sales inside city limits,
            which a data center&rsquo;s power purchases would add several
            hundred thousand dollars a year to.
            <Cite id="psc-pikeville-franchise" />{" "}Plus occupational taxes,
            utility revenue, and whatever lease or host payments get
            negotiated. For scale: the city&rsquo;s entire general fund
            collected about $21.4 million in FY2024.
            <Cite id="pikeville-audit-2024" />
          </p>
          <More href="/ideas" label="Ideas: leveraging the deal" />
        </FAQ>

        <FAQ q="Who decides whether this happens?">
          <p>
            The Pikeville City Commission, after the promised public review
            of complete terms. The Commission typically meets the second and
            fourth Monday of each month, open to the public,
            <Cite id="pikeville-commission" />{" "}and the city accepts comments
            at datacenter@pikevilleky.gov.
            <Cite id="pikeville-review-details" />
          </p>
          <More href="/status" label="How to participate" />
        </FAQ>

        <FAQ q="How can I verify any of this myself?">
          <p>
            Every claim on this site carries a numbered citation. And beyond
            that, Kentucky&rsquo;s Open Records Act gives any Kentucky
            resident the right to inspect public records. Agencies must
            respond within five business days, must cite a specific exemption
            to withhold anything, and denials can be appealed to the Attorney
            General at no cost.
            <Cite id="krs-61-872" />
            <Cite id="krs-61-880" />
          </p>
          <More href="/status" label="How to request public records" />
        </FAQ>

        <NextPage href="/pros-cons" label="The pros & cons, on one page" />
      </Container>
    </>
  );
}
