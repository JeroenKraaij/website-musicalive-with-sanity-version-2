
// lib/seo/generateHomeMetadata.ts
import { client } from "@/lib/sanity/client";
import { homepageQuery } from "@/lib/sanity/queries/seo/homepageQuery";
import { siteSettingsQuery } from "@/lib/sanity/queries/siteSettings";
import { Metadata } from "next";

export async function generateHomeMetadata(): Promise<Metadata> {
    const [homepage, siteSettings] = await Promise.all([
        client.fetch(homepageQuery),
        client.fetch(siteSettingsQuery),
    ]);

    const structuredData = siteSettings?.structuredData || [];

    return {
        title: homepage?.seoTitle || siteSettings?.siteTitle || "Home",
        description: homepage?.seoDescription || siteSettings?.defaultSeoDescription || "",
        openGraph: {
            title: homepage?.seoTitle || siteSettings?.siteTitle || "Home",
            description: homepage?.seoDescription || siteSettings?.defaultSeoDescription || "",
            images: [
                {
                    url: homepage?.openGraphImage?.asset?.url || siteSettings?.defaultOpenGraphImage?.asset?.url || "/default-og.jpg",
                    width: 1200,
                    height: 630,
                    alt: homepage?.title || siteSettings?.siteTitle || "Open Graph Image",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: homepage?.seoTitle || siteSettings?.siteTitle || "Home",
            description: homepage?.seoDescription || siteSettings?.defaultSeoDescription || "",
            site: siteSettings?.twitterHandle || undefined,
        },

        // ✅ Hier voeg je JSON-LD toe:
        other: {
            structuredData,
        },
    };
}
