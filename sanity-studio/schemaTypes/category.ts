
// sanity/schemas/category.ts
import { defineType, defineField } from "sanity";

export default defineType({
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "Name of the category (e.g. “News”).",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "URL Slug",
            type: "slug",
            description: "Unique URL identifier for this category (e.g. “news”).",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
    },
});
