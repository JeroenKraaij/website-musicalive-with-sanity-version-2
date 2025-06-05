
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
            description: 'Wordt gebruikt als fallback bij pagina SEO.',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'defaultSeoDescription',
            title: 'Default SEO Description',
            type: 'text',
            rows: 3,
            description: 'Fallback beschrijving voor SEO als een pagina er geen heeft.',
        }),
        defineField({
            name: 'defaultOpenGraphImage',
            title: 'Default Open Graph Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Standaard afbeelding voor social shares (bijv. Facebook, LinkedIn).',
        }),
        defineField({
            name: 'twitterHandle',
            title: 'Twitter Handle',
            type: 'string',
        }),
        defineField({
            name: 'facebookAppID',
            title: 'Facebook App ID',
            type: 'string',
        }),
        defineField({
            name: 'structuredData',
            title: 'Structured Data (JSON-LD)',
            type: 'array',
            of: [
                defineField({
                    name: 'jsonLd',
                    title: 'JSON-LD Block',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'context',
                            title: '@context',
                            type: 'string',
                            initialValue: 'https://schema.org',
                        }),
                        defineField({
                            name: 'type',
                            title: '@type',
                            type: 'string',
                            initialValue: 'WebSite',
                        }),
                        // Voeg hier extra velden toe als je wilt
                    ],
                }),
            ],
        }),
    ],

    preview: {
        select: {
            title: 'siteTitle',
            subtitle: 'defaultSeoDescription',
        },
    },
})
