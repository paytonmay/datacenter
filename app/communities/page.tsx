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
  title: "What Happened in Other Towns",
  description:
    "Public opinion on data centers, what drives opposition, towns that rejected projects, towns that embraced them, and what each actually got.",
  alternates: { canonical: "/communities" },
};

export default function CommunitiesPage() {
  return (
    <>
      <PageHeader
        kicker="Public perception & real outcomes"
        title="What other communities decided, and what they got"
        lede="Pikeville isn't the first town to face this choice. The national mood has swung hard, some towns have said no, others built their budgets around data centers. The record is messy and worth knowing in full."
      />
      <Container>
        <Section title="Where public opinion stands">
          <StatGrid>
            <Stat value="71%" label="Would oppose one nearby">
              By May 2026 polling, 71% of registered voters would oppose a
              data center near their home (55% strongly), up from 42%
              opposition just nine months earlier. One of the fastest
              opinion swings pollsters have tracked.
              <Cite id="heatmap-2026" />
            </Stat>
            <Stat value="#1: electric bills" label="Top driver of opposition">
              53% of Americans blame data centers for rising electricity
              costs, up from 28%: the single most persuasive argument
              against them in message testing. Health fears rank below
              cost, noise, and environment.
              <Cite id="heatmap-bills-blame" />
            </Stat>
            <Stat value="Split verdict" label="Pew's national survey">
              Americans rate data centers negatively on the environment
              (39% mostly bad vs 4% good) and energy costs (38% vs 6%),
              but positively on local jobs (25% good vs 15% bad) and tax
              revenue (23% vs 12%). Large shares say "not sure."
              <Cite id="pew-2026" />
            </Stat>
          </StatGrid>
          <p>
            In short: the loudest national concern isn&rsquo;t noise or
            health; it&rsquo;s utility bills, which is why our{" "}
            <a href="/power">Power &amp; Rates page</a> goes deepest. And
            opinion polls measure sentiment, not facts; both deserve
            weight in a public decision, but they&rsquo;re different things.
          </p>
        </Section>

        <Section title="Towns that said no">
          <p>
            A 2025 tracking report counted at least 16 projects worth ~$64
            billion blocked or delayed by local opposition, opposition that
            polls as bipartisan.
            <Cite id="datacenterwatch" />{" "}Examples with documented outcomes:
          </p>
          <ul>
            <li>
              <strong>Chesterton, Indiana</strong>: a $1.3B project
              withdrawn after organized resident opposition over air, water,
              wetlands, and home values.
              <Cite id="dcd-chesterton" />
            </li>
            <li>
              <strong>Peculiar, Missouri</strong>: the &ldquo;Don&rsquo;t
              Dump Data in Peculiar&rdquo; campaign led the planning
              commission to remove data centers from its zoning entirely,
              killing a $1.5B project.
              <Cite id="wapo-peculiar" />
            </li>
            <li>
              <strong>Tucson, Arizona</strong>: the council unanimously
              rejected &ldquo;Project Blue,&rdquo; primarily over water in a
              drought region; the project later re-emerged outside city
              limits, a reminder that one body&rsquo;s rejection
              doesn&rsquo;t always end a project.
              <Cite id="kjzz-tucson" />
            </li>
            <li>
              <strong>Here in Kentucky</strong>: several counties and cities
              hit pause on data center proposals in 2025–26, and the issue
              featured prominently in 2026 local primaries; the
              Maysville-area hyperscale proposal drew multi-day hearings and
              a lawsuit, with NDAs limiting public information.
              <Cite id="ky-lantern-pause" />
              <Cite id="maysville-weku" />
            </li>
          </ul>
        </Section>

        <Section title="Towns that said yes, and what they got">
          <ul>
            <li>
              <strong>Loudoun County, Virginia</strong>: collected roughly
              $895 million in data center tax revenue in FY2025, projected at
              ~$1.3 billion (about 45% of all county tax revenue) by FY2027;
              the county credits that revenue with funding schools and
              services at lower residential tax rates.
              <Cite id="loudoun-revenue" />{" "}The same county has a real,
              documented record of noise and visual complaints and is now
              tightening its zoning; both things are true.
              <Cite id="jlarc-2024" />
            </li>
            <li>
              <strong>New Albany, Ohio</strong>: 40 data centers since 2010
              built an enormous business park. But note the structure: the
              town granted 15-year, 100% property tax abatements, and Ohio
              data centers have claimed ~$2.5 billion in state and local tax
              breaks since 2017, so the fiscal payoff depends entirely on
              what the locality negotiated.
              <Cite id="news5-new-albany" />
              <Cite id="signal-ohio-abatements" />
            </li>
            <li>
              <strong>The contrast that matters:</strong>{" "}Loudoun taxes data
              center equipment fully and reaps enormous revenue; New Albany
              abated heavily and gets less per facility. Pikeville&rsquo;s
              stated position, no reduction of local taxes as an incentive,
              <Cite id="pikeville-review-details" />{" "}puts it on the
              Loudoun side of that line, and Kentucky&rsquo;s state sales-tax
              incentive operates at the state level without touching local
              revenue.
              <Cite id="stites-hb775" />
            </li>
          </ul>
        </Section>

        <Section title="Eastern Kentucky's own track record">
          <p>
            We don&rsquo;t have to look out of state for precedents: the
            region has run this experiment once already, with crypto mining
            in the early 2020s. The record is instructive in both directions:
          </p>
          <ul>
            <li>
              <strong>Belfry (Pike County): quiet, modest, real.</strong>{" "}
              Blockware&rsquo;s mine opened in 2022, grew from 20 to roughly
              30 MW, and delivered approximately the ~10 jobs it promised,
              with no community conflict on record in four years. But the
              touted expansion to 75–100 MW and a promised third Kentucky
              site never happened, and there&rsquo;s been almost no public
              reporting since 2022.
              <Cite id="gem-belfry" />
              <Cite id="middlesboro-cig" />
            </li>
            <li>
              <strong>Hatfield (Pike County): discounts with conditions.</strong>{" "}
              When Blockware&rsquo;s subsidiary sought a special Kentucky
              Power contract with $2.5M+ in electricity discounts for a
              second facility, the PSC approved it only with protections:
              the company covers incremental capacity costs dollar-for-dollar
              and posts $2.5M+ in security bonds, an early local example of
              the ring-fencing now standard for data centers.
              <Cite id="ky-lantern-cig" />
            </li>
            <li>
              <strong>Jenkins (Letcher County): the cautionary tale.</strong>{" "}
              A warehouse was converted for a Hong Kong-based crypto company;
              the machines were never switched on, the deal collapsed into
              litigation, and the promised retraining jobs never came.
              <Cite id="kentuckynewera-crypto" />
            </li>
            <li>
              <strong>Louisa (Lawrence County): the regulator said no.</strong>{" "}
              The PSC rejected Kentucky Power&rsquo;s 250 MW crypto contract
              at the former Big Sandy plant site, citing capacity shortfalls
              and ratepayer risk, proof that the PSC will block deals it
              finds unsafe for customers.
              <Cite id="utilitydive-ebon" />
            </li>
          </ul>
          <p>
            The head of the region&rsquo;s economic development agency summed
            up the crypto wave: &ldquo;I don&rsquo;t think any of them have
            really materialized at the level that anyone hoped they
            would.&rdquo;
            <Cite id="kentuckynewera-crypto" />{" "}The honest lesson isn&rsquo;t
            that projects fail or succeed; it&rsquo;s that{" "}
            <strong>announcements aren&rsquo;t outcomes</strong>, and the
            deals that protected the public were the ones with enforceable
            conditions attached up front.
          </p>
        </Section>

        <Section title="Patterns worth noticing">
          <ul>
            <li>
              <strong>The worst outcomes were siting failures.</strong>{" "}
              Granbury (crypto mine 100 yards from homes), Newton County
              (construction next to residential wells), Memphis (turbines
              near an already-burdened neighborhood). Distance, design rules,
              and permits set before approval are what separated quiet
              neighbors from national news.
              <Cite id="texas-tribune-granbury" />
              <Cite id="sfx-newton-wells" />
              <Cite id="selc-xai" />
            </li>
            <li>
              <strong>Secrecy bred distrust everywhere.</strong>{" "}The Dalles
              fought a newspaper for a year over water numbers;
              <Cite id="register-dalles" />{" "}Maysville&rsquo;s NDA-shrouded
              proposal drew lawsuits.
              <Cite id="maysville-weku" />{" "}Pikeville&rsquo;s city government,
              by contrast, published its MOU in full and states it signed no
              NDA, a meaningful difference residents can verify themselves.
              <Cite id="pikeville-press-release" />
            </li>
            <li>
              <strong>Enforceability decided the economics.</strong>{" "}Towns
              that negotiated full taxation, minimum payments, and
              commitments tied to the land did best; towns that traded
              abatements for projections did worst.
              <Cite id="news5-new-albany" />
              <Cite id="loudoun-revenue" />
            </li>
          </ul>
          <Callout tone="info" title="Questions residents elsewhere wish they'd asked">
            <ul>
              <li>Who is the end user, and what kind of facility is it? (Crypto, AI, cloud: the noise and jobs profiles differ enormously.)</li>
              <li>What cooling design, and is it committed in writing?</li>
              <li>What's the distance from cooling equipment and generators to the nearest homes, and is there a pre-approval sound study with a numeric limit (including low-frequency)?</li>
              <li>Are the job and investment numbers enforceable, with consequences?</li>
              <li>What happens to commitments if the property is sold?</li>
              <li>Who pays for power infrastructure if the facility grows, or leaves?</li>
            </ul>
            <p>
              The City of Pikeville&rsquo;s published review list covers much
              of this ground.
              <Cite id="pikeville-review-details" />
            </p>
          </Callout>
        </Section>

        <NextPage href="/pikeville" label="Back to the Pikeville proposal" />
      </Container>
    </>
  );
}
