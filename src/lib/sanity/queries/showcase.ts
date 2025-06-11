// lib/sanity/queries/showcase.ts

export const allShowcasesQuery = `
  *[_type == "showcase" && defined(publishedAt)] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    publishedAt,
    "authorName": author->name,
    mainImage {
      asset->{ url }
    },
    excerpt
  }
`;

export const showcaseBySlugQuery = `
  *[_type == "showcase" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    publishedAt,
    "author": author->{
      name,
      "profileImageUrl": profileImage.asset->url
    },
    "categories": categories[]->title,
    mainImage {
      asset->{ url }
    },
    excerpt,
    body
  }
`;
