
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
