"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

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

        if (heroRef.current) {
            const elements = heroRef.current.querySelectorAll(".fade-in-element");
            elements.forEach((el) => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="snap-section relative section-padding overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Animated background pattern with blur */}
            <div className="absolute inset-0 opacity-40 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-secondary/10 shimmer" />
                <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse [animation-delay:1.5s]" />
            </div>

            <div className="container-custom relative z-10" ref={heroRef}>
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Main Headline */}
                    <h1 className="fade-in-element text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground opacity-0">
                        Mafsoft ile işletmeniz için{" "}
                        <span className="text-secondary bg-gradient-to-r from-secondary to-orange-600 bg-clip-text text-transparent">
                            yazılım
                        </span>
                        ,{" "}
                        <span className="text-secondary bg-gradient-to-r from-secondary to-orange-600 bg-clip-text text-transparent">
                            otomasyon
                        </span>{" "}
                        ve{" "}
                        <span className="text-secondary bg-gradient-to-r from-secondary to-orange-600 bg-clip-text text-transparent">
                            entegrasyon
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="fade-in-element text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 [animation-delay:200ms]">
                        Randevu sistemlerinden CRM/ERP çözümlerine, WhatsApp bot entegrasyonlarından
                        elektronik ve sağlık teknolojilerine kadar işletmenizin dijital dönüşümünü
                        hızlandırıyoruz. Güvenilir, ölçeklenebilir ve özelleştirilebilir yazılım çözümleri.
                    </p>

                    {/* CTAs */}
                    <div className="fade-in-element flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 [animation-delay:400ms]">
                        <Button
                            asChild
                            size="lg"
                            variant="secondary"
                            className="min-w-[200px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <Link href="/iletisim">
                                Teklif Al
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="min-w-[200px] hover:scale-105 transition-all duration-300"
                        >
                            <Link href="/cozumler">Çözümleri Keşfet</Link>
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="fade-in-element pt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto opacity-0 [animation-delay:600ms]">
                        <div className="text-center group">
                            <div className="text-3xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">
                                6
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">Sektör Çözümü</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-3xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">
                                100%
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">Özelleştirilebilir</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-3xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">
                                7/24
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">Destek</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
