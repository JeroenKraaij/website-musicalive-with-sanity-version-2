
// sanity/queries/globalSeo.ts

/**
 * Haal de Global SEO-instellingen op (singleton).
 * Retourneert siteTitle, defaultDescription, OG-image URL, twitterHandle en facebookAppID.
 */
export const globalSeoQuery = `
  *[_type == "globalSeo"][0]{
    siteTitle,
    defaultDescription,
    "openGraphImageUrl": openGraphImage.asset->url,
    twitterHandle,
    facebookAppID
  }
`;
