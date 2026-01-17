"use client";

import Section from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const metrics = [
    { label: "Aktif Kullanıcı", value: "500+", trend: "+12%" },
    { label: "Aylık Randevu", value: "25.000+", trend: "+18%" },
    { label: "Müşteri Memnuniyeti", value: "%99.8", trend: "Sabit" },
];

export default function SocialProof() {
    return (
        <div className="bg-white/50 py-12 border-y border-border-muted/50">
            <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="max-w-sm text-center md:text-left">
                        <h3 className="text-2xl font-bold text-primary">
                            Rakamlarla Rezervara
                        </h3>
                        <p className="mt-2 text-sm text-secondary">
                            Türkiye'nin dört bir yanındaki salonların güvenini kazandık.
                        </p>
                        <div className="mt-2 inline-block rounded bg-primary/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary/70">
                            * Örnek Metrikler
                        </div>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:w-auto md:gap-8">
                        {metrics.map((metric) => (
                            <div key={metric.label} className="text-center md:text-left">
                                <div className="text-3xl font-bold text-primary">{metric.value}</div>
                                <div className="mt-1 text-sm font-medium text-secondary/70">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
