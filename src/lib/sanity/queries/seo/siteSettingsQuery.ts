
export const siteSettingsQuery = `
*[_type == "siteSettings"][0]{
  siteTitle,
  defaultSeoDescription,
  defaultOpenGraphImage {
    asset->{
      url
    }
  },
  twitterHandle,
  facebookAppID
}
`
