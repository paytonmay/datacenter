import type { Metadata } from "next";
import { Cite } from "@/components/Cite";
import { MapClient } from "@/components/MapClient";
import {
  Callout,
  Container,
  NextPage,
  PageHeader,
  Section,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Map: The Site & Its Neighbors",
  description:
    "An interactive map of the Kentucky Enterprise Industrial Park with distance rings and the nearest residential areas — plus what the site's terrain means for noise.",
  alternates: { canonical: "/map" },
};

export default function MapPage() {
  return (
    <>
      <PageHeader
        kicker="The site in context"
        title="How far is the park from the nearest homes?"
        lede="Distance is the single most reliable protection against data center noise — so here's the actual geography. The rings show how far sound carries over flat ground; the blue markers are the nearest residential areas, identified from state site listings and map data."
      />
      <Container>
        <div className="pt-8">
          <MapClient />
        </div>

        <Section title="What the map shows">
          <ul>
            <li>
              The Kentucky Enterprise Industrial Park sits on a{" "}
              <strong>reclaimed surface-mine plateau south of Pikeville</strong>,
              between the US 23 corridor and the Island Creek valley. The
              park was built on former mine land starting with a $5 million
              Abandoned Mine Lands grant in 2016.
              <Cite id="lanereport-aml" />
              <Cite id="kyced-listing" />
            </li>
            <li>
              The likely building site is the state-certified Build-Ready pad
              (Lot A-3): a 100,000 sq ft graded pad on 9.32 buildable acres,
              completed with $4 million in city and state funding.
              <Cite id="newsexpress-buildready" />{" "}The MOU identifies tracts
              A-3, A-4, A-5, A-6, and C-1 — all on the same bench.
              <Cite id="pikeville-mou" />
            </li>
            <li>
              <strong>The nearest homes are not on the plateau.</strong>{" "}The
              closest residential area — the Island Creek valley subdivision
              northwest of the park — sits in the valley roughly 1,000–2,500
              feet from the park boundary, and about a mile from the pad
              area. The hamlets of Pigeon, Yorktown, and Fords Branch lie
              roughly 1 to 1.6 miles away. Downtown Pikeville is about 3.9
              miles.
              <Cite id="oneeastky-packet" />
            </li>
            <li>
              <strong>No schools or hospitals are within a mile</strong>{" "}of
              the park; Pikeville Medical Center and the city schools are 3+
              miles away.
              <Cite id="oneeastky-packet" />
            </li>
          </ul>
        </Section>

        <Section title="What the terrain means for noise — honestly, both ways">
          <p>
            The park&rsquo;s elevation is its most unusual feature: the bench
            sits at roughly 1,250–1,325 feet, while the surrounding valley
            floors — where the homes are — sit 450–620 feet{" "}
            <em>below</em>{" "}it.
            <Cite id="oneeastky-packet" />{" "}That cuts both ways:
          </p>
          <ul>
            <li>
              <strong>In the site&rsquo;s favor:</strong>{" "}homes are below the
              plateau rim rather than line-of-sight with equipment, and the
              rim itself can act as a sound barrier — the geometry that
              setback-and-barrier mitigation tries to create artificially.
              <Cite id="lsars-noise" />{" "}Compare that with the worst documented
              cases, where equipment sat at the same grade as homes 100 yards
              away.
              <Cite id="texas-tribune-granbury" />
            </li>
            <li>
              <strong>Worth watching:</strong>{" "}nighttime temperature
              inversions — common in mountain valleys — can carry
              low-frequency sound farther than flat-ground math predicts, and
              sound that clears a rim can travel down a hollow.
              <Cite id="lsars-noise" />{" "}The rings on this map assume flat,
              open ground; real propagation here will differ in both
              directions.
            </li>
          </ul>
          <Callout tone="info" title="The question this map can't answer">
            Where exactly within the 190 acres the cooling equipment and
            generators would sit, what design they use, and what numeric
            noise limit applies — those determine what anyone actually hears,
            and they belong in a pre-approval sound study and the Development
            Agreement. Virginia&rsquo;s state auditors recommend exactly
            that: require sound modeling <em>before</em>{" "}approval, not
            complaints after.
            <Cite id="jlarc-2024" />
          </Callout>
        </Section>

        <Section title="About the map's accuracy">
          <p>
            The ring center is triangulated from three official listings of
            the park (the state datasheet pin printed on the MOU&rsquo;s
            Exhibit A map, the Kentucky CED property listing, and the One
            East Kentucky marketing packet), which agree within a few hundred
            feet.
            <Cite id="pikeville-mou" />
            <Cite id="kyced-listing" />
            <Cite id="oneeastky-packet" />{" "}No surveyed coordinate for the
            building pad itself has been published, so treat all distances as
            approximate (±500 ft). Residential locations come from
            OpenStreetMap place data and the aerial imagery in the
            park&rsquo;s marketing packet.
            <Cite id="oneeastky-packet" />
          </p>
        </Section>

        <NextPage href="/noise" label="The full noise page — decibels, cases, standards" />
      </Container>
    </>
  );
}
