import type { Metadata } from "next";
import { Cite } from "@/components/Cite";
import {
  Callout,
  Container,
  Evidence,
  NextPage,
  PageHeader,
  Section,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Health Concerns: What the Evidence Shows",
  description:
    "Data center health concerns sorted by evidence strength: what's documented, what's alleged but unresolved, and what has no supporting evidence — noise, diesel exhaust, EMF, water, and more.",
  alternates: { canonical: "/health" },
};

export default function HealthPage() {
  return (
    <>
      <PageHeader
        kicker="Sorting fact from fear"
        title="Health concerns: documented, alleged, or unsupported?"
        lede="Health claims about data centers circulate constantly — some grounded in real science, some pending in court, some with no evidence behind them. Every claim on this page carries a label. That's the standard a decision this important deserves."
      />
      <Container>
        <div className="mt-8 flex flex-wrap gap-3">
          <Evidence level="documented" />
          <Evidence level="alleged" />
          <Evidence level="no-evidence" />
        </div>

        <Section title="Noise and health — the best-documented pathway">
          <p>
            <Evidence level="documented" /> Chronic environmental noise harms
            health. The World Health Organization&rsquo;s guidelines, built
            on decades of evidence (mostly from traffic noise), link
            sustained exposure above ~53 dB daytime / 45 dB nighttime
            averages to sleep disturbance, annoyance, and increased
            cardiovascular risk,
            <Cite id="who-2018-noise" />{" "}with 40 dB as the protective
            nighttime target.
            <Cite id="who-night-noise" />{" "}The European Environment Agency
            attributes roughly 12,000 premature deaths a year in Europe to
            environmental noise.
            <Cite id="eea-noise-deaths" />{" "}This is the mechanism by which a
            badly sited, noisy facility <em>could</em>{" "}harm health — it is
            not a study of data centers specifically.
          </p>
          <p>
            <Evidence level="documented" /> Some data centers near homes
            produce noise in the 40–59 dB range and generate real
            complaints; most produce none. That&rsquo;s the finding of
            Virginia&rsquo;s legislative audit agency across the largest data
            center market on Earth — and note that 40–59 dB straddles the
            WHO&rsquo;s nighttime guidance, which is why siting and design
            rules matter.
            <Cite id="jlarc-2024" />
          </p>
          <p>
            <Evidence level="alleged" /> In Granbury, Texas, more than 40
            residents near a Bitcoin mine (with noise readings reported
            around 85–90 dB) described migraines, vertigo, tinnitus, and ER
            visits to TIME&rsquo;s investigators;
            <Cite id="time-granbury" />{" "}their nuisance lawsuit survived a
            motion to dismiss and remains pending.
            <Cite id="earthjustice-granbury" />{" "}The noise levels and
            complaint volume are documented; whether the noise caused the
            individual diagnoses has not been scientifically or legally
            resolved. Critically, this was an <strong>air-cooled crypto
            mine 100 yards from homes</strong>{" "}— the loudest facility class in
            the industry — not a conventional data center.
            <Cite id="texas-tribune-granbury" />
          </p>
        </Section>

        <Section title="Air quality — diesel generators and gas turbines">
          <p>
            <Evidence level="documented" /> Diesel exhaust is a Group 1
            carcinogen — the WHO&rsquo;s cancer agency classified it as
            carcinogenic to humans in 2012, based on lung cancer evidence
            from occupational exposure.
            <Cite id="iarc-diesel" />{" "}Every conventional data center has
            diesel backup generators.
          </p>
          <p>
            <Evidence level="documented" /> But the exposure context
            matters: data center generators are emergency equipment that runs
            during outages and brief scheduled tests. Federal rules cap
            non-emergency testing; Virginia permits cap total runtime around
            500 hours per year, require modeling to show air standards
            won&rsquo;t be exceeded before permits issue, and now set the
            cleanest engine class (Tier 4) as the default for new data
            centers.
            <Cite id="trinity-va-deq" />{" "}Virginia operators experienced 0–2
            minor outages per site over two years — generators there run
            almost entirely for maintenance.
            <Cite id="jlarc-2024" />{" "}The legitimate documented concern is{" "}
            <em>cumulative</em>: eastern Loudoun County alone has ~4,700
            permitted generators.
            <Cite id="pec-generators" />{" "}A 25–30 MW facility would host on
            the order of a dozen — a tiny fraction of that — but permit
            terms (engine tier, hours, testing windows) are worth reading.
          </p>
          <p>
            <Evidence level="alleged" /> The Memphis xAI case — the
            highest-profile air-quality fight in the country — involves an
            atypical facility that ran dozens of <em>unpermitted gas
            turbines</em>{" "}as primary power for over a year (documented).
            <Cite id="selc-xai" />{" "}Whether it measurably degraded
            neighborhood air is genuinely unresolved: city-commissioned
            testing found no dangerous levels of the pollutants it measured,
            <Cite id="memphis-air-tests" />{" "}critics noted ozone — the
            pollutant of greatest concern — was never tested,
            <Cite id="techcrunch-memphis-tests" />{" "}and independent satellite
            analyses have reached conflicting conclusions.
            <Cite id="conversation-memphis-satellite" />{" "}Nothing public
            suggests on-site turbine power is contemplated in Pikeville.
          </p>
          <p>
            <Evidence level="documented" /> One modeling study (UC
            Riverside/Caltech) estimated air pollution from{" "}
            <em>powering</em>{" "}U.S. data centers — mostly upstream power
            plants — at ~360 premature deaths in 2023. That&rsquo;s a
            grid-wide statistical model of electricity generation, not
            measured harm from any individual facility.
            <Cite id="ucr-unpaid-toll" />
          </p>
        </Section>

        <Section title="Electromagnetic fields (EMF)">
          <p>
            <Evidence level="no-evidence" /> Data centers, substations, and
            power lines produce <em>non-ionizing</em>{" "}power-frequency fields
            — physically incapable of damaging DNA the way X-rays do. The
            WHO&rsquo;s expert review concluded no health consequences from
            typical low-level exposure have been established; field strength
            falls off rapidly with distance, and exposure outside a facility
            fence is comparable to ordinary urban background.
            <Cite id="who-emf" />{" "}(The oft-cited &ldquo;possibly
            carcinogenic&rdquo; IARC 2B label for magnetic fields is the
            agency&rsquo;s weakest category and reflects an unconfirmed
            statistical association, not established causation.)
          </p>
        </Section>

        <Section title="Water-related health claims">
          <p>
            <Evidence level="documented" /> Cooling towers, as an equipment
            class, are the leading environmental source of Legionnaires&rsquo;
            disease outbreaks when poorly maintained — a real, manageable
            risk addressed by CDC guidance and ASHRAE Standard 188 water
            management plans.
            <Cite id="cdc-legionella" />{" "}No data-center-linked outbreak was
            found in the records reviewed, and many modern facilities use no
            cooling towers at all (see the <a href="/water">Water page</a>).
          </p>
          <p>
            <Evidence level="alleged" /> In Newton County, Georgia,
            residents 1,000 feet from Meta&rsquo;s construction site reported
            wells running dry and sediment in their water; Meta&rsquo;s
            commissioned groundwater study found no connection, no
            pre-construction well survey existed, and a federal inquiry was
            promised. Unresolved either way.
            <Cite id="sfx-newton-wells" />
          </p>
          <p>
            <Evidence level="no-evidence" /> Claims that operating data
            centers chemically &ldquo;poison&rdquo; drinking water: no
            health-department or court record of chemical drinking-water
            contamination from an operating data center was found. The
            documented water issues are about <em>quantity</em>, peak demand,
            and construction-phase sediment — planning issues, not toxicity.
          </p>
        </Section>

        <Section title="Quality of life — real impacts short of health">
          <p>
            <Evidence level="documented" /> The recurring, well-documented
            complaints near data centers are light pollution, multi-year
            construction traffic, visual impact of industrial-scale
            buildings, and the cooling hum — all chronicled extensively in
            Northern Virginia.
            <Cite id="jlarc-2024" />{" "}Operating traffic is light (few
            employees); construction traffic for 1–3 years is not.
          </p>
          <p>
            <strong>Property values</strong>{" "}cut against the common
            assumption. The best independent study — George Mason University,
            analyzing 2023 home sales — found Northern Virginia homes{" "}
            <em>closer</em>{" "}to data centers sold for <em>more</em>, likely
            because data centers cluster near strong infrastructure and jobs.
            <Cite id="gmu-property" />{" "}No rigorous study isolates the effect
            of being <em>immediately adjacent</em>{" "}to a loud facility, where
            anecdotal discounts are claimed — genuinely unstudied.
            Industry-funded analyses (e.g., Mangum Economics, commissioned by
            data center trade groups) claim large property-tax savings for
            homeowners; treat those as advocacy with real but unaudited
            numbers.
            <Cite id="loudoun-revenue" />
          </p>
        </Section>

        <Section title="The honest summary">
          <Callout tone="neutral" title="What this adds up to for Pikeville">
            <p>
              The worst documented harms anywhere — Granbury&rsquo;s noise
              and Memphis&rsquo;s turbines — involve facility types unlike a
              grid-powered conventional data center.
              <Cite id="texas-tribune-granbury" />
              <Cite id="selc-xai" />{" "}The risks that <em>are</em>{" "}documented
              for a facility like the one proposed are specific and largely
              preventable by terms set before approval: noise siting and
              design (require pre-approval sound modeling, as
              Virginia&rsquo;s auditors recommend
              <Cite id="jlarc-2024" />{" "}and Chandler&rsquo;s ordinance
              implements
              <Cite id="chandler-ordinance" />), generator permit conditions
              (engine tier, hours, daytime-only testing
              <Cite id="trinity-va-deq" />), cooling design and any
              water-management plan,
              <Cite id="cdc-legionella" />{" "}and enforceable agreements rather
              than projections.
              <Cite id="pikeville-review-details" />
            </p>
          </Callout>
        </Section>

        <NextPage href="/communities" label="What happened in other towns" />
      </Container>
    </>
  );
}
