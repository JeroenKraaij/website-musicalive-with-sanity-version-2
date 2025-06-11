
// schemas/blocks/conceptSection.ts
import { defineField, defineType } from "sanity";

export default defineType({
    name: "conceptSection",
    title: "Concepten Sectie",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Titel",
            type: "string",
        }),
        defineField({
            name: "headingLevel",
            title: "Kopniveau",
            type: "string",
            options: {
                list: ["h1", "h2", "h3", "h4", "h5"],
                layout: "dropdown",
            },
            initialValue: "h3",
        }),
        defineField({
            name: "description",
            title: "Introductietekst",
            type: "text",
        }),
        defineField({
            name: "backgroundImage",
            title: "Achtergrondafbeelding",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "concepts",
            title: "Concepten",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "concept",
                    fields: [
                        { name: "title", type: "string", title: "Titel" },
                        { name: "subtitle", type: "string", title: "Subtitel" },
                        {
                            name: "image",
                            type: "image",
                            title: "Afbeelding",
                            options: { hotspot: true },
                        },
                        {
                            name: "link",
                            title: "Interne link",
                            type: "url",
                            validation: (Rule) =>
                                Rule.uri({
                                    allowRelative: true,
                                    scheme: ["http", "https"],
                                }).required().error("Voer een relatieve link in, zoals /rhythmcollective"),
                            initialValue: "/",
                        },
                    ],
                },
            ],
        }),
    ],
});
