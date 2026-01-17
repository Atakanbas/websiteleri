import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
    title: "Gizlilik Politikası ve KVKK",
    description: "Mafsoft gizlilik politikası ve KVKK aydınlatma metni.",
    canonical: "/privacy",
    noindex: true,
});

export default function PrivacyPage() {
    return (
        <>
            <Navbar />
            <main>
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto prose prose-slate">
                            <h1>Gizlilik Politikası ve KVKK Aydınlatma Metni</h1>

                            <p className="lead">
                                Mafsoft olarak, kişisel verilerinizin güvenliği bizim için önceliklidir. Bu metin,
                                6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında
                                bilgilendirme amacıyla hazırlanmıştır.
                            </p>

                            <h2>1. Veri Sorumlusu</h2>
                            <p>
                                Kişisel verileriniz, veri sorumlusu sıfatıyla Mafsoft tarafından aşağıda açıklanan
                                kapsamda işlenebilecektir.
                            </p>

                            <h2>2. Toplanan Kişisel Veriler</h2>
                            <p>Web sitemiz üzerinden aşağıdaki kişisel veriler toplanabilir:</p>
                            <ul>
                                <li>Ad, soyad</li>
                                <li>Şirket bilgileri</li>
                                <li>E-posta adresi</li>
                                <li>Telefon numarası</li>
                                <li>Proje detayları ve talep bilgileri</li>
                            </ul>

                            <h2>3. Kişisel Verilerin İşlenme Amacı</h2>
                            <p>Toplanan kişisel veriler aşağıdaki amaçlarla işlenmektedir:</p>
                            <ul>
                                <li>Teklif taleplerinin değerlendirilmesi ve yanıtlanması</li>
                                <li>Müşteri ilişkileri yönetimi</li>
                                <li>İletişim faaliyetlerinin yürütülmesi</li>
                                <li>Hizmet kalitesinin artırılması</li>
                            </ul>

                            <h2>4. Kişisel Verilerin Aktarılması</h2>
                            <p>
                                Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda
                                iş ortaklarımıza, tedarikçilerimize ve yasal yükümlülüklerimiz kapsamında yetkili
                                kamu kurum ve kuruluşlarına aktarılabilir.
                            </p>

                            <h2>5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
                            <p>
                                Kişisel verileriniz, web sitemiz üzerindeki formlar aracılığıyla elektronik
                                ortamda toplanmaktadır. Hukuki sebep, açık rızanız ve sözleşmenin kurulması/ifası
                                için gerekli olmasıdır.
                            </p>

                            <h2>6. Kişisel Veri Sahibinin Hakları</h2>
                            <p>KVKK&apos;nın 11. maddesi uyarınca, kişisel veri sahipleri:</p>
                            <ul>
                                <li>Kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
                                <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                                <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
                                <li>Eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
                                <li>
                                    KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok
                                    edilmesini isteme,
                                </li>
                                <li>
                                    Aktarıldığı üçüncü kişilere yukarıdaki işlemlerin bildirilmesini isteme,
                                </li>
                                <li>
                                    Münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize
                                    bir sonucun ortaya çıkmasına itiraz etme,
                                </li>
                                <li>
                                    Kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın
                                    giderilmesini talep etme haklarına sahiptir.
                                </li>
                            </ul>

                            <h2>7. İletişim</h2>
                            <p>
                                Kişisel verileriniz ile ilgili taleplerinizi{" "}
                                <a href="mailto:info@mafsoft.com">info@mafsoft.com</a> adresine iletebilirsiniz.
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
