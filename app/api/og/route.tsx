import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "brutalistldn";
  const subtitle = searchParams.get("subtitle") || "Index of Brutalist London";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 48,
          background: "#0E0E0E",
          color: "#E8E6E3",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700 }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 8, height: 8, background: "#E31B23" }} />
          <div style={{ fontSize: 28 }}>{subtitle}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}