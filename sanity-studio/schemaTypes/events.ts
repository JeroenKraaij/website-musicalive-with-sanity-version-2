
// sanity/schemas/event.ts
import { defineType, defineField } from "sanity";

export default defineType({
    name: "event",
    title: "Event",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Event Title",
            type: "string",
            description: "Name of the event (e.g. “Summer Concert”).",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "URL Slug",
            type: "slug",
            description: "Unique URL for this event (e.g. “summer-concert”).",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "startDate",
            title: "Start Date & Time",
            type: "datetime",
            description: "When the event begins.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "endDate",
            title: "End Date & Time",
            type: "datetime",
            description: "Optional: when the event ends.",
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
            description: "Venue name or address (e.g. “Central Park, NYC”).",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
            description: "Details about the event, schedule, sponsors, etc.",
        }),
        defineField({
            name: "eventImage",
            title: "Event Image",
            type: "image",
            options: { hotspot: true },
            description: "Hero image or poster for this event.",
        }),
        defineField({
            name: "isFeatured",
            title: "Feature this Event?",
            type: "boolean",
            description: "If checked, display in “Featured Events” blocks.",
            initialValue: false,
        }),
        defineField({
            name: "ticketUrl",
            title: "Ticket URL",
            type: "url",
            description: "Link to purchase tickets or RSVP (e.g. Eventbrite).",
        }),
        defineField({
            name: "organizer",
            title: "Organizer",
            type: "reference",
            to: [{ type: "author" }],
            description: "Select the author/organization hosting this event.",
        }),
        defineField({
            name: "categories",
            title: "Event Categories",
            type: "array",
            of: [{ type: "reference", to: [{ type: "category" }] }],
            description: "Categorize events (e.g. “Concert”, “Workshop”).",
        }),
    ],
    preview: {
        select: {
            title: "title",
            date: "startDate",
            media: "eventImage",
        },
        prepare(selection) {
            const { title, date } = selection;
            return {
                title,
                subtitle: date ? new Date(date).toLocaleDateString() : "No date set",
            };
        },
    },
});
