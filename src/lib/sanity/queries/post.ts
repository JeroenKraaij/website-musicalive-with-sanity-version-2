
// sanity/queries/post.ts
export const allPostsQuery = `
  *[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    "authorName": author->name,
    mainImage{ asset-> { url } },
    excerpt
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    publishedAt,
    "author": author->{
      name,
      "profileImageUrl": profileImage.asset->url
    },
    "categories": categories[]->title,
    mainImage{ asset-> { url } },
    excerpt,
    body
  }
`;
