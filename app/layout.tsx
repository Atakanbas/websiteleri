import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import { generateOrganizationSchema, generateSoftwareApplicationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Rezervara | Berber, Kuaför ve Güzellik Salonu Randevu Yönetim Sistemi",
  description: "İşletmenizi dijitalleştirin. Online randevu, takvim yönetimi ve müşteri kayıtları ile zaman kazanın. Güvenilir ve hızlı çözüm.",
  metadataBase: new URL("https://rezervara.com"),
};

import { ParticleCursor } from "@/components/ui/ParticleCursor";
import { DynamicBackground } from "@/components/ui/DynamicBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSoftwareApplicationSchema()) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-primary overflow-x-hidden`}>
        <ParticleCursor />
        <DynamicBackground />
        {children}
      </body>
    </html>
  );
}
