"use client";

import Section from "@/components/ui/Section";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function PrivacyPage() {
    return (
        <main>
            <Navbar />
            <Section className="prose max-w-4xl mx-auto pt-32 pb-20">
                <h1 className="text-4xl font-bold text-primary mb-8">Gizlilik Politikası ve KVKK Aydınlatma Metni</h1>
                <div className="space-y-6 text-secondary leading-relaxed">
                    <p>
                        Rezervara olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz.
                        Bu bilinçle, ürün ve hizmetlerimizden faydalanan kişilere ait her türlü kişisel verilerin
                        6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”)’na uygun olarak işlenerek, muhafaza edilmesine büyük önem vermekteyiz.
                    </p>
                    <h2 className="text-2xl font-bold text-primary">1. Veri Sorumlusu</h2>
                    <p>
                        KVKK uyarınca, Rezervara "Veri Sorumlusu" sıfatıyla, kişisel verilerinizi aşağıda açıklanan
                        amaçlar kapsamında; hukuka ve dürüstlük kurallarına uygun olarak işleyebilecektir.
                    </p>
                    <h2 className="text-2xl font-bold text-primary">2. Kişisel Verilerin İşlenme Amacı</h2>
                    <p>
                        Toplanan kişisel verileriniz, demo taleplerinizin karşılanması, hizmetlerimizin iyileştirilmesi
                        ve sizlerle iletişime geçilmesi amacıyla işlenmektedir.
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
