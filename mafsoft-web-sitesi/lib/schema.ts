import { getBaseUrl } from "./seo";

interface Organization {
    name: string;
    url: string;
    logo?: string;
    description?: string;
    contactPoint?: {
        telephone: string;
        contactType: string;
        email: string;
    };
}

export function generateOrganizationSchema(org: Organization) {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: org.name,
        url: org.url,
        ...(org.logo && { logo: org.logo }),
        ...(org.description && { description: org.description }),
        ...(org.contactPoint && {
            contactPoint: {
                "@type": "ContactPoint",
                telephone: org.contactPoint.telephone,
                contactType: org.contactPoint.contactType,
                email: org.contactPoint.email,
            },
        }),
    };
}

export function generateWebSiteSchema(name: string, url: string) {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name,
        url,
    };
}

interface BreadcrumbItem {
    name: string;
    url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

interface Service {
    name: string;
    description: string;
    provider: string;
    areaServed?: string;
}

export function generateServiceSchema(service: Service) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
            "@type": "Organization",
            name: service.provider,
        },
        ...(service.areaServed && { areaServed: service.areaServed }),
    };
}

interface FAQItem {
    question: string;
    answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

interface Article {
    headline: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
}

export function generateArticleSchema(article: Article) {
    const baseUrl = getBaseUrl();
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.headline,
        description: article.description,
        author: {
            "@type": "Person",
            name: article.author,
        },
        datePublished: article.datePublished,
        ...(article.dateModified && { dateModified: article.dateModified }),
        ...(article.image && {
            image: article.image.startsWith("http") ? article.image : `${baseUrl}${article.image}`,
        }),
        publisher: {
            "@type": "Organization",
            name: "Mafsoft",
            logo: {
                "@type": "ImageObject",
                url: `${baseUrl}/logo.png`,
            },
        },
    };
}
