
// sanity/schemas/pages/homepage.ts
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titel',
            type: 'string',
            initialValue: 'Homepage',
            validation: (Rule) => Rule.required(),
        }),

        // ✅ SEO-velden
        defineField({
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            description: 'SEO-titel voor de homepage (verschijnt in browser-tab en zoekresultaten).',
        }),
        defineField({
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 3,
            description: 'Korte beschrijving voor zoekmachines en social media.',
        }),

        defineField({
            name: 'openGraphImage',
            title: 'Open Graph Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Social share afbeelding (1200x630 aanbevolen).',
        }),

        // ✅ Content-blokken
        defineField({
            name: 'content',
            title: 'Page Sections',
            type: 'array',
            of: [
                { type: 'heroSection' },
                { type: 'videoSection' },
                // Voeg hier andere homepage-secties aan toe
            ],
        }),
    ],

    preview: {
        prepare() {
            return {
                title: 'Homepage',
            }
        },
    },
})
