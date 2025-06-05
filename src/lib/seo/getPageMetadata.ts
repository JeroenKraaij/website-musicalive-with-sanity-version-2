
// lib/seo/getPageMetadata.ts
import { client } from "@/lib/sanity/client";
import { pageBySlugQuery } from "@/lib/sanity/queries/page";
import { siteSettingsQuery } from "@/lib/sanity/queries/seo/siteSettingsQuery";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function getPageMetadata(slug: string): Promise<Metadata> {
    const [page, siteSettings] = await Promise.all([
        client.fetch(pageBySlugQuery, { slug }),
        client.fetch(siteSettingsQuery),
    ]);

    if (!page) return notFound();

    return {
        title: page.seoTitle || `${page.title} | ${siteSettings?.siteTitle}`,
        description: page.seoDescription || siteSettings?.defaultSeoDescription || "",
        openGraph: {
            title: page.seoTitle || page.title,
            description: page.seoDescription || siteSettings?.defaultSeoDescription || "",
            images: [
                {
                    url: siteSettings?.defaultOpenGraphImage?.asset?.url || "/default-og.jpg",
                    width: 1200,
                    height: 630,
                    alt: page.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: page.seoTitle || page.title,
            description: page.seoDescription || siteSettings?.defaultSeoDescription || "",
            site: siteSettings?.twitterHandle || undefined,
        },
    };
}
