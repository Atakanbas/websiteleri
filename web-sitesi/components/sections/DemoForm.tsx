"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DemoForm() {
    const [pending, setPending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setPending(true);
        setErrors({});

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch('/api/demo', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setSuccess(true);
                setMessage(result.message);
            } else {
                setErrors(result.errors || { general: "Bir hata oluştu." });
            }
        } catch (err) {
            setErrors({ general: "Bağlantı hatası oluştu." });
        } finally {
            setPending(false);
        }
    }

    if (success) {
        return (
            <Card className="max-w-xl mx-auto border-accent/20 bg-accent/5 p-12 text-center">
                <div className="flex justify-center mb-6">
                    <CheckCircle2 className="w-16 h-16 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Teşekkürler!</h3>
                <p className="text-secondary leading-relaxed">
                    {message}
                </p>
                <Button
                    variant="ghost"
                    className="mt-8"
                    onClick={() => {
                        if (typeof window !== 'undefined') {
                            window.location.reload();
                        }
                    }}
                >
                    Yeni Form Gönder
                </Button>
            </Card>
        );
    }

    return (
        <div id="demo-form" className="scroll-mt-24">
            <Section className="bg-bg">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                        Dijital Dönüşüme Bugün Başlayın
                    </h2>
                    <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
                        Ücretsiz demo için formu doldurun, sizi arayalım ve salonunuzu kuralım.
                    </p>
                </div>

                <Card className="max-w-2xl mx-auto shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Honeypot */}
                        <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-primary">Ad Soyad</label>
                                <input
                                    name="name"
                                    required
                                    placeholder="Ahmet Yılmaz"
                                    className={cn(
                                        "w-full px-4 py-3 rounded-xl border border-border-muted bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                                        errors?.name && "border-red-500"
                                    )}
                                />
                                {errors?.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-primary">İşletme Adı</label>
                                <input
                                    name="business"
                                    required
                                    placeholder="Efsane Makas"
                                    className={cn(
                                        "w-full px-4 py-3 rounded-xl border border-border-muted bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                                        errors?.business && "border-red-500"
                                    )}
                                />
                                {errors?.business && <p className="text-xs text-red-500 font-medium">{errors.business}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-primary">Telefon</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="05..."
                                    className="w-full px-4 py-3 rounded-xl border border-border-muted bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-primary">E-posta</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="ahmet@salon.com"
                                    className={cn(
                                        "w-full px-4 py-3 rounded-xl border border-border-muted bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                                        errors?.email && "border-red-500"
                                    )}
                                />
                                {errors?.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-primary">Mesajınız (Opsiyonel)</label>
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Randevu sisteminden beklentileriniz nelerdir?"
                                className="w-full px-4 py-3 rounded-xl border border-border-muted bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                            />
                        </div>

                        {errors?.contact && (
                            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-red-800 text-sm">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                {errors.contact}
                            </div>
                        )}

                        {errors?.general && (
                            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-red-800 text-sm">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                {errors.general}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full h-12"
                            disabled={pending}
                        >
                            {pending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Gönderiliyor...
                                </>
                            ) : (
                                "Demo Talebi Gönder"
                            )}
                        </Button>

                        <p className="text-[10px] text-center text-secondary/50 leading-relaxed uppercase tracking-wider">
                            "Demo Talebi Gönder" butonuna basarak KVKK aydınlatma metnini okuduğunuzu ve
                            iletişim izni verdiğinizi kabul etmiş sayılırsınız.
                        </p>
                    </form>
                </Card>
            </Section>
        </div>
    );
}
