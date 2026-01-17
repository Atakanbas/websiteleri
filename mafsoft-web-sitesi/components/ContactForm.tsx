"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormData } from "@/lib/validators";
import { submitContactForm } from "@/app/actions/contact";
import { getAllSectors } from "@/lib/accents";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            honeypot: "",
            kvkkConsent: false,
        },
    });

    const sectors = getAllSectors();

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const result = await submitContactForm(data);

            if (result.success) {
                setSubmitStatus({
                    type: "success",
                    message: result.message || "Talebiniz başarıyla gönderildi!",
                });
                reset();
            } else {
                setSubmitStatus({
                    type: "error",
                    message: result.error || "Bir hata oluştu. Lütfen tekrar deneyin.",
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: "Bir hata oluştu. Lütfen tekrar deneyin.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot field (hidden) */}
            <input
                type="text"
                {...register("honeypot")}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                    <Label htmlFor="name">
                        Ad Soyad <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        id="name"
                        {...register("name")}
                        placeholder="Adınız ve soyadınız"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                        <p id="name-error" className="text-sm text-destructive">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Company */}
                <div className="space-y-2">
                    <Label htmlFor="company">
                        Şirket <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        id="company"
                        {...register("company")}
                        placeholder="Şirket adınız"
                        aria-invalid={errors.company ? "true" : "false"}
                        aria-describedby={errors.company ? "company-error" : undefined}
                    />
                    {errors.company && (
                        <p id="company-error" className="text-sm text-destructive">
                            {errors.company.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="email">
                        E-posta <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="ornek@sirket.com"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                        <p id="email-error" className="text-sm text-destructive">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="+90 5XX XXX XX XX"
                    />
                </div>
            </div>

            {/* Sector */}
            <div className="space-y-2">
                <Label htmlFor="sector">
                    İlgilendiğiniz Çözüm <span className="text-destructive">*</span>
                </Label>
                <Select onValueChange={(value) => setValue("sector", value as any)}>
                    <SelectTrigger
                        id="sector"
                        aria-invalid={errors.sector ? "true" : "false"}
                        aria-describedby={errors.sector ? "sector-error" : undefined}
                    >
                        <SelectValue placeholder="Bir çözüm seçin" />
                    </SelectTrigger>
                    <SelectContent>
                        {sectors.map((sector) => (
                            <SelectItem key={sector.id} value={sector.id}>
                                {sector.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.sector && (
                    <p id="sector-error" className="text-sm text-destructive">
                        {errors.sector.message}
                    </p>
                )}
            </div>

            {/* Project Summary */}
            <div className="space-y-2">
                <Label htmlFor="projectSummary">
                    Proje Özeti <span className="text-destructive">*</span>
                </Label>
                <Textarea
                    id="projectSummary"
                    {...register("projectSummary")}
                    placeholder="Projeniz hakkında kısaca bilgi verin..."
                    rows={4}
                    aria-invalid={errors.projectSummary ? "true" : "false"}
                    aria-describedby={errors.projectSummary ? "projectSummary-error" : undefined}
                />
                {errors.projectSummary && (
                    <p id="projectSummary-error" className="text-sm text-destructive">
                        {errors.projectSummary.message}
                    </p>
                )}
            </div>

            {/* Budget */}
            <div className="space-y-2">
                <Label htmlFor="budget">Bütçe Aralığı (Opsiyonel)</Label>
                <Input
                    id="budget"
                    {...register("budget")}
                    placeholder="Örn: 50.000 - 100.000 TL"
                />
            </div>

            {/* KVKK Consent */}
            <div className="flex items-start space-x-2">
                <input
                    type="checkbox"
                    id="kvkkConsent"
                    {...register("kvkkConsent")}
                    className="mt-1 h-4 w-4 rounded border-input"
                    aria-invalid={errors.kvkkConsent ? "true" : "false"}
                    aria-describedby={errors.kvkkConsent ? "kvkk-error" : undefined}
                />
                <Label htmlFor="kvkkConsent" className="text-sm font-normal cursor-pointer">
                    <a href="/privacy" className="text-primary hover:underline" target="_blank">
                        KVKK Aydınlatma Metni
                    </a>
                    &apos;ni okudum ve kabul ediyorum. <span className="text-destructive">*</span>
                </Label>
            </div>
            {errors.kvkkConsent && (
                <p id="kvkk-error" className="text-sm text-destructive">
                    {errors.kvkkConsent.message}
                </p>
            )}

            {/* Submit Status */}
            {submitStatus.type && (
                <div
                    className={`p-4 rounded-md ${submitStatus.type === "success"
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                    role="alert"
                >
                    {submitStatus.message}
                </div>
            )}

            {/* Submit Button */}
            <Button type="submit" size="lg" variant="secondary" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Gönderiliyor...
                    </>
                ) : (
                    "Teklif Talebi Gönder"
                )}
            </Button>
        </form>
    );
}
