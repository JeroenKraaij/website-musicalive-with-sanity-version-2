
// schemas/blocks/featuredSection.ts
import { defineType, defineField } from "sanity";

export default defineType({
    name: "featuredSection",
    title: "Featured Section",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Sectietitel",
            type: "string",
        }),
        defineField({
            name: "type",
            title: "Wat weergeven?",
            type: "string",
            options: {
                list: [
                    { title: "Blogposts", value: "post" },
                    { title: "Showcases", value: "showcase" },
                ],
                layout: "radio",
            },
            initialValue: "post",
        }),
        defineField({
            name: "limit",
            title: "Aantal items",
            type: "number",
            initialValue: 3,
            validation: (Rule) =>
                Rule.min(1).max(6).error("Selecteer tussen 1 en 6 items"),
        }),
    ],
});
