
import { defineType, defineField } from "sanity";

export default defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        defineField({
            name: "logo",
            title: "Logo",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt text",
                    type: "string",
                    validation: (Rule) => Rule.required().error("Alt tekst is verplicht"),
                }),
            ],
        }),

        defineField({
            name: "navigation",
            title: "Main Navigation",
            type: "array",
            of: [
                {
                    type: "object",
                    options: { modal: "inline" },
                    fields: [
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "page",
                            title: "Page (optioneel)",
                            type: "reference",
                            to: [{ type: "page" }],
                        }),
                        defineField({
                            name: "url",
                            title: "Custom URL (fallback)",
                            type: "string",
                            description: 'Gebruik dit als er geen "page" is geselecteerd, zoals "/" of een externe link.',
                        }),
                        defineField({
                            name: "hidden",
                            title: "Hidden",
                            type: "boolean",
                            initialValue: false,
                        }),
                        defineField({
                            name: "children",
                            title: "Sub Navigation",
                            type: "array",
                            of: [
                                {
                                    type: "object",
                                    options: { modal: "inline" },
                                    fields: [
                                        defineField({
                                            name: "title",
                                            title: "Title",
                                            type: "string",
                                            validation: (Rule) => Rule.required(),
                                        }),
                                        defineField({
                                            name: "page",
                                            title: "Page (optioneel)",
                                            type: "reference",
                                            to: [{ type: "page" }],
                                        }),
                                        defineField({
                                            name: "url",
                                            title: "Custom URL (fallback)",
                                            type: "string",
                                        }),
                                        defineField({
                                            name: "hidden",
                                            title: "Hidden",
                                            type: "boolean",
                                            initialValue: false,
                                        }),
                                    ],
                                    preview: {
                                        select: {
                                            title: "title",
                                            subtitle: "page.slug.current",
                                        },
                                    },
                                },
                            ],
                        }),
                    ],
                    preview: {
                        select: {
                            title: "title",
                            subtitle: "page.slug.current",
                        },
                    },
                },
            ],
        }),

        defineField({
            name: "socials",
            title: "Social Media Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "icon",
                            title: "Icon",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Facebook", value: "facebook" },
                                    { title: "Instagram", value: "instagram" },
                                    { title: "Youtube", value: "youtube" },
                                    { title: "LinkedIn", value: "linkedin" },
                                    { title: "TikTok", value: "tiktok" },
                                ],
                                layout: "dropdown",
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                },
            ],
        }),
    ],

    preview: {
        prepare() {
            return {
                title: "Site Settings",
                subtitle: "Logo, navigatie en socials",
            };
        },
    },
});
