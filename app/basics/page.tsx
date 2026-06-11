import type { Metadata } from "next";
import { Cite } from "@/components/Cite";
import {
  BarChart,
  Callout,
  Container,
  NextPage,
  PageHeader,
  Section,
  Stat,
  StatGrid,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "The Basics: Types & Sizes",
  description:
    "What a data center is, the different types (hyperscale, colocation, enterprise, edge, AI, and crypto), how big they get, and where a 25–30 MW facility fits.",
  alternates: { canonical: "/basics" },
};

export default function BasicsPage() {
  return (
    <>
      <PageHeader
        kicker="Data centers 101"
        title="What is a data center, and how big is 'big'?"
        lede="A data center is a building full of computers: servers that store websites, apps, photos, business records, and increasingly, AI models. The computers generate heat constantly, so the building is mostly electrical and cooling equipment wrapped around racks of machines. Not all data centers are alike: the type matters enormously for noise, water, power, and jobs."
      />
      <Container>
        <Section title="The types, plainly">
          <p>
            <strong>Hyperscale</strong>: giant facilities built and run by a
            single tech company (Amazon, Microsoft, Google, Meta). Individual
            buildings commonly draw 100–300 megawatts (MW); campuses can
            exceed 1,000 MW. There were about 1,136 hyperscale data centers
            worldwide in early 2025, with the U.S. holding 54% of total
            capacity.
            <Cite id="synergy-hyperscale-count" />
            <Cite id="dgtlinfra-types" />
          </p>
          <p>
            <strong>Colocation (&ldquo;colo&rdquo;)</strong>: facilities that
            rent space and power to many customers. Whole buildings typically
            run 5–50 MW.
            <Cite id="dgtlinfra-types" />
          </p>
          <p>
            <strong>Enterprise</strong>: a single company&rsquo;s own
            facility (a bank, hospital system, or university), usually 1–10
            MW.
            <Cite id="dgtlinfra-types" />
          </p>
          <p>
            <strong>Edge / micro</strong>: small sites (a fraction of a MW up
            to ~2 MW) placed close to users for speed.
            <Cite id="dgtlinfra-types" />
          </p>
          <p>
            <strong>AI facilities</strong>: the newest and largest category.
            AI <em>training</em>{" "}campuses concentrate near cheap power and can
            reach staggering sizes: the OpenAI/Oracle &ldquo;Stargate&rdquo;
            site in Abilene, TX is being built to 1,200 MW, and Meta&rsquo;s
            Louisiana campus is planned to scale to 5,000 MW.
            <Cite id="dgtlinfra-types" />{" "}AI <em>inference</em>{" "}(answering
            users) spreads across many smaller sites.
          </p>
          <p>
            <strong>Crypto mining</strong>: warehouses of specialized
            Bitcoin-mining computers cooled by walls of fans. They&rsquo;re
            cheaper, simpler, and historically much louder than conventional
            data centers, with minimal staffing. The U.S. Energy Information
            Administration identified 137 U.S. bitcoin-mining facilities using
            an estimated 0.6%–2.3% of all U.S. electricity.
            <Cite id="eia-crypto" />{" "}Pike County already has one:
            Blockware Solutions opened a ~20 MW mining facility at a former
            coal processing site in Belfry in 2022 (since grown to roughly 30
            MW),
            <Cite id="blockware-belfry" />
            <Cite id="gem-belfry" />{" "}announcing 5–10 full-time jobs at about
            $23/hour, and a 2023 regulatory filing reported about 10
            employees hired with 3 more planned across its Pike County
            operations, roughly as promised. The announced expansion to
            75–100 MW, however, never materialized.
            <Cite id="blockware-jobs" />
            <Cite id="middlesboro-cig" />
          </p>
          <Callout tone="info" title="Why the type matters for Pikeville">
            The worst community outcomes documented anywhere (constant loud
            noise, health complaints, lawsuits) overwhelmingly involve
            <strong> air-cooled crypto mines</strong>{" "}and one
            <strong> gas-turbine-powered AI supercomputer</strong>, not
            grid-powered conventional data centers. The Pikeville MOU
            describes a data center development, but the end user, the
            company that would actually operate it, hasn&rsquo;t been
            announced.
            <Cite id="pikeville-review-details" />{" "}What kind of facility it
            is, and how it&rsquo;s cooled, is one of the most important
            questions residents can ask.
          </Callout>
        </Section>

        <Section title="How big is 25–30 MW?">
          <p>
            The Pikeville proposal&rsquo;s initial phase is 25–30 MW, with
            developer interest in 75–100 MW if more power becomes available.
            <Cite id="pikeville-review-details" />{" "}On the industry spectrum,
            that&rsquo;s a <strong>mid-size facility</strong>: bigger than a
            typical enterprise data center, in the middle of the colocation
            range, and roughly one-tenth the size of a single typical
            hyperscale building.
            <Cite id="dgtlinfra-types" />
          </p>
          <BarChart
            unit="MW"
            max={1200}
            rows={[
              { label: "Typical enterprise data center", value: 10, display: "~1–10 MW" },
              { label: "Blockware crypto mine, Belfry KY", value: 20, display: "20 MW" },
              {
                label: "Pikeville proposal (initial)",
                value: 30,
                display: "25–30 MW",
                highlight: true,
              },
              {
                label: "Pikeville proposal (possible growth)",
                value: 100,
                display: "75–100 MW",
                highlight: true,
              },
              { label: "Typical hyperscale building", value: 300, display: "100–300 MW" },
              {
                label: "PowerHouse campus, Louisville KY",
                value: 402,
                display: "402 MW",
              },
              {
                label: "TeraWulf campus, EastPark (Ashland area)",
                value: 1000,
                display: "1,000+ MW",
              },
              {
                label: "Stargate AI campus, Abilene TX",
                value: 1200,
                display: "1,200 MW",
              },
            ]}
          />
          <p className="text-sm text-slate-500">
            Sources: facility figures cited in the surrounding text.
            <Cite id="powerhouse-louisville" />
            <Cite id="terawulf-muskie" />
            <Cite id="blockware-belfry" />
          </p>
        </Section>

        <Section title="The bigger picture: a national building boom">
          <StatGrid>
            <Stat value="~4,000–5,400" label="U.S. data centers">
              Counts differ by database: Statista counts 4,184 (April 2026);
              Cloudscene counts 5,427. The U.S. has by far the most of any
              country.
              <Cite id="statista-dc-count" />
              <Cite id="cargoson-dc-count" />
            </Stat>
            <Stat value="4.4% → 6.7–12%" label="Share of U.S. electricity">
              Data centers used 176 TWh in 2023 (4.4% of U.S. electricity),
              projected to reach 6.7%–12% by 2028, per the federal LBNL
              report to Congress. Globally, the IEA projects data center
              electricity use roughly doubling by 2030.
              <Cite id="lbnl-2024" />
              <Cite id="iea-energy-ai" />
            </Stat>
            <Stat value="4,040 MW" label="Northern Virginia">
              The largest data center market on Earth. Loudoun County alone
              has ~200 operating data centers, and the most complete record
              of what living near them is like.
              <Cite id="cbre-nova-2025" />
              <Cite id="loudoun-dc-facts" />
            </Stat>
          </StatGrid>
          <p>
            Kentucky is part of the boom. Beyond the existing ~28 small
            commercial facilities (mostly Louisville colocation sites), the
            state has seen a wave of announcements: the 402 MW PowerHouse
            campus in Louisville,
            <Cite id="powerhouse-louisville" />{" "}TeraWulf&rsquo;s 1,000+ MW
            campus at EastPark Industrial Park near Ashland (Eastern
            Kentucky, on a former strip mine, served by Kentucky Power),
            <Cite id="terawulf-muskie" />{" "}and a proposed 2,200 MW hyperscale
            campus near Maysville backed by an unnamed Fortune 100 company.
            <Cite id="maysville-weku" />{" "}Kentucky&rsquo;s 2024–2025
            legislation (HB 8 and HB 775) created 50-year sales-tax
            exemptions for data center equipment; in counties under 50,000
            people, including Pike County, the investment threshold is just
            $25 million.
            <Cite id="stites-hb775" />
          </p>
        </Section>

        <Section title="What actually gets built">
          <p>
            A data center campus is mostly windowless buildings plus the
            infrastructure to power and cool them: an electrical substation,
            rows of backup diesel generators with fuel storage, a cooling
            plant (chillers, cooling towers, or dry coolers depending on
            design), security fencing, and fiber lines. For scale, the
            Louisville PowerHouse campus plans up to 6 buildings and 1.8
            million sq ft on 154 acres for 402 MW, roughly 4,500 sq ft per
            MW.
            <Cite id="powerhouse-louisville" />{" "}Reliability is rated by
            Uptime Institute &ldquo;Tiers&rdquo; (I–IV); most commercial
            builds target Tier III, meaning equipment can be serviced without
            shutting down.
            <Cite id="uptime-tiers" />
          </p>
        </Section>

        <Section title="The jobs question, honestly">
          <p>
            Data centers are capital-intensive, not labor-intensive. The most
            thorough independent study (by JLARC, the Virginia
            legislature&rsquo;s research agency) found a typical data center
            employs <strong>about 50 people during operations</strong>, versus
            up to 1,500 on-site during construction.
            <Cite id="jlarc-2024" />{" "}Highly automated campuses run roughly
            25–40 permanent staff per 100 MW.
            <Cite id="latitude-jobs" />{" "}Real examples: Meta&rsquo;s DeKalb,
            IL center reports ~200 permanent jobs; Google&rsquo;s 500 MW
            Kansas City campus, 200 permanent and 1,000 construction;
            <Cite id="meta-elpaso" />{" "}and the 20 MW Belfry crypto mine, 5–10
            jobs.
            <Cite id="blockware-jobs" />
          </p>
          <p>
            The developer projects 40 permanent jobs and 190+ construction
            jobs for Pikeville&rsquo;s initial phase,
            <Cite id="pikeville-press-release" />{" "}within the documented
            range for a facility this size, on the optimistic side if the end
            user turns out to be a highly automated operation. The city has
            said it wants enforceable job commitments, not projections.
            <Cite id="pikeville-review-details" />
          </p>
          <p>
            Two honest framings from the research: subsidy-watchdog Good Jobs
            First calculates that subsidized data centers have averaged about
            $2 million in subsidies per permanent job,
            <Cite id="goodjobsfirst" />{" "}while a 2025 Brookings analysis
            found counties that landed their first large data center saw
            total private employment grow 4–5% over five to six years, with
            gains concentrated around hyperscale (not colocation) facilities.
            <Cite id="brookings-employment" />{" "}The real economic case for
            data centers is usually <strong>tax revenue</strong>, not
            payroll: Loudoun County collects roughly $900 million a year
            from them.
            <Cite id="loudoun-revenue" />{" "}Pikeville&rsquo;s city government
            says it will not waive local taxes as an incentive.
            <Cite id="pikeville-review-details" />
          </p>
        </Section>

        <NextPage href="/noise" label="How loud are they, really?" />
      </Container>
    </>
  );
}
