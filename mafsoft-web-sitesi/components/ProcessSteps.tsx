"use client";

import { Search, Palette, Code, Rocket, LifeBuoy } from "lucide-react";
import { useEffect, useRef } from "react";

const steps = [
    {
        icon: Search,
        title: "Keşif",
        description: "İhtiyaçlarınızı dinler, hedeflerinizi anlar ve teknik gereksinimleri belirleriz.",
    },
    {
        icon: Palette,
        title: "Tasarım",
        description: "Kullanıcı deneyimi odaklı arayüz ve sistem mimarisi tasarlarız.",
    },
    {
        icon: Code,
        title: "Geliştirme",
        description: "Agile metodoloji ile iteratif geliştirme, düzenli testler ve kod incelemeleri.",
    },
    {
        icon: Rocket,
        title: "Yayın",
        description: "Güvenli deployment, performans optimizasyonu ve canlıya alma süreçleri.",
    },
    {
        icon: LifeBuoy,
        title: "Destek",
        description: "Sürekli bakım, güncellemeler, izleme ve teknik destek hizmetleri.",
    },
];

export function ProcessSteps() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in-scale");
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            const stepElements = sectionRef.current.querySelectorAll(".process-step");
            stepElements.forEach((step, index) => {
                (step as HTMLElement).style.animationDelay = `${index * 100}ms`;
                observer.observe(step);
            });
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="calismalar" ref={sectionRef} className="snap-section section-padding bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
            {/* Background pattern with blur */}
            <div className="absolute inset-0 opacity-40 backdrop-blur-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.15),transparent_50%)]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Nasıl Çalışıyoruz?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Şeffaf, ölçülebilir ve işbirliğine dayalı bir süreç ile projelerinizi hayata geçiriyoruz.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line (hidden on mobile) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20 -translate-y-1/2 rounded-full" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
                        {steps.map((step, index) => (
                            <div key={step.title} className="relative process-step opacity-0">
                                {/* Timeline dot */}
                                <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-orange-600 border-4 border-background z-10 shadow-lg group-hover:scale-125 transition-transform duration-300" />

                                <div className="pt-8 text-center space-y-3 group">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                                        <step.icon className="h-10 w-10" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-sm font-semibold text-secondary">
                                            Adım {index + 1}
                                        </div>
                                        <h3 className="text-lg font-semibold group-hover:text-secondary transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
