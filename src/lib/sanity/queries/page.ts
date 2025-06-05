
import { groq } from 'next-sanity'

export const allPagesQuery = groq`
  *[_type == "page"]{
    title,
    "slug": slug.current,
    seoTitle,
    seoDescription
  }
`

/**
 * GROQ-query om één specifieke pagina op te halen op basis van de slug.
 */
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    seoTitle,
    seoDescription,
    content[]{
      ...,
      markDefs[]{
        ...,
        _type == "link" => {
          ...,
          "href": @.href
        }
      }
    }
  }
`
