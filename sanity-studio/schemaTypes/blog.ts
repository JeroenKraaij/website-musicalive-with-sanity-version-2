
import { defineType, defineField } from "sanity";

export default defineType({
    name: "post",
    title: "Blog Post",
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
            name: "author",
            title: "Author",
            type: "reference",
            to: [{ type: "author" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.max(200),
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
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
    preview: {
        select: {
            title: "title",
            authorName: "author.name",
            media: "mainImage",
        },
        prepare({ title, authorName }) {
            return {
                title,
                subtitle: authorName ? `by ${authorName}` : "",
            };
        },
    },
});
