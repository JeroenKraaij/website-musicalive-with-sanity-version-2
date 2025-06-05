
export const homepageQuery = `
*[_type == "homepage"][0]{
  title,
  seoTitle,
  seoDescription,
  openGraphImage {
    asset->{
      url
    }
  }
}
`
