"use client";

import * as React from "react";
import Section from "@/components/ui/Section";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Sistemi kullanmak için teknik bilgi gerekir mi?",
        answer: "Hayır. Rezervara, sosyal medya kullanabilen herkesin rahatlıkla kullanabileceği şekilde son derece sade ve kullanıcı dostu tasarlanmıştır.",
    },
    {
        question: "Verilerim güvende mi?",
        answer: "Evet. Tüm verileriniz yüksek güvenlikli sunucularda şifrelenmiş olarak saklanır ve düzenli olarak yedeklenir. KVKK uyumluluğu önceliğimizdir.",
    },
    {
        question: "Ücretsiz deneme süresi var mı?",
        answer: "Evet, tüm paketlerimizi 14 gün boyunca hiçbir ücret ödemeden ve kredi kartı bilgisi paylaşmadan deneyebilirsiniz.",
    },
    {
        question: "Kendi internet siteme entegre edebilir miyim?",
        answer: "Tabii ki! Size özel randevu linkini Instagram profilinize ekleyebilir veya web sitenize kolayca gömebilirsiniz.",
    },
    {
        question: "İnternet bağlantısı kesilirse ne olur?",
        answer: "Rezervara bulut tabanlı bir sistemdir. Herhangi bir cihazdan (telefon, tablet, bilgisayar) internete bağlandığınız an verilerinize ulaşabilirsiniz.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <Section id="sss" className="bg-card-light">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    Sıkça Sorulan Sorular
                </h2>
                <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
                    Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={cn(
                                "border border-border-muted rounded-2xl overflow-hidden transition-all duration-300",
                                isOpen ? "ring-1 ring-primary/20 bg-primary/5" : "hover:bg-bg/50"
                            )}
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                            >
                                <span className="font-bold text-primary">{faq.question}</span>
                                <div className="flex-shrink-0 ml-4">
                                    {isOpen ? (
                                        <Minus className="w-5 h-5 text-secondary" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-secondary" />
                                    )}
                                </div>
                            </button>

                            <div
                                className={cn(
                                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                                    isOpen ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <p className="text-secondary text-sm leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
