"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/**
 * Interactive map of the Kentucky Enterprise Industrial Park with
 * distance rings keyed to the flat-ground sound-attenuation example
 * used on the Noise page, plus markers for the nearest residential
 * areas identified from state site listings and OpenStreetMap data.
 *
 * Ring center triangulated from the state datasheet pin printed on MOU
 * Exhibit A (37.42769, -82.54035), the KY CED/ZoomProspector listing
 * (37.4244, -82.5375), and the One East Kentucky marketing packet
 * coordinate (37.42478, -82.53821). Centered to cover both the
 * Build-Ready pad and existing tenants within ~0.2 mi.
 */

const RING_CENTER: [number, number] = [37.4248, -82.5375];

const RINGS: { feet: number; label: string; color: string }[] = [
  { feet: 200, label: "200 ft: ~60 dB*", color: "#dc2626" },
  { feet: 800, label: "800 ft: ~50 dB*", color: "#ea580c" },
  { feet: 2640, label: "½ mile: ~40 dB*", color: "#ca8a04" },
  {
    feet: 5280,
    label: "1 mile: generator tests may be faintly audible",
    color: "#f1f5f9", // light so it reads against dark satellite imagery
  },
];

const PLACES: {
  pos: [number, number];
  name: string;
  detail: string;
}[] = [
  {
    pos: [37.4418, -82.5424],
    name: "Island Creek valley homes",
    detail:
      "The subdivision nearest the park boundary, in the valley ~1,000–2,500 ft below the park's northwest rim; about 1–1.2 mi from the pad area.",
  },
  {
    pos: [37.432, -82.5535],
    name: "Pigeon",
    detail: "Hamlet in the Island Creek valley, ~1 mi WNW of the pad area.",
  },
  {
    pos: [37.4429, -82.5249],
    name: "Yorktown",
    detail:
      "Hamlet in the Marions Branch hollow, ~1.4 mi NE of the pad area, below the park's north rim.",
  },
  {
    pos: [37.4332, -82.511],
    name: "Fords Branch",
    detail: "Hamlet on US 23, ~1.6 mi ENE of the pad area.",
  },
  {
    pos: [37.47927, -82.51876],
    name: "Downtown Pikeville",
    detail: "About 3.9 miles from the park (≈4 road miles via US 23).",
  },
];

const FT_TO_M = 0.3048;

export default function ParkMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return;

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false, // don't hijack page scroll on mobile
    });
    leafletMap.current = map;

    // Satellite imagery basemap (Esri World Imagery, free for this use)
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          "Imagery &copy; Esri, Maxar, Earthstar Geographics, and the GIS User Community",
        maxZoom: 18,
      }
    ).addTo(map);

    // Place/road labels overlay so hamlets and highways stay identifiable
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 18 }
    ).addTo(map);

    // Park marker
    const marker = L.circleMarker(RING_CENTER, {
      radius: 9,
      color: "#ffffff",
      fillColor: "#f59e0b",
      fillOpacity: 1,
      weight: 2,
    }).addTo(map);
    marker.bindPopup(
      "<b>Kentucky Enterprise Industrial Park</b><br/>City-owned, on a reclaimed surface-mine plateau ~450–620 ft above the surrounding valleys.<br/>Ring center triangulated from state site listings (±500 ft)."
    );

    // Distance rings
    for (const ring of RINGS) {
      const circle = L.circle(RING_CENTER, {
        radius: ring.feet * FT_TO_M,
        color: ring.color,
        weight: 2,
        fill: false,
        dashArray: ring.feet >= 5280 ? "6 6" : undefined,
      }).addTo(map);
      circle.bindTooltip(ring.label, { sticky: true });
    }

    // Nearest residential areas
    for (const place of PLACES) {
      const m = L.circleMarker(place.pos, {
        radius: 6,
        color: "#ffffff",
        fillColor: "#3b82f6",
        fillOpacity: 0.9,
        weight: 2,
      }).addTo(map);
      m.bindPopup(`<b>${place.name}</b><br/>${place.detail}`);
      m.bindTooltip(place.name);
    }

    // Frame the view on the 1-mile ring
    map.fitBounds(L.latLng(RING_CENTER).toBounds(2 * 5280 * FT_TO_M), {
      padding: [10, 10],
    });

    return () => {
      map.remove();
      leafletMap.current = null;
    };
  }, []);

  return (
    <figure>
      <div
        ref={mapRef}
        className="z-0 h-[420px] w-full rounded-xl border border-slate-300 shadow-sm sm:h-[520px]"
        role="img"
        aria-label="Map of the Kentucky Enterprise Industrial Park near Pikeville with distance rings at 200 feet, 800 feet, half a mile, and one mile, and markers on the nearest residential areas"
      />
      <figcaption className="mt-2 text-sm leading-relaxed text-slate-500">
        *Ring labels show the flat-ground attenuation example from the Noise
        page (equipment producing 70 dB at 50 ft). This is an illustration,
        not a sound study: the park sits on an elevated plateau, terrain
        blocks and channels sound, and the real equipment location within the
        190-acre park, its design, and its mitigation will determine actual
        levels. Tap markers for details; drag to pan.
      </figcaption>
    </figure>
  );
}
