"use client";

import Section from "@/components/ui/Section";
import { Scissors, Sparkles, UserCheck } from "lucide-react";

const targets = [
    {
        title: "Berberler",
        icon: UserCheck,
        description: "Klasik berber salonları için pratik takvim ve müşteri yönetimi.",
    },
    {
        title: "Kuaförler",
        icon: Scissors,
        description: "Bayan kuaförleri için detaylı hizmet ve personel planlama.",
    },
    {
        title: "Güzellik Merkezleri",
        icon: Sparkles,
        description: "Lazer, cilt bakımı ve daha fazlası için kapsamlı CRM ve raporlama.",
    },
];

export default function TargetAudience() {
    return (
        <Section className="bg-bg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-primary md:text-5xl leading-tight">
                        Kimler İçin En İdeal Çözümüz?
                    </h2>
                    <p className="mt-6 text-lg text-secondary/80 leading-relaxed">
                        Sektör bağımsız randevu ile çalışan tüm hizmet noktaları için
                        özel olarak geliştirilmiş modüllere sahibiz.
                    </p>
                    <div className="mt-10 space-y-6 md:space-y-8">
                        {targets.map((target) => (
                            <div key={target.title} className="flex gap-5">
                                <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-accent shadow-sm">
                                    <target.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary">{target.title}</h4>
                                    <p className="mt-1 text-secondary/70 text-sm leading-relaxed">{target.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative group">
                    <div className="aspect-video rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-center overflow-hidden shadow-2xl">
                        <div className="text-primary/20 text-sm font-medium uppercase tracking-widest italic">Ürün Ekran Görüntüsü</div>
                        {/* Mock visual element */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent mix-blend-overlay" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent opacity-10 blur-3xl -z-10" />
                </div>
            </div>
        </Section>
    );
}
