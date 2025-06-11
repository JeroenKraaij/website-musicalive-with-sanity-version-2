
import { client } from "../client";

export async function getFeaturedPosts(limit: number) {
    return await client.fetch(
        `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc)[0...$limit] {
      title,
      "slug": slug,
      excerpt,
      mainImage {
        asset->{url}
      }
    }`,
        { limit }
    );
}

export async function getFeaturedShowcases(limit: number) {
    return await client.fetch(
        `*[_type == "showcase" && defined(publishedAt)] | order(publishedAt desc)[0...$limit] {
      title,
      "slug": slug,
      excerpt,
      mainImage {
        asset->{url}
      }
    }`,
        { limit }
    );
}
