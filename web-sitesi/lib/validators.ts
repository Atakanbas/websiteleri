export function validateDemoForm(formData: FormData) {
    const name = formData.get("name") as string;
    const business = formData.get("business") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const honeypot = formData.get("honeypot") as string;

    const errors: Record<string, string> = {};

    if (honeypot) {
        errors.spam = "Spam detected";
        return { errors };
    }

    if (!name || name.length < 2) {
        errors.name = "Lütfen geçerli bir ad giriniz.";
    }

    if (!business || business.length < 2) {
        errors.business = "İşletme adı zorunludur.";
    }

    if (!email && !phone) {
        errors.contact = "En az bir iletişim yöntemi bırakmalısınız.";
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
        errors.email = "Geçerli bir e-posta adresi giriniz.";
    }

    return {
        errors: Object.keys(errors).length > 0 ? errors : null,
        data: { name, business, email, phone, message },
    };
}
