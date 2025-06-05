
// sanity/queries/category.ts

/**
 * Haal alle categorieën op (bijv. voor een filter of dropdown).
 * Retourneert titel en slug.
 */
export const allCategoriesQuery = `
  *[_type == "category"]{
    title,
    "slug": slug.current
  }
`;

/**
 * Haal één categorie op basis van de slug.
 * Retourneert titel en slug.
 *
 * $slug wordt bij fetch als parameter meegegeven.
 */
export const categoryBySlugQuery = `
  *[_type == "category" && slug.current == $slug][0]{
    title,
    "slug": slug.current
  }
`;
