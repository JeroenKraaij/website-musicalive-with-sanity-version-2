

// sanity/schemas/post.ts
import { defineType, defineField } from "sanity";

export default defineType({
    name: "post",
    title: "Blog Post",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Post Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "URL Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
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
            description: "Date and time when this post goes live.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: { hotspot: true },
            description: "A hero image for the blog post.",
        }),
        defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            description: "Short summary (shown on listing pages).",
            rows: 3,
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: [{ type: "category" }] }],
            description: "Assign one or more categories.",
        }),
        defineField({
            name: "content",
            title: "Body Content",
            type: "array",
            of: [
                { type: "block" },
                // add custom block types here if needed (e.g. code, videoEmbed)
            ],
        }),
    ],
    preview: {
        select: {
            title: "title",
            authorName: "author.name",
            media: "mainImage",
        },
        prepare(selection) {
            const { title, authorName } = selection;
            return {
                title,
                subtitle: authorName ? `by ${authorName}` : "",
            };
        },
    },
});
