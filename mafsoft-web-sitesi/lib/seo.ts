import { Metadata } from "next";

interface SEOConfig {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    noindex?: boolean;
}

export function generateMetadata(config: SEOConfig): Metadata {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const canonicalUrl = config.canonical
        ? `${siteUrl}${config.canonical}`
        : undefined;

    return {
        title: config.title,
        description: config.description,
        ...(canonicalUrl && {
            alternates: {
                canonical: canonicalUrl,
            },
        }),
        openGraph: {
            title: config.title,
            description: config.description,
            url: canonicalUrl,
            siteName: "Mafsoft",
            locale: "tr_TR",
            type: "website",
            ...(config.ogImage && {
                images: [
                    {
                        url: config.ogImage,
                        width: 1200,
                        height: 630,
                        alt: config.title,
                    },
                ],
            }),
        },
        twitter: {
            card: "summary_large_image",
            title: config.title,
            description: config.description,
            ...(config.ogImage && {
                images: [config.ogImage],
            }),
        },
        ...(config.noindex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}

export function getBaseUrl(): string {
    return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}
