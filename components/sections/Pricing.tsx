"use client";

import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Başlangıç",
        price: "₺299",
        description: "Yeni açılan salonlar için ideal giriş seviyesi.",
        features: [
            "Tek kullanıcı",
            "Online randevu sayfası",
            "Sınırsız randevu kaydı",
            "Basit raporlama",
        ],
        cta: "Hemen Başla",
        highlight: false,
    },
    {
        name: "Pro",
        price: "₺599",
        description: "Büyüyen işletmeler için gelişmiş özellikler.",
        features: [
            "3 kullanıcı/personel",
            "WhatsApp hatırlatıcılar",
            "Gelişmiş CRM araçları",
            "Detaylı kazanç analizi",
            "Sms entegrasyonu",
        ],
        cta: "Ücretsiz Dene",
        highlight: true,
    },
    {
        name: "Kurumsal",
        price: "Teklif Alın",
        description: "Zincir salonlar ve büyük merkezler için.",
        features: [
            "Sınırsız kullanıcı",
            "Çoklu şube yönetimi",
            "Özel API erişimi",
            "7/24 öncelikli destek",
            "Özel eğitim ve kurulum",
        ],
        cta: "Bize Ulaşın",
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <Section id="fiyat" className="bg-bg">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    Her Ölçekte İşletme İçin Uygun Fiyatlar
                </h2>
                <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
                    Gizli maliyet yok, taahhüt yok. İhtiyacınıza uygun planı seçin.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {plans.map((plan) => (
                    <Card
                        key={plan.name}
                        className={`flex flex-col relative overflow-hidden bg-card-light border-border-muted/50 ${plan.highlight ? 'border-accent ring-1 ring-accent shadow-xl' : ''}`}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 right-0 bg-accent text-bg text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                                En Popüler
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                            <div className="mt-4 flex items-baseline gap-1">
                                <span className="text-4xl font-extrabold text-primary tracking-tight">{plan.price}</span>
                                {plan.price.startsWith('₺') && <span className="text-secondary/70 text-sm font-medium">/ay</span>}
                            </div>
                            <p className="mt-3 text-sm text-secondary/70 h-10 leading-relaxed">{plan.description}</p>
                        </div>

                        <ul className="flex-1 space-y-4 mb-8">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-sm text-secondary">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant={plan.highlight ? "accent" : "primary"}
                            className="w-full h-12"
                            onClick={() => {
                                if (typeof document !== 'undefined') {
                                    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            {plan.cta}
                        </Button>
                    </Card>
                ))}
            </div>

            <p className="mt-12 text-center text-xs text-secondary/50">
                * Fiyatlar sembolik placeholder verilerdir. Kesin bilgi için demo talep ediniz.
            </p>
        </Section>
    );
}
