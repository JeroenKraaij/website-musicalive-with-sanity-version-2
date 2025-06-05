
// sanity/schemas/blocks/heroSection.ts
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'heroSection',
    title: 'Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'backgroundImage',
            title: 'Achtergrondafbeelding',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'overlay',
            title: 'Overlay kleur',
            type: 'string',
            options: {
                list: [
                    { title: 'Teal Gradient', value: 'teal' },
                    { title: 'Zwarte overlay', value: 'black' },
                    { title: 'Geen overlay', value: 'none' },
                ],
                layout: 'radio',
            },
            initialValue: 'teal',
        }),
        defineField({
            name: 'gradientOpacity',
            title: 'Gradient Opacity (0.0 – 1.0)',
            type: 'number',
            validation: (Rule) =>
                Rule.min(0).max(1).precision(2),
            initialValue: 0.7,
        }),
        defineField({
            name: 'headingLevel',
            title: 'Heading Level',
            type: 'string',
            options: {
                list: ['h1', 'h2', 'h3', 'h4', 'h5'],
                layout: 'dropdown',
            },
            initialValue: 'h1',
        }),
        defineField({
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Tekst onder de titel',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'cta',
            title: 'Call to Action',
            type: 'object',
            fields: [
                defineField({ name: 'label', title: 'Knoptekst', type: 'string' }),
                defineField({
                    name: 'href',
                    title: 'Link URL',
                    type: 'url',
                    validation: Rule =>
                        Rule.uri({
                            allowRelative: true,
                            scheme: ['http', 'https', 'mailto', 'tel'],
                        }),
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'headingLevel',
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Hero Section',
                subtitle: `Heading: ${subtitle || 'h1'}`,
            }
        },
    },
})
