
// sanity/schemas/singletons/notFoundPage.ts
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'notFoundPage',
    title: '404 Pagina',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'message',
            title: 'Bericht',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'cta',
            title: 'CTA',
            type: 'object',
            fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'href', title: 'Link', type: 'string' }),
            ],
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Achtergrondafbeelding',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
    preview: {
        prepare() {
            return {
                title: '404 Pagina',
                subtitle: 'Inhoud voor de notFound-pagina',
            }
        },
    },
})

