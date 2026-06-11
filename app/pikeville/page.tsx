import type { Metadata } from "next";
import { Cite } from "@/components/Cite";
import {
  Callout,
  Container,
  NextPage,
  PageHeader,
  Section,
  Stat,
  StatGrid,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "The Pikeville Proposal",
  description:
    "What the proposed data center at the Kentucky Enterprise Industrial Park actually is, according to the City of Pikeville's own published documents — and what hasn't been decided yet.",
  alternates: { canonical: "/pikeville" },
};

export default function PikevillePage() {
  return (
    <>
      <PageHeader
        kicker="What's actually on the table"
        title="The Pikeville proposal, straight from the documents"
        lede="Everything on this page comes from the City of Pikeville's own published documents — the June 5, 2026 press release, the city's review summary, and the executed Memorandum of Understanding. No spin in either direction: here's what has been agreed to, what hasn't, and what happens next."
      />
      <Container>
        <Section title="The short version">
          <ul>
            <li>
              On <strong>April 20, 2026</strong>, the City of Pikeville signed
              a Memorandum of Understanding (MOU) with{" "}
              <strong>MD Squared Power LLC</strong>, a Lexington-based data
              center and digital infrastructure developer. The city announced
              it publicly on June 5, 2026 and posted the full MOU online.
              <Cite id="pikeville-press-release" />
              <Cite id="pikeville-mou" />
            </li>
            <li>
              The MOU starts a <strong>120-day exclusive negotiation
              window</strong>{" "}— the city and developer talk only to each other
              while deciding whether a final Development Agreement makes
              sense. Either side can walk away at the end with no penalty, and
              the window can be extended by mutual agreement.
              <Cite id="pikeville-press-release" />
            </li>
            <li>
              <strong>No land has been transferred. No terms have been agreed
              to.</strong>{" "}The city states it has signed no non-disclosure
              agreement and was not asked to.
              <Cite id="pikeville-press-release" />
            </li>
            <li>
              The proposed site is the city-owned{" "}
              <strong>Kentucky Enterprise Industrial Park</strong>{" "}— a
              190-acre park developed over more than a decade with city
              investment plus state and federal grants, currently home to
              Appalachian Tank and Wrightway Concrete, with a state-certified
              Build-Ready site completed in 2024.
              <Cite id="pikeville-press-release" />{" "}(See{" "}
              <a href="/map">the map page</a> for where the park sits and how
              far the nearest homes are.)
            </li>
          </ul>
        </Section>

        <Section title="The numbers the developer has proposed">
          <StatGrid>
            <Stat value="25–30 MW" label="Initial computing capacity">
              With developer interest in growing to 75–100 MW{" "}
              <em>if</em>{" "}additional power capacity becomes available.
              <Cite id="pikeville-review-details" />
            </Stat>
            <Stat value="$250M+" label="Projected initial investment">
              A significant portion is computing equipment subject to standard
              Kentucky personal property tax.
              <Cite id="pikeville-review-details" />
            </Stat>
            <Stat value="190+" label="Projected construction jobs">
              During the build phase — a developer projection, not yet a
              commitment.
              <Cite id="pikeville-press-release" />
            </Stat>
            <Stat value="40" label="Projected permanent jobs">
              Full-time positions at full operation of the initial phase, with
              wages described as significantly above the Pike County median
              household income.
              <Cite id="pikeville-press-release" />
            </Stat>
          </StatGrid>
          <Callout tone="warning" title="Projections are not commitments">
            The city itself makes this point: &ldquo;projections are not the
            same as enforceable obligations.&rdquo; It says any final
            agreement must back job commitments with &ldquo;real enforcement
            mechanisms, not aspirations.&rdquo;
            <Cite id="pikeville-review-details" />
          </Callout>
        </Section>

        <Section title="Why Pikeville? ">
          <p>
            According to the city, the developer was drawn by three things:
            the quality of the industrial park&rsquo;s infrastructure, the
            state-certified Build-Ready site with its completed building pad,
            and — critically — <strong>existing power capacity within the
            park</strong>{" "}that could serve the initial phase{" "}
            <em>without building new transmission lines</em>. That means the
            project could reach operation faster here than at sites needing
            new transmission.
            <Cite id="pikeville-review-details" />
          </p>
          <p>
            That same fact is at the center of the local debate: the park and
            its power capacity were built with public money over more than a
            decade, and level, buildable land is genuinely scarce in Eastern
            Kentucky. The city frames the open question the same way many
            residents do — is <em>this</em>{" "}use of those assets, on{" "}
            <em>what</em>{" "}terms, the right decision?
            <Cite id="pikeville-review-details" />
          </p>
        </Section>

        <Section title="What the city says it is examining">
          <ul>
            <li>
              <strong>Land use:</strong>{" "}whether a data center is the right
              use for the park, how it would affect the park&rsquo;s ability
              to serve other industrial employers, and what realistic
              alternatives exist — evaluated by independent advisors, not the
              developer&rsquo;s own assessment.
              <Cite id="pikeville-review-details" />
            </li>
            <li>
              <strong>Economics:</strong>{" "}an independent economic analysis of
              whether the developer&rsquo;s job and investment projections
              match what comparable projects have actually delivered
              elsewhere.
              <Cite id="pikeville-review-details" />
            </li>
            <li>
              <strong>Electric rates:</strong>{" "}Kentucky Power&rsquo;s rates
              are set by the Kentucky Public Service Commission — the city
              can&rsquo;t override that — but the city says it is examining
              what a Development Agreement can do to ensure the cost of
              serving the facility doesn&rsquo;t fall on existing residential
              and commercial customers. (Our <a href="/power">Power &amp;
              Rates page</a> explains how this works in detail.)
              <Cite id="pikeville-review-details" />
            </li>
            <li>
              <strong>Water:</strong>{" "}the city operates its own municipal
              water system, drawing from the Levisa Fork of the Big Sandy
              River, and says its approved withdrawal permit capacity is well
              above the project&rsquo;s described needs. It is having the
              developer&rsquo;s usage projections independently verified
              anyway. (See our <a href="/water">Water page</a> for how
              different cooling designs change the picture.)
              <Cite id="pikeville-review-details" />
            </li>
            <li>
              <strong>Noise and air quality:</strong>{" "}the city is examining
              the noise and air-quality implications of backup power systems,
              which are tested on a regular schedule. (See our{" "}
              <a href="/noise">Noise</a> and <a href="/health">Health</a>{" "}
              pages.)
              <Cite id="pikeville-review-details" />
            </li>
            <li>
              <strong>Taxes:</strong>{" "}the city says it will not reduce or
              eliminate local tax revenues as an incentive. Kentucky&rsquo;s
              state-level data center incentive operates through state sales
              tax treatment and doesn&rsquo;t affect local government
              revenue.
              <Cite id="pikeville-review-details" />
            </li>
            <li>
              <strong>Future ownership:</strong>{" "}ensuring commitments are
              tied to the land and the use — so they can&rsquo;t be erased if
              the property is sold or the developer restructures.
              <Cite id="pikeville-review-details" />
            </li>
          </ul>
        </Section>

        <Section title="Who is MD Squared Power?">
          <p>
            MD Squared Power LLC is described in the city&rsquo;s documents as
            a Lexington, Kentucky-based development company focused on data
            centers and digital infrastructure. Its role as a developer is to
            identify sites, develop infrastructure, and bring in an end user
            (the company that would actually operate computing inside the
            facility). As of the June 2026 announcement,{" "}
            <strong>no end user had been finalized</strong>{" "}— that negotiation
            was ongoing.
            <Cite id="pikeville-review-details" />
          </p>
          <p>
            For the record: local reporting notes the LLC is young — Kentucky
            business filings show it was organized in 2024 and took the
            &ldquo;MD Squared Power&rdquo; name in February 2026; its
            managing member, Ben DeVary of Lexington, signed the MOU.
            <Cite id="mountain-top-pikeville" />
            <Cite id="pikeville-mou" />{" "}That isn&rsquo;t unusual for a
            project-specific development entity, but it is part of why the
            city&rsquo;s independent review of the developer&rsquo;s capacity
            to deliver — and protections that survive any future sale —
            matter.
            <Cite id="pikeville-review-details" />
          </p>
        </Section>

        <Section title="What happens next">
          <ol>
            <li>
              The City Commission is working toward authorizing independent
              legal counsel (an attorney experienced in data center
              development agreements) and an independent economic and site
              analysis.
              <Cite id="pikeville-press-release" />
            </li>
            <li>
              No final Development Agreement will be considered until that
              independent review is complete.
              <Cite id="pikeville-press-release" />
            </li>
            <li>
              Before any vote, the complete terms of any agreement will be
              made public. The city commits that no vote happens before the
              community can see exactly what is being considered.
              <Cite id="pikeville-review-details" />
            </li>
          </ol>
          <Callout tone="info" title="How to be heard">
            The city has set up a dedicated address for questions and
            comments: <strong>datacenter@pikevilleky.gov</strong>. The full
            MOU, site map, and review documents are posted at{" "}
            <a
              href="https://pikevilleky.gov/community-links/data-center-information/"
              target="_blank"
              rel="noopener noreferrer"
            >
              pikevilleky.gov
            </a>
            .<Cite id="pikeville-dc-page" />
          </Callout>
        </Section>

        <NextPage href="/basics" label="What is a data center, anyway?" />
      </Container>
    </>
  );
}
