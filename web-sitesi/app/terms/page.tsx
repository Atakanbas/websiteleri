"use client";

import Section from "@/components/ui/Section";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function TermsPage() {
    return (
        <main>
            <Navbar />
            <Section className="prose max-w-4xl mx-auto pt-32 pb-20">
                <h1 className="text-4xl font-bold text-primary mb-8">Kullanım Şartları</h1>
                <div className="space-y-6 text-secondary leading-relaxed">
                    <p>
                        Rezervara platformuna hoş geldiniz. Bu internet sitesini kullanarak aşağıda belirtilen
                        kullanım şartlarını kabul etmiş sayılırsınız.
                    </p>
                    <h2 className="text-2xl font-bold text-primary">1. Hizmet Tanımı</h2>
                    <p>
                        Rezervara, randevu tabanlı çalışan işletmeler için bir yönetim yazılımı (SaaS) sunmaktadır.
                    </p>
                    <h2 className="text-2xl font-bold text-primary">2. Üyelik ve Kullanım</h2>
                    <p>
                        Sistemi kullanmak için doğru ve güncel bilgiler vermeyi taahhüt edersiniz. Kullanıcı adı
                        ve şifrenizin güvenliğinden siz sorumlusunuz.
                    </p>
                    <p className="text-sm italic">
                        * Bu metin bir şablondur. İşletmenizin gerçek hukuki metinleri ile değiştirilmelidir.
                    </p>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
