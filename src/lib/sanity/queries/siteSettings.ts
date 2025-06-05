// lib/sanity/queries/siteSettings.ts
import { client } from "@/lib/sanity/client";
import groq from "groq";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    logo{
      asset->{url},
      alt
    },
    navigation[]{
      title,
      hidden,
      "slug": page->slug.current,
      children[]{
        title,
        hidden,
        "slug": page->slug.current
      }
    }
  }
`;

export async function getSiteSettings() {
    return await client.fetch(siteSettingsQuery);
}
