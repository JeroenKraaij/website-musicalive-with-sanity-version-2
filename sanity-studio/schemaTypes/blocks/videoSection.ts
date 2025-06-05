
import {defineType, defineField} from 'sanity'

export default defineType({
    name: 'videoSection',
    title: 'Video Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Titel (optioneel)',
            type: 'string',
        }),
        defineField({
            name: 'youtubeId',
            title: 'YouTube Video ID',
            type: 'string',
            validation: (Rule) => Rule.required().error('Een YouTube ID is verplicht'),
        }),
        defineField({
            name: 'thumbnailUrl',
            title: 'Thumbnail URL (optioneel)',
            type: 'url',
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Achtergrondafbeelding (optioneel)',
            type: 'image',
            options: {hotspot: true},
        }),
        defineField({
            name: 'minHeight',
            title: 'Minimum hoogte (bijv. "700px")',
            type: 'string',
            initialValue: '700px',
        }),
        defineField({
            name: 'variant',
            title: 'Layout Variant',
            type: 'string',
            options: {
                list: [
                    {title: 'Default', value: 'default'},
                    {title: 'Full Width', value: 'full'},
                    {title: 'Compact', value: 'compact'},
                ],
                layout: 'dropdown',
            },
            initialValue: 'default',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            youtubeId: 'youtubeId',
        },
        prepare({title, youtubeId}) {
            return {
                title: title || 'Video Section',
                subtitle: `YouTube ID: ${youtubeId}`,
            }
        },
    },
})
