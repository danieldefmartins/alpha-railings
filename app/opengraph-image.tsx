import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alpha Railings - Premium Glass, Cable & Iron Railings";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Top border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#00d4ff",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "16px",
            background: "#00d4ff",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#0a0a0a",
            }}
          >
            A
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Alpha Railings
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "#00d4ff",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Premium Glass, Cable & Iron Railings
        </div>

        {/* States */}
        <div
          style={{
            fontSize: "18px",
            fontWeight: 500,
            color: "#888888",
            textAlign: "center",
            letterSpacing: "4px",
          }}
        >
          MA | NH | ME | RI | FL
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#00d4ff",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
