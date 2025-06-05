
// sanity/schemas/blocks/videoSection.ts
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'videoSection',
    title: 'Video Section',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'videoUrl', title: 'Video URL', type: 'url' }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'videoUrl',
        },
    },
})
