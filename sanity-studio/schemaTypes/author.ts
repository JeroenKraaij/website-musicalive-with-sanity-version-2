
import { defineType, defineField } from "sanity";

export default defineType({
    name: "author",
    title: "Author",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "bio",
            title: "Bio",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "twitter",
            title: "Twitter",
            type: "url",
        }),
        defineField({
            name: "linkedin",
            title: "LinkedIn",
            type: "url",
        }),
        defineField({
            name: "website",
            title: "Website",
            type: "url",
        }),
    ],
    preview: {
        select: {
            title: "name",
            media: "profileImage",
        },
    },
});
