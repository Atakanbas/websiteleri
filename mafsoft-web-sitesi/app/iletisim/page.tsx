import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = genMeta({
    title: "İletişim - Teklif Al",
    description:
        "Mafsoft ile iletişime geçin. Yazılım projeleriniz için detaylı bilgi alın ve teklif talep edin.",
    canonical: "/iletisim",
});

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main>
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                                    İletişime Geçin
                                </h1>
                                <p className="text-lg text-muted-foreground">
                                    Projeniz hakkında konuşmak için formu doldurun veya doğrudan bize ulaşın.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                                {/* Contact Info Cards */}
                                <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary mb-4">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold mb-2">E-posta</h3>
                                    <a
                                        href="mailto:info@mafsoft.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        info@mafsoft.com
                                    </a>
                                </div>

                                <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary mb-4">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Telefon</h3>
                                    <a
                                        href="tel:+905XXXXXXXXX"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +90 5XX XXX XX XX
                                    </a>
                                </div>

                                <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary mb-4">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Konum</h3>
                                    <p className="text-muted-foreground">Türkiye</p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-card p-8 rounded-lg shadow-sm border">
                                <h2 className="text-2xl font-bold mb-6">Teklif Talep Formu</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
