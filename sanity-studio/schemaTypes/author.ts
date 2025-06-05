
// sanity/schemas/author.ts
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
            description: "Full name of the author",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "URL Slug",
            type: "slug",
            description: "Unique URL identifier for this author",
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
            description: "Portrait or avatar for the author",
        }),
        defineField({
            name: "bio",
            title: "Bio",
            type: "array",
            description: "Brief biography of the author (displayed on their page)",
            of: [{ type: "block" }],
        }),
        // Optional: social handles
        defineField({
            name: "twitter",
            title: "Twitter Handle",
            type: "url",
            description: "Full URL to the author’s Twitter profile (e.g. https://twitter.com/username)",
        }),
        defineField({
            name: "linkedin",
            title: "LinkedIn Profile",
            type: "url",
            description: "Full URL to the author’s LinkedIn profile",
        }),
        defineField({
            name: "website",
            title: "Personal Website",
            type: "url",
            description: "Author’s personal website or portfolio URL",
        }),
    ],
    preview: {
        select: {
            title: "name",
            media: "profileImage",
        },
    },
});
