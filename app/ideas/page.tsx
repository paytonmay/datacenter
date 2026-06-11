import type { Metadata } from "next";
import { Cite } from "@/components/Cite";
import {
  BarChart,
  Callout,
  Container,
  NextPage,
  PageHeader,
  Section,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Ideas: How Pikeville Could Leverage the Deal",
  description:
    "Documented ways other communities turned data center deals into lasting value (waste-heat reuse, permanent investment funds that cut taxes, and deal structures that survive ownership changes), with the arithmetic for what each could mean in Pikeville.",
  alternates: { canonical: "/ideas" },
};

function Maturity({ level }: { level: "precedented" | "state-scale" | "new-ground" }) {
  const styles = {
    precedented: "bg-emerald-100 text-emerald-900 border-emerald-300",
    "state-scale": "bg-sky-100 text-sky-900 border-sky-300",
    "new-ground": "bg-amber-100 text-amber-900 border-amber-300",
  } as const;
  const labels = {
    precedented: "Precedented elsewhere",
    "state-scale": "Precedented at state scale",
    "new-ground": "Would be new ground",
  } as const;
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${styles[level]}`}
    >
      {labels[level]}
    </span>
  );
}

export default function IdeasPage() {
  return (
    <>
      <PageHeader
        kicker="Ideas worth negotiating"
        title="If the deal happens, how could Pikeville get the most out of it?"
        lede="Most of this site examines whether the proposed data center's impacts are acceptable. This page asks a different question: if the city decides to proceed, what would it take to turn a one-time deal into lasting value? Nothing here is hypothetical invention: every idea is something another community has actually done, scaled to Pikeville's real numbers."
      />
      <Container>
        <Callout tone="neutral" title="How to read this page">
          <p>
            These are not recommendations, and this site is not affiliated
            with any party to the negotiation. Each idea is presented the
            same way: what another place did (sourced), what the equivalent
            arithmetic looks like here (shown), and what would have to be in
            the Development Agreement for it to happen. Whether any of it is
            right for Pikeville is the community&rsquo;s call. The window for
            asking is now: the city has committed to publishing the complete
            agreement for public review before any vote.
            <Cite id="pikeville-review-details" />
          </p>
        </Callout>

        <Section title="Idea one: don't waste the heat">
          <p>
            <Maturity level="precedented" />
          </p>
          <p>
            A 25–30 MW data center is also a 25–30 MW heater running around
            the clock, and the AI-era cooling designs produce hot water
            (roughly 50–60°C from direct-to-chip systems), warm enough to be
            genuinely useful next door.
            <Cite id="dck-heat-grade" />{" "}The precedents are small,
            unglamorous, and real: Notre Dame&rsquo;s server racks heat South
            Bend&rsquo;s municipal greenhouse and save the city about
            $70,000 a year,
            <Cite id="nd-greenhouse" />{" "}a 28 kW micro data center cut an
            English town pool&rsquo;s gas bill 62%,
            <Cite id="deep-green-pool" />{" "}and Amazon&rsquo;s Seattle towers
            are warmed by a neighboring building&rsquo;s waste heat.
            <Cite id="amazon-denny" />{" "}A regional policy group, ReImagine
            Appalachia, has argued for exactly this use on reclaimed mine
            land.
            <Cite id="reimagine-appalachia" />
          </p>
          <p>
            The Pikeville version writes itself. The data center would sit
            inside an industrial park the city spent a decade building, with
            other tenants and a completed Build-Ready pad next door.
            <Cite id="oneeastky-packet" />{" "}The city&rsquo;s own review asks
            how a data center would affect the park&rsquo;s ability to serve
            other industrial employers;
            <Cite id="pikeville-review-details" />{" "}heat reuse flips that
            question. Free or near-free process heat could make the
            remaining lots <em>more</em>{" "}attractive, not less: greenhouses,
            food processing, aquaculture, or simply heating a neighboring
            tenant&rsquo;s building.
          </p>
          <p>
            <strong>What would have to be in the agreement:</strong>{" "}
            heat-recovery plumbing designed in from day one. It is cheap at
            construction and prohibitively expensive to retrofit, and no
            U.S. operator will volunteer it unasked, because almost no U.S.
            town has asked.
            <Cite id="eesi-thermal" />
          </p>
        </Section>

        <Section title="Idea two: bank the windfall, don't just spend it">
          <p>
            <Maturity level="state-scale" />
          </p>
          <p>
            The pattern everywhere resource money has appeared suddenly
            (oil, gas, and now data centers) is that places which{" "}
            <em>invested</em>{" "}the windfall kept benefiting after the boom,
            and places that simply absorbed it into the budget did not. The
            precedent ladder, from biggest to closest:
          </p>
          <ul>
            <li>
              <strong>Alaska</strong>{" "}put a share of its oil revenue into a
              permanent fund starting in 1976. The fund is now roughly $85
              billion
              <Cite id="apfc" />{" "}and paid every eligible Alaskan a $1,000
              dividend in 2025.
              <Cite id="ak-pfd-2025" />
            </li>
            <li>
              <strong>New Mexico</strong>{" "}amended its constitution in 2022
              to draw an extra 1.25% a year from its oil-and-gas-fed Land
              Grant Permanent Fund (about $150 million annually, 60% of it
              for early childhood education), which is how it became the
              first state to offer universal free child care.
              <Cite id="nm-landgrant" />
            </li>
            <li>
              <strong>North Dakota</strong>{" "}created its Legacy Fund by
              ballot measure in 2010; defined earnings now flow to the state
              on a percent-of-value rule, including a $686.9 million
              transfer to the general fund in the 2023–25 biennium.
              <Cite id="nd-legacy" />
            </li>
            <li>
              <strong>West Virginia (the data center version):</strong>{" "}a
              2025 law routes property taxes from large data centers by
              formula: 50% to a Personal Income Tax Reduction Fund, 30% to
              the host county, 10% shared among all counties, and 5% each to
              grid and economic-development funds.
              <Cite id="wv-hb2014" />{" "}The host-county share exists because
              counties pushed back and won a bigger slice,
              <Cite id="wv-hb2014-counties" />{" "}and critics argue the model
              diverts money from local schools and public safety to fund tax
              cuts, a trade-off any version of this idea has to face
              honestly.
              <Cite id="wvcbp-hb2014" />
            </li>
            <li>
              <strong>Loudoun County, Virginia (the pay-as-you-go
              alternative):</strong>{" "}no endowment, but data center revenue
              (38% of its general fund, $100M+ of new revenue a year) let it
              cut the homeowner property tax rate every year for a decade,
              to the lowest in Northern Virginia.
              <Cite id="loudoun-faq-residents" />
            </li>
          </ul>
          <p>
            <strong>Pikeville&rsquo;s actual numbers.</strong>{" "}The
            city&rsquo;s general fund collected about $21.4 million in
            FY2024: $12.2 million of it from the 2% occupational license
            fee, and just $1.07 million from property taxes.
            <Cite id="pikeville-audit-2024" />{" "}The FY2026 budget runs about
            $28 million.
            <Cite id="pikeville-budget-2026" />{" "}The proposed project&rsquo;s
            initial phase exceeds $250 million of capital investment, much
            of it computing equipment the city itself notes is &ldquo;subject
            to standard Kentucky personal property tax assessments,&rdquo;
            and the city has said it will not cut local taxes as an
            incentive.
            <Cite id="pikeville-review-details" />{" "}Two honest observations
            follow. First, because the city&rsquo;s property-tax slice is
            small today, taxes alone may add hundreds of thousands, not
            tens of millions, per year at the initial 25–30 MW scale; the
            county and school district collect their own shares on top.
            Second, that is exactly why the Development Agreement matters:
            negotiated revenue (a land <em>lease</em>{" "}rather than a sale,
            host-community payments, utility margins) can exceed what the
            tax tables produce, and those terms are set now or never.
          </p>
          <p>
            What disciplined banking could build. If the city set aside a
            fixed amount every year for 20 years, earning a 5% average
            return, then switched to drawing 4.5% of the fund per year
            (roughly the rule big endowments live on), the perpetual annual
            income looks like this:
          </p>
          <BarChart
            unit="per year, forever"
            max={5950000}
            rows={[
              {
                label: "Bank $500k/yr → ~$16.5M fund",
                value: 744000,
                display: "~$740k/yr",
              },
              {
                label: "Bank $1M/yr → ~$33M fund",
                value: 1488000,
                display: "~$1.5M/yr",
              },
              {
                label: "Bank $2M/yr → ~$66M fund",
                value: 2976000,
                display: "~$3.0M/yr",
              },
              {
                label: "Bank $4M/yr (full build-out scale) → ~$132M fund",
                value: 5952000,
                display: "~$6.0M/yr",
                highlight: true,
              },
            ]}
          />
          <p className="text-sm text-slate-500">
            Math: 20 annual contributions compounding at 5% (future-value
            factor 33.07), then a 4.5% annual draw. These are illustrations
            of compounding, not predictions: actual deal revenue is
            unknown, returns vary, and inflation erodes fixed draws. For
            scale: the top row equals roughly a quarter of today&rsquo;s
            entire general fund,
            <Cite id="pikeville-audit-2024" />{" "}arriving every year whether
            or not the data center still exists.
          </p>
          <p>
            <strong>Two design realities.</strong>{" "}First, Kentucky law
            limits what cities may do with public funds: essentially
            government obligations, insured or collateralized deposits, and
            highly rated paper, under a written investment policy.
            <Cite id="krs-66-480" />{" "}An endowment that owns stocks would
            need an independent trust or foundation structure, or a change
            in state law. Solvable, but it must be designed, not assumed.
            Second, the West Virginia critique applies at any scale: a
            dollar banked is a dollar not spent on today&rsquo;s needs.
            <Cite id="wvcbp-hb2014" />{" "}Whether to favor the next budget or
            the next generation is a values question only the community can
            answer; the precedents just prove both answers are available.
          </p>
        </Section>

        <Section title="Idea three: structure the deal so the leverage lasts">
          <p>
            <Maturity level="precedented" />
          </p>
          <p>
            The quietest lesson from other towns is that <em>how</em>{" "}the
            deal is papered matters more than its headline numbers. Three
            structures with track records:
          </p>
          <ul>
            <li>
              <strong>Lease, don&rsquo;t sell.</strong>{" "}The city still owns
              the land; the MOU transfers nothing.
              <Cite id="pikeville-review-details" />{" "}A long-term ground
              lease produces recurring revenue a sale can&rsquo;t, and the
              land reverts if the project dies: no abandoned shell the city
              has to buy back.
            </li>
            <li>
              <strong>Tie commitments to the land, not the company.</strong>{" "}
              Data centers change hands. The city&rsquo;s review already
              flags this: commitments should survive any future sale or
              restructuring, with recourse at every stage.
              <Cite id="pikeville-review-details" />
            </li>
            <li>
              <strong>Milestones with consequences.</strong>{" "}Memphis got a
              groundbreaking ceremony for an $80M water-recycling plant;
              then the project was paused.
              <Cite id="wreg-xai-water" />{" "}Mesa, Arizona wrote tiered water
              caps directly into its agreement.
              <Cite id="nbc-mesa" />{" "}Pledges need dates, measurements, and
              defined consequences, including for the jobs numbers, which
              the city says it intends to make enforceable rather than
              aspirational.
              <Cite id="pikeville-review-details" />
            </li>
          </ul>
        </Section>

        <Callout tone="info" title="The honest caveat">
          <p>
            Every scenario on this page depends on terms that do not exist
            yet. The MOU commits the city to nothing but a period of
            exclusive negotiation, and the developer has no signed end user.
            <Cite id="pikeville-review-details" />{" "}The numbers above are
            arithmetic on cited inputs, not forecasts. What the precedents
            establish is narrower but useful: communities that decided what
            they wanted <em>before</em>{" "}signing got it written in; the ones
            that decided afterward mostly didn&rsquo;t.
          </p>
        </Callout>

        <NextPage href="/pikeville" label="What the Pikeville proposal actually says" />
      </Container>
    </>
  );
}
