
// lib/sanity/queries/notFound.ts
export const notFoundPageQuery = `
  *[_type == "notFoundPage"][0] {
    title,
    message,
    cta {
      label,
      href
    },
    "backgroundUrl": backgroundImage.asset->url
  }
`
