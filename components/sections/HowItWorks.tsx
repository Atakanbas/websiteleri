"use client";

import Section from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";

const steps = [
    {
        title: "Hızlıca Kaydolun",
        description: "Saniyeler içinde hesabınızı oluşturun ve işletme bilgilerinizi girin.",
    },
    {
        title: "Hizmetlerinizi Tanımlayın",
        description: "Fiyat Listenizi, çalışanlarınızı ve çalışma saatlerinizi ekleyin.",
    },
    {
        title: "Tebrikler, Hazırsınız!",
        description: "Linkinizi paylaşın ve dijital randevu almaya hemen başlayın.",
    },
];

export default function HowItWorks() {
    return (
        <Section id="nasil-calisir" className="bg-card-light">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-primary md:text-5xl">
                    Sadece 3 Adımda Dijitale Geçin
                </h2>
                <p className="mt-4 text-lg text-secondary/80 max-w-2xl mx-auto">
                    Kurulum gerektirmeyen, bulut tabanlı sistemimizle dakikalar içinde hazır olun.
                </p>
            </div>

            <div className="relative">
                {/* Connection line for desktop */}
                <div className="absolute top-24 left-0 w-full h-0.5 bg-accent/20 hidden lg:block -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={step.title} className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full bg-primary text-bg flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-bg shadow-xl transition-transform group-hover:scale-110">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">
                                {step.title}
                            </h3>
                            <p className="text-secondary/70 leading-relaxed text-sm md:text-base px-4">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
