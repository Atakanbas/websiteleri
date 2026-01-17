"use client";

import Section from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import {
    Calendar,
    Users,
    Bell,
    Smartphone,
    BarChart3,
    UserCheck
} from "lucide-react";

const features = [
    {
        title: "Online Randevu",
        description: "Müşterileriniz 7/24 size ulaşsın, telefon trafiğinden kurtulun.",
        icon: Smartphone,
    },
    {
        title: "Takvim Yönetimi",
        description: "Sürükle-bırak takvim ile tüm randevuları anlık olarak takip edin.",
        icon: Calendar,
    },
    {
        title: "Müşteri Kayıtları (CRM)",
        description: "Müşterilerinizin tercihlerini ve işlem geçmişini tek bir yerden yönetin.",
        icon: Users,
    },
    {
        title: "Otomatik Hatırlatıcılar",
        description: "WhatsApp ve SMS bildirimleri ile randevu kaçırmayı engelleyin.",
        icon: Bell,
    },
    {
        title: "Personel Planlama",
        description: "Çalışanlarınızın mesai saatlerini ve koltuk kapasitesini optimize edin.",
        icon: UserCheck,
    },
    {
        title: "Detaylı Raporlama",
        description: "Günlük, haftalık ve aylık kazanç analizleri ile işletmenizi büyütün.",
        icon: BarChart3,
    },
];

export default function Features() {
    return (
        <Section id="ozellikler" className="bg-primary text-bg relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 blur-[150px] -z-10" />

            <div className="text-center mb-16 relative">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                    İşletmenizi Kolaylaştıran Özellikler
                </h2>
                <p className="mt-4 text-lg text-bg/70 max-w-2xl mx-auto">
                    Rezervara, bir kuaför salonunun ihtiyacı olan tüm araçları tek bir platformda sunar.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {features.map((feature) => (
                    <Card key={feature.title} hover className="flex flex-col gap-4 bg-white/5 border-white/10 backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-bg/60 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
