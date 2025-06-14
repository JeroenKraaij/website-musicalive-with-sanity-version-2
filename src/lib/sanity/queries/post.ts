
// sanity/queries/post.ts

export const allPostsQuery = `
  *[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
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

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    publishedAt,
    "author": author->{
      name,
      "profileImageUrl": profileImage.asset->url
    },
    "categories": categories[]->{
      title,
      "slug": slug.current
    },
    mainImage {
      asset->{ url }
    },
    excerpt,
    body
  }
`;
