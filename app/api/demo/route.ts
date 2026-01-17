import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { validateDemoForm } from "@/lib/validators";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const { errors, data } = validateDemoForm(formData);

        if (errors || !data) {
            return NextResponse.json(
                {
                    success: false,
                    message: "",
                    errors: errors || { general: "Form verileri eksik." }
                },
                { status: 400 }
            );
        }

        // Hardcoded API key
        const resend = new Resend("re_RUHZv3Pc_JygxcLBsCEEHUnshqygmF3nM");

        await resend.emails.send({
            from: "Rezervara <onboarding@resend.dev>",
            to: "atakanatakan457@gmail.com",
            subject: `Yeni Demo Talebi: ${data.business}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #041832;">
                    <h2>Yeni Demo Talebi Alındı</h2>
                    <p><strong>İşletme ADI:</strong> ${data.business}</p>
                    <p><strong>İlgili Kişi:</strong> ${data.name}</p>
                    <p><strong>Telefon:</strong> ${data.phone}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Mesaj:</strong> ${data.message}</p>
                </div>
            `,
        });

        return NextResponse.json({
            success: true,
            message: "Talebiniz başarıyla alındı! En kısa sürede sizinle iletişime geçeceğiz.",
            errors: null
        });
    } catch (err) {
        console.error("Email error:", err);
        return NextResponse.json(
            {
                success: false,
                message: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
                errors: null,
            },
            { status: 500 }
        );
    }
}
