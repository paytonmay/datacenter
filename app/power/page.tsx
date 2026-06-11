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
  title: "Power & Electric Rates",
  description:
    "How much electricity data centers use, why Eastern Kentucky's situation is unusual, and the honest evidence on whether data centers raise or lower electric rates, and what contract terms decide it.",
  alternates: { canonical: "/power" },
};

export default function PowerPage() {
  return (
    <>
      <PageHeader
        kicker="The biggest question"
        title="Will a data center raise or lower electric bills here?"
        lede="This is the question with the most at stake and the most conflicting claims, because both sides are pointing at real evidence from different places. Whether a data center helps or hurts ratepayers is not a law of nature. It is decided by contract and tariff terms, and Eastern Kentucky's situation is genuinely different from the places making national headlines."
      />
      <Container>
        <Section title="How much power are we talking about?">
          <StatGrid>
            <Stat value="≈ 13,000–16,000" label="Kentucky homes' worth">
              25–30 MW running nearly flat-out uses roughly 197–263 million
              kWh/yr, the consumption of about 13,000–16,000 average
              Kentucky Power households (computed from EIA and KY PSC
              figures; Kentucky homes average ~1,208 kWh/month).
              <Cite id="eia-household" />
              <Cite id="kp-rate-case-2026" />
            </Stat>
            <Stat value="~162,000" label="Kentucky Power customers">
              For perspective: the initial phase alone would add load
              equivalent to roughly 8–10% of all households the utility
              serves.
              <Cite id="ky-lantern-kp-rates" />
            </Stat>
            <Stat value="~90%" label="Load factor">
              Data centers run nearly flat around the clock, unlike homes,
              which spike morning and evening. Utilities prize steady load
              because it earns revenue without adding much to the peaks that
              drive infrastructure costs.
              <Cite id="uptime-pue-2024" />
            </Stat>
          </StatGrid>
          <p>
            A data center&rsquo;s total draw includes cooling overhead,
            measured by PUE (power usage effectiveness). The industry
            average is 1.56; efficient new builds run 1.2–1.3.
            <Cite id="uptime-pue-2024" />{" "}Nationally, data centers used 4.4%
            of U.S. electricity in 2023, heading to a projected 6.7–12% by
            2028.
            <Cite id="lbnl-2024" />
          </p>
        </Section>

        <Section title="Why Eastern Kentucky's starting point is different">
          <p>
            The national headlines about data centers raising rates come from
            booming regions where utilities must build expensive new plants
            and lines to serve them. Kentucky Power&rsquo;s problem is the
            mirror image: as coal employment collapsed, mines and businesses
            closed and people left, so the utility sells <em>less</em>{" "}power
            while spreading the same fixed costs (poles, wires, plants) over{" "}
            <em>fewer</em>{" "}customers. That dynamic, documented for years, is
            a core reason Eastern Kentucky bills are so high.
            <Cite id="icn-death-spiral" />
          </p>
          <p>
            The numbers are stark. In its 2025–26 rate case, Kentucky Power
            sought a 14.6% residential increase; the PSC approved 6.63% over
            two years, taking the average residential bill from $183.37 to
            $194.13, among the highest in Kentucky even though the
            state&rsquo;s average power price is well below the national
            average.
            <Cite id="kp-rate-case-2026" />{" "}Customers will also pay about
            $2/month more to keep the aging Mitchell coal plant running, in a
            decision the PSC approved only &ldquo;to prevent a worse
            outcome.&rdquo;
            <Cite id="weku-mitchell" />
          </p>
          <p>
            Against that backdrop, Kentucky Power has said publicly that
            attracting large new loads is &ldquo;the best vehicle for
            eventually balancing or lowering electric rates&rdquo;, and it
            is already building a 345 kV substation to serve TeraWulf&rsquo;s
            1,000+ MW campus near Ashland.
            <Cite id="hazard-herald-pipeline" />
            <Cite id="terawulf-muskie" />
          </p>
        </Section>

        <Section title="The case that a data center helps ratepayers">
          <ul>
            <li>
              <strong>Spreading fixed costs.</strong>{" "}A big, steady customer
              adds revenue against infrastructure that already exists. In
              Georgia, regulators credited the large-load pipeline with
              enabling a three-year base-rate freeze, and the settlement
              requires at least $556 million/year of large-load revenue to
              put &ldquo;downward pressure&rdquo; on everyone else&rsquo;s
              rates (consumer groups note that&rsquo;s pressure, not a
              guaranteed decrease).
              <Cite id="georgia-power-stipulation" />
              <Cite id="georgia-recorder-psc" />
            </li>
            <li>
              <strong>Data centers can pay their full freight.</strong>{" "}
              Virginia&rsquo;s legislative auditor (JLARC), with an
              independent cost-of-service study, found data centers there{" "}
              <em>currently</em>{" "}pay the full cost of their service: rates
              were allocating costs to the customers causing them.
              <Cite id="jlarc-2024" />
            </li>
            <li>
              <strong>Pikeville&rsquo;s specific advantage:</strong>{" "}the city
              says the initial 25–30 MW phase can be served with{" "}
              <em>existing</em>{" "}power capacity in the industrial park, without
              new transmission
              <Cite id="pikeville-review-details" />, meaning the
              cost-causing buildout that drives rate increases elsewhere
              isn&rsquo;t needed for phase one.
            </li>
          </ul>
        </Section>

        <Section title="The case that data centers raise rates">
          <ul>
            <li>
              <strong>The same JLARC study&rsquo;s warning:</strong>{" "}future
              data center growth in Virginia &ldquo;will likely increase
              system costs for all customers&rdquo; as new plants and lines
              get built; both findings are true at once.
              <Cite id="jlarc-2024" />
            </li>
            <li>
              <strong>Harvard&rsquo;s Electricity Law Initiative</strong>{" "}
              reviewed ~50 regulatory proceedings and concluded utilities are
              structurally incentivized to build for Big Tech and shift costs
              to captive ratepayers, often behind confidential contracts.
              <Cite id="harvard-eli" />
            </li>
            <li>
              <strong>The PJM capacity-market spike (this affects us):</strong>{" "}
              Kentucky Power buys capacity through PJM, the 13-state grid
              market. PJM capacity prices exploded from $28.92/MW-day to
              $269.92 and then to the price cap in successive auctions,
              <Cite id="pjm-capacity-spike" />{" "}and PJM&rsquo;s independent
              market monitor attributes 40% of the December 2025
              auction&rsquo;s $16.4 billion cost (and $21.3 billion across
              three auctions) to data center load forecasts.
              <Cite id="monitoring-analytics-pjm" />{" "}Estimated bill impacts
              ran ~$16–18/month in AEP Ohio and western Maryland territory.
              <Cite id="ieefa-pjm-bills" />{" "}A Bloomberg analysis of 25,000
              grid nodes found wholesale prices rose up to 267% since 2020
              near major data center clusters.
              <Cite id="bloomberg-nodes" />
            </li>
            <li>
              <strong>The honest counterpoint:</strong>{" "}national electricity
              prices rose ~40% since 2021 for many reasons (fuel costs, grid
              hardening, inflation), and analysts dispute how much is
              attributable to data centers outside hotspot regions.
              <Cite id="fortune-not-just-dc" />
            </li>
          </ul>
          <Callout tone="warning" title="The two-way street">
            Because Kentucky Power is in PJM, Eastern Kentucky bills already
            absorb some data-center-driven capacity costs from facilities
            built in <em>other states</em>, whether or not anything is built
            in Pikeville. The question on the table locally is narrower: will
            <em> this</em>{" "}facility&rsquo;s contract terms make local
            customers better or worse off than doing nothing?
            <Cite id="monitoring-analytics-pjm" />
          </Callout>
        </Section>

        <Section title="The fix the industry converged on, and Pikeville's gap">
          <p>
            Regulators nationwide now use special &ldquo;large-load
            tariffs&rdquo; to ring-fence data center costs. The model is AEP
            Ohio (Kentucky Power&rsquo;s sister company): data centers over
            25 MW must pay for at least <strong>85% of their subscribed
            capacity every month whether they use it or not</strong>, for up
            to 12 years, plus exit fees and collateral. So if the facility
            shrinks or leaves, ratepayers don&rsquo;t hold the bag.
            <Cite id="aep-ohio-tariff" />
          </p>
          <p>
            Kentucky has started down the same road, but with higher
            thresholds. The PSC approved LG&E/KU&rsquo;s
            &ldquo;Extremely High Load Factor&rdquo; tariff (minimum 80% of
            forecast energy for 15 years, with collateral up to $100 million),
            but it only applies to customers of <strong>100 MW or more</strong>.
            <Cite id="lge-ku-ehlf" />{" "}Kentucky Power&rsquo;s own large-load
            tariff filing (20-year terms, heavy collateral) applies at{" "}
            <strong>150 MW or more</strong>.
            <Cite id="kp-igs-tariff" />{" "}A 2026 bill to require all data
            centers over 100 MW to &ldquo;pay their own way&rdquo; died
            without a hearing.
            <Cite id="lpm-hb593" />
          </p>
          <Callout tone="warning" title="The key open question for Pikeville">
            At 25–30 MW, the proposed facility falls <strong>below</strong>{" "}
            the thresholds of every ring-fencing tariff Kentucky has created
            so far, though it would have been covered under Ohio&rsquo;s 25
            MW threshold.
            <Cite id="lge-ku-ehlf" />
            <Cite id="aep-ohio-tariff" />{" "}That doesn&rsquo;t mean costs
            automatically shift to residents; it means the protections, if
            any, will have to come from the city&rsquo;s Development
            Agreement and the specific Kentucky Power service contract,
            rather than from an existing tariff. The city has said it is
            examining exactly this.
            <Cite id="pikeville-review-details" />
          </Callout>
        </Section>

        <Section title="Stranded costs and phantom data centers">
          <p>
            Two failure modes are well documented. First,{" "}
            <strong>stranded costs</strong>: if infrastructure is built for a
            data center that never materializes or leaves early, remaining
            customers can inherit the bill, the central objection when
            Kentucky regulators let LG&E/KU build $3 billion of gas plants
            before any data center contracts were signed.
            <Cite id="lpm-lge-gas-plants" />{" "}Standard protections: minimum
            monthly payments, long contract terms, exit fees, and collateral.
            <Cite id="aep-ohio-tariff" />{" "}Second,{" "}
            <strong>phantom load</strong>: developers shop the same project
            to multiple utilities, producing 5–10× more interconnection
            requests than will ever be built, and inflated forecasts are
            already costing PJM customers real money.
            <Cite id="utility-dive-phantom" />
            <Cite id="monitoring-analytics-pjm" />{" "}Kentucky&rsquo;s own
            energy commission (EPIC) warned in June 2026 that the state must
            set cost-allocation rules <em>before</em>{" "}approving major
            investments, because once assets are built, regulators have
            limited tools to reassign their costs.
            <Cite id="epic-2026" />
          </p>
        </Section>

        <Section title="What 25–30 MW (and 75–100 MW) physically requires">
          <p>
            A 25–30 MW load sits at the boundary where existing distribution
            and sub-transmission may suffice, which matches the city&rsquo;s
            statement that the park&rsquo;s existing capacity can serve phase
            one.
            <Cite id="pikeville-review-details" />{" "}Growth to 75–100 MW is a
            different matter: loads that size typically require a dedicated
            transmission-level substation and new lines, with multi-year
            timelines and interconnection costs commonly in the tens of
            millions.
            <Cite id="semianalysis-electrical" />{" "}The developer&rsquo;s own
            framing (expansion only &ldquo;if additional power capacity
            becomes available&rdquo;) reflects that.
            <Cite id="pikeville-review-details" />{" "}Who pays for any new
            infrastructure is precisely what tariff and contract terms
            decide.
          </p>
          <p>
            Worth knowing about the broader landscape: some operators now
            sign demand-response deals to pause heavy computing during grid
            peaks (Google does this with Indiana Michigan Power, another AEP
            company
            <Cite id="google-demand-response" />), and a Duke University
            study found modest flexibility (curtailing 0.25% of hours) could
            free up ~76 GW of existing U.S. grid capacity.
            <Cite id="duke-headroom" />{" "}Flexibility commitments are another
            negotiable protection. Meanwhile some projects bypass the grid
            entirely with on-site generation (xAI&rsquo;s Memphis turbines)
            or dedicated nuclear deals (Microsoft&rsquo;s Three Mile Island
            restart)
            <Cite id="npr-tmi" />; nothing public suggests that model here.
          </p>
        </Section>

        <Section title="The bottom line">
          <p>
            Honest summary of the evidence: a steady industrial load served
            from existing capacity, paying full local taxes
            <Cite id="pikeville-review-details" />{" "}and bound by
            minimum-payment and exit-fee terms, is the scenario in which a
            data center plausibly helps stabilize a shrinking utility&rsquo;s
            rates, the outcome Kentucky Power itself is betting on.
            <Cite id="hazard-herald-pipeline" />{" "}A facility that triggers
            new generation or transmission whose costs are socialized, or
            that leaves early, is the scenario in which everyone else pays,
            the outcome documented in PJM&rsquo;s capacity market and
            Virginia&rsquo;s forecasts.
            <Cite id="monitoring-analytics-pjm" />
            <Cite id="jlarc-2024" />{" "}Which one Pikeville gets depends on
            terms that haven&rsquo;t been negotiated yet, which is why the
            contract details matter more than the slogans on either side.
          </p>
        </Section>

        <NextPage href="/health" label="What about health concerns?" />
      </Container>
    </>
  );
}
