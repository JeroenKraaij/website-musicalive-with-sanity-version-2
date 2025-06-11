
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'ctaTabSection',
    title: 'CTA Tab Section',
    type: 'object',

    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'headingLevel',
            title: 'Heading Level',
            type: 'string',
            options: {
                list: ['h1', 'h2', 'h3', 'h4', 'h5'],
                layout: 'radio',
                direction: 'horizontal',
            },
            initialValue: 'h2',
            description: 'Bepaalt welk kopniveau wordt gebruikt voor de sectietitel.',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
        }),
        defineField({
            name: 'tabs',
            title: 'Tabs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'tab',
                    fields: [
                        defineField({ name: 'key', type: 'string', title: 'Key (unique)' }),
                        defineField({ name: 'label', type: 'string', title: 'Label (Button/Text)' }),
                        defineField({ name: 'title', type: 'string', title: 'Tab Title' }),
                        defineField({ name: 'description', type: 'text', title: 'Description' }),
                        defineField({
                            name: 'icon',
                            title: 'Icon Name',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Music', value: 'music' },
                                    { title: 'Mic', value: 'mic' },
                                    { title: 'Drumstick', value: 'drumstick' },
                                    { title: 'Users', value: 'users' },
                                ],
                            },
                        }),
                        defineField({
                            name: 'image',
                            type: 'image',
                            title: 'Afbeelding',
                            options: { hotspot: true },
                        }),
                        defineField({
                            name: 'href',
                            type: 'url',
                            title: 'Button Link',
                        }),
                    ],
                },
            ],
            validation: Rule => Rule.max(3).min(1),
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'CTA Tabs Section',
                subtitle: 'Interactieve tabsectie',
            };
        },
    },
});
