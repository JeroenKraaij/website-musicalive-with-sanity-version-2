
import { defineType, defineField } from "sanity";

export default defineType({
    name: "showcase",
    title: "Showcase",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
                slugify: (input) =>
                    input
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w\-]+/g, "")
                        .slice(0, 96),
            },
            validation: (Rule) =>
                Rule.required().error("Slug is verplicht en moet URL-vriendelijk zijn."),
        }),

        defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.max(200),
        }),

        defineField({
            name: "body",
            title: "Body",
            type: "array",
            of: [{ type: "block" }],
        }),

        defineField({
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: { hotspot: true },
        }),

        defineField({
            name: "gallery",
            title: "Gallery",
            type: "array",
            of: [
                {
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: "alt",
                            title: "Alt Text",
                            type: "string",
                            description: "Voor SEO en toegankelijkheid",
                        }),
                        defineField({
                            name: "caption",
                            title: "Caption",
                            type: "string",
                            description: "Korte toelichting onder de afbeelding",
                        }),
                    ],
                },
            ],
            options: {
                layout: "grid",
            },
        }),

        defineField({
            name: "featuredEvent",
            title: "Featured Event",
            type: "reference",
            to: [{ type: "event" }],
        }),

        defineField({
            name: "relatedEvents",
            title: "Related Events",
            type: "array",
            of: [{ type: "reference", to: [{ type: "event" }] }],
        }),

        defineField({
            name: "author",
            title: "Author",
            type: "reference",
            to: [{ type: "author" }],
        }),

        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: [{ type: "category" }] }],
        }),

        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "reference", to: [{ type: "tag" }] }],
        }),

        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
    ],

    preview: {
        select: {
            title: "title",
            media: "mainImage",
            date: "publishedAt",
        },
        prepare({ title, date }) {
            return {
                title,
                subtitle: date
                    ? `Published: ${new Date(date).toLocaleDateString()}`
                    : "No date set",
            };
        },
    },
});
