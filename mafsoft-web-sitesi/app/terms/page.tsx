import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
    title: "Kullanım Koşulları",
    description: "Mafsoft web sitesi kullanım koşulları.",
    canonical: "/terms",
    noindex: true,
});

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main>
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto prose prose-slate">
                            <h1>Kullanım Koşulları</h1>

                            <p className="lead">
                                Bu web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.
                            </p>

                            <h2>1. Genel Koşullar</h2>
                            <p>
                                Bu web sitesi Mafsoft tarafından işletilmektedir. Site üzerinden sunulan bilgiler
                                genel bilgilendirme amaçlıdır ve herhangi bir garanti içermez.
                            </p>

                            <h2>2. Fikri Mülkiyet Hakları</h2>
                            <p>
                                Bu web sitesinde yer alan tüm içerik, tasarım, logo, metin, grafik ve diğer
                                materyaller Mafsoft&apos;un mülkiyetindedir ve telif hakkı yasaları ile
                                korunmaktadır. İzinsiz kullanım, kopyalama veya dağıtım yasaktır.
                            </p>

                            <h2>3. Hizmet Kapsamı</h2>
                            <p>
                                Web sitemizde tanıtılan hizmetler, müşteri ihtiyaçlarına göre özelleştirilebilir.
                                Nihai hizmet kapsamı, taraflar arasında imzalanacak sözleşme ile belirlenir.
                            </p>

                            <h2>4. Sorumluluk Sınırlaması</h2>
                            <p>
                                Mafsoft, web sitesinin kesintisiz ve hatasız çalışacağını garanti etmez. Site
                                üzerinden sağlanan bilgilerin doğruluğu için çaba gösterilse de, herhangi bir
                                yanlışlık veya eksiklikten dolayı sorumluluk kabul edilmez.
                            </p>

                            <h2>5. Üçüncü Taraf Bağlantıları</h2>
                            <p>
                                Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar
                                yalnızca kolaylık sağlamak amacıyla sunulmuştur ve Mafsoft, bu sitelerin içeriğinden
                                sorumlu değildir.
                            </p>

                            <h2>6. Değişiklikler</h2>
                            <p>
                                Mafsoft, bu kullanım koşullarını önceden haber vermeksizin değiştirme hakkını saklı
                                tutar. Değişiklikler bu sayfada yayınlandığı anda yürürlüğe girer.
                            </p>

                            <h2>7. Uygulanacak Hukuk</h2>
                            <p>
                                Bu kullanım koşulları Türkiye Cumhuriyeti yasalarına tabidir. Herhangi bir
                                uyuşmazlık durumunda Türkiye mahkemeleri yetkilidir.
                            </p>

                            <h2>8. İletişim</h2>
                            <p>
                                Kullanım koşulları ile ilgili sorularınız için{" "}
                                <a href="mailto:info@mafsoft.com">info@mafsoft.com</a> adresinden bize
                                ulaşabilirsiniz.
                            </p>

                            <p className="text-sm text-muted-foreground mt-8">
                                Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
