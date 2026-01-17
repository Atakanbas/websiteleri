import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Ad Soyad en az 2 karakter olmalıdır"),
    company: z.string().min(2, "Şirket adı en az 2 karakter olmalıdır"),
    email: z.string().email("Geçerli bir e-posta adresi giriniz"),
    phone: z.string().optional(),
    sector: z.enum(["health", "crm", "whatsapp", "electronics", "booking", "b2b"], {
        errorMap: () => ({ message: "Lütfen bir çözüm seçiniz" }),
    }),
    projectSummary: z.string().min(10, "Proje özeti en az 10 karakter olmalıdır"),
    budget: z.string().optional(),
    kvkkConsent: z.boolean().refine((val) => val === true, {
        message: "KVKK onayı zorunludur",
    }),
    honeypot: z.string().max(0, "Bot tespit edildi"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
