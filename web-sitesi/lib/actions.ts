import { Resend } from "resend";
import { validateDemoForm } from "./validators";

// initialization inside the function to avoid top-level side effects

export type FormState = {
    success: boolean;
    message: string;
    errors: Record<string, string> | null;
};

export async function submitDemoRequest(prevState: FormState, formData: FormData): Promise<FormState> {
    const { errors, data } = validateDemoForm(formData);

    if (errors || !data) {
        return {
            success: false,
            message: "",
            errors: errors || { general: "Form verileri eksik." }
        };
    }

    try {
        // Hardcoded API key for immediate functionality
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

        return {
            success: true,
            message: "Talebiniz başarıyla alındı! En kısa sürede sizinle iletişime geçeceğiz.",
            errors: null
        };
    } catch (err) {
        console.error("Email error:", err);
        return {
            success: false,
            message: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
            errors: null,
        };
    }
}
