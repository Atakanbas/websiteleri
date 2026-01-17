"use client";

import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border-muted bg-white py-12">
            <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <img
                                src="/logo.jpg"
                                alt="Rezervara Logo"
                                className="h-20 w-auto object-contain"
                            />
                            <span className="text-2xl font-bold tracking-tight text-primary">
                                Rezervara
                            </span>
                        </Link>
                        <p className="mt-4 max-w-xs text-sm text-secondary leading-relaxed">
                            Berber, kuaför ve güzellik merkezleri için modern randevu yönetim sistemi.
                            İşletmenizi dijitalleştirin, zaman kazanın.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                            Ürün
                        </h4>
                        <ul className="mt-4 space-y-2 text-sm text-secondary">
                            <li><Link href="#ozellikler" className="hover:text-primary">Özellikler</Link></li>
                            <li><Link href="#nasil-calisir" className="hover:text-primary">Nasıl Çalışır</Link></li>
                            <li><Link href="#fiyat" className="hover:text-primary">Fiyat</Link></li>
                            <li><Link href="#sss" className="hover:text-primary">SSS</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                            Yasal
                        </h4>
                        <ul className="mt-4 space-y-2 text-sm text-secondary">
                            <li><Link href="/privacy" className="hover:text-primary">KVKK & Gizlilik</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Kullanım Şartları</Link></li>
                            <li><span className="cursor-help underline decoration-dotted">Çerez Politikası</span></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-border-muted pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-xs text-secondary/70">
                        &copy; {currentYear} Rezervara. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-6 text-xs text-secondary/70">
                        <span>destek@rezervara.com</span>
                        <div className="flex gap-4">
                            <span className="hover:text-primary cursor-pointer">Instagram</span>
                            <span className="hover:text-primary cursor-pointer">LinkedIn</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
