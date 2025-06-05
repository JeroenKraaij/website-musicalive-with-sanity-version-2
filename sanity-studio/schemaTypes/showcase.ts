
// sanity/schemas/showcase.ts
import { defineType, defineField } from "sanity";

export default defineType({
    name: "showcase",
    title: "Showcase",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Showcase Title",
            type: "string",
            description: "Name of the showcase item (e.g. “Concert Highlights 2024”).",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "URL Slug",
            type: "slug",
            description: "Unique URL for this showcase (e.g. “concert-highlights-2024”).",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            description: "Short summary or teaser for this showcase.",
            rows: 3,
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: "body",
            title: "Body Content",
            type: "array",
            of: [
                { type: "block" },
                // add custom block types if needed (e.g. code, gallery blocks)
            ],
        }),
        defineField({
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: { hotspot: true },
            description: "Hero image that represents this showcase entry.",
        }),
        defineField({
            name: "gallery",
            title: "Image Gallery",
            type: "array",
            of: [
                {
                    type: "image",
                    options: { hotspot: true },
                },
            ],
            description: "Additional images for the showcase gallery.",
        }),
        defineField({
            name: "featuredEvent",
            title: "Featured Event",
            type: "reference",
            to: [{ type: "event" }],
            description:
                "Reference a single event to highlight on this showcase page.",
        }),
        defineField({
            name: "relatedEvents",
            title: "Related Events",
            type: "array",
            of: [{ type: "reference", to: [{ type: "event" }] }],
            description: "Reference multiple events to display here.",
        }),
        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
            description: "Date/time this showcase should go live.",
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "mainImage",
            date: "publishedAt",
        },
        prepare(selection) {
            const { title, date } = selection;
            return {
                title,
                subtitle: date
                    ? `Published: ${new Date(date).toLocaleDateString()}`
                    : "No date set",
            };
        },
    },
});
