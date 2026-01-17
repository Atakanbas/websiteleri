"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
    { name: "Özellikler", href: "#ozellikler" },
    { name: "Nasıl Çalışır", href: "#nasil-calisir" },
    { name: "Fiyat", href: "#fiyat" },
    { name: "SSS", href: "#sss" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border-muted/50 bg-bg/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-10 lg:px-8">
                <Link href="/" className="flex items-center gap-5">
                    <img
                        src="/logo.jpg"
                        alt="Rezervara Logo"
                        className="h-20 w-auto object-contain scale-125"
                    />
                    <span className="text-4xl font-bold tracking-tight text-primary hidden sm:block">
                        Rezervara
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-secondary transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="primary" size="sm" onClick={() => {
                        if (typeof document !== 'undefined') {
                            document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
                        }
                    }}>
                        Demo İste
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="p-2 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menü"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="flex flex-col gap-4 border-t border-border-muted bg-bg px-6 py-6 font-medium text-secondary">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <Button
                            className="w-full"
                            onClick={() => {
                                setIsOpen(false);
                                if (typeof document !== 'undefined') {
                                    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            Demo İste
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
