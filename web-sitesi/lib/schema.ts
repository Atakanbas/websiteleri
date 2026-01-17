export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Rezervara",
        "url": "https://rezervara.com",
        "logo": "https://rezervara.com/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-500-000-00-00",
            "contactType": "customer service",
            "availableLanguage": "Turkish"
        }
    };
}

export function generateSoftwareApplicationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Rezervara Randevu Sistemi",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "offers": {
            "@type": "Offer",
            "price": "299",
            "priceCurrency": "TRY"
        }
    };
}
