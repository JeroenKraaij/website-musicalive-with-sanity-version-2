import { defineType, defineField } from "sanity";

export default defineType({
    name: "footerSettings",
    title: "Footer Settings",
    type: "document",
    fields: [
        defineField({
            name: "backgroundImage",
            title: "Achtergrondafbeelding",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt tekst",
                    type: "string",
                    validation: (Rule) => Rule.required().error("Alt tekst is verplicht"),
                }),
            ],
        }),
        defineField({
            name: "ctaTitle",
            title: "Call to Action Titel",
            type: "string",
        }),
        defineField({
            name: "ctaButtonLabel",
            title: "CTA Knoptekst",
            type: "string",
            initialValue: "Contact",
        }),
        defineField({
            name: "ctaButtonHref",
            title: "CTA Link",
            type: "url",
            initialValue: "/contact",
            validation: (Rule) =>
                Rule.uri({
                    allowRelative: true,
                    scheme: ["http", "https"],
                }).required(),
        }),
        defineField({
            name: "socialItems",
            title: "Social Media",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "socialLink",
                    fields: [
                        defineField({
                            name: "icon",
                            title: "Platform",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Facebook", value: "facebook" },
                                    { title: "Instagram", value: "instagram" },
                                    { title: "YouTube", value: "youtube" },
                                    { title: "LinkedIn", value: "linkedin" },
                                ],
                                layout: "dropdown",
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "href",
                            title: "Link",
                            type: "url",
                            validation: (Rule) =>
                                Rule.uri({
                                    scheme: ["http", "https"],
                                }).required(),
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: "logo",
            title: "Logo in footer",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "footerLinks",
            title: "Footer links",
            type: "array",
            of: [
                defineField({
                    name: "footerLink",
                    type: "object",
                    fields: [
                        defineField({ name: "title", type: "string" }),
                        defineField({
                            name: "url",
                            type: "url",
                            validation: (Rule) =>
                                Rule.uri({
                                    allowRelative: true,
                                    scheme: ["http", "https", "mailto", "tel"],
                                }).required(),
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "copyrightText",
            title: "Copyright tekst",
            type: "string",
            initialValue: "Alle rechten voorbehouden © 2025",
        }),
    ],
    preview: {
        select: {
            title: "ctaTitle",
            media: "logo.asset",
            subtitle: "copyrightText",
        },
        prepare({ title, subtitle, media }) {
            return {
                title: title || "Footer Settings",
                subtitle: subtitle || "Call to action, socials en links",
                media,
            };
        },
    },
});