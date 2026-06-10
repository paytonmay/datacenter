"use client";

import dynamic from "next/dynamic";

// Leaflet touches `window` at import time, so the map must only load in
// the browser.
const ParkMap = dynamic(() => import("./ParkMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] w-full items-center justify-center rounded-xl border border-slate-300 bg-slate-50 text-slate-500 sm:h-[520px]">
      Loading map…
    </div>
  ),
});

export function MapClient() {
  return <ParkMap />;
}
