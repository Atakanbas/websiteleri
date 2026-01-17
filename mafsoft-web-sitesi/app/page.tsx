import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SectorCards } from "@/components/SectorCards";
import { WhyMafsoft } from "@/components/WhyMafsoft";
import { ProcessSteps } from "@/components/ProcessSteps";

import { ContactForm } from "@/components/ContactForm";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";
import { getBaseUrl } from "@/lib/seo";

export default function HomePage() {
    const baseUrl = getBaseUrl();

    const organizationSchema = generateOrganizationSchema({
        name: "Mafsoft",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description:
            "İşletmelere yönelik yazılım, otomasyon ve entegrasyon çözümleri sunan teknoloji şirketi.",
        contactPoint: {
            telephone: "+905XXXXXXXXX",
            contactType: "customer service",
            email: "info@mafsoft.com",
        },
    });

    const websiteSchema = generateWebSiteSchema("Mafsoft", baseUrl);

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />

            <Navbar />
            <main>
                <Hero />
                <SectorCards />
                <WhyMafsoft />
                <ProcessSteps />

                {/* Final CTA Section with Footer */}
                <section id="iletisim" className="snap-section section-padding flex flex-col justify-between bg-slate-900 min-h-screen overflow-y-auto">
                    <div className="flex-grow flex items-center justify-center w-full py-12">
                        <div className="container-custom w-full">
                            <div className="max-w-4xl mx-auto">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
                                        Projenizi Konuşalım
                                    </h2>
                                    <p className="text-lg text-muted-foreground">
                                        Detaylı bilgi almak ve teklif talep etmek için formu doldurun. En kısa sürede
                                        size dönüş yapalım.
                                    </p>
                                </div>
                                <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </section>
            </main>
        </>
    );
}
