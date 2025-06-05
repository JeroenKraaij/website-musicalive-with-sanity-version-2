// siteSettings.ts
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
                    options: {
                        modal: "inline",
                    },
                    fields: [
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "page",
                            title: "Page",
                            type: "reference",
                            to: [{ type: "page" }],
                            validation: (Rule) => Rule.required(),
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
                                    options: {
                                        modal: "inline", // ✅ Correct option
                                    },
                                    fields: [
                                        defineField({
                                            name: "title",
                                            title: "Title",
                                            type: "string",
                                            validation: (Rule) => Rule.required(),
                                        }),
                                        defineField({
                                            name: "page",
                                            title: "Page",
                                            type: "reference",
                                            to: [{ type: "page" }],
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
    ],

    preview: {
        prepare() {
            return {
                title: "Site Settings",
                subtitle: "Logo en navigatie",
            };
        },
    },
});