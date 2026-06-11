import { ImageResponse } from "next/og";

export const alt =
  "Data Centers, Explained — a factual guide for Pikeville & Eastern Kentucky";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f59e0b",
              borderRadius: "10px",
              padding: "8px 18px",
              fontSize: "40px",
              fontWeight: 800,
              color: "white",
            }}
          >
            DC
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#fbbf24",
            }}
          >
            An independent, fully-sourced guide
          </div>
        </div>
        <div
          style={{
            marginTop: "40px",
            fontSize: "76px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-2px",
          }}
        >
          Data centers, explained.
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: "36px",
            color: "#cbd5e1",
            lineHeight: 1.4,
          }}
        >
          For Pikeville and Eastern Kentucky — every claim numbered and linked
          to its source.
        </div>
        <div
          style={{
            marginTop: "48px",
            fontSize: "26px",
            color: "#94a3b8",
          }}
        >
          pikevilledatacenter.com
        </div>
      </div>
    ),
    { ...size }
  );
}
