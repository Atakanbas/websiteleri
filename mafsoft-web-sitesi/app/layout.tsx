import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
    title: {
        default: "Mafsoft - İşletmeniz için Yazılım, Otomasyon ve Entegrasyon Çözümleri",
        template: "%s | Mafsoft",
    },
    description:
        "Mafsoft, işletmelere yönelik randevu sistemleri, CRM/ERP yazılımları, WhatsApp bot entegrasyonları, elektronik çözümler ve sağlık teknolojileri sunar. Güvenilir, ölçeklenebilir ve özelleştirilebilir yazılım çözümleri.",
    keywords: [
        "yazılım geliştirme",
        "randevu sistemi",
        "CRM yazılımı",
        "ERP yazılımı",
        "WhatsApp bot",
        "elektronik çözümler",
        "sağlık teknolojileri",
        "B2B yazılım",
        "özel yazılım",
        "otomasyon",
    ],
    authors: [{ name: "Mafsoft" }],
    creator: "Mafsoft",
    publisher: "Mafsoft",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "tr_TR",
        url: "/",
        siteName: "Mafsoft",
        title: "Mafsoft - İşletmeniz için Yazılım, Otomasyon ve Entegrasyon Çözümleri",
        description:
            "Mafsoft, işletmelere yönelik randevu sistemleri, CRM/ERP yazılımları, WhatsApp bot entegrasyonları, elektronik çözümler ve sağlık teknolojileri sunar.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mafsoft - İşletmeniz için Yazılım, Otomasyon ve Entegrasyon Çözümleri",
        description:
            "Mafsoft, işletmelere yönelik randevu sistemleri, CRM/ERP yazılımları, WhatsApp bot entegrasyonları, elektronik çözümler ve sağlık teknolojileri sunar.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" className={inter.variable} suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
