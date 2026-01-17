"use client";

import { Button } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { ArrowRight, PlayCircle } from "lucide-react";
import { AnalogClock } from "@/components/ui/AnalogClock";

export default function Hero() {
    return (
        <Section className="relative overflow-hidden pt-12 pb-16 lg:pt-28 lg:pb-32">
            {/* Background decoration */}
            <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-gradient-to-b from-accent/10 to-transparent blur-[120px] opacity-70" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
                <div className="text-left flex-1">
                    <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-bold text-accent mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <span>Randevu Yönetiminde Yeni Nesil Dönem</span>
                    </div>

                    <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-primary md:text-7xl lg:text-8xl leading-[1.1]">
                        İşletmeniz İçin <span className="text-secondary italic">Zamanı</span> <br /> Daha Verimli Yönetin
                    </h1>

                    <p className="mt-8 max-w-xl text-lg text-secondary/80 md:text-xl leading-relaxed">
                        Berber, kuaför ve güzellik salonları için tasarlanmış profesyonel randevu sistemi.
                        Defterleri kapatın, dijitalin gücüyle işletmenizi büyütün.
                    </p>

                    <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                        <Button size="lg" className="group h-16 px-8 text-lg" onClick={() => {
                            if (typeof document !== 'undefined') {
                                document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>
                            Demo İste
                            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="ghost" size="lg" className="h-16 px-8 text-lg font-semibold text-primary" onClick={() => {
                            if (typeof document !== 'undefined') {
                                document.getElementById("nasil-calisir")?.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>
                            <PlayCircle className="mr-2 h-6 w-6 text-secondary" />
                            Nasıl Çalışır?
                        </Button>
                    </div>

                    <p className="mt-6 text-sm text-secondary/60">
                        Kredi kartı gerekmez &bull; 14 gün ücretsiz deneme
                    </p>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000 relative">
                    {/* Unique Glow for the Clock */}
                    <div className="absolute inset-0 bg-accent/20 blur-[150px] rounded-full scale-75 -z-10" />
                    <AnalogClock />
                </div>
            </div>
        </Section>
    );
}
