
// sanity/queries/footerSettings.ts

/**
 * Haal de Footer Settings op (singleton).
 * Retourneert socialLinks (platform + url), address en footerLinks (title + url).
 */
export const footerSettingsQuery = `
  *[_type == "footerSettings"][0]{
    socialLinks[]{
      platform,
      url
    },
    address,
    footerLinks[]{
      title,
      url
    }
  }
`;
