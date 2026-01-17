import { ImageResponse } from "next/og";

// export const runtime = "edge";

export const alt = "Rezervara | Randevu Yönetim Sistemi";
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
                    background: "#F4F1E8",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "#041832",
                }}
            >
                <div style={{ fontWeight: "bold" }}>Rezervara</div>
                <div style={{ fontSize: 32, marginTop: 20, color: "#5C7495" }}>
                    Berber & Kuaför Randevu Yönetimi
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
