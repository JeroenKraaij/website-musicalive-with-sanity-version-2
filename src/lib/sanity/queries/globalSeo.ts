
// sanity/queries/globalSeo.ts

export const globalSeoQuery = `
  *[_type == "globalSeo"][0]{
    siteTitle,
    defaultDescription,
    homepageSeoTitle,
    homepageSeoDescription,
    "openGraphImageUrl": openGraphImage.asset->url,
    twitterHandle,
    facebookAppID
  }
`

