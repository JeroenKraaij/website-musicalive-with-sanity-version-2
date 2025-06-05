

// sanity/schemas/footerSettings.ts
import { defineType, defineField } from "sanity";

export default defineType({
    name: "footerSettings",
    title: "Footer Settings",
    type: "document",
    fields: [
        defineField({
            name: "socialLinks",
            title: "Social Links",
            type: "array",
            description: "List of social platforms to show in the footer.",
            of: [
                defineField({
                    name: "socialLink",
                    title: "Social Link",
                    type: "object",
                    fields: [
                        defineField({
                            name: "platform",
                            title: "Platform",
                            type: "string",
                            description: "e.g. “facebook”, “twitter”, “instagram”.",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                            description: "Full URL to the social profile.",
                            validation: (Rule) =>
                                Rule.uri({
                                    scheme: ["http", "https"],
                                }).required(),
                        }),
                    ],
                    preview: {
                        select: {
                            title: "platform",
                            subtitle: "url",
                        },
                    },
                }),
            ],
        }),
        defineField({
            name: "address",
            title: "Address",
            type: "text",
            description: "Physical address or contact info displayed in the footer.",
            rows: 2,
        }),
        defineField({
            name: "footerLinks",
            title: "Footer Links",
            type: "array",
            description: "Additional links to show in the footer (e.g. Privacy Policy).",
            of: [
                defineField({
                    name: "footerLink",
                    title: "Link Item",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Link Title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                            validation: (Rule) =>
                                Rule.uri({
                                    allowRelative: true,
                                    scheme: ["http", "https", "mailto", "tel"],
                                }).required(),
                        }),
                    ],
                    preview: {
                        select: {
                            title: "title",
                            subtitle: "url",
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Footer Settings",
                subtitle: "Social links, address & extra links",
            };
        },
    },
});
