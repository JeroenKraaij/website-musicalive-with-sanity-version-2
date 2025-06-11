
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'clientGallery',
    title: 'Client Gallery',
    type: 'object',
    fields: [
        defineField({
            name: 'logos',
            title: 'Client Logos',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'src',
                            title: 'Logo Image',
                            type: 'image',
                            options: { hotspot: true },
                            validation: Rule => Rule.required(),
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Alt tekst',
                            type: 'string',
                            validation: Rule => Rule.required(),
                        }),
                        defineField({
                            name: 'href',
                            title: 'Link (optioneel)',
                            type: 'url',
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: '🖼️ Client Gallery',
            };
        },
    },
});
