"use server";

import { contactFormSchema, type ContactFormData } from "@/lib/validators";
import { checkRateLimit } from "@/lib/rateLimit";
import { headers } from "next/headers";

export async function submitContactForm(data: ContactFormData) {
    try {
        // Validate data
        const validatedData = contactFormSchema.parse(data);

        // Check honeypot
        if (validatedData.honeypot && validatedData.honeypot.length > 0) {
            return {
                success: false,
                error: "Bot tespit edildi",
            };
        }

        // Rate limiting
        const headersList = await headers();
        const forwardedFor = headersList.get("x-forwarded-for");
        const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

        const rateLimit = checkRateLimit(ip);
        if (!rateLimit.allowed) {
            return {
                success: false,
                error: "Çok fazla istek gönderdiniz. Lütfen daha sonra tekrar deneyin.",
            };
        }

        // Log submission (in production, send email here)
        console.log("Form submission received:", {
            name: validatedData.name,
            company: validatedData.company,
            email: validatedData.email,
            phone: validatedData.phone || "N/A",
            sector: validatedData.sector,
            projectSummary: validatedData.projectSummary,
            budget: validatedData.budget || "Belirtilmedi",
            timestamp: new Date().toISOString(),
        });

        // TODO: Send email using Resend or SMTP
        // Example with Resend:
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: process.env.EMAIL_FROM!,
        //   to: process.env.EMAIL_TO!,
        //   subject: `Yeni Teklif Talebi: ${validatedData.company}`,
        //   html: `...email template...`,
        // });

        return {
            success: true,
            message: "Talebiniz başarıyla alındı. En kısa sürede size dönüş yapacağız.",
        };
    } catch (error) {
        console.error("Form submission error:", error);
        return {
            success: false,
            error: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        };
    }
}
