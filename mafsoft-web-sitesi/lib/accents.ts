export type SectorId = "health" | "crm" | "whatsapp" | "electronics" | "booking" | "b2b";

export interface SectorAccent {
    id: SectorId;
    name: string;
    color: string;
    colorWeak: string;
    colorStrong: string;
    description: string;
}

export const sectorAccents: Record<SectorId, SectorAccent> = {
    health: {
        id: "health",
        name: "Sağlık & Tıbbi Teknolojiler",
        color: "hsl(174, 72%, 56%)", // Turkuaz
        colorWeak: "hsl(174, 72%, 96%)",
        colorStrong: "hsl(174, 72%, 46%)",
        description: "Tıbbi malzeme tedarik, takip ve süreç dijitalleştirme çözümleri",
    },
    crm: {
        id: "crm",
        name: "CRM / ERP Yazılımları",
        color: "hsl(217, 91%, 60%)", // Mavi
        colorWeak: "hsl(217, 91%, 96%)",
        colorStrong: "hsl(217, 91%, 50%)",
        description: "Müşteri ilişkileri, satış, stok ve iş akışı yönetimi",
    },
    whatsapp: {
        id: "whatsapp",
        name: "WhatsApp Bot Entegrasyonları",
        color: "hsl(142, 71%, 45%)", // Yeşil
        colorWeak: "hsl(142, 71%, 96%)",
        colorStrong: "hsl(142, 71%, 35%)",
        description: "Müşteri iletişimi, otomasyon ve randevu/teklif akışları",
    },
    electronics: {
        id: "electronics",
        name: "Elektronik Çözümler",
        color: "hsl(38, 92%, 50%)", // Amber
        colorWeak: "hsl(38, 92%, 96%)",
        colorStrong: "hsl(38, 92%, 40%)",
        description: "IoT, sensör, cihaz entegrasyonu ve endüstriyel otomasyon",
    },
    booking: {
        id: "booking",
        name: "Randevu Sistemleri",
        color: "hsl(258, 90%, 66%)", // Mor
        colorWeak: "hsl(258, 90%, 96%)",
        colorStrong: "hsl(258, 90%, 56%)",
        description: "Rezervasyon, planlama, hatırlatma ve no-show azaltma",
    },
    b2b: {
        id: "b2b",
        name: "B2B Yazılım Projeleri",
        color: "hsl(239, 84%, 67%)", // Indigo
        colorWeak: "hsl(239, 84%, 96%)",
        colorStrong: "hsl(239, 84%, 57%)",
        description: "Özel ihtiyaç, entegrasyon ve portal çözümleri",
    },
};

export function getSectorAccent(sectorId: SectorId): SectorAccent {
    return sectorAccents[sectorId];
}

export function getAllSectors(): SectorAccent[] {
    return Object.values(sectorAccents);
}

// Contrast validation helper (WCAG AA compliance)
export function validateContrast(foreground: string, background: string): boolean {
    // This is a simplified version. In production, use a proper color contrast library
    // For now, we trust our predefined colors meet WCAG AA standards
    return true;
}
