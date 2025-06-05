
// sanity/queries/author.ts

/**
 * Haal alle auteurs op (gebruikt om bijvoorbeeld een auteurslijst te tonen).
 * Retourneert naam, slug en profielfoto-URL.
 */
export const allAuthorsQuery = `
  *[_type == "author"]{
    name,
    "slug": slug.current,
    "profileImageUrl": profileImage.asset->url
  }
`;

/**
 * Haal één auteur op op basis van de slug.
 * Retourneert naam, slug, profielfoto-URL en volledige bio.
 *
 * $slug wordt bij fetch als parameter meegegeven.
 */
export const authorBySlugQuery = `
  *[_type == "author" && slug.current == $slug][0]{
    name,
    "slug": slug.current,
    "profileImageUrl": profileImage.asset->url,
    bio[]{ ..., markDefs[]{ ... } }
  }
`;
