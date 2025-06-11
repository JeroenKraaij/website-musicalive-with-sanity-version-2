
// lib/sanity/queries/footer.ts
export const footerSettingsQuery = `
  *[_type == "footerSettings" && _id == "footerSettings"][0]{
    backgroundImage {
      asset->{url},
      alt
    },
    ctaTitle,
    ctaButtonLabel,
    ctaButtonHref,
    socialItems[]{
      icon,
      href
    },
    logo {
      asset->{url}
    },
    footerLinks[]{
      title,
      url
    },
    copyrightText
  }
`;

import { client } from "../client";

export async function getFooterSettings() {
    return await client.fetch(footerSettingsQuery);
}
