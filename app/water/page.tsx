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
  title: "Water: Cooling Systems Compared",
  description:
    "The different data center cooling systems and how much water each really uses: from millions of gallons a day to about as much as an office building. Plus what's in the discharge water, and how it's regulated.",
  alternates: { canonical: "/water" },
};

export default function WaterPage() {
  return (
    <>
      <PageHeader
        kicker="Cooling and water"
        title="How much water does a data center use? It depends on one choice."
        lede="Almost every watt of electricity entering a data center turns into heat that must be moved outside, around the clock. How the building sheds that heat (by evaporating water, or by fans and sealed liquid loops) determines whether it drinks millions of gallons a day or roughly what an office park does. For the same 30 MW facility, the difference between cooling designs is about fifty-fold."
      />
      <Container>
        <Section title="The cooling systems, plainly">
          <ul>
            <li>
              <strong>Open cooling towers (evaporative)</strong>: warm water
              is sprayed through outdoor towers; evaporation carries the heat
              away. Energy-efficient, but the thirstiest design: roughly 6.75
              million gallons per year <em>per megawatt</em>, per Uptime
              Institute.
              <Cite id="uptime-water" />{" "}Some water is also regularly
              discharged to the sewer as &ldquo;blowdown&rdquo; to flush out
              concentrated minerals.
              <Cite id="epa-watersense-towers" />
            </li>
            <li>
              <strong>Air-cooled (dry) systems</strong>: giant
              radiator-and-fan units reject heat straight to the air. Near
              zero water, but more electricity (evaporative assist can cut
              peak-summer cooling electricity 10–35%) and more fan noise.
              <Cite id="clearcomfort-tradeoff" />
            </li>
            <li>
              <strong>Direct evaporative (&ldquo;swamp cooler&rdquo;)</strong>:
              outside air is cooled through wetted media. Uses far less
              water than open towers; Meta&rsquo;s version runs about a tenth
              of traditional consumption.
              <Cite id="uptime-water" />
            </li>
            <li>
              <strong>Adiabatic / hybrid</strong>: dry coolers that mist
              water only on the hottest days. Low, seasonal water use.
              <Cite id="uptime-water" />
            </li>
            <li>
              <strong>Closed-loop, direct-to-chip liquid cooling</strong>:
              the new AI-era standard. A sealed water loop is filled once at
              construction and recirculated indefinitely; Microsoft says its
              zero-water-for-cooling design avoids more than 125 million
              liters (~33 million gallons) per facility per year, leaving
              only restroom-scale water use.
              <Cite id="microsoft-zero-water" />
            </li>
            <li>
              <strong>Immersion cooling</strong>: servers submerged in
              non-conductive fluid; essentially no on-site water. Still
              niche (crypto, HPC).
              <Cite id="uptime-water" />
            </li>
          </ul>
        </Section>

        <Section title="What that means for a 25–30 MW facility">
          <p>
            Using published water-efficiency figures (WUE: liters of water
            per kilowatt-hour of computing), here is the computed range for a
            30 MW facility running at full load. These are estimates from
            cited inputs, not the developer&rsquo;s numbers; the actual
            figure depends entirely on the cooling design the end user
            chooses.
          </p>
          <BarChart
            unit="gal/day"
            max={554000}
            rows={[
              {
                label: "Open cooling towers (Uptime benchmark)",
                value: 554000,
                display: "~554,000 gal/day",
              },
              {
                label: "Evaporative, industry-average WUE (1.8 L/kWh)",
                value: 342000,
                display: "~342,000 gal/day",
              },
              {
                label: "Modern efficient fleet (0.27–0.30 L/kWh, Microsoft FY25)",
                value: 55000,
                display: "~52,000–57,000 gal/day",
              },
              {
                label: "Meta-style direct evaporative (0.20 L/kWh)",
                value: 38000,
                display: "~38,000 gal/day",
              },
              {
                label: "Closed-loop / air-cooled (“zero water” design)",
                value: 12000,
                display: "~8,000–23,000 gal/day",
                highlight: true,
              },
            ]}
          />
          <p className="text-sm text-slate-500">
            Math: 30 MW × 8,760 hours = 262.8 million kWh/yr; multiply by the
            cited WUE and convert liters to gallons. WUE inputs: Uptime
            Institute,
            <Cite id="uptime-water" />{" "}industry average,
            <Cite id="uptime-water" />{" "}Microsoft,
            <Cite id="microsoft-zero-water" />{" "}Meta.
            <Cite id="meta-edi" />{" "}The closed-loop row uses Microsoft&rsquo;s
            real Wisconsin facility: 2.8M gallons/yr in Phase 1, ~8.4M
            gallons/yr at later phases.
            <Cite id="wpr-mount-pleasant" />
          </p>
          <p>
            For comparison: Google disclosed that its <em>average</em>{" "}data
            center campus used about 450,000 gallons per day in 2021
            <Cite id="google-cooling-blog" />, so a worst-case evaporative 30
            MW build would behave like a typical Google campus, while a
            closed-loop build would use about as much water as a large office
            park.
            <Cite id="wpr-mount-pleasant" />
          </p>
          <Callout tone="info" title="What Pikeville has said about water">
            The city operates its own municipal water system, drawing from
            the Levisa Fork, and says that based on the usage the developer
            has described, the system can comfortably meet the requirement,
            with the projections being independently verified, and with an
            already-approved withdrawal permit whose capacity is well above
            projected needs.
            <Cite id="pikeville-review-details" />{" "}The key questions worth
            asking as details emerge: <strong>which cooling design</strong>{" "}
            the end user will commit to in writing, what the{" "}
            <strong>peak summer-day</strong>{" "}demand is (academic modeling
            finds peak-day demand ~3.6× the average is what stresses small
            municipal systems),
            <Cite id="arxiv-municipal" />{" "}and how cooling-tower blowdown, if
            any, will be handled at the wastewater plant.
            <Cite id="epa-watersense-towers" />
          </Callout>
        </Section>

        <Section title="The trade-off, honestly">
          <p>
            Water and electricity trade against each other. Evaporating water
            is the cheapest way (in energy) to shed heat; going dry costs
            more electricity.
            <Cite id="clearcomfort-tradeoff" />{" "}Google has argued
            water-cooling cuts its energy use about 10% versus air cooling.
            <Cite id="google-cooling-blog" />{" "}There&rsquo;s also a hidden
            ledger: peer-reviewed research found that roughly{" "}
            <strong>75% of data centers&rsquo; total water footprint is
            indirect</strong>: consumed by the power plants generating their
            electricity, not at the site itself.
            <Cite id="siddik-2021" />{" "}A &ldquo;zero-water&rdquo; data center
            still drives water use somewhere on the grid. Nationally, data
            centers consumed about 66 billion liters (~17 billion gallons)
            directly in 2023, a figure the federal LBNL report projects could
            double or quadruple by 2028.
            <Cite id="lbnl-2024" />{" "}The industry trend helps here: AI chips
            run too hot for air alone, so new builds increasingly use sealed
            direct-to-chip loops, which happen to nearly eliminate on-site
            water use.
            <Cite id="microsoft-zero-water" />
          </p>
        </Section>

        <Section title="Can the waste heat be put to use? Yes, with honest caveats">
          <p>
            Nearly all electricity entering a data center leaves as heat, so a
            25–30 MW facility is also, in effect, a 24/7 heat source of
            roughly the same size. In Northern Europe, where cities have
            district heating networks, that heat genuinely warms homes:
            Meta&rsquo;s Odense, Denmark plant recovers heat for the city
            network (about 45 MW of heat production serving thousands of
            homes and a hospital),
            <Cite id="ramboll-odense" />{" "}Microsoft&rsquo;s data centers near
            Helsinki now supply up to 180 MW of district heat, on track to
            cover ~40% of heating demand for an area of 250,000 people,
            <Cite id="fortum-microsoft" />{" "}Google&rsquo;s Hamina facility
            will cover up to 80% of its town&rsquo;s heating demand free of
            charge,
            <Cite id="google-hamina-heat" />{" "}and Stockholm&rsquo;s utility
            literally <em>pays</em>{" "}data centers for their heat.
            <Cite id="stockholm-data-parks" />{" "}Germany now requires new data
            centers to reuse 10–20% of their energy as heat.
            <Cite id="germany-enefg" />
          </p>
          <p>
            The honest catch: data center exhaust is <em>low-grade</em>{" "}heat,
            roughly 100°F air from air-cooled halls (hotter, more usable
            50–60°C water from modern liquid-cooled designs),
            <Cite id="dck-heat-grade" />{" "}and using it requires heat pumps
            plus, crucially, <strong>a heat customer nearby</strong>. The
            Nordic projects work because city-wide hot-water networks already
            existed; almost no U.S. town has one,
            <Cite id="eesi-thermal" />{" "}and we found no documented example of
            a small-city American data center heating homes.
          </p>
          <p>
            What <em>is</em>{" "}precedented in the U.S. is single-neighbor
            reuse: Amazon&rsquo;s Seattle towers are warmed by ~5 MW of waste
            heat piped across the street from a data-dense building,
            <Cite id="amazon-denny" />{" "}Notre Dame&rsquo;s server racks heat
            South Bend&rsquo;s municipal greenhouse, saving the city about
            $70,000 a year,
            <Cite id="nd-greenhouse" />{" "}and in the UK a 28 kW micro data
            center cut a public swimming pool&rsquo;s gas bill 62%.
            <Cite id="deep-green-pool" />{" "}A regional policy group, ReImagine
            Appalachia, argues for exactly this model here: using data
            center heat for schools, public buildings, or greenhouses on
            former mine land.
            <Cite id="reimagine-appalachia" />{" "}For Pikeville, heating the
            town is not realistic; heating an adjacent greenhouse complex,
            pool, or campus building is, <em>if</em>{" "}heat-recovery plumbing
            is designed in from day one, which is a reasonable thing to raise
            while a Development Agreement is still being negotiated.
          </p>
        </Section>

        <Section title="Where water became a problem, and where it didn't">
          <ul>
            <li>
              <strong>The Dalles, Oregon:</strong>{" "}Google&rsquo;s data
              centers used 355.1 million gallons in 2021 (29% of the entire
              city&rsquo;s water), a fact disclosed only after a 13-month
              public-records fight with the local newspaper.
              <Cite id="register-dalles" />{" "}Google also funded $28.5 million
              of city water infrastructure.
              <Cite id="opb-dalles-deal" />{" "}Lesson: the problem wasn&rsquo;t
              only the volume; it was the secrecy.
            </li>
            <li>
              <strong>Newton County, Georgia:</strong>{" "}residents 1,000 feet
              from Meta&rsquo;s construction site reported wells running dry
              and sediment; Meta&rsquo;s commissioned study found no
              connection, the county did no pre-construction well survey, and
              causation remains unresolved.
              <Cite id="sfx-newton-wells" />
            </li>
            <li>
              <strong>Mesa & Goodyear, Arizona:</strong>{" "}desert cities
              negotiated tiered water caps (1 up to 4 million gallons/day in
              Mesa)
              <Cite id="nbc-mesa" />{" "}and in Goodyear, Microsoft agreed to
              switch its design to air cooling and contributed $36M toward a
              wastewater plant.
              <Cite id="aztech-goodyear" />
            </li>
            <li>
              <strong>Memphis:</strong>{" "}xAI pledged an $80M wastewater
              recycling plant (13 million gallons/day design) to stop drawing
              on the drinking-water aquifer. Groundbreaking happened, though
              the project was later paused, a reminder that pledges need
              enforceable timelines.
              <Cite id="wreg-xai-water" />
            </li>
            <li>
              <strong>Mount Pleasant, Wisconsin (the quiet success):</strong>{" "}
              Microsoft&rsquo;s closed-loop campus uses 2.8M gallons a year
              in Phase 1, less than many ordinary industrial customers on
              the same utility.
              <Cite id="wpr-mount-pleasant" />
            </li>
            <li>
              <strong>Loudoun County, Virginia:</strong>{" "}the water utility
              delivers reclaimed (treated wastewater) through purple pipe for
              data center cooling (over 750 million gallons in 2025),
              sparing the same volume of drinking water.
              <Cite id="loudoun-water-reclaimed" />{" "}Google&rsquo;s Georgia
              site similarly cools with recycled municipal effluent.
              <Cite id="dcd-douglas-county" />
            </li>
          </ul>
        </Section>

        <Section title="What about contaminants? What comes back out, and how it's policed">
          <p>
            Evaporative cooling doesn&rsquo;t just take water in; it sends
            some back. Because evaporation leaves minerals behind, the
            recirculating water steadily concentrates dissolved solids
            (calcium, magnesium, chloride, silica), and a portion is
            periodically flushed out as blowdown. To keep the towers
            themselves healthy, water-treatment vendors also dose the loop
            with chemicals (biocides to control bacteria and algae, plus
            scale and corrosion inhibitors), and EPA&rsquo;s own guidance
            notes that discharged water must still meet water quality
            standards.
            <Cite id="epa-watersense-towers" />{" "}A 2026 UC Berkeley law school
            report states it directly: data centers can affect water resources
            &ldquo;by discharging wastewater that contains concentrated
            minerals, chemical additives, and other pollutants into surface
            water or groundwater supplies.&rdquo;
            <Cite id="clee-berkeley-water" />{" "}Closed-loop designs largely
            sidestep the issue: a sealed loop is filled once, so there is no
            routine blowdown to dispose of.
            <Cite id="microsoft-zero-water" />
          </p>
          <p>
            Two legal paths govern that discharge. If blowdown goes to the
            city sewer (the common case), the wastewater utility regulates
            it under the federal pretreatment program, which exists precisely
            to keep industrial discharges from overwhelming a treatment plant
            or passing through it untreated.
            <Cite id="epa-pretreatment" />{" "}If a facility discharges directly
            to a creek or river instead, it needs its own Clean Water Act
            (NPDES) permit, with numeric limits on what comes out,
            temperature and pH included, plus monitoring and public
            reporting.
            <Cite id="epa-npdes-basics" />
          </p>
          <p>The track record, with names attached:</p>
          <ul>
            <li>
              <strong>Quincy, Washington (the clearest documented case):</strong>{" "}
              mineral-rich cooling discharge from data centers strained the
              city&rsquo;s wastewater plant, which was never designed for it,
              and pushed dissolved-solids levels past the state&rsquo;s 500
              mg/L guideline for water recharged into the aquifer. The fix:
              Microsoft paid the entire $31 million cost of a dedicated
              water-reuse utility (operational in 2021, run by the city
              under a 30-year agreement) that now treats and recycles about
              138 million gallons of cooling water a year instead of
              discharging it.
              <Cite id="epa-quincy-reuse" />{" "}The problem was real and the
              problem was fixable; the question was who pays.
            </li>
            <li>
              <strong>The Dalles, Oregon (the disclosure problem):</strong>{" "}
              the Columbia River Inter-Tribal Fish Commission told the Oregon
              governor&rsquo;s data center task force in 2026 that discharges
              can add thermal stress to a river that has already lost nearly
              80% of its salmon runs, and could contain chemicals, including
              PFAS and biocides, many of which aren&rsquo;t disclosed, with
              &ldquo;virtually no emergency planning&rdquo; for spills.
              <Cite id="sierra-dalles-critfc" />{" "}These are concerns about
              what <em>could</em>{" "}be in the water, raised because nobody
              outside the companies knows the chemical list.
            </li>
            <li>
              <strong>Georgia (the contested case):</strong>{" "}the Newton
              County well complaints described above escalated: after
              residents&rsquo; jars of discolored water reached a May 2026
              congressional hearing, EPA directed its regional office to
              gather information from Georgia regulators, while stressing
              this is fact-finding, not a formal investigation. Meta points
              to the groundwater study it commissioned, which found no link
              to its construction, and notes its operating water comes from
              the county utility.
              <Cite id="cbs-atlanta-epa-water" />{" "}The dispute is hard to
              resolve partly because nobody tested the wells before
              construction began.
              <Cite id="sfx-newton-wells" />
            </li>
          </ul>
          <p>
            The other contamination pathway has nothing to do with cooling:{" "}
            <strong>fuel</strong>. Backup generators mean diesel stored on
            site, and EPA calls leaking underground storage tanks &ldquo;a
            common source of groundwater contamination&rdquo;; petroleum
            contains benzene, a known carcinogen.
            <Cite id="epa-ust" />{" "}Federal rules require facilities storing
            oil to maintain spill-prevention (SPCC) plans designed to keep it
            out of waterways.
            <Cite id="epa-spcc" />{" "}A 2026 fact-check that asked squarely
            &ldquo;can data centers contaminate wells and other water
            sources?&rdquo; answered yes, through diesel leaks or improper
            wastewater discharge, but <em>if</em>{" "}containment fails. We
            found no documented U.S. case of data center cooling discharge
            contaminating drinking water; the documented problems have been
            dissolved-solids loads on small treatment plants (Quincy),
            construction-era sediment disputes (Georgia), and secrecy about
            what&rsquo;s in the water (The Dalles). The risk is a management
            and enforcement question, not an inevitability.
            <Cite id="gigafact-wells" />
          </p>
          <Callout tone="info" title="What this means for Pikeville">
            Four things worth asking for in writing while the Development
            Agreement is still being negotiated: <strong>(1)</strong>{" "}the
            cooling design: a sealed closed loop produces little or no
            routine discharge, while open towers send blowdown to the
            city&rsquo;s own wastewater plant;
            <Cite id="epa-watersense-towers" /> <strong>(2)</strong>{" "}the
            water-treatment chemical list and discharge volumes, disclosed up
            front (The Dalles shows that secrecy, not chemistry, is what
            breeds distrust);
            <Cite id="sierra-dalles-critfc" /> <strong>(3)</strong>{" "}the fuel
            spill-prevention (SPCC) plan and secondary containment for diesel
            storage;
            <Cite id="epa-spcc" />{" "}and <strong>(4)</strong>{" "}baseline water
            testing of nearby wells and the Levisa Fork before construction;
            Georgia&rsquo;s dispute remains unresolvable largely because no
            one has &ldquo;before&rdquo; data.
            <Cite id="sfx-newton-wells" />
          </Callout>
        </Section>

        <NextPage href="/power" label="Power use & what it means for your electric bill" />
      </Container>
    </>
  );
}
