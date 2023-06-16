import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt = "og image";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "#29711a",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`public/app-icon.png`} alt="" width={100} height={100} />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
