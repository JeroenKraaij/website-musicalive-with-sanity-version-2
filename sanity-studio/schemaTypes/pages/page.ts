
// studio/schemas/page.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
        }),
        defineField({
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'content',
            title: 'Page Content',
            type: 'array',
            of: [
                { type: 'heroSection' },
                { type: 'clientGallery' },
                { type: 'ctaTabSection' },
                // andere blocks hier toevoegen
            ],
        }),

    ],
})
