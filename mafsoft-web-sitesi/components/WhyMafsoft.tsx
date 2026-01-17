"use client";

import { Shield, Zap, Users, Headphones } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
    {
        icon: Zap,
        title: "Hızlı Geliştirme",
        description:
            "Modern teknolojiler ve agile metodoloji ile hızlı teslimat. Prototipten üretime kısa sürede geçiş.",
    },
    {
        icon: Shield,
        title: "Güvenlik Öncelikli",
        description:
            "OWASP standartları, veri şifreleme ve düzenli güvenlik denetimleri ile verileriniz güvende.",
    },
    {
        icon: Users,
        title: "Özelleştirilebilir",
        description:
            "Her işletme farklıdır. Çözümlerimiz tamamen ihtiyaçlarınıza göre özelleştirilebilir.",
    },
    {
        icon: Headphones,
        title: "Sürekli Destek",
        description:
            "Yayın sonrası bakım, güncellemeler ve 7/24 teknik destek ile yanınızdayız.",
    },
];

export function WhyMafsoft() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in-up");
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            const items = sectionRef.current.querySelectorAll(".feature-item");
            items.forEach((item, index) => {
                (item as HTMLElement).style.animationDelay = `${index * 150}ms`;
                observer.observe(item);
            });
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="hizmetler"
            ref={sectionRef}
            className="snap-section section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
        >
            {/* Animated background with blur */}
            <div className="absolute inset-0 backdrop-blur-sm">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Neden Mafsoft?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Yazılım projelerinizde güvenilir bir iş ortağı arıyorsanız, doğru yerdesiniz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="feature-item text-center space-y-3 opacity-0 group"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-lg font-semibold group-hover:text-secondary transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
