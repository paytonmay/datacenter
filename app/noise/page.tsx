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
  title: "Noise: Real Decibel Numbers",
  description:
    "How loud data centers actually are: measured decibel levels by equipment type, how sound carries, real complaint cases from Virginia to Texas, and what mitigation works.",
};

export default function NoisePage() {
  return (
    <>
      <PageHeader
        kicker="The hum question"
        title="How loud is a data center?"
        lede="It depends — heavily — on the cooling design, the equipment, and the distance to the nearest home. Most data centers generate no noise complaints at all; a minority, especially air-cooled crypto mines built close to homes, have made national news. Here are the measured numbers."
      />
      <Container>
        <Section title="First, a 30-second decibel primer">
          <p>
            Decibels (dB) measure loudness on a <strong>logarithmic</strong>{" "}
            scale: a 10 dB increase sounds roughly twice as loud. Everyday
            benchmarks: a whisper is ~30 dB, a refrigerator ~50 dB, normal
            conversation ~60 dB, a lawnmower ~90 dB.
            <Cite id="cdc-noise" /> Outdoors, sound from a compact source
            fades about 6 dB every time you double your distance from it.
            <Cite id="engineering-toolbox-inverse" />
          </p>
          <p>
            One wrinkle matters for data centers: standard measurements use
            &ldquo;A-weighting&rdquo; (dBA), which mimics human hearing and{" "}
            <em>under-counts low-frequency sound</em>. Cooling fans and
            transformers produce exactly that kind of low rumble and 120 Hz
            hum — which travels farther and penetrates walls better than
            higher-pitched sound. That&rsquo;s why a facility can pass a dBA
            limit and still produce an audible indoor hum that neighbors find
            maddening.
            <Cite id="lsars-noise" /> Some Virginia counties now add a
            separate dBC (low-frequency) limit to close that gap.
            <Cite id="williamsburg-dbc" />
          </p>
        </Section>

        <Section title="Measured levels by equipment">
          <BarChart
            unit="dB"
            max={105}
            rows={[
              {
                label: "Diesel backup generators (during testing, at ~25 ft)",
                value: 105,
                display: "90–105 dB",
              },
              {
                label: "Crypto-mining ASIC fans (each unit, near-field)",
                value: 90,
                display: "75–90 dB",
              },
              {
                label: "Cooling tower / rooftop fans (at 50 ft)",
                value: 85,
                display: "70–85 dB",
              },
              {
                label: "Air-cooled chillers (near-field)",
                value: 85,
                display: "65–85 dB",
              },
              {
                label: "Typical facility total at the property line",
                value: 80,
                display: "60–80 dB",
                highlight: true,
              },
              {
                label: "Gas turbine hum measured at xAI Memphis",
                value: 70,
                display: "~70 dB",
              },
              {
                label: "Transformers (the 120 Hz hum)",
                value: 68,
                display: "40–68 dB",
              },
              {
                label: "Levels measured at Virginia homes that complained",
                value: 59,
                display: "40–59 dB",
                highlight: true,
              },
            ]}
          />
          <p className="text-sm text-slate-500">
            Sources: acoustic consulting measurements,
            <Cite id="lsars-noise" /> EESI,
            <Cite id="eesi-noise" /> JLARC&rsquo;s Virginia study,
            <Cite id="jlarc-2024" /> Mississippi Today (xAI),
            <Cite id="mississippi-today-xai-noise" /> and crypto-mining fan
            specs.
            <Cite id="texas-tribune-granbury" />
          </p>
          <p>
            Two big takeaways. First, the loudest routine event at a
            conventional data center is <strong>generator testing</strong> —
            typically monthly, 30 minutes to 2 hours per generator, at 90–105
            dB up close — which is why permits usually restrict testing to
            daytime hours.
            <Cite id="lsars-noise" /> (Virginia air permits cap generators at
            roughly 500 hours per year, total, including emergencies.
            <Cite id="va-deq-generators" />
            <Cite id="trinity-va-deq" />) Second, the{" "}
            <strong>continuous</strong> sound — the &ldquo;hum&rdquo; — comes
            from cooling. Air-cooled facilities with walls of fans are the
            loudest class; liquid-cooled halls run 40–55 dB versus 70–85 dB
            for air-cooled equivalents.
            <Cite id="lsars-noise" />
          </p>
        </Section>

        <Section title="How far does it carry?">
          <p>
            A practical example from acoustic consultants: equipment
            producing 70 dB at 50 feet attenuates to roughly 60 dB at 200
            feet, 50 dB at 800 feet, and 40 dB at a half mile over flat, open
            ground.
            <Cite id="lsars-noise" /> Terrain changes this in both
            directions: hills and barriers block sound, while nighttime
            temperature inversions — common in valleys like ours — can carry
            low-frequency sound farther than the simple math suggests.
            <Cite id="lsars-noise" /> Distance is the cheapest, most reliable
            protection: the proposed Pikeville site is inside an existing
            industrial park, and how far the nearest homes are from the
            cooling equipment will matter more than almost anything else.
            See <a href="/map">the map page</a> for the actual geography —
            the park sits on a plateau several hundred feet above the
            nearest valley homes, roughly a mile away.
          </p>
        </Section>

        <Section title="What actually happened in other places">
          <p>
            <strong>
              Virginia (the largest data center market on Earth):
            </strong>{" "}
            JLARC, the legislature&rsquo;s research agency, found that{" "}
            <em>most</em> Virginia data centers generate no noise complaints,
            but about a third sit within 200 feet of residentially zoned land,
            and at facilities that did draw complaints, measured noise
            typically ran 40–59 dB — not hearing-damaging, but a constant
            presence that some residents said affected their well-being.
            <Cite id="jlarc-2024" /> In the best-documented retrofit, Amazon
            replaced all 424 rooftop exhaust fans at a Manassas-area complex
            after neighbors measured up to 65 dB at night; the fix cut the
            noise about 10 dB, to ~50 dB, confirmed by both sides.
            <Cite id="pwt-amazon-retrofit" /> Complaints continue elsewhere —
            in 2026 a TV crew&rsquo;s phone app read 90 dB near a Loudoun
            facility neighbors compared to &ldquo;a helicopter hovering all
            day and night&rdquo; (phone apps aren&rsquo;t calibrated
            instruments, but the complaint record is real).
            <Cite id="nbc4-loudoun-noise" />
          </p>
          <p>
            <strong>Granbury, Texas (crypto mine — the worst case):</strong>{" "}
            a Bitcoin mine with ~60,000 air-cooled machines was built less
            than 100 yards from a mobile-home park.
            <Cite id="texas-tribune-granbury" /> A county constable recorded
            readings near 85 dB and issued 37 citations; a county-funded
            study later measured ~60 dB near the facility and 35–53 dB within
            a mile — the dispute over measurements is itself part of the
            story.
            <Cite id="texas-tribune-granbury" /> Residents reported
            migraines, vertigo, and tinnitus to TIME&rsquo;s investigators;
            <Cite id="time-granbury" /> a jury acquitted the site manager of
            criminal noise charges,
            <Cite id="decrypt-granbury-acquittal" /> and a civil nuisance
            lawsuit filed by Earthjustice is still pending.
            <Cite id="earthjustice-granbury" /> The operator built a
            2,000-foot sound wall and converted two-thirds of the machines to
            immersion cooling; residents say it helped little.
            <Cite id="texas-tribune-granbury" /> Similar crypto-mine noise
            fights played out in Murphy, NC (55–85 dB in a neighbor&rsquo;s
            yard)
            <Cite id="cnn-murphy-nc" /> and Adel, GA.
            <Cite id="ewg-adel" />
          </p>
          <p>
            <strong>Closest to home — two Eastern Kentucky cases:</strong>{" "}
            Pike County&rsquo;s own Blockware Bitcoin facility in Belfry — an
            air-cooled crypto mine, the loudest facility class — has operated
            since 2022 with <em>no noise complaint, lawsuit, or negative
            coverage anywhere in the public record</em> after four years; it
            occupies a former coal processing site rather than sitting
            against homes.
            <Cite id="gem-belfry" />
            <Cite id="blockware-belfry" /> In Wolfe County, by contrast,
            neighbors of a crypto facility that began operating in 2023 next
            to a substation reported relentless 24/7 fan noise and sleep
            disruption; a promised barrier wall became &ldquo;sound
            blankets&rdquo; residents called cosmetic, and the county
            declined to pass a noise ordinance.
            <Cite id="lex18-wolfe" /> Same state, same technology — the
            difference was siting and follow-through.
          </p>
          <p>
            <strong>Chandler, Arizona (the policy model):</strong> after
            years of hum complaints traced to chiller fans, the operator
            installed sound attenuation, and the city passed the
            nation&rsquo;s first data-center noise ordinance: a
            pre-construction baseline sound study, a requirement that
            operating noise not exceed that baseline, five years of annual
            verification studies, restricted generator-testing windows with
            neighbor notification, and an on-site community liaison.
            <Cite id="cdd-cyrusone-chandler" />
            <Cite id="chandler-ordinance" />
          </p>
        </Section>

        <Section title="What the standards say">
          <p>
            The World Health Organization recommends nighttime outdoor noise
            below <strong>40 dB</strong> (long-term average) to protect
            sleep, with 55 dB as an interim target,
            <Cite id="who-night-noise" /> and its 2018 guidelines recommend
            keeping average road-noise exposure below 53 dB.
            <Cite id="who-2018-noise" /> The EPA&rsquo;s longstanding
            guidance puts the protective outdoor day-night level at 55 dB.
            <Cite id="epa-levels-doc" /> Typical local ordinances allow
            55–65 dBA at a residential property line by day and 45–55 dBA at
            night.
            <Cite id="lsars-noise" />
          </p>
          <Callout tone="warning" title="Kentucky has no statewide noise limit">
            Kentucky law states a policy against noise that jeopardizes
            health and welfare but sets no enforceable statewide number —
            noise control is left to local governments.
            <Cite id="ky-noise-law" /> That means any numeric noise limit,
            measurement method (including low-frequency dBC limits), baseline
            study, or generator-testing window for the Pikeville project
            would have to be written into the city&rsquo;s Development
            Agreement or local ordinance. The Chandler ordinance
            <Cite id="chandler-ordinance" /> and JLARC&rsquo;s
            recommendation that localities require pre-approval sound
            modeling
            <Cite id="jlarc-2024" /> are the most-cited templates.
          </Callout>
        </Section>

        <Section title="What mitigation achieves">
          <ul>
            <li>
              Acoustic shrouds and louvers on cooling equipment: 5–15 dB
              reduction at the source.
              <Cite id="lsars-noise" />
            </li>
            <li>
              Generator silencers: 10–20 dB; full sound-attenuated enclosures
              up to 40 dB.
              <Cite id="lsars-noise" />
            </li>
            <li>
              Sound walls and earth berms: 10–20 dB, but only where they
              block the line of sight — low-frequency sound bends over
              barriers (see Granbury).
              <Cite id="lsars-noise" />
              <Cite id="texas-tribune-granbury" />
            </li>
            <li>
              Fan redesign at the source works best: Amazon&rsquo;s Manassas
              retrofit measurably delivered ~10 dB.
              <Cite id="pwt-amazon-retrofit" />
            </li>
            <li>
              Liquid/immersion cooling: converts a 70–85 dB air-cooled hall
              into a 40–55 dB one.
              <Cite id="lsars-noise" />
            </li>
            <li>
              Setbacks beat everything: moving equipment from 200 ft to
              1,600 ft from homes cuts ~18 dB by physics alone.
              <Cite id="lsars-noise" />
              <Cite id="engineering-toolbox-inverse" />
            </li>
          </ul>
        </Section>

        <NextPage href="/water" label="How much water do they use?" />
      </Container>
    </>
  );
}
