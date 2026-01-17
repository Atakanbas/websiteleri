"use client";

import Link from "next/link";
import {
    Calendar,
    Building2,
    MessageSquare,
    Cpu,
    Heart,
    Briefcase,
    ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllSectors, type SectorId } from "@/lib/accents";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const sectorIcons: Record<SectorId, React.ElementType> = {
    health: Heart,
    crm: Building2,
    whatsapp: MessageSquare,
    electronics: Cpu,
    booking: Calendar,
    b2b: Briefcase,
};

export function SectorCards() {
    const sectors = getAllSectors();
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
            const cards = sectionRef.current.querySelectorAll(".sector-card");
            cards.forEach((card, index) => {
                (card as HTMLElement).style.animationDelay = `${index * 100}ms`;
                observer.observe(card);
            });
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="cozumler" ref={sectionRef} className="snap-section section-padding bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
            {/* Background decoration with blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 opacity-60 backdrop-blur-sm" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                        Ne Yapıyoruz?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        İşletmenizin ihtiyaçlarına özel, altı farklı sektörde uçtan uca yazılım çözümleri
                        sunuyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sectors.map((sector) => {
                        const Icon = sectorIcons[sector.id];
                        return (
                            <Link
                                key={sector.id}
                                href="#iletisim"
                                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg sector-card opacity-0"
                            >
                                <Card
                                    data-accent={sector.id}
                                    className={cn(
                                        "h-full transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 accent-border bg-gradient-to-br from-white via-gray-50/50 to-white backdrop-blur-sm",
                                        "border-l-4 relative overflow-hidden"
                                    )}
                                >
                                    {/* Hover shimmer effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
                                    </div>

                                    <CardHeader className="relative z-10">
                                        <div className="flex items-start justify-between">
                                            <div
                                                className="p-3 rounded-lg accent-bg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                                                style={{
                                                    backgroundColor: `hsl(var(--accent-weak))`,
                                                }}
                                            >
                                                <Icon
                                                    className="h-6 w-6 transition-all duration-300"
                                                    style={{
                                                        color: `hsl(var(--accent))`,
                                                    }}
                                                />
                                            </div>
                                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-accent transition-all duration-300" />
                                        </div>
                                        <CardTitle className="mt-4 group-hover:text-accent transition-colors duration-300 text-slate-900">
                                            {sector.name}
                                        </CardTitle>
                                        <CardDescription className="text-slate-700">{sector.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <span
                                            className="text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                                            style={{
                                                color: `hsl(var(--accent))`,
                                            }}
                                        >
                                            Detayları İncele
                                            <ArrowRight className="h-3 w-3" />
                                        </span>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div >
        </section >
    );
}
