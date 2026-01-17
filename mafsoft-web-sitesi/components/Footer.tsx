import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerNavigation = {
    cozumler: [
        { name: "Randevu Sistemleri", href: "/#iletisim" },
        { name: "CRM / ERP", href: "/#iletisim" },
        { name: "WhatsApp Bot", href: "/#iletisim" },
        { name: "Elektronik Çözümler", href: "/#iletisim" },
        { name: "Sağlık Teknolojileri", href: "/#iletisim" },
        { name: "B2B Yazılım", href: "/#iletisim" },
    ],
    sirket: [
        { name: "Hakkımızda", href: "/#hizmetler" },
        { name: "Çalışmalar", href: "/#calismalar" },
        { name: "Hizmetler", href: "/#hizmetler" },
        { name: "İletişim", href: "/#iletisim" },
    ],
    yasal: [
        { name: "Gizlilik Politikası", href: "/privacy" },
        { name: "Kullanım Koşulları", href: "/terms" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Mafsoft</h3>
                        <p className="text-sm text-primary-foreground/80">
                            İşletmeniz için yazılım, otomasyon ve entegrasyon çözümleri.
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <a
                                    href="mailto:info@mafsoft.com"
                                    className="hover:underline text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    info@mafsoft.com
                                </a>
                            </div>
                            <div className="flex items-start gap-2">
                                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <a
                                    href="tel:+905XXXXXXXXX"
                                    className="hover:underline text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    +90 5XX XXX XX XX
                                </a>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span className="text-primary-foreground/80">Türkiye</span>
                            </div>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Çözümler</h3>
                        <ul className="space-y-2 text-sm">
                            {footerNavigation.cozumler.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Şirket</h3>
                        <ul className="space-y-2 text-sm">
                            {footerNavigation.sirket.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Yasal</h3>
                        <ul className="space-y-2 text-sm">
                            {footerNavigation.yasal.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-primary-foreground/20">
                    <p className="text-center text-sm text-primary-foreground/60">
                        © {new Date().getFullYear()} Mafsoft. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
}
