
// my-next-site/lib/sanity/client.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'aw2vk504',
    dataset: 'production',
    apiVersion: '2025-06-03',
    useCdn: true,
});

// Helper to build image URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
