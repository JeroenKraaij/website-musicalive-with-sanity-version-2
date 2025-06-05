
// sanity/queries/siteSettings.ts
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0]{
    "logoUrl": logo.asset->url,
    navigation[]{
      title,
      hidden,
      "slug": page->slug.current
    }
  }
`;
