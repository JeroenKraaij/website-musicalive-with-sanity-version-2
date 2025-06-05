
// sanity/schemas/globalSeo.ts
import { defineType, defineField } from "sanity";

export default defineType({
    name: "globalSeo",
    title: "Global SEO",
    type: "document",
    fields: [
        defineField({
            name: "siteTitle",
            title: "Site Title",
            type: "string",
            description: "Default title for pages (appended/prepended by page title).",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "defaultDescription",
            title: "Default Meta Description",
            type: "text",
            description:
                "Fallback description for <meta name='description'> if a page has none.",
            rows: 3,
        }),
        defineField({
            name: "openGraphImage",
            title: "Open Graph Image",
            type: "image",
            options: { hotspot: true },
            description: "Default OG:image for social sharing.",
        }),
        defineField({
            name: "twitterHandle",
            title: "Twitter Handle",
            type: "string",
            description: "Your site’s Twitter username (e.g. “@yourhandle”).",
        }),
        defineField({
            name: "facebookAppID",
            title: "Facebook App ID",
            type: "string",
            description: "Optional: used for Facebook Insights if you have one.",
        }),
        defineField({
            name: "structuredData",
            title: "Structured Data (JSON-LD)",
            type: "array",
            of: [
                defineField({
                    name: "jsonLd",
                    title: "JSON-LD Block",
                    type: "object",
                    fields: [
                        defineField({
                            name: "key",
                            title: "Key",
                            type: "string",
                            hidden: true,
                            initialValue: "@",
                        }),
                        defineField({
                            name: "context",
                            title: "@context",
                            type: "string",
                            initialValue: "https://schema.org",
                        }),
                        defineField({
                            name: "type",
                            title: "@type",
                            type: "string",
                            initialValue: "WebSite",
                        }),
                        // You can add additional generic JSON-LD fields here
                    ],
                }),
            ],
            description:
                "Optional JSON-LD structured data (e.g. WebSite, Organization). Add items starting with @context and @type.",
        }),
    ],
    preview: {
        select: {
            title: "siteTitle",
            subtitle: "defaultDescription",
        },
    },
});
